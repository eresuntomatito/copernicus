# PDF Processing Workflow for Copernicus Platform

This directory contains scripts and tools for processing academic PDFs and integrating them into the Copernicus learning platform.

## Overview

The workflow converts academic papers (PDFs) into structured content that can be used in the platform:
1. **PDF to Markdown** - Extract text from PDF and save as structured markdown
2. **Content Creation** - Create interactive content files from the markdown
3. **Registry Update** - Add the content to the platform registry

## Quick Start

### 1. Convert PDF to Markdown

```bash
python3 scripts/pdf-to-markdown.py <path-to-pdf> <output-path>
```

**Example:**
```bash
python3 scripts/pdf-to-markdown.py \
  ~/Downloads/paper.pdf \
  src/data/papers/markdown/paper-name.md
```

### 2. Review the Markdown

The generated markdown file will be saved in `src/data/papers/markdown/`. Review it to:
- Check extracted content quality
- Identify key sections
- Note important concepts for flashcards
- Extract discussion questions

### 3. Create Content File

Create a new JavaScript file in `src/data/papers/` based on the markdown:

**Template:** `src/data/papers/yourPaperContent.js`

```javascript
export const yourPaperContent = {
  executiveSummary: {
    overview: "...",
    keyPoints: [...]
  },
  sections: [
    {
      id: 'section-id',
      title: 'Section Title',
      content: `...`
    }
  ],
  discussionQuestions: [...]
};

export default yourPaperContent;
```

### 4. Add to Content Registry

Update `src/data/contentRegistry.js`:

```javascript
{
  id: 'paper-slug',
  type: 'paper',
  title: 'Paper Title',
  subtitle: 'Paper Subtitle',
  category: 'Innovation',
  difficulty: 'advanced',
  tags: ['AI', 'Tag2', 'Tag3'],
  estimatedTime: '60 min',
  metadata: {
    authors: ['Author Name'],
    institution: 'University Name',
    year: 2024,
    publicationType: 'Master\'s Thesis'
  },
  description: '...',
  path: '/paper/paper-slug',
  contentFile: 'papers/yourPaperContent',
  hasFlashcards: false,
  sectionCount: 6,
  flashcardCount: 0
}
```

### 5. Update ContentViewerPage

Add the import and mapping in `src/pages/ContentViewerPage.jsx`:

```javascript
// Add import
import yourPaperContent from '../data/papers/yourPaperContent';

// Add to contentMap
const contentMap = {
  // ...existing entries
  'paper-slug': {
    content: yourPaperContent,
    flashcards: null  // or flashcard array if applicable
  }
};
```

## File Structure

```
thesis-learning-app/
├── scripts/
│   ├── pdf-to-markdown.py          # PDF extraction script
│   └── PDF_PROCESSING_GUIDE.md     # This file
├── src/
│   └── data/
│       ├── papers/
│       │   ├── markdown/            # Extracted markdown files
│       │   │   └── *.md
│       │   ├── aiCofounderContent.js
│       │   └── *.js                 # Content files
│       ├── cases/
│       │   ├── markdown/            # Case study markdown
│       │   └── *.js                 # Case content files
│       └── contentRegistry.js       # Central content index
```

## Scripts Reference

### pdf-to-markdown.py

Extracts text from PDF files and converts to structured Markdown.

**Features:**
- Extracts metadata (title, author, keywords)
- Preserves table of contents
- Cleans and normalizes text
- Generates page-by-page structure
- Handles hyphenation and formatting

**Requirements:**
- Python 3.6+
- PyMuPDF (`pip install pymupdf`)

**Usage:**
```bash
python3 scripts/pdf-to-markdown.py <input.pdf> [output.md]
```

**Options:**
- If `output.md` is omitted, creates `input.md` in same directory as PDF

## Best Practices

### Content Creation

1. **Executive Summary** - Write a concise overview (2-3 paragraphs) with 3-5 key points
2. **Section Breakdown** - Divide content into 5-8 logical sections
3. **Rich Formatting** - Use markdown headers, lists, code blocks, and emphasis
4. **Discussion Questions** - Create 5-8 thought-provoking questions
5. **Flashcards** - Optional but recommended for key concepts (10-20 cards)

### Content Quality

- **Clarity** - Ensure content is clear and well-structured
- **Engagement** - Add examples, case studies, and practical applications
- **Interactivity** - Include discussion questions and optional flashcards
- **Completeness** - Cover all major topics from the source material
- **Accessibility** - Write for the target audience (MBA students)

### Naming Conventions

- **File names:** `camelCase` (e.g., `aiCofounderContent.js`)
- **IDs:** `kebab-case` (e.g., `ai-cofounder-design-thinking`)
- **Section IDs:** `prefix-description` (e.g., `ai-cofounder-introduction`)

## Troubleshooting

### PDF Extraction Issues

**Problem:** Garbled or incorrect text
- **Solution:** Some PDFs have non-standard encoding. Manually review and correct the markdown.

**Problem:** Missing table of contents
- **Solution:** PDF may not have embedded TOC. Create section structure manually.

**Problem:** Poor formatting
- **Solution:** Review and clean up the markdown manually, especially for equations and tables.

### Integration Issues

**Problem:** "Content data not found" error
- **Solution:** Verify the content ID in contentMap matches the ID in contentRegistry.js

**Problem:** Blank sections
- **Solution:** Check that section content is properly formatted as template literals with backticks.

## Future Enhancements

Potential improvements to the workflow:

- [ ] Automated section detection using NLP
- [ ] Automatic flashcard generation from content
- [ ] Citation extraction and formatting
- [ ] Figure and table extraction
- [ ] LaTeX equation conversion
- [ ] Automated content quality checks
- [ ] Batch processing for multiple PDFs

## Examples

See existing content files for reference:
- **Case Study:** `src/data/cases/johnDeereContent.js`
- **Academic Paper:** `src/data/papers/aiCofounderContent.js`

## Support

For questions or issues with PDF processing:
1. Check the markdown output in `src/data/papers/markdown/`
2. Review this guide for troubleshooting steps
3. Consult existing content files for examples
