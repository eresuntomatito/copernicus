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

## Post-Extraction Quality Assurance

After extracting a PDF to markdown, perform a systematic quality check before proceeding to content creation. This ensures you're working with clean, complete data and prevents wasted effort later.

### Quick Validation Checklist

Review the generated markdown file and verify:

- [ ] **Completeness** - All pages extracted (check total page count)
- [ ] **Structure** - Headers, sections, and hierarchy preserved
- [ ] **Readability** - Text flows naturally without major formatting issues
- [ ] **Metadata** - Title, author, and keywords extracted correctly
- [ ] **Table of Contents** - Section structure is clear and logical
- [ ] **Special Content** - Figures, tables, and equations are handled appropriately
- [ ] **No Critical Gaps** - Key sections aren't missing or corrupted

### Detailed Review Process

#### 1. Verify Completeness

**Check the page count:**
```bash
# Count pages in markdown
grep "^### Page" src/data/papers/markdown/paper-name.md | wc -l

# Should match original PDF page count
```

**Look for warning signs:**
- Missing pages in sequence (Page 5 → Page 7)
- Abrupt endings or incomplete sentences at page boundaries
- Suspiciously short total length for a long PDF

**Action:** If pages are missing, check PDF quality and consider manual extraction for problem sections.

#### 2. Assess Text Quality

**Common issues to identify:**

| Issue | Example | Fix |
|-------|---------|-----|
| **Hyphenation artifacts** | "manage-\nment" instead of "management" | Script handles most, but check manually |
| **Merged words** | "thedevelopment" | Add spaces manually |
| **Split words** | "dev elopment" | Merge manually |
| **Encoding errors** | "â€™" instead of apostrophe | Find and replace special characters |
| **Column mixing** | Text from two columns interleaved | Re-extract or manually reorder |

**Quick scan technique:**
1. Read the first 2-3 pages completely
2. Skim middle section for formatting consistency
3. Read the conclusion thoroughly
4. Spot-check 3-4 random pages

#### 3. Validate Structure

**Table of Contents check:**
```markdown
## Table of Contents

- Introduction (Page 1)
- Literature Review (Page 5)
- Methodology (Page 15)
...
```

**Verify:**
- Section titles are clear and descriptive
- Page numbers roughly match content location
- Hierarchy makes sense (chapters → sections → subsections)
- No duplicate or missing major sections

**If TOC is missing:** Create one manually by identifying major section headers.

#### 4. Handle Special Content

**Figures and images:**
- Script extracts text but not images
- Look for `[Figure X]` or `(See Figure X)` references
- Note which figures are essential vs. supplementary
- Plan to describe key figures in content file

**Tables:**
- May appear as plain text or malformed
- Complex tables often need manual reformatting
- Consider simplifying or summarizing in content

**Equations:**
- LaTeX equations may extract as symbols or text
- Mark equations that need special handling
- Plan to rewrite in markdown/KaTeX for content file

**Citations:**
- Reference lists usually extract well
- In-text citations may lose formatting
- Verify key citations are intact

#### 5. Metadata Validation

Check the extracted metadata at the top of the markdown:

```markdown
# [Paper Title]

**Author(s):** [Names]
**Subject:** [Topic]
**Keywords:** [Terms]
**Total Pages:** [Number]
```

**Common issues:**
- Title is generic ("Untitled", "Document1.pdf")
- Author is missing or shows PDF creator software
- Keywords are empty or irrelevant

**Fix:** Manually update metadata from the PDF cover page or abstract.

#### 6. Content Sampling

**Read 3 specific sections in detail:**

1. **Abstract/Introduction** - Sets context and research questions
2. **Methodology** - Often has complex formatting and technical terms
3. **Conclusions** - Contains key findings and implications

**Quality criteria:**
- Sentences are complete and grammatically correct
- Technical terms and jargon are preserved
- Key data points and statistics are accurate
- Paragraph breaks occur in logical places

### When to Proceed vs. Re-extract

#### ✅ Proceed to Content Creation If:
- Text is 90%+ readable with minor cleanup needed
- All major sections are present and identifiable
- Metadata is accurate or easily correctable
- Structure is clear enough to guide section creation
- Any issues are fixable with manual editing (<30 minutes)

#### ⚠️ Consider Re-extraction If:
- More than 10% of text is garbled or unreadable
- Multiple pages are missing or severely corrupted
- Column layout caused significant text mixing
- Tables and figures are critical but completely unusable

#### 🔄 Try Alternative Extraction If:
- PDF has complex layout (multi-column, sidebars)
- Scanned document (OCR may work better)
- Non-standard formatting or fonts
- Very old PDF with encoding issues

**Alternative tools:**
```bash
# Try different extraction methods
pdftotext paper.pdf output.txt          # Simpler text extraction
pandoc paper.pdf -o output.md           # Pandoc converter
# Or use online converters: Adobe, Smallpdf, Zamzar
```

### Pre-Content Creation Checklist

Before moving to [MARKDOWN_TO_CONTENT_GUIDE.md](./MARKDOWN_TO_CONTENT_GUIDE.md):

- [ ] Markdown file is reviewed and validated
- [ ] Any critical issues are fixed or documented
- [ ] Section structure is identified (5-8 major sections)
- [ ] Key concepts, quotes, and data points are highlighted
- [ ] Figures and tables that need description are noted
- [ ] Metadata is accurate and complete
- [ ] File is saved in `src/data/papers/markdown/[slug].md`

### Quality Assurance Time Budget

- **Quick scan:** 5-10 minutes (basic completeness check)
- **Detailed review:** 20-30 minutes (full validation)
- **Manual cleanup:** 15-45 minutes (depending on issues)
- **Total:** 40-85 minutes before content creation

**Pro tip:** Spending time on quality assurance here saves hours of frustration during content creation. A clean markdown file makes the transformation process much smoother.

### Example: Real QA Session

From the [AI Co-Founder implementation](./implementation-log-ai-cofounder.md):

**Initial check (5 min):**
- ✅ All 73 pages extracted
- ✅ TOC present with 5 main chapters
- ⚠️ Some hyphenation artifacts in methodology section
- ✅ Participant quotes preserved well

**Detailed review (25 min):**
- Fixed 12 instances of "Design Think-ing" → "Design Thinking"
- Corrected 3 encoding issues (smart quotes)
- Verified all interview excerpts were complete
- Confirmed all 5 findings sections were intact

**Decision:** Proceed to content creation (markdown quality: 95%)

### Next Steps

Once QA is complete:
1. Proceed to **[MARKDOWN_TO_CONTENT_GUIDE.md](./MARKDOWN_TO_CONTENT_GUIDE.md)** for content transformation
2. Follow the 10-step procedure to create interactive learning content
3. Use the clean markdown as your source material

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
