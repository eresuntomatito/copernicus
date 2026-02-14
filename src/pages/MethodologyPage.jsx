import { motion } from 'framer-motion';
import { Users, FileText, Shield, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { methodologyContent } from '../data/methodologyContent';
import { useState } from 'react';

const MethodologyPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getSectionIcon = (title) => {
    if (title.includes('Design')) return <FileText className="w-5 h-5" />;
    if (title.includes('Limitations')) return <Shield className="w-5 h-5" />;
    if (title.includes('Ethical')) return <CheckCircle className="w-5 h-5" />;
    if (title.includes('Trustworthiness')) return <CheckCircle className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="card mb-8 bg-gradient-to-r from-secondary/10 to-accent/10">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          {methodologyContent.title}
        </h1>
        <p className="text-lg text-gray-600">
          {methodologyContent.overview}
        </p>
      </div>

      {/* Research Overview Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="card bg-primary/5 border-l-4 border-primary"
        >
          <Users className="w-8 h-8 text-primary mb-2" />
          <p className="text-2xl font-bold text-gray-800">{methodologyContent.participants.total}</p>
          <p className="text-sm text-gray-600">Participants</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="card bg-secondary/5 border-l-4 border-secondary"
        >
          <FileText className="w-8 h-8 text-secondary mb-2" />
          <p className="text-lg font-bold text-gray-800">Qualitative</p>
          <p className="text-sm text-gray-600">Research Approach</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="card bg-accent/5 border-l-4 border-accent"
        >
          <CheckCircle className="w-8 h-8 text-accent mb-2" />
          <p className="text-lg font-bold text-gray-800">Gioia Method</p>
          <p className="text-sm text-gray-600">Data Analysis</p>
        </motion.div>
      </div>

      {/* Main Sections */}
      <div className="space-y-4">
        {methodologyContent.sections.map((section, index) => (
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
                      <div key={subsection.id} className="pl-4 border-l-2 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
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
                  // Render regular content
                  section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expand All Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            const allExpanded = methodologyContent.sections.every(
              section => expandedSections[section.id]
            );
            const newState = {};
            methodologyContent.sections.forEach(section => {
              newState[section.id] = !allExpanded;
            });
            setExpandedSections(newState);
          }}
          className="btn-primary"
        >
          {methodologyContent.sections.every(section => expandedSections[section.id])
            ? 'Collapse All'
            : 'Expand All'}
        </button>
      </div>
    </motion.div>
  );
};

export default MethodologyPage;
