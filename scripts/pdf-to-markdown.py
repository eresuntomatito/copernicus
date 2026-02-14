#!/usr/bin/env python3
"""
PDF to Markdown Converter for Copernicus Platform

This script extracts text from academic PDFs and converts them to structured Markdown format.
Usage: python pdf-to-markdown.py <pdf_path> <output_path>
"""

import sys
import re
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Error: PyMuPDF not installed. Install with: pip3 install pymupdf")
    sys.exit(1)


def clean_text(text):
    """Clean and normalize extracted text"""
    # Remove excessive whitespace
    text = re.sub(r'\n\s*\n\s*\n+', '\n\n', text)
    # Remove hyphenation at line breaks
    text = re.sub(r'-\s*\n\s*', '', text)
    # Normalize spaces
    text = re.sub(r' +', ' ', text)
    return text.strip()


def extract_metadata(doc):
    """Extract PDF metadata"""
    metadata = doc.metadata
    return {
        'title': metadata.get('title', 'Untitled'),
        'author': metadata.get('author', 'Unknown'),
        'subject': metadata.get('subject', ''),
        'keywords': metadata.get('keywords', ''),
        'creator': metadata.get('creator', ''),
        'producer': metadata.get('producer', ''),
        'creation_date': metadata.get('creationDate', ''),
        'mod_date': metadata.get('modDate', ''),
    }


def extract_text_with_structure(pdf_path):
    """Extract text from PDF with structural information"""
    doc = fitz.open(pdf_path)
    
    metadata = extract_metadata(doc)
    
    full_text = []
    toc = doc.get_toc()  # Table of contents
    
    # Extract text page by page
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        
        if text.strip():
            full_text.append({
                'page': page_num + 1,
                'text': clean_text(text)
            })
    
    doc.close()
    
    return {
        'metadata': metadata,
        'toc': toc,
        'pages': full_text,
        'total_pages': len(full_text)
    }


def create_markdown(data, pdf_name):
    """Convert extracted data to Markdown format"""
    md_lines = []
    
    # Title and metadata
    md_lines.append(f"# {data['metadata']['title']}\n")
    
    if data['metadata']['author']:
        md_lines.append(f"**Author(s):** {data['metadata']['author']}\n")
    
    if data['metadata']['subject']:
        md_lines.append(f"**Subject:** {data['metadata']['subject']}\n")
    
    if data['metadata']['keywords']:
        md_lines.append(f"**Keywords:** {data['metadata']['keywords']}\n")
    
    md_lines.append(f"\n**Total Pages:** {data['total_pages']}\n")
    md_lines.append(f"**Source:** {pdf_name}\n")
    md_lines.append("\n---\n\n")
    
    # Table of Contents if available
    if data['toc']:
        md_lines.append("## Table of Contents\n\n")
        for level, title, page in data['toc']:
            indent = "  " * (level - 1)
            md_lines.append(f"{indent}- {title} (Page {page})\n")
        md_lines.append("\n---\n\n")
    
    # Full text content
    md_lines.append("## Full Text\n\n")
    
    for page_data in data['pages']:
        md_lines.append(f"### Page {page_data['page']}\n\n")
        md_lines.append(f"{page_data['text']}\n\n")
        md_lines.append("---\n\n")
    
    return ''.join(md_lines)


def main():
    if len(sys.argv) < 2:
        print("Usage: python pdf-to-markdown.py <pdf_path> [output_path]")
        print("\nExample:")
        print("  python pdf-to-markdown.py paper.pdf output.md")
        print("  python pdf-to-markdown.py paper.pdf")
        sys.exit(1)
    
    pdf_path = Path(sys.argv[1])
    
    if not pdf_path.exists():
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    # Determine output path
    if len(sys.argv) >= 3:
        output_path = Path(sys.argv[2])
    else:
        output_path = pdf_path.with_suffix('.md')
    
    print(f"Processing PDF: {pdf_path}")
    print(f"Output will be saved to: {output_path}")
    
    # Extract content
    print("\nExtracting text from PDF...")
    data = extract_text_with_structure(str(pdf_path))
    
    print(f"Extracted {data['total_pages']} pages")
    print(f"Title: {data['metadata']['title']}")
    print(f"Author: {data['metadata']['author']}")
    
    # Convert to markdown
    print("\nConverting to Markdown...")
    markdown_content = create_markdown(data, pdf_path.name)
    
    # Save to file
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(markdown_content, encoding='utf-8')
    
    print(f"\n✓ Successfully created: {output_path}")
    print(f"  File size: {len(markdown_content):,} characters")


if __name__ == '__main__':
    main()
