# Content Ingestion Guide

This guide explains how to add new papers and case studies to Copernicus.

## Quick Start

1. Choose your content type (case study or academic paper)
2. Copy the appropriate template from `src/scripts/`
3. Fill in the template with your content
4. Save to the appropriate folder (`src/data/cases/` or `src/data/papers/`)
5. Register in `src/data/contentRegistry.js`

## Detailed Steps

### Step 1: Create Your Content File

#### For Case Studies:

```bash
# Copy the template
cp src/scripts/caseTemplate.js src/data/cases/yourCaseName.js

# Edit the file and fill in all sections
# Make sure to export your content properly
```

#### For Academic Papers:

```bash
# Copy the template
cp src/scripts/paperTemplate.js src/data/papers/yourPaperName.js

# Edit the file and fill in all sections
```

### Step 2: Register Your Content

Add an entry to `src/data/contentRegistry.js`:

```javascript
{
  id: 'unique-identifier',
  type: 'case', // or 'paper'
  title: 'Your Content Title',
  subtitle: 'Brief description',
  category: 'Strategy', // Strategy, Operations, Marketing, Finance, Innovation
  difficulty: 'intermediate', // beginner, intermediate, advanced
  tags: ['tag1', 'tag2', 'tag3'],
  estimatedTime: '45 min',
  metadata: {
    authors: ['Author Name'],
    institution: 'Institution',
    year: 2024
  },
  description: 'A compelling description for the library card',
  path: '/case/unique-identifier', // or '/paper/unique-identifier'
  contentFile: 'cases/yourCaseName', // or 'papers/yourPaperName'
  hasFlashcards: true,
  sectionCount: 7,
  flashcardCount: 15
}
```

### Step 3: Test Your Content

1. Start the dev server: `npm run dev`
2. Navigate to `/library`
3. Find your content and click to view
4. Verify all sections, flashcards, and interactive elements work

## Content Structure Guidelines

### Section IDs
- Use descriptive kebab-case: `background-context`, `strategic-approach`
- Keep unique within each content file

### Icons
Available icons from lucide-react:
- `BookOpen`, `History`, `Target`, `Cpu`, `TrendingUp`
- `Award`, `AlertTriangle`, `Users`, `BarChart`, `Flask`
- `MessageSquare`, `CheckCircle`, `AlertCircle`, `Library`

### Content Arrays
Each section's content can be:
- An array of `{ subtitle, text }` objects (recommended)
- A simple string (for single paragraphs)

### Optional Section Elements

#### Stats
```javascript
stats: [
  { value: '30%', label: 'Efficiency Gain' },
  { value: '$100M', label: 'Revenue Increase' }
]
```

#### Initiatives/Timeline
```javascript
initiatives: [
  { name: 'Initiative Name', description: 'Details', year: '2020' }
]
```

#### Concerns
```javascript
concerns: [
  { 
    title: 'Challenge Name',
    description: 'Details',
    severity: 'high' // high, medium, low
  }
]
```

### Flashcards

**Categories:**
- Key Concepts
- Strategic Analysis
- Research Design
- Findings
- Critical Analysis
- Application

**Difficulty Levels:**
- `easy`: Basic recall and definitions
- `medium`: Application and analysis
- `hard`: Critical thinking and synthesis

**Question Types:**
- Factual: "What is X?"
- Analytical: "Why did X happen?"
- Application: "How would you apply X?"
- Critical: "Evaluate the effectiveness of X"

## Best Practices

### Writing Content

1. **Be Concise**: Each section should be focused and digestible
2. **Use Subsections**: Break complex topics into subtitled parts
3. **Include Context**: Provide enough background for standalone understanding
4. **Add Statistics**: Quantify impact wherever possible
5. **Create Discussion Questions**: Encourage critical thinking

### Creating Flashcards

1. **15-25 cards per content**: Balance coverage with student fatigue
2. **Mix difficulty levels**: 40% easy, 40% medium, 20% hard
3. **Vary categories**: Cover all major sections
4. **Write clear answers**: Answers should be comprehensive but concise
5. **Avoid ambiguity**: Questions should have clear, definitive answers

### Metadata

1. **Choose accurate difficulty**:
   - Beginner: Intro-level concepts, basic frameworks
   - Intermediate: Application of concepts, multi-variable analysis
   - Advanced: Complex synthesis, advanced theoretical frameworks

2. **Select relevant tags**: 3-6 tags that aid in search and filtering

3. **Estimate time accurately**: 
   - 1-2 minutes per section
   - 2-3 minutes per flashcard
   - Account for discussion questions

## Automated Content Processing (Future)

### Planned Features

1. **Markdown to JSON Converter**
   - Convert markdown files to interactive format
   - Preserve formatting and structure
   - Auto-generate section IDs

2. **PDF Ingestion Pipeline**
   - Extract text from academic PDFs
   - Identify sections automatically
   - Suggest flashcard questions using AI

3. **Content Quality Checker**
   - Validate content structure
   - Check for required fields
   - Suggest improvements

### Current Manual Process

For now, all content must be manually created following these templates. The interactive features (collapsible sections, flashcards, bookmarks) are automatically available once content is properly formatted.

## Troubleshooting

### Content Not Appearing in Library
- Check that content is registered in `contentRegistry.js`
- Verify the `contentFile` path is correct
- Ensure the content file exports a default object

### Flashcards Not Working
- Verify `hasFlashcards: true` in registry
- Check that flashcards array exists and has `id`, `category`, `difficulty`, `question`, `answer`
- Ensure all IDs are unique

### Sections Not Rendering
- Confirm each section has required fields: `id`, `title`, `content`
- Verify icon names match lucide-react exports
- Check that content is an array or string

## Example: Adding a New Case Study

```bash
# 1. Create the content file
cp src/scripts/caseTemplate.js src/data/cases/netflix.js

# 2. Edit netflix.js with your content
# (fill in all sections, flashcards, etc.)

# 3. Add to contentRegistry.js
# Add Netflix entry with appropriate metadata

# 4. Test
npm run dev
# Navigate to http://localhost:5173/library
# Find and click on Netflix case
```

## Contributing

When adding new content:
1. Follow the templates closely
2. Test thoroughly before committing
3. Update this guide if you discover new patterns
4. Share feedback on template improvements

---

For questions or issues, consult the main README.md or project documentation.
