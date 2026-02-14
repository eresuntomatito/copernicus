import { motion } from 'framer-motion';
import { Zap, Lightbulb, Shield, Settings, TrendingUp, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { findingsContent } from '../data/findingsContent';
import { useState } from 'react';

const iconMap = {
  Zap: Zap,
  Lightbulb: Lightbulb,
  Shield: Shield,
  Settings: Settings,
  TrendingUp: TrendingUp
};

const colorMap = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'accent',
  success: 'success'
};

const FindingsPage = () => {
  const [expandedDimensions, setExpandedDimensions] = useState({});
  const [expandedThemes, setExpandedThemes] = useState({});

  const toggleDimension = (dimensionId) => {
    setExpandedDimensions(prev => ({
      ...prev,
      [dimensionId]: !prev[dimensionId]
    }));
  };

  const toggleTheme = (dimensionId, themeIndex) => {
    const key = `${dimensionId}-${themeIndex}`;
    setExpandedThemes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="card mb-8 bg-gradient-to-r from-accent/10 to-success/10">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          {findingsContent.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {findingsContent.overview}
        </p>
        <div className="flex gap-4 text-sm">
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
            <span className="font-bold text-primary">298</span> First-Order Codes
          </div>
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
            <span className="font-bold text-secondary">17</span> Second-Order Themes
          </div>
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
            <span className="font-bold text-accent">5</span> Aggregate Dimensions
          </div>
        </div>
      </div>

      {/* Participants Overview */}
      <div className="card mb-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Study Participants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {findingsContent.participants.map((participant, index) => (
            <motion.div
              key={participant.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-primary">{participant.name}</p>
              <p className="text-xs text-gray-600">{participant.occupation}</p>
              <p className="text-xs text-gray-500">{participant.location}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aggregate Dimensions */}
      <div className="space-y-6">
        {findingsContent.aggregateDimensions.map((dimension, dimIndex) => {
          const IconComponent = iconMap[dimension.icon];
          const colorClass = colorMap[dimension.color];
          
          return (
            <motion.div
              key={dimension.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dimIndex * 0.1 }}
              className="card hover:shadow-xl transition-all"
            >
              {/* Dimension Header */}
              <button
                onClick={() => toggleDimension(dimension.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-${colorClass}/10 text-${colorClass} group-hover:bg-${colorClass} group-hover:text-white transition-colors`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold text-gray-800 group-hover:text-${colorClass} transition-colors`}>
                      {dimension.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">{dimension.description}</p>
                  </div>
                </div>
                {expandedDimensions[dimension.id] ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              {/* Dimension Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedDimensions[dimension.id] ? 'auto' : 0,
                  opacity: expandedDimensions[dimension.id] ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                  {dimension.themes.map((theme, themeIndex) => {
                    const themeKey = `${dimension.id}-${themeIndex}`;
                    return (
                      <div key={themeIndex} className="bg-gray-50 p-4 rounded-lg">
                        <button
                          onClick={() => toggleTheme(dimension.id, themeIndex)}
                          className="w-full flex items-center justify-between text-left mb-3"
                        >
                          <h3 className="text-lg font-semibold text-gray-800">
                            {theme.title}
                          </h3>
                          {expandedThemes[themeKey] ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </button>
                        
                        <p className="text-gray-700 mb-4">{theme.content}</p>

                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedThemes[themeKey] ? 'auto' : 0,
                            opacity: expandedThemes[themeKey] ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 mt-4">
                            {theme.quotes.map((quote, qIndex) => (
                              <motion.div
                                key={qIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: qIndex * 0.1 }}
                                className="bg-white p-4 rounded-lg border-l-4 border-accent shadow-sm"
                              >
                                <div className="flex gap-3">
                                  <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                  <div>
                                    <p className="text-gray-700 italic mb-2">"{quote.text}"</p>
                                    <p className="text-sm font-semibold text-primary">— {quote.participant}</p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Expand All Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            const allExpanded = findingsContent.aggregateDimensions.every(
              dim => expandedDimensions[dim.id]
            );
            const newState = {};
            findingsContent.aggregateDimensions.forEach(dim => {
              newState[dim.id] = !allExpanded;
            });
            setExpandedDimensions(newState);
          }}
          className="btn-primary"
        >
          {findingsContent.aggregateDimensions.every(dim => expandedDimensions[dim.id])
            ? 'Collapse All Dimensions'
            : 'Expand All Dimensions'}
        </button>
      </div>
    </motion.div>
  );
};

export default FindingsPage;
