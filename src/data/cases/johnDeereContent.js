export const johnDeereContent = {
  title: "John Deere: Strategic Transformation",
  subtitle: "Precision Agriculture, AI, and the Internet of Things",
  caseNumber: "A08-23-0017 | HBP# TB0702",
  authors: "Kannan Ramaswamy & William E. Youngdahl",
  institution: "Thunderbird School of Global Management, Arizona State University",
  
  executiveSummary: {
    title: "Executive Summary",
    overview: "John Deere's strategic transformation from traditional agricultural equipment manufacturer to a digital-first precision agriculture leader, leveraging AI, IoT, and machine learning to revolutionize farming through personalized plant-level care.",
    keyQuote: "I'm all for innovation, and I think John Deere is a helluva company, but they're trying to be the Facebook of farming.",
    quoteAuthor: "Kevin Kenney, Agricultural Engineer",
    keyPoints: [
      "John Deere announced 'Leap Ambitions' strategy in February 2022 to lead the Fourth Industrial Revolution",
      "Goal: Digitally engage 50% of farmers worldwide by 2026, connecting 500+ million acres",
      "Target: Generate 10% of revenues from software/subscriptions by 2030",
      "Software margins: 85% vs. 25% for equipment sales",
      "First agricultural manufacturer to keynote Consumer Electronics Show (CES) in 2023",
      "Employs more software engineers than mechanical engineers"
    ]
  },

  sections: [
    {
      id: "background",
      title: "Historical Context & Industry Evolution",
      icon: "History",
      content: [
        {
          subtitle: "Company Origins (1837)",
          text: "Founded by John Deere, a skilled blacksmith who invented the first commercially successful self-scouring steel plow in 1837. This innovation solved the critical problem of sticky Midwestern soil that rendered iron plows ineffective, laying the foundation for a company that would become synonymous with agricultural machinery worldwide."
        },
        {
          subtitle: "The New Age in Agriculture",
          text: "Agriculture has evolved from mechanization to precision agriculture, incorporating GPS, GIS, IoT sensors, AI, and machine learning. Precision agriculture is defined as a farm and crop management approach that accounts for 'temporal and spatial variability to improve sustainability of agricultural production.' This approach recognizes significant variability within and across farmlands, enabling higher levels of customization to maximize yield."
        },
        {
          subtitle: "Market Dynamics & Demographics",
          text: "Over 90% of U.S. farms are classified as small farms with gross cash income of $250,000 or less. The average farmer is 58 years old and relies heavily on in-person advisory services. Agriculture remains a notoriously low-margin business where farmers are reluctant to shoulder significant capital expenditure outlays without clear short-term benefits."
        },
        {
          subtitle: "Current Adoption Challenges",
          text: "McKinsey research shows only 25% of U.S. farmers use precision agriculture management software, with a mere 3% expressing interest in near-term adoption. Major impediments include high equipment costs, unclear ROI, low willingness to pay, and steep profit expectations (~3X). Demand for calories is expected to grow 50% over the next few decades, making yield improvement from existing land a pressing challenge."
        }
      ],
      stats: [
        { label: "Company Founded", value: "1837" },
        { label: "Average Farmer Age", value: "58 years" },
        { label: "Small Farms in US", value: "90%" },
        { label: "Market Position", value: "#1 Globally" }
      ]
    },
    {
      id: "strategy",
      title: "Leap Ambitions Strategy",
      icon: "Target",
      content: [
        {
          subtitle: "Three Strategic Tracks",
          text: "1. Enhancing economic value for customers - reducing costs and improving profitability\n2. Increasing productivity in operations - maximizing yield per acre\n3. Delivering environmental sustainability - reducing fertilizer runoff and promoting ecosystem health\n\nThese tracks align company goals with customer needs while positioning John Deere to lead the precision agriculture revolution."
        },
        {
          subtitle: "Technology Vision",
          text: "Lead the Fourth Industrial Revolution by embracing AI, computer vision and machine learning (CVML), and big data analytics to deliver personalized care for every single plant on every square inch of farmland. The goal is to maximize overall crop yield while reducing environmental impact through precision application of inputs."
        },
        {
          subtitle: "Digital Engagement Targets",
          text: "Digitally engage at least 50% of farmers worldwide by 2026, connecting over 500 million acres of farmland to its digital framework. Ensure 100% of all equipment sold to small agriculture and turf management firms is digitally connected. This represents a massive transformation from 'big iron' to 'smart iron.'"
        },
        {
          subtitle: "Financial Targets & Business Model Shift",
          text: "Generate 10% of overall revenues from software and subscriptions by 2030. This is a lucrative prospect since software carries an 85% gross margin compared to 25% for equipment sales. The company has shifted focus from one-time equipment sales to recurring subscription revenue, fundamentally changing the business model."
        }
      ],
      initiatives: [
        "AutoTrac - GPS-guided tractor control with 1cm accuracy",
        "ExactApply - Precision fertilizer and chemical application",
        "GreenStar - Yield mapping system for field analysis",
        "JD Link - Telematics system for equipment connectivity",
        "MyJohnDeere.com - Central platform connecting farmers with data and services",
        "See & Spray - AI-powered weed recognition at plant level"
      ]
    },
    {
      id: "technology",
      title: "Technology & Innovation Journey",
      icon: "Cpu",
      content: [
        {
          subtitle: "Level 5 Autonomous Tractor (2023)",
          text: "Premiered at CES 2023, the fully autonomous tractor represents the highest level of autonomy achievable. Built on Deere's 8R chassis, it features:\n\n• Six pairs of stereo cameras offering 360-degree obstacle detection\n• Neural network processing to classify images and detect impediments\n• GPS tracking for precision navigation along neat rows\n• Spray booms with 36 cameras programmed to identify weeds\n• Mobile app control - farmers swipe right to start autonomous operation\n• Ability to operate 24/7 without human supervision"
        },
        {
          subtitle: "AI & Machine Learning Capabilities",
          text: "Blue River Technologies acquisition ($305M, 2017) brought breakthrough machine vision technology that can identify individual plants from weeds in real-time. This enables plant-level herbicide application, moving from field-level to plant-level precision - a transformational leap that promises significant cost savings and environmental benefits by reducing chemical usage and runoff."
        },
        {
          subtitle: "Data Ecosystem & IoT Integration",
          text: "The company has built a comprehensive data ecosystem centered around MyJohnDeere.com, connecting 1.5 million pieces of equipment and 500 million hectares of farmland. The system uses IoT sensors to relay real-time data to cloud servers where AI algorithms analyze and generate actionable recommendations. The platform allows 184 third-party companies to connect via encrypted APIs, creating an 'App Store for farmers.'"
        },
        {
          subtitle: "Evolution from GPS to AI (1990s-Present)",
          text: "The journey began in the 1990s with GPS integration. Julian Sanchez, Director of Emerging Technology, noted: 'The economics of accuracy are easy to understand because you overlap less.' The company evolved from basic GPS navigation to sensor-based geospatial mapping, then to cloud-based IoT systems, and finally to AI-powered autonomous systems. Each phase built upon the previous, creating a technological foundation for precision agriculture."
        }
      ],
      acquisitions: [
        { 
          year: "2000s", 
          company: "Navcom", 
          focus: "Satellite-based navigation systems and precise location data processing", 
          amount: "Undisclosed",
          rationale: "Bolstered in-house GPS navigation abilities after working together on tractor development"
        },
        { 
          year: "2017", 
          company: "Blue River Technologies", 
          focus: "AI, machine learning, and machine vision for plant/weed identification", 
          amount: "$305M",
          rationale: "Enabled plant-level precision for herbicide application, a transformational capability"
        },
        { 
          year: "2021", 
          company: "Bear Flag Robotics", 
          focus: "Robotics and autonomous driving technologies", 
          amount: "$250M",
          rationale: "Accelerated development of autonomous tractor systems and higher automation levels"
        },
        { 
          year: "2023", 
          company: "SparkAI", 
          focus: "Human-in-the-loop technology for edge case resolution", 
          amount: "Undisclosed",
          rationale: "Assists autonomous tractors in navigational uncertainty, providing real-time resolutions"
        },
        { 
          year: "2023", 
          company: "Smart Apply", 
          focus: "Precision air-blast spraying using LiDAR technology", 
          amount: "Undisclosed",
          rationale: "Enhanced chemical delivery capabilities for tree cultivation and specialty crops"
        }
      ]
    },
    {
      id: "challenges",
      title: "Strategic Challenges & Headwinds",
      icon: "AlertTriangle",
      content: [
        {
          subtitle: "Data Privacy & Ownership Concerns",
          text: "Farmers fear losing control of their farm data. Walter Schweitzer, Montana Farmers Union president, stated: 'You're losing control of the data, and the ownership of the tools.' Concerns include:\n\n• Equipment manufacturers could share data with seed companies\n• Competing farmers might access yield and soil data\n• Agribusiness services could use data to increase prices\n• Farmers may lose autonomy over their operations\n\nOne farmer remarked: 'There's a lot of value to that information. I'm afraid, as farmers, we are not going to be the ones reaping the benefit.'"
        },
        {
          subtitle: "Right to Repair Movement",
          text: "Proprietary software and hardware make equipment repairable only by Deere technicians, causing:\n\n• Long wait times for service appointments\n• High repair costs exclusive to Deere network\n• Lost productivity during peak farming seasons\n• Vendor lock-in and dependency\n\nMany farmers are 'racing to buy older, used tractors with enough life left in them,' finding them 'less complex, easier to repair, and far more affordable.' One expert noted the newer machines are 'just out of reach for anyone not part of the big corporate farm economy.'"
        },
        {
          subtitle: "High Capital Costs & Affordability",
          text: "Advanced equipment costs up to 5x more than retrofitted alternatives. In commodity markets with fickle margins, farmers struggle with capital expenditure outlays when benefits don't materialize quickly. Small farmers (90% of U.S. farms) are especially price-sensitive and skeptical about ROI from AI-influenced technology investments."
        },
        {
          subtitle: "Adoption Barriers & Market Resistance",
          text: "Only 25% of U.S. farmers currently use precision agriculture software, with major impediments including:\n\n• High equipment costs relative to farm income\n• Unclear returns on investment\n• Low willingness to pay for subscriptions\n• Steep profit expectations (~3X) before adoption\n• Information overload and analysis paralysis\n• Difficulty integrating disparate data streams\n• Age demographics (average 58 years) and technology comfort"
        }
      ],
      concerns: [
        "Data ownership and farmer control",
        "Equipment repair accessibility and costs",
        "Premium pricing vs. value delivered",
        "Information overload and analysis paralysis",
        "Integration of disparate data streams",
        "Vendor lock-in and dependency",
        "Environmental monitoring complexity",
        "Subscription fatigue and recurring costs"
      ]
    },
    {
      id: "competition",
      title: "Competitive Landscape & Ecosystem",
      icon: "Users",
      content: [
        {
          subtitle: "Traditional Competitors",
          text: "CNH Industrial (Dutch, #2 globally) - John Deere has roughly 2x the revenues\nAGCO Corporation - Focus on retrofitting strategy: 'We try to create solutions in a very scalable manner. If they wish to retrofit a planter, they don't need to retrofit the entire machine. They upgrade a section at a time.'\nKubota, Mahindra & Mahindra, Iseki & Co., JC Bamford Excavators\n\nThese established players compete on both traditional equipment and precision agriculture capabilities."
        },
        {
          subtitle: "Disruptive Entrants & Startups",
          text: "BlueWhite (Israel) - Subscription-based turnkey autonomy using common digital architecture with retrofits. Reports 35-75% cost reductions in served farms.\n\nSabanto - Retrofitting Kubota tractors for ~$100K with $2-2.5K annual subscription, operating 24/7. Represents 'farming as a service' model at 1/5 the cost of Deere's solutions.\n\nOver 700 agriculture technology startups raised $10.65 billion in 2022, with significant focus on precision agriculture, controlled climate systems, and climate monitoring."
        },
        {
          subtitle: "Tech Giants Entering Agriculture",
          text: "Amazon AWS - Partnered with Leaf, a startup providing software connectors between different data formats, aiming to integrate disparate data streams.\n\nGoogle - Partnered with Agrology for microclimate prediction within farms and Mineral for building data analysis platforms with AI tools for farm-level recommendations.\n\nThese tech giants bring massive cloud computing resources, AI expertise, and platform experience that could disrupt traditional equipment manufacturers."
        },
        {
          subtitle: "Precision Agriculture Ecosystem",
          text: "The ecosystem encompasses GPS providers, GIS specialists, seed producers, fertilizer manufacturers, pesticide companies, irrigation specialists, IoT technology firms, AI and cloud computing providers, and satellite imagery companies. Value creation requires seamless data collection, real-time processing, and actionable recommendations - a complex orchestration challenge."
        }
      ],
      ecosystem: [
        "GPS & GIS Providers",
        "Seed Producers",
        "Fertilizer Manufacturers",
        "Pesticide & Chemical Companies",
        "Irrigation Specialists",
        "IoT Technology Firms",
        "AI & Cloud Providers",
        "Satellite Imagery Companies",
        "AgTech Startups (700+ funded)",
        "Farm Machinery Manufacturers",
        "Data Analytics Platforms",
        "Software Application Developers"
      ]
    },
    {
      id: "decisions",
      title: "Key Strategic Decisions",
      icon: "GitBranch",
      content: [
        {
          subtitle: "Build vs. Buy Strategy",
          text: "Deere pursued an aggressive M&A strategy, acquiring specialized tech companies (Navcom, Blue River $305M, Bear Flag $250M, SparkAI, Smart Apply) rather than building all capabilities in-house. This accelerated time-to-market but required careful integration.\n\nThe company typically worked with acquisition targets for several years before purchasing them, ensuring cultural and technical fit. This 'try before you buy' approach reduced integration risk while maintaining innovation velocity."
        },
        {
          subtitle: "Proprietary vs. Open Platform",
          text: "MyJohnDeere.com allows 184 third-party companies to connect via encrypted APIs, balancing ecosystem openness with data control. This 'App Store' model enables farmers to access diverse applications while keeping Deere at the center of the ecosystem.\n\nHowever, the proprietary approach to equipment software and hardware has created tension with the 'right to repair' movement, potentially limiting adoption among cost-conscious farmers."
        },
        {
          subtitle: "Premium vs. Retrofit Strategy",
          text: "Deere focused on selling new high-tech equipment with bundled AI capabilities (premium pricing strategy) while competitors like AGCO emphasized retrofitting existing equipment (affordable scaling approach).\n\nPremium strategy offers:\n✓ Higher margins (especially with software subscriptions)\n✓ Full integration of hardware and software\n✗ High capital costs may limit market penetration\n✗ Excludes small farms (90% of market)\n\nThis strategic choice fundamentally determines addressable market size and growth trajectory."
        },
        {
          subtitle: "Data Monetization Approach",
          text: "Subscription-based software as a service model with flat fees per acre. Requires latest Deere equipment, creating a bundled value proposition but also vendor lock-in.\n\nTarget: 10% of revenues from software/subscriptions by 2030 (85% margin vs. 25% for equipment). This business model transformation prioritizes recurring revenue over one-time sales, fundamentally changing company economics and customer relationships.\n\nRisk: Farmers may resist subscription fatigue and data sharing requirements, preferring one-time purchase models."
        }
      ]
    }
  ],

  keyMetrics: {
    title: "Precision Agriculture Benefits",
    description: "Tangible advantages identified by U.S. Department of Agriculture experts",
    metrics: [
      {
        category: "Auto-Steer Technology",
        benefit: "20% savings",
        description: "GPS-guided control with accuracy within 1cm when planting, spraying, or fertilizing. Reduces overlaps (double application) and gaps (skipped areas), improving both economic and environmental efficiency. Requires row farming adoption."
      },
      {
        category: "Variable Rate Technology",
        benefit: "Customized inputs",
        description: "Site-specific fertilizer, nutrients, and water tailored to soil and plant needs. Eliminates waste and fertilizer runoff by moving from field-level to micro-level application, significantly reducing environmental contamination."
      },
      {
        category: "Plant-Level Precision",
        benefit: "Major cost savings",
        description: "AI-powered identification of individual plants vs. weeds enables precise herbicide application. Each plant receives exactly the right amount of chemicals, reducing costs while minimizing environmental impact."
      },
      {
        category: "Yield Prediction",
        benefit: "Improved accuracy",
        description: "Continuous monitoring of plant growth, weather, heat, water tables, drought conditions, and pest incidence enables precise harvest timing prediction. Reduces reliance on intuition and Farmer's Almanac guesswork."
      }
    ]
  },

  discussionQuestions: [
    "Should John Deere prioritize premium new equipment sales or shift toward more affordable retrofitting solutions to expand market penetration?",
    "How can Deere address farmer concerns about data ownership and privacy while maintaining its AI-driven value proposition?",
    "Is the 'Leap Ambitions' strategy sustainable for small farms (90% of market), or will precision agriculture primarily benefit large corporate operations?",
    "Should Deere adopt a more open platform approach to compete with tech giants like Amazon and Google entering the agriculture space?",
    "How can Deere balance innovation speed through acquisitions with the critical need for seamless integration of acquired technologies?",
    "What is the optimal pricing strategy for software subscriptions to drive adoption without alienating price-sensitive farmers?",
    "How should Deere respond to the 'right to repair' movement and growing farmer demand for simpler, serviceable equipment?",
    "Can Deere successfully orchestrate the complex precision agriculture ecosystem, or should it focus on equipment excellence and partner for services?"
  ]
};

export const johnDeereFlashcards = [
  {
    id: 1,
    category: "Strategy",
    question: "What are the three key tracks of John Deere's 'Leap Ambitions' strategy?",
    answer: "1. Enhancing economic value for customers\n2. Increasing productivity in operations\n3. Delivering environmental sustainability\n\nThese tracks align company goals with customer needs while positioning John Deere to lead the Fourth Industrial Revolution in agriculture.",
    difficulty: "easy"
  },
  {
    id: 2,
    category: "Financial",
    question: "What is John Deere's revenue target from software/subscriptions by 2030, and why is this significant?",
    answer: "10% of total revenues by 2030.\n\nSignificant because software has 85% gross margin vs. 25% for equipment sales, dramatically improving profitability. This represents a fundamental business model transformation from one-time sales to recurring subscription revenue.",
    difficulty: "medium"
  },
  {
    id: 3,
    category: "Technology",
    question: "What company did John Deere acquire in 2017 for $305 million, and what breakthrough capabilities did it bring?",
    answer: "Blue River Technologies.\n\nBrought machine learning and AI capabilities for machine vision that could identify individual plants from weeds in real-time. This enabled plant-level herbicide application (vs. field-level), a transformational leap promising major cost savings and environmental benefits.",
    difficulty: "medium"
  },
  {
    id: 4,
    category: "Market",
    question: "What percentage of U.S. farmers currently use precision agriculture management software, and what are the major adoption barriers?",
    answer: "Approximately 25%, with only 3% expressing interest in near-term adoption.\n\nMajor barriers:\n• High equipment costs\n• Unclear ROI\n• Low willingness to pay\n• Steep profit expectations (~3X)\n• Age demographics (avg. 58 years)",
    difficulty: "easy"
  },
  {
    id: 5,
    category: "Competition",
    question: "Name three types of competitive threats John Deere faces in precision agriculture and provide examples.",
    answer: "1. Traditional competitors (CNH Industrial, AGCO) - Focus on retrofitting strategies\n2. Disruptive startups (BlueWhite, Sabanto) - Offering lower-cost alternatives at ~1/5 Deere's price\n3. Tech giants (Amazon AWS, Google) - Building data platforms with AI capabilities",
    difficulty: "hard"
  },
  {
    id: 6,
    category: "Challenges",
    question: "What is the 'right to repair' issue, and why is it strategically significant for John Deere?",
    answer: "Farmers complain that proprietary software/hardware makes equipment repairable only by Deere technicians, causing:\n• Long wait times\n• High costs\n• Lost productivity\n\nStrategic significance: Drives farmers to buy older, simpler tractors, undermining adoption of advanced technology and threatening Deere's digital transformation strategy.",
    difficulty: "medium"
  },
  {
    id: 7,
    category: "Strategy",
    question: "What is 'precision agriculture' and how does it differ from traditional farming approaches?",
    answer: "Precision agriculture accounts for temporal and spatial variability to improve sustainability. It uses GPS, IoT sensors, AI, and data analytics to customize inputs at the plant level.\n\nKey difference: Moves from blanket field-level applications to micro-level customization, where each plant receives precisely what it needs based on real-time data.",
    difficulty: "easy"
  },
  {
    id: 8,
    category: "Technology",
    question: "Describe the key features of John Deere's Level 5 autonomous tractor and what Level 5 autonomy means.",
    answer: "Level 5 = highest autonomy level where machine performs all human functions.\n\nKey features:\n• Six pairs of stereo cameras (360° detection)\n• Neural network processing\n• GPS tracking for precision navigation\n• 36 cameras on spray booms for weed ID\n• Mobile app control (swipe right to start)\n• 24/7 autonomous operation capability",
    difficulty: "hard"
  },
  {
    id: 9,
    category: "Market",
    question: "What percentage of U.S. farms are classified as small farms, what is the average farmer's age, and why do these demographics matter?",
    answer: "Over 90% are small farms (gross income ≤$250K). Average age: 58 years.\n\nWhy it matters:\n• Small farms are price-sensitive, limiting adoption of expensive technology\n• Older demographics may resist complex digital tools\n• 90% represents huge market that premium pricing may exclude\n• Affects viability of high-tech, high-cost strategy",
    difficulty: "easy"
  },
  {
    id: 10,
    category: "Data",
    question: "Why are farmers concerned about data ownership in precision agriculture, and what are the specific risks?",
    answer: "Farmers fear losing control of valuable farm data.\n\nSpecific risks:\n• Manufacturers could share with seed companies\n• Competing farmers might access yield/soil data\n• Agribusiness could use data to raise prices\n• Loss of autonomy over operations\n\nQuote: 'There's a lot of value to that information. I'm afraid, as farmers, we are not going to be the ones reaping the benefit.'",
    difficulty: "medium"
  },
  {
    id: 11,
    category: "Financial",
    question: "How do the costs of Deere's autonomous solutions compare to competitors like Sabanto, and what strategic implications does this have?",
    answer: "Deere's solutions cost up to 5x more than alternatives.\n\nExample: Sabanto retrofits Kubota tractors for ~$100K + $2-2.5K annual subscription vs. Deere's premium new equipment approach.\n\nStrategic implications:\n• May limit market to large corporate farms\n• Excludes 90% small farm market\n• Competitors gain affordability advantage\n• Questions viability of premium-only strategy",
    difficulty: "hard"
  },
  {
    id: 12,
    category: "Benefits",
    question: "What are the tangible benefits of auto-steer technology in precision agriculture?",
    answer: "20% savings through GPS-guided control with 1cm accuracy.\n\nBenefits:\n• Reduces overlaps (double application areas)\n• Eliminates gaps (skipped areas)\n• Improves economic efficiency\n• Reduces environmental impact\n\nRequirement: Farm must use row farming to leverage this technology.",
    difficulty: "medium"
  },
  {
    id: 13,
    category: "Ecosystem",
    question: "What is MyJohnDeere.com, and how does it function as an ecosystem platform?",
    answer: "Central web interface connecting farmers with Deere and third-party services.\n\nFeatures:\n• Field data and equipment history\n• Warranty and repair information\n• Spare parts ordering\n• 184 companies connect via encrypted APIs\n• 'App Store for farmers' model\n\nEnables ecosystem orchestration while keeping Deere at the center of value creation.",
    difficulty: "medium"
  },
  {
    id: 14,
    category: "History",
    question: "What was John Deere's founding innovation in 1837, and what problem did it solve?",
    answer: "The first commercially successful self-scouring steel plow.\n\nProblem solved: Sticky Midwestern soil rendered iron plows ineffective. The steel plow could cut through and self-clean, dramatically improving farming efficiency in the region.\n\nThis innovation laid the foundation for a company that would become synonymous with agricultural machinery worldwide.",
    difficulty: "easy"
  },
  {
    id: 15,
    category: "Strategy",
    question: "What strategic dilemma does John Deere face regarding premium equipment sales vs. retrofitting, and what are the tradeoffs?",
    answer: "Premium new equipment (Deere) vs. Affordable retrofitting (AGCO, Sabanto)\n\nPremium approach:\n✓ Higher margins, especially with software (85%)\n✓ Full hardware-software integration\n✗ High capital costs limit adoption\n✗ Excludes 90% small farm market\n\nRetrofit approach:\n✓ Accessibility and market penetration\n✓ Lower customer risk\n✗ Lower margins\n✗ Partial functionality\n\nStrategic question: Maximize margins or market share?",
    difficulty: "hard"
  }
];
