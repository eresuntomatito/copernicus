/**
 * ACADEMIC PAPER TEMPLATE
 * 
 * Use this template to create interactive academic papers for Copernicus.
 * Adapt sections based on your paper's structure.
 */

export const paperTemplate = {
  // Unique identifier (use kebab-case)
  id: 'paper-id',
  
  // Paper title and subtitle
  title: 'Paper Title: Main Research Question',
  subtitle: 'Exploring the Topic in Context',
  
  // Metadata
  authors: ['Author Name 1', 'Author Name 2', 'Author Name 3'],
  institution: 'University or Research Institution',
  year: 2024,
  publicationType: 'Journal Article', // or 'Conference Paper', 'Thesis', 'Working Paper'
  journal: 'Journal Name (optional)',
  doi: 'DOI (optional)',
  
  // Abstract/Executive Summary
  executiveSummary: {
    overview: 'A concise summary of the research question, methodology, key findings, and implications. This should give readers a clear understanding of what the paper contributes to the field.',
    keyPoints: [
      'Research question or hypothesis',
      'Methodology employed',
      'Key findings or results',
      'Theoretical/practical implications',
      'Future research directions'
    ]
  },
  
  // Main content sections (adapt based on paper structure)
  sections: [
    {
      id: 'section-1',
      title: 'Introduction',
      icon: 'BookOpen',
      content: [
        {
          subtitle: 'Research Context',
          text: 'Background information and context for the research...'
        },
        {
          subtitle: 'Research Question',
          text: 'Clear statement of the research question or hypothesis...'
        },
        {
          subtitle: 'Contribution',
          text: 'What this paper contributes to the field...'
        }
      ]
    },
    {
      id: 'section-2',
      title: 'Literature Review',
      icon: 'Library',
      content: [
        {
          subtitle: 'Theoretical Framework',
          text: 'Overview of the theoretical foundations...'
        },
        {
          subtitle: 'Prior Research',
          text: 'Summary of relevant prior research...'
        },
        {
          subtitle: 'Research Gap',
          text: 'Identification of the gap this research addresses...'
        }
      ]
    },
    {
      id: 'section-3',
      title: 'Methodology',
      icon: 'Flask',
      content: [
        {
          subtitle: 'Research Design',
          text: 'Description of the research design and approach...'
        },
        {
          subtitle: 'Data Collection',
          text: 'Methods used for data collection...'
        },
        {
          subtitle: 'Analysis Methods',
          text: 'Analytical techniques employed...'
        }
      ],
      stats: [
        { value: 'N=100', label: 'Sample Size' },
        { value: '6 months', label: 'Study Duration' }
      ]
    },
    {
      id: 'section-4',
      title: 'Findings',
      icon: 'BarChart',
      content: [
        {
          subtitle: 'Key Finding 1',
          text: 'Detailed description of the first major finding...'
        },
        {
          subtitle: 'Key Finding 2',
          text: 'Detailed description of the second major finding...'
        }
      ],
      stats: [
        { value: 'p < 0.05', label: 'Statistical Significance' },
        { value: 'r = 0.78', label: 'Correlation Coefficient' }
      ]
    },
    {
      id: 'section-5',
      title: 'Discussion',
      icon: 'MessageSquare',
      content: [
        {
          subtitle: 'Interpretation of Results',
          text: 'What the findings mean in the context of existing research...'
        },
        {
          subtitle: 'Theoretical Implications',
          text: 'How these findings contribute to theory...'
        },
        {
          subtitle: 'Practical Implications',
          text: 'Real-world applications and implications...'
        }
      ]
    },
    {
      id: 'section-6',
      title: 'Limitations & Future Research',
      icon: 'AlertCircle',
      content: [
        {
          subtitle: 'Study Limitations',
          text: 'Acknowledged limitations of the research...'
        },
        {
          subtitle: 'Future Research Directions',
          text: 'Suggestions for future research in this area...'
        }
      ]
    },
    {
      id: 'section-7',
      title: 'Conclusion',
      icon: 'CheckCircle',
      content: [
        {
          subtitle: 'Summary of Contributions',
          text: 'Recap of the main contributions of this research...'
        },
        {
          subtitle: 'Final Thoughts',
          text: 'Concluding remarks and broader implications...'
        }
      ]
    }
  ],
  
  // Key concepts for learning
  keyConceptsDiscussionQuestions: [
    'What is the central research question addressed in this paper?',
    'How does this research build on or challenge existing theories?',
    'What are the strengths and weaknesses of the methodology employed?',
    'How generalizable are the findings to other contexts?',
    'What are the most significant practical implications of this research?',
    'What questions remain unanswered, and why are they important?'
  ],
  
  // Flashcards for concept mastery
  flashcards: [
    {
      id: 'card-1',
      category: 'Research Design',
      difficulty: 'easy',
      question: 'What type of research methodology was employed in this study?',
      answer: 'Description of the methodology (qualitative, quantitative, mixed methods, etc.)...'
    },
    {
      id: 'card-2',
      category: 'Key Concepts',
      difficulty: 'medium',
      question: 'Define the main theoretical construct examined in this paper.',
      answer: 'Clear definition and explanation of the key concept...'
    },
    {
      id: 'card-3',
      category: 'Findings',
      difficulty: 'medium',
      question: 'What were the most significant findings of this research?',
      answer: 'Summary of the key findings and their importance...'
    },
    {
      id: 'card-4',
      category: 'Critical Analysis',
      difficulty: 'hard',
      question: 'Critically evaluate the study\'s methodology and its implications for the findings.',
      answer: 'A nuanced analysis of methodological strengths and limitations...'
    },
    {
      id: 'card-5',
      category: 'Application',
      difficulty: 'hard',
      question: 'How could these findings be applied in a real-world business context?',
      answer: 'Practical applications and examples...'
    }
  ]
};

export default paperTemplate;
