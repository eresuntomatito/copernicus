# Copernicus - Interactive MBA Learning Platform

**Transform academic papers and business cases into interactive learning experiences for MBA students.**

Copernicus is a modern web platform that converts static academic content into engaging, interactive learning modules. Built for MBA students and business education, it features collapsible sections, flashcard quizzes, progress tracking, and rich visualizations that help students deeply understand complex business concepts and real-world case studies.

![Copernicus Platform](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react) ![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat&logo=vite) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat&logo=tailwindcss)

## Features

### 🎯 Interactive Case Studies
- **Expandable/Collapsible Sections** - Organize complex content into digestible chunks
- **Rich Visualizations** - Stats cards, timelines, ecosystem maps, and metric displays
- **Discussion Questions** - Promote critical thinking and classroom engagement
- **Color-Coded Insights** - Visual categorization for quick pattern recognition

### 📚 Flashcard Quiz System
- **Category Filtering** - Focus on specific topics or concepts
- **Difficulty Levels** - Easy, medium, and hard questions for progressive learning
- **Progress Tracking** - Mark cards as mastered or needs review
- **Celebration Animations** - Positive reinforcement on completion

### 📊 Learning Analytics
- **Reading Progress** - Track sections completed across all content
- **Bookmark System** - Save important sections for later review
- **Annotation Support** - Add personal notes to any section
- **Quiz Performance** - Monitor flashcard scores over time

### 🎨 Modern UX
- **Mobile Responsive** - Seamless experience on all devices
- **Dark Mode Ready** - Comfortable reading in any environment
- **Smooth Animations** - Framer Motion for engaging interactions
- **Tailwind Styling** - Clean, modern, professional design

## Technology Stack

- **React 19** - Modern UI framework with latest features
- **TypeScript** - Type-safe development
- **React Router 7** - Dynamic routing for content library
- **Framer Motion** - Fluid animations and transitions
- **Tailwind CSS 4** - Utility-first styling
- **Vite 7** - Lightning-fast build tool
- **Lucide Icons** - Beautiful, consistent iconography

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
copernicus/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── AppLayout.jsx
│   │   ├── FlashcardQuiz.jsx
│   │   ├── NavigationSidebar.jsx
│   │   └── ProgressBar.jsx
│   ├── context/          # React Context providers
│   │   └── UserProgressContext.jsx
│   ├── data/             # Content files (papers & cases)
│   │   ├── cases/        # Business case studies
│   │   └── papers/       # Academic papers
│   ├── hooks/            # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── pages/            # Route components
│   │   └── ...
│   ├── scripts/          # Content ingestion tools
│   └── App.tsx           # Main application
├── public/               # Static assets
└── package.json
```

## Adding New Content

### Case Studies

1. Create a new file in `src/data/cases/yourCase.js`
2. Follow the content schema (see `johnDeereContent.js` as example)
3. Include: title, sections, key metrics, discussion questions, flashcards
4. Register in content registry

### Academic Papers

1. Create a new file in `src/data/papers/yourPaper.js`
2. Structure with: abstract, sections, key concepts, flashcards
3. Add metadata: authors, institution, publication date, tags
4. Register in content registry

## Content Schema

```javascript
{
  id: 'unique-identifier',
  type: 'case' | 'paper',
  title: 'Content Title',
  category: 'Strategy' | 'Operations' | 'Marketing' | 'Finance' | 'Innovation',
  difficulty: 'beginner' | 'intermediate' | 'advanced',
  tags: ['ai', 'digital-transformation', 'leadership'],
  metadata: { authors, institution, date },
  sections: [
    {
      id: 'section-1',
      title: 'Section Title',
      icon: 'IconName',
      content: [{ subtitle, text }]
    }
  ],
  flashcards: [
    {
      id: 'card-1',
      category: 'Key Concepts',
      difficulty: 'medium',
      question: 'What is...?',
      answer: 'The answer...'
    }
  ]
}
```

## Contributing

Contributions welcome! Please:
1. Follow existing code patterns and component structure
2. Maintain content schema consistency
3. Test interactive features across devices
4. Update documentation for new features

## License

MIT License - See LICENSE file for details

## About

Copernicus aims to revolutionize business education by making academic content more accessible, engaging, and memorable. Named after Nicolaus Copernicus, whose revolutionary ideas transformed our understanding of the universe, this platform transforms how students learn and engage with business knowledge.

---

**Built with ❤️ for MBA students and business educators worldwide.**
