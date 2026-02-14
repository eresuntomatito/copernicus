/**
 * CASE STUDY TEMPLATE
 * 
 * Use this template to create new interactive case studies for Copernicus.
 * Fill in all sections with relevant content from your case study.
 */

export const caseTemplate = {
  // Unique identifier (use kebab-case)
  id: 'case-study-id',
  
  // Case study title and subtitle
  title: 'Case Study Title',
  subtitle: 'Brief description or tagline',
  
  // Metadata
  authors: ['Author Name 1', 'Author Name 2'],
  institution: 'Institution Name',
  company: 'Company Name',
  industry: 'Industry Sector',
  year: 2024,
  
  // Executive Summary (optional but recommended)
  executiveSummary: {
    overview: 'A comprehensive overview of the case study, including the main challenge, approach, and outcomes.',
    keyQuote: 'A compelling quote from a key stakeholder (optional)',
    keyPoints: [
      'Key takeaway point 1',
      'Key takeaway point 2',
      'Key takeaway point 3',
      'Key takeaway point 4'
    ]
  },
  
  // Main content sections
  sections: [
    {
      id: 'section-1',
      title: 'Background & Context',
      icon: 'History', // Icon name from lucide-react
      content: [
        {
          subtitle: 'Company History',
          text: 'Detailed text content for this subsection...'
        },
        {
          subtitle: 'Market Position',
          text: 'More detailed content...'
        }
      ],
      // Optional: Add statistics
      stats: [
        { value: '$100M', label: 'Annual Revenue' },
        { value: '5000+', label: 'Employees' }
      ]
    },
    {
      id: 'section-2',
      title: 'The Challenge',
      icon: 'Target',
      content: [
        {
          subtitle: 'Problem Statement',
          text: 'Description of the challenge faced...'
        }
      ]
    },
    {
      id: 'section-3',
      title: 'Strategic Approach',
      icon: 'TrendingUp',
      content: [
        {
          subtitle: 'Strategy Overview',
          text: 'Description of the strategy implemented...'
        }
      ],
      // Optional: Add initiatives/timeline
      initiatives: [
        { name: 'Initiative 1', description: 'Details...', year: '2020' },
        { name: 'Initiative 2', description: 'Details...', year: '2021' }
      ]
    },
    {
      id: 'section-4',
      title: 'Implementation',
      icon: 'Cpu',
      content: [
        {
          subtitle: 'Execution Details',
          text: 'How the strategy was implemented...'
        }
      ]
    },
    {
      id: 'section-5',
      title: 'Results & Impact',
      icon: 'Award',
      content: [
        {
          subtitle: 'Outcomes',
          text: 'Measurable results and impact...'
        }
      ],
      stats: [
        { value: '30%', label: 'Efficiency Gain' },
        { value: '2x', label: 'Revenue Growth' }
      ]
    },
    {
      id: 'section-6',
      title: 'Challenges & Concerns',
      icon: 'AlertTriangle',
      content: [
        {
          subtitle: 'Obstacles Faced',
          text: 'Challenges encountered during implementation...'
        }
      ],
      // Optional: Specific concerns with severity
      concerns: [
        { 
          title: 'Challenge 1', 
          description: 'Description of the challenge',
          severity: 'high' // high, medium, low
        }
      ]
    },
    {
      id: 'section-7',
      title: 'Lessons Learned',
      icon: 'BookOpen',
      content: [
        {
          subtitle: 'Key Insights',
          text: 'What the company learned from this experience...'
        }
      ]
    }
  ],
  
  // Key metrics showcase (optional)
  keyMetrics: {
    title: 'Performance Metrics',
    metrics: [
      { 
        label: 'ROI',
        value: '250%',
        description: 'Return on investment over 3 years',
        color: 'primary'
      },
      {
        label: 'Time to Market',
        value: '-40%',
        description: 'Reduction in product launch time',
        color: 'success'
      }
    ]
  },
  
  // Discussion questions for classroom engagement
  discussionQuestions: [
    'What factors contributed to the success of this initiative?',
    'What alternative approaches could have been considered?',
    'How might this strategy be applied in different industries?',
    'What ethical considerations arise from this case?',
    'What would you do differently if you were the CEO?'
  ],
  
  // Flashcards for learning reinforcement
  flashcards: [
    {
      id: 'card-1',
      category: 'Key Concepts',
      difficulty: 'easy', // easy, medium, hard
      question: 'What was the main challenge faced by the company?',
      answer: 'The answer explaining the main challenge in detail...'
    },
    {
      id: 'card-2',
      category: 'Strategic Analysis',
      difficulty: 'medium',
      question: 'What were the key elements of the strategic approach?',
      answer: 'The answer covering the strategic elements...'
    },
    {
      id: 'card-3',
      category: 'Results & Impact',
      difficulty: 'hard',
      question: 'Analyze the long-term implications of this transformation.',
      answer: 'A comprehensive analysis of long-term effects...'
    }
  ]
};

export default caseTemplate;
