// Design Thinking stages
export const dtStages = [
  {
    id: 'empathize',
    name: 'Empathize',
    color: '#FF6B6B',
    description: 'Understanding user needs through observation and engagement',
    beforeAI: 'Manual interviews, weeks of research, limited sample sizes',
    afterAI: 'AI-powered sentiment analysis, 100+ simulated interviews in days, vast data processing',
    challenges: ['Limited depth in AI analysis', 'Risk of missing emotional nuances'],
    strategies: ['Combine AI insights with real human interviews', 'Use AI for breadth, humans for depth'],
    speedImprovement: '85%',
    scaleImprovement: '1000%',
    quotes: [
      { participant: 'Sofia', text: 'Before, I think it took me two weeks to interview, let\'s say, 10 people. Now, in one day, I can get 100 or 150 interviews' },
      { participant: 'Oliver', text: 'You can go through tens of thousands of data points within minutes' }
    ]
  },
  {
    id: 'define',
    name: 'Define',
    color: '#8B5CF6',
    description: 'Synthesizing insights to frame the core problem',
    beforeAI: 'Manual pattern recognition, days of analysis, limited perspectives',
    afterAI: 'AI-driven clustering, rapid synthesis, multi-dimensional problem framing',
    challenges: ['Gut feeling still needed', 'AI may miss context'],
    strategies: ['Use AI for pattern detection', 'Apply human judgment for prioritization'],
    speedImprovement: '75%',
    scaleImprovement: '500%',
    quotes: [
      { participant: 'Daniel', text: 'Sort of prioritized based on our gut feeling and experience' },
      { participant: 'Frank', text: 'We still talk to real people and double check with them' }
    ]
  },
  {
    id: 'ideate',
    name: 'Ideate',
    color: '#0066FF',
    description: 'Generating creative solutions and exploring possibilities',
    beforeAI: 'Traditional brainstorming, limited by team size and perspectives',
    afterAI: 'AI-augmented ideation, role-based prompting, rapid idea generation',
    challenges: ['AI ideas lack novelty', 'Generic outputs', 'Limited creativity'],
    strategies: ['Use AI as inspiration trigger', 'Prompt engineering', 'Human curation of ideas'],
    speedImprovement: '90%',
    scaleImprovement: '800%',
    quotes: [
      { participant: 'Martin', text: 'Our own brains are a lot better in finding a real solution to a real problem than the AI is' },
      { participant: 'Sofia', text: 'If you prompt correctly, it can really help' }
    ]
  },
  {
    id: 'prototype',
    name: 'Prototype',
    color: '#10B981',
    description: 'Creating tangible representations to test concepts',
    beforeAI: 'Weeks of development, expensive resources, technical bottlenecks',
    afterAI: 'Hyper-rapid prototyping, 70% code automation, dramatically reduced costs',
    challenges: ['Code breaks often', 'Technical oversight needed', 'Stability issues'],
    strategies: ['Human technical oversight', 'Proper coders for refinement', 'Quick and dirty validation'],
    speedImprovement: '80%',
    scaleImprovement: '600%',
    quotes: [
      { participant: 'Daniel', text: 'A product in two months at a cost that was previously close to 200.000€, and now he builds it himself in two weeks with maybe a software cost of 200€' },
      { participant: 'Magnus', text: 'Speed has increased, but stability has decreased' }
    ]
  },
  {
    id: 'test',
    name: 'Test',
    color: '#FF8C00',
    description: 'Validating solutions with real users and gathering feedback',
    beforeAI: 'Manual feedback analysis, slow iteration cycles, limited testing scope',
    afterAI: 'AI-synthesized insights, MVP-based validation, accelerated iteration',
    challenges: ['Need real human testers', 'AI can\'t replace user interaction'],
    strategies: ['Use AI for data synthesis', 'Validate with actual users', 'Test directly with product'],
    speedImprovement: '70%',
    scaleImprovement: '400%',
    quotes: [
      { participant: 'Sofia', text: 'You need to test with humans' },
      { participant: 'Johan', text: 'Build products in two weeks, then drop them onto the market and try to sell it' }
    ]
  }
];

// Aggregate dimensions
export const aggregateDimensions = [
  {
    id: 'accelerator',
    title: 'AI as an Accelerator and Scaler',
    color: '#0066FF',
    icon: 'Zap',
    description: 'AI dramatically speeds up and expands the scope of work across all DT stages',
    themes: [
      'Accelerating research & data analysis',
      'Faster and broader ideation',
      'Hyper-rapid prototyping & expanded capabilities',
      'Accelerated testing',
      'MVP-based validation'
    ]
  },
  {
    id: 'creativity',
    title: 'Impact on Creativity',
    color: '#8B5CF6',
    icon: 'Lightbulb',
    description: 'AI serves as inspiration but struggles with genuine novelty',
    themes: [
      'Idea inspiration & diversity',
      'Limited novelty & creativity'
    ]
  },
  {
    id: 'trust',
    title: 'Trust, Quality and Oversight',
    color: '#FF6B6B',
    icon: 'Shield',
    description: 'Human oversight remains critical for quality outcomes',
    themes: [
      'Human-in-the-loop',
      'Human technical oversight',
      'Trust, reliability and transparency concerns'
    ]
  },
  {
    id: 'adaptation',
    title: 'Entrepreneurial Adaptation to AI Complexity',
    color: '#10B981',
    icon: 'TrendingUp',
    description: 'Users develop strategies to navigate the evolving AI landscape',
    themes: [
      'Learning curve to effective AI integration',
      'Overloaded yet underused AI tool landscape',
      'Customized AI-driven workflows'
    ]
  },
  {
    id: 'impact',
    title: 'Micro and Macro Impact',
    color: '#FF8C00',
    icon: 'Globe',
    description: 'AI transforms both individual practices and entrepreneurial structures',
    themes: [
      'Intensified competitive pressure',
      'Evolution of entrepreneurial ventures',
      'Empowerment & productivity gains',
      'Dependency, insecurity & stress'
    ]
  }
];

// Glossary terms
export const glossaryTerms = [
  {
    term: 'AI Literacy',
    definition: 'The ability to understand, use, and critically evaluate AI tools effectively, including prompt engineering and output interpretation.'
  },
  {
    term: 'Human-in-the-loop',
    definition: 'A collaborative approach where humans remain directly involved in AI-driven processes, providing input, validation, and active participation.'
  },
  {
    term: 'Human-on-the-loop',
    definition: 'A supervisory role where humans provide oversight and strategic guidance for AI processes without direct hands-on involvement.'
  },
  {
    term: 'Generative AI',
    definition: 'AI systems capable of creating new content (text, images, code) based on patterns learned from training data.'
  },
  {
    term: 'Large Language Model (LLM)',
    definition: 'AI models trained on vast amounts of text data to understand and generate human-like language.'
  },
  {
    term: 'Prompt Engineering',
    definition: 'The practice of crafting effective instructions to guide AI systems toward desired outputs.'
  },
  {
    term: 'MVP (Minimum Viable Product)',
    definition: 'A basic version of a product with just enough features to validate core assumptions with real users.'
  },
  {
    term: 'Design Thinking',
    definition: 'A human-centered, iterative approach to innovation comprising five stages: Empathize, Define, Ideate, Prototype, and Test.'
  }
];
