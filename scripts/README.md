# Scripts for Copernicus Platform

This directory contains automation scripts for managing content in the Copernicus platform.

## Available Scripts

### 1. PDF Processing

#### `process-pdf.sh` - One-command PDF conversion
Quick script to convert a PDF to markdown:

```bash
./scripts/process-pdf.sh <pdf-file> <content-slug>
```

**Example:**
```bash
./scripts/process-pdf.sh ~/Downloads/research-paper.pdf innovation-study
```

This creates: `src/data/papers/markdown/innovation-study.md`

#### `pdf-to-markdown.py` - Core PDF extraction
Python script that handles the PDF to Markdown conversion:

```bash
python3 scripts/pdf-to-markdown.py <input.pdf> <output.md>
```

## Quick Workflow

### Adding a New PDF to the Platform

**1. Process the PDF:**
```bash
cd thesis-learning-app
./scripts/process-pdf.sh ~/Downloads/paper.pdf my-paper-slug
```

**2. Review the generated markdown:**
```bash
# Open in your editor
code src/data/papers/markdown/my-paper-slug.md
```

**3. Create the content file:**
```bash
# Copy template and edit
cp src/data/papers/aiCofounderContent.js src/data/papers/myPaperContent.js
```

**4. Update the registry and viewer:**
- Add entry to `src/data/contentRegistry.js`
- Import and map in `src/pages/ContentViewerPage.jsx`

**5. Test in browser:**
```bash
npm run dev
# Navigate to http://localhost:5173/library
```

## Documentation

- **[PDF_PROCESSING_GUIDE.md](./PDF_PROCESSING_GUIDE.md)** - Complete processing workflow
- **[CONTENT_GUIDE.md](../src/scripts/CONTENT_GUIDE.md)** - Content creation guidelines

## Requirements

- **Python 3.6+** with PyMuPDF
- **Node.js** for the Vite dev server

Install Python dependencies:
```bash
pip3 install pymupdf
```

## File Output Structure

```
src/data/
├── papers/
│   ├── markdown/           # Generated markdown files
│   │   ├── ai-cofounder-design-thinking.md
│   │   └── *.md
│   └── *.js               # Content JavaScript files
└── cases/
    ├── markdown/
    └── *.js
```

## Tips

- Use descriptive slugs (kebab-case: `my-paper-name`)
- Review markdown quality before creating content
- Follow existing content files as templates
- Test content loads correctly before committing

## Troubleshooting

**PyMuPDF not installed:**
```bash
pip3 install pymupdf --break-system-packages
```

**Permission denied:**
```bash
chmod +x scripts/process-pdf.sh
```

**Python not found:**
Use full path or activate virtual environment:
```bash
source .venv/bin/activate
```
