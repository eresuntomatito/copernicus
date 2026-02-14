import { motion } from 'framer-motion';
import { Brain, Workflow, Lightbulb, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { analysisContent } from '../data/analysisContent';
import { useState } from 'react';

const AnalysisPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getSectionIcon = (title) => {
    if (title.includes('Activities')) return <Brain className="w-5 h-5" />;
    if (title.includes('Challenges')) return <Workflow className="w-5 h-5" />;
    if (title.includes('Discussion')) return <Lightbulb className="w-5 h-5" />;
    return <BookOpen className="w-5 h-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto"
    >
      {/* Header */}
      <div className="card mb-8 bg-gradient-to-r from-secondary/10 to-primary/10">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          {analysisContent.title}
        </h1>
        <p className="text-lg text-gray-600">
          {analysisContent.overview}
        </p>
      </div>

      {/* Main Sections */}
      <div className="space-y-6">
        {analysisContent.sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-xl transition-all"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  {getSectionIcon(section.title)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-secondary transition-colors">
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
                {section.subsections ? (
                  // Render subsections
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subsection.id} className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                            {subIndex + 1}
                          </div>
                          {subsection.title}
                        </h3>
                        {subsection.content.split('\n\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Render main content and key insight
                  <>
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.keyInsight && (
                      <div className="mt-8 bg-gradient-to-br from-accent/10 to-secondary/10 p-6 rounded-lg border-2 border-accent/20">
                        <div className="flex items-center gap-3 mb-4">
                          <Lightbulb className="w-6 h-6 text-accent" />
                          <h3 className="text-xl font-bold text-gray-800">
                            {section.keyInsight.title}
                          </h3>
                        </div>
                        {section.keyInsight.description.split('\n\n').map((para, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                            {para}
                          </p>
                        ))}
                        <div className="mt-4 p-4 bg-white rounded-lg">
                          <p className="text-sm text-gray-600 italic">
                            {section.keyInsight.visualization}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Implications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 grid md:grid-cols-2 gap-6"
      >
        {/* Theoretical Implications */}
        <div className="card bg-secondary/5">
          <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Theoretical Implications
          </h3>
          <ul className="space-y-2">
            {analysisContent.implications.theoretical.map((item, index) => (
              <li key={index} className="flex gap-2 text-sm text-gray-700">
                <span className="text-secondary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practical Implications */}
        <div className="card bg-primary/5">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Workflow className="w-5 h-5" />
            Practical Guidance
          </h3>
          <ul className="space-y-2">
            {analysisContent.implications.practical.map((item, index) => (
              <li key={index} className="flex gap-2 text-sm text-gray-700">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Expand All Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            const allExpanded = analysisContent.sections.every(
              section => expandedSections[section.id]
            );
            const newState = {};
            analysisContent.sections.forEach(section => {
              newState[section.id] = !allExpanded;
            });
            setExpandedSections(newState);
          }}
          className="btn-primary"
        >
          {analysisContent.sections.every(section => expandedSections[section.id])
            ? 'Collapse All'
            : 'Expand All'}
        </button>
      </div>
    </motion.div>
  );
};

export default AnalysisPage;
