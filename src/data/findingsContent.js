export const findingsContent = {
  title: "Findings",
  overview: "Using the Gioia methodology, five aggregate dimensions were identified from 298 first-order codes and 17 second-order themes across nine interviews with entrepreneurial design thinkers.",
  
  aggregateDimensions: [
    {
      id: "accelerator",
      title: "AI as an Accelerator and Scaler",
      icon: "Zap",
      color: "primary",
      description: "A clear finding across all stages of the DT process was the acceleration brought about by AI, as well as an expansion of the scale and scope of work in each stage.",
      themes: [
        {
          title: "Accelerating research & data analysis (Empathize / Define)",
          content: `Before AI was introduced, this stage often required extensive manual effort. Now, the same tasks can be performed more efficiently. Interviewees described how AI expedites research through rapid summarization, document analysis, and data scraping. It also offers novel ways to scale user understanding.`,
          quotes: [
            {
              text: "Before, I think it took me two weeks to interview, let's say, 10 people. Now, in one day, I can get 100 or 150 interviews",
              participant: "Sofia"
            },
            {
              text: "You can go through tens of thousands of data points within minutes",
              participant: "Oliver"
            },
            {
              text: "Deep research capabilities [in] the whole LLMs [...][are] definitely a game changer",
              participant: "Frank"
            }
          ]
        },
        {
          title: "Faster and broader ideation",
          content: `Increased speed and scale during ideation emerged as another second-order theme. Venture builders can bring many more ideas to life in a much shorter time and quickly validate them, increasing the scale and scope of ideas that go through.`,
          quotes: [
            {
              text: "We use a prompt chain as an ideation tool that speeds up the whole ideation process",
              participant: "Frank"
            },
            {
              text: "It is mostly increasing speed and efficiency right now",
              participant: "Sofia"
            }
          ]
        },
        {
          title: "Hyper-rapid prototyping & expanded capabilities",
          content: `The impact of AI has been significant in the prototyping stage of DT. Prototyping has seen significant improvements in terms of speed and costs. The speed has increased, and the necessary resources have decreased.`,
          quotes: [
            {
              text: "The development process is so much quicker and cheaper... a product in two months at a cost that was previously close to 200.000€, and now he builds it himself in two weeks with maybe a software cost of 200€",
              participant: "Daniel"
            },
            {
              text: "Development times being reduced to a quarter of what it was",
              participant: "Martin"
            },
            {
              text: "70% of the coding work is done by AI",
              participant: "Frank"
            },
            {
              text: "A project that we sold took five months and now it's a two month project",
              participant: "Sofia"
            }
          ]
        },
        {
          title: "Accelerated testing & MVP-based validation",
          content: `Tests are now conducted using minimal viable products that can be quickly produced during prototyping and provide better test results through the use of higher-quality prototypes.`,
          quotes: [
            {
              text: "You get so much better insights if you show them the product that you are actually talking about rather than just philosophizing about something and them having to guess how your product looks and how it potentially works",
              participant: "Frank"
            },
            {
              text: "Build products in two weeks, then drop them onto the market and try to sell it. Because the best validation you can get is with the product",
              participant: "Johan"
            }
          ]
        }
      ]
    },
    {
      id: "creativity",
      title: "Impact on Creativity",
      icon: "Lightbulb",
      color: "secondary",
      description: "The question of AI's ability to think creatively and 'outside the box' emerged primarily in discussions about the Ideation Stage, revealing two distinct perspectives.",
      themes: [
        {
          title: "Idea inspiration & diversity",
          content: `AI leads to idea diversity and serves as an inspirational tool. Participants described AI as a powerful tool for broadening thinking and generating unexpected suggestions.`,
          quotes: [
            {
              text: "Choose the opposing side and give me three ideas from that perspective. What options am I missing?",
              participant: "Martin"
            },
            {
              text: "It makes you think about things you did not think about... if you prompt correctly, it can really help",
              participant: "Sofia"
            },
            {
              text: "I like when I have kind of an idea and this idea generation with these tools helps a lot",
              participant: "Johan"
            }
          ]
        },
        {
          title: "Limited novelty & creativity",
          content: `Despite serving as inspiration, several interviewees voiced criticism regarding AI's actual creative capabilities, emphasizing a lack of novelty with AI only generating obvious and surface-level suggestions.`,
          quotes: [
            {
              text: "For generating business ideas its very bad... not very good in that",
              participant: "Daniel"
            },
            {
              text: "AI tends to always generate similar ideas",
              participant: "Sofia"
            },
            {
              text: "Our own brains are a lot better in finding a real solution to a real problem than the AI is",
              participant: "Martin"
            }
          ]
        }
      ]
    },
    {
      id: "trust",
      title: "Trust, Quality and Oversight",
      icon: "Shield",
      color: "accent",
      description: "Although all interviewees recognize the value of AI-generated output, they consistently emphasize the need for caution when working with AI, highlighting the importance of human judgment and evaluation.",
      themes: [
        {
          title: "Human-in-the-loop",
          content: `Decision-making remains in human hands. AI output alone cannot be relied on and must be verified by humans. Real human input is crucial, especially during the testing stage.`,
          quotes: [
            {
              text: "I'm making the call… Everything that is being output by AI is human approved",
              participant: "Oliver"
            },
            {
              text: "We still talk to real people and double check with them",
              participant: "Frank"
            },
            {
              text: "You need to test with humans... use AI to synthesize test results, not replace real user interaction",
              participant: "Sofia"
            }
          ]
        },
        {
          title: "Human technical oversight",
          content: `The need for human oversight was especially evident during the prototyping stage. Although AI makes it easy to generate a quick prototype, technical knowledge is still needed to refine the product.`,
          quotes: [
            {
              text: "Some sort of technical knowledge [...] to go into the code and program it further",
              participant: "Frank"
            },
            {
              text: "The actual code that AI writes is oftentimes breaking more than it is not",
              participant: "Oliver"
            },
            {
              text: "You still need proper coders",
              participant: "Viktor"
            }
          ]
        },
        {
          title: "Trust, reliability and transparency concerns",
          content: `The need for oversight stems from a lack of trust and need for reliability in AI outputs. These concerns are particularly evident in decision-making.`,
          quotes: [
            {
              text: "I trust it for 0% of any decision. I don't think AI will ever make business decisions",
              participant: "Martin"
            },
            {
              text: "If I start brainstorming, I trust the ideas quite a bit, but if it starts evaluating the idea: [Then I wonder] what are you evaluating it based on?",
              participant: "Frank"
            },
            {
              text: "You always need to be very cautious and need to understand what the AI does, because you can't trust an answer most of the time",
              participant: "Johan"
            }
          ]
        }
      ]
    },
    {
      id: "adaptation",
      title: "Entrepreneurial Adaption to AI Complexity",
      icon: "Settings",
      color: "success",
      description: "Entrepreneurship today faces a rapidly evolving AI landscape that demands both technical adaptability and strategic implementation.",
      themes: [
        {
          title: "Learning curve to effective AI integration",
          content: `Entrepreneurs often expressed a sense of being overwhelmed by the pace at which tools and capabilities evolve. Learning AI is an experimental, hands-on journey where trial and error is essential.`,
          quotes: [
            {
              text: "The difficulty is you're constantly having to learn something new every five minutes because someone has launched another tool",
              participant: "Erik"
            },
            {
              text: "You need to play around and learn... If you don't, you're going to be left behind",
              participant: "Sofia"
            }
          ]
        },
        {
          title: "Overloaded yet underused AI tool landscape",
          content: `Entrepreneurs are surrounded by a plethora of tools that promise solutions, yet meaningful use remains difficult for many. Despite the abundance of affordable tools, few users get the most out of them.`,
          quotes: [
            {
              text: "Everyone says they use it but… when it comes to doing it they don't really know",
              participant: "Martin"
            },
            {
              text: "A very much wild-west world now… Everyone still tries to understand what the limits are",
              participant: "Daniel"
            }
          ]
        },
        {
          title: "Customized AI-driven workflows",
          content: `Rather than relying on existing solutions alone, entrepreneurs develop tailored prompt chains, custom GPTs, or combine different tools to meet specific needs.`,
          quotes: [
            {
              text: "I have a custom GPT built for this… I just throw in the thing and then it automatically analyzes exactly how I want it",
              participant: "Daniel"
            },
            {
              text: "We use ChatGPT or other generative AI services to give us good prompts that I then use in Lovable",
              participant: "Viktor"
            },
            {
              text: "If you don't put in good data, you'll get a bad outcome",
              participant: "Sofia"
            }
          ]
        }
      ]
    },
    {
      id: "impact",
      title: "Micro and Macro Impact",
      icon: "TrendingUp",
      color: "primary",
      description: "Interviewees commented on their personal reflections on the impact of AI at the various stages of the DT process in entrepreneurship.",
      themes: [
        {
          title: "Intensified competitive pressure",
          content: `The accessibility of AI at various stages sets a higher standard. More people feel comfortable trying things with available AI tools, leading to more startups and increased competition.`,
          quotes: [
            {
              text: "I think there is more competition because it's become much easier to generate ideas. More people will feel comfortable trying things with all the available AI tools",
              participant: "Viktor"
            },
            {
              text: "A little bit more stressed because now the competition is doing nearly the same as we do in regard to AI",
              participant: "Martin"
            },
            {
              text: "AI doesn't help me be competitive because all my competitors are doing the same",
              participant: "Sofia"
            }
          ]
        },
        {
          title: "Evolution of entrepreneurial ventures",
          content: `The restructuring of processes, the democratization of capabilities, and increased competition cause entrepreneurs to adapt their skill sets and business structures.`,
          quotes: [
            {
              text: "Implementing AI as much as possible and wherever possible",
              participant: "Frank"
            },
            {
              text: "In a very close future (...) every company is creating their own AI",
              participant: "Sofia"
            },
            {
              text: "Make the teams much smaller",
              participant: "Johan"
            }
          ]
        },
        {
          title: "Empowerment & productivity gains",
          content: `While acknowledging immense empowerment and productivity gains, entrepreneurs also recognize feelings of dependency.`,
          quotes: [
            {
              text: "Our income has gone up probably 50% and I would lay that at the feet of AI... I am empowered",
              participant: "Erik"
            },
            {
              text: "I don't think I have become dependent on it, but I think I don't want to get rid of it, because it helps me stay so much more efficient",
              participant: "Johan"
            },
            {
              text: "I feel empowered because I can get quick answers, quick results in a very fast stimulating way",
              participant: "Sofia"
            }
          ]
        },
        {
          title: "Dependency, insecurity & stress",
          content: `The increased stress caused by sped up processes becomes evident. Entrepreneurs feel they're always behind, trying to catch up with the speed at which AI moves.`,
          quotes: [
            {
              text: "It doesn't make my job easier to be fair. It should make my job easier but somehow: no. Because you go so fast that you are still super busy at the end of the day",
              participant: "Sofia"
            },
            {
              text: "I'm always behind everything. It's super frustrating. It's going so fast, it's crazy",
              participant: "Sofia"
            },
            {
              text: "There was a very significant moment in our founding when we as a team started to use AI for almost everything… and then you become very reliant",
              participant: "Oliver"
            }
          ]
        }
      ]
    }
  ],
  
  participants: [
    { id: 1, name: "Johan", gender: "M", age: "20-30", occupation: "Entrepreneur", industry: "E-commerce, consumer electronics", location: "GER", since: "2019" },
    { id: 2, name: "Martin", gender: "M", age: "20-30", occupation: "Entrepreneur", industry: "E-commerce, AI services", location: "NL", since: "2018" },
    { id: 3, name: "Frank", gender: "M", age: "20-30", occupation: "Venture Builder", industry: "Venture building", location: "GER", since: "N/A" },
    { id: 4, name: "Sofia", gender: "F", age: "20-30", occupation: "AI & Innovation Strategist", industry: "AI services, consulting", location: "BE", since: "N/A" },
    { id: 5, name: "Erik", gender: "M", age: "40-50", occupation: "Entrepreneur, Product Designer", industry: "Consultancy, education", location: "UK", since: "2017" },
    { id: 6, name: "Viktor", gender: "M", age: "20-30", occupation: "Entrepreneur", industry: "AI services", location: "SWE", since: "2025" },
    { id: 7, name: "Daniel", gender: "M", age: "20-30", occupation: "Entrepreneur & Venture Builder", industry: "Venture building, consulting", location: "POR", since: "2021" },
    { id: 8, name: "Oliver", gender: "M", age: "30-40", occupation: "Entrepreneur", industry: "Data analytics, education", location: "GER", since: "2018" },
    { id: 9, name: "Magnus", gender: "M", age: "30-40", occupation: "Entrepreneur", industry: "AI services", location: "SWE", since: "2013" }
  ]
};
