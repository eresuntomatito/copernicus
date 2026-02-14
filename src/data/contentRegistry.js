/**
 * Content Registry for Copernicus Platform
 * 
 * This file indexes all available papers and cases with metadata.
 * Each entry provides navigation, filtering, and search capabilities.
 */

export const contentRegistry = [
  // CASES
  {
    id: 'john-deere-ai-strategy',
    type: 'case',
    title: 'John Deere\'s AI-Driven Digital Transformation',
    subtitle: 'From Traditional Manufacturing to Smart Agriculture Platform',
    category: 'Innovation',
    difficulty: 'intermediate',
    tags: ['AI', 'Digital Transformation', 'Agriculture', 'Platform Strategy', 'IoT'],
    estimatedTime: '45 min',
    metadata: {
      company: 'John Deere',
      industry: 'Agriculture & Manufacturing',
      year: 2024,
      authors: ['Case Study Research'],
      institution: 'MBA Program'
    },
    description: 'Explore how John Deere transformed from a traditional equipment manufacturer into a data-driven precision agriculture platform, leveraging AI, IoT, and predictive analytics.',
    path: '/case/john-deere-ai-strategy',
    contentFile: 'cases/johnDeereContent',
    hasFlashcards: true,
    sectionCount: 8,
    flashcardCount: 15
  },
  {
    id: 'niantic-labs-ar-gaming',
    type: 'case',
    title: 'Niantic Labs: Professional Entrepreneurship and AR Gaming',
    subtitle: 'Google, Pokémon Go, and the Future of Augmented Reality',
    category: 'Innovation',
    difficulty: 'advanced',
    tags: ['AR', 'Gaming', 'Entrepreneurship', 'Platform Strategy', 'Google', 'Pokémon Go'],
    estimatedTime: '55 min',
    metadata: {
      company: 'Niantic Labs',
      industry: 'Gaming & Augmented Reality',
      year: 2020,
      authors: ['Jerome S. Engel', 'Dickson L. Louie'],
      institution: 'UC Berkeley Haas School of Business'
    },
    description: 'John Hanke\'s journey from founding Keyhole (acquired by Google, became Google Earth) through creating Pokémon Go with 1 billion downloads and $2B+ revenue. Examines strategic inflection points, the spin-out from Alphabet, platform strategy decisions, and Niantic\'s positioning as AR/VR market grows from $27B to projected $815B by 2025. Faces competition from tech giants and critical choices about scaling the Real World Platform.',
    path: '/case/niantic-labs-ar-gaming',
    contentFile: 'cases/nianticLabsContent',
    hasFlashcards: true,
    sectionCount: 7,
    flashcardCount: 15
  },
  
  // PAPERS
  {
    id: 'ai-cofounder-design-thinking',
    type: 'paper',
    title: 'AI as a Co-Founder: The Role of AI in Transforming the Design Thinking Process',
    subtitle: 'Research on AI-Driven Innovation in Entrepreneurship',
    category: 'Innovation',
    difficulty: 'advanced',
    tags: ['AI', 'Design Thinking', 'Entrepreneurship', 'Innovation', 'Human-AI Collaboration'],
    estimatedTime: '60 min',
    metadata: {
      authors: ['Tobías van Oudheusden', 'Justus Willebrand'],
      institution: 'Lund University School of Economics and Management',
      year: 2025,
      publicationType: 'Master\'s Thesis'
    },
    description: 'A groundbreaking study examining how AI transforms all five Design Thinking stages in entrepreneurship through 9 interviews with founders. Reveals dramatic speed gains (75% faster prototyping, 99% cost reduction) alongside critical limitations: 0% trust for decisions, limited creativity, and the need for constant human oversight. Features the human-in-the-loop vs. human-on-the-loop collaboration model.',
    path: '/paper/ai-cofounder-design-thinking',
    contentFile: 'papers/aiCofounderContent',
    hasFlashcards: true,
    sectionCount: 6,
    flashcardCount: 15
  }
];

/**
 * Get all content items
 */
export const getAllContent = () => contentRegistry;

/**
 * Get content by type (case or paper)
 */
export const getContentByType = (type) => {
  return contentRegistry.filter(item => item.type === type);
};

/**
 * Get content by category
 */
export const getContentByCategory = (category) => {
  return contentRegistry.filter(item => item.category === category);
};

/**
 * Get content by ID
 */
export const getContentById = (id) => {
  return contentRegistry.find(item => item.id === id);
};

/**
 * Get content by tags
 */
export const getContentByTags = (tags) => {
  return contentRegistry.filter(item => 
    tags.some(tag => item.tags.includes(tag))
  );
};

/**
 * Search content by query (searches title, description, tags)
 */
export const searchContent = (query) => {
  const lowerQuery = query.toLowerCase();
  return contentRegistry.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    item.subtitle.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get all unique categories
 */
export const getAllCategories = () => {
  return [...new Set(contentRegistry.map(item => item.category))];
};

/**
 * Get all unique tags
 */
export const getAllTags = () => {
  const allTags = contentRegistry.flatMap(item => item.tags);
  return [...new Set(allTags)].sort();
};

/**
 * Filter content with multiple criteria
 */
export const filterContent = ({ type, category, difficulty, tags, query }) => {
  let results = contentRegistry;
  
  if (type) {
    results = results.filter(item => item.type === type);
  }
  
  if (category) {
    results = results.filter(item => item.category === category);
  }
  
  if (difficulty) {
    results = results.filter(item => item.difficulty === difficulty);
  }
  
  if (tags && tags.length > 0) {
    results = results.filter(item => 
      tags.some(tag => item.tags.includes(tag))
    );
  }
  
  if (query) {
    const lowerQuery = query.toLowerCase();
    results = results.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }
  
  return results;
};

export default contentRegistry;
