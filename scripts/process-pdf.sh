#!/bin/bash
# Quick PDF Processing Script for Copernicus Platform
# Usage: ./process-pdf.sh <pdf-file> <content-slug>

set -e

if [ $# -lt 2 ]; then
    echo "Usage: ./process-pdf.sh <pdf-file> <content-slug>"
    echo ""
    echo "Example:"
    echo "  ./process-pdf.sh ~/Downloads/paper.pdf my-paper-name"
    echo ""
    echo "This will create:"
    echo "  - src/data/papers/markdown/my-paper-name.md"
    echo ""
    exit 1
fi

PDF_FILE="$1"
SLUG="$2"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Check if PDF exists
if [ ! -f "$PDF_FILE" ]; then
    echo "Error: PDF file not found: $PDF_FILE"
    exit 1
fi

# Determine Python executable
if [ -f "$PROJECT_ROOT/../.venv/bin/python" ]; then
    PYTHON_CMD="$PROJECT_ROOT/../.venv/bin/python"
else
    PYTHON_CMD="python3"
fi

# Output paths
MD_OUTPUT="$PROJECT_ROOT/src/data/papers/markdown/${SLUG}.md"

echo "========================================="
echo "Copernicus PDF Processing"
echo "========================================="
echo "PDF: $PDF_FILE"
echo "Slug: $SLUG"
echo "Python: $PYTHON_CMD"
echo ""

# Step 1: Convert PDF to Markdown
echo "Step 1: Converting PDF to Markdown..."
"$PYTHON_CMD" "$SCRIPT_DIR/pdf-to-markdown.py" "$PDF_FILE" "$MD_OUTPUT"

echo ""
echo "========================================="
echo "✓ Processing Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Review the markdown file:"
echo "   $MD_OUTPUT"
echo ""
echo "2. Create content file at:"
echo "   src/data/papers/${SLUG}Content.js"
echo ""
echo "3. Update content registry:"
echo "   src/data/contentRegistry.js"
echo ""
echo "4. Add to ContentViewerPage:"
echo "   src/pages/ContentViewerPage.jsx"
echo ""
echo "See scripts/PDF_PROCESSING_GUIDE.md for detailed instructions."
