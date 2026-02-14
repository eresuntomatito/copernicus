import { motion } from 'framer-motion';
import { Book, Target, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { introductionContent } from '../data/introductionContent';
import { useState } from 'react';

const IntroductionPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getSectionIcon = (title) => {
    if (title.includes('Overview')) return <Book className="w-5 h-5" />;
    if (title.includes('Purpose')) return <Target className="w-5 h-5" />;
    if (title.includes('Question')) return <HelpCircle className="w-5 h-5" />;
    return <Book className="w-5 h-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="card mb-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          {introductionContent.title}
        </h1>
        <p className="text-lg text-gray-600">
          Exploring AI's transformative role in entrepreneurial Design Thinking
        </p>
      </div>

      {/* Key Quotes */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {introductionContent.keyQuotes.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="card bg-accent/5 border-l-4 border-accent"
          >
            <p className="text-sm font-semibold text-accent mb-2">{quote.context}</p>
            <p className="italic text-gray-700 mb-2">"{quote.text}"</p>
            <p className="text-xs text-gray-500">— {quote.author}</p>
          </motion.div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="space-y-4">
        {introductionContent.sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-lg transition-all"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {getSectionIcon(section.title)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                </div>
              </div>
              {expandedSections[section.id] ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {/* Section Content */}
            <motion.div
              initial={false}
              animate={{
                height: expandedSections[section.id] ? 'auto' : 0,
                opacity: expandedSections[section.id] ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-200">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expand All Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            const allExpanded = introductionContent.sections.every(
              section => expandedSections[section.id]
            );
            const newState = {};
            introductionContent.sections.forEach(section => {
              newState[section.id] = !allExpanded;
            });
            setExpandedSections(newState);
          }}
          className="btn-primary"
        >
          {introductionContent.sections.every(section => expandedSections[section.id])
            ? 'Collapse All'
            : 'Expand All'}
        </button>
      </div>
    </motion.div>
  );
};

export default IntroductionPage;
