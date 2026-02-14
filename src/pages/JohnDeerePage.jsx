import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BookOpen, History, Target, Cpu, AlertTriangle, Users, GitBranch,
  ChevronDown, ChevronUp, TrendingUp, Award, ChevronRight
} from 'lucide-react';
import { johnDeereContent, johnDeereFlashcards } from '../data/cases/johnDeereContent';
import { useUserProgress } from '../context/UserProgressContext';
import FlashcardQuiz from '../components/FlashcardQuiz';

const iconMap = {
  History, Target, Cpu, AlertTriangle, Users, GitBranch
};

const JohnDeerePage = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [showFlashcards, setShowFlashcards] = useState(false);
  const { markSectionRead } = useUserProgress();

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
    markSectionRead('johndeere-' + sectionId);
  };

  const expandAll = () => {
    const allExpanded = {};
    johnDeereContent.sections.forEach(section => {
      allExpanded[section.id] = true;
    });
    setExpandedSections(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto"
    >
      {/* Hero Header */}
      <div className="card mb-8 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="flex items-start gap-6">
          <div className="p-4 bg-green-600 rounded-xl">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2">{johnDeereContent.caseNumber}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {johnDeereContent.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">{johnDeereContent.subtitle}</p>
            <div className="text-sm text-gray-600">
              <p className="font-medium">{johnDeereContent.authors}</p>
              <p>{johnDeereContent.institution}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card mb-8 bg-gradient-to-br from-green-500/5 to-blue-500/5"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-green-600" />
          {johnDeereContent.executiveSummary.title}
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          {johnDeereContent.executiveSummary.overview}
        </p>
        
        <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-6">
          <p className="italic text-gray-700 mb-2 text-lg">
            "{johnDeereContent.executiveSummary.keyQuote}"
          </p>
          <p className="text-sm font-semibold text-accent">
            — {johnDeereContent.executiveSummary.quoteAuthor}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {johnDeereContent.executiveSummary.keyPoints.map((point, index) => (
            <div key={index} className="flex gap-2 items-start bg-white p-3 rounded-lg shadow-sm">
              <ChevronRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Expand/Collapse All Button */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={expandAll}
          className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          Expand All Sections
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Collapse All
        </button>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-6 mb-8">
        {johnDeereContent.sections.map((section, index) => {
          const IconComponent = iconMap[section.icon];
          
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="card hover:shadow-xl transition-all"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {section.title}
                  </h2>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronUp className="w-6 h-6 text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

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
                  {/* Stats if available */}
                  {section.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {section.stats.map((stat, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg text-center border border-green-100">
                          <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                          <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-4">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                        {item.subtitle && (
                          <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            {item.subtitle}
                          </h3>
                        )}
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Initiatives */}
                  {section.initiatives && (
                    <div className="mt-6">
                      <h3 className="font-bold text-gray-800 mb-3">Key Initiatives & Programs</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {section.initiatives.map((initiative, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{initiative}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Acquisitions */}
                  {section.acquisitions && (
                    <div className="mt-6">
                      <h3 className="font-bold text-gray-800 mb-3">Strategic Acquisitions Timeline</h3>
                      <div className="space-y-3">
                        {section.acquisitions.map((acq, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-100">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="font-bold text-lg text-purple-900">{acq.company}</span>
                                <span className="text-sm text-gray-600 ml-3 bg-white px-2 py-1 rounded">
                                  {acq.year}
                                </span>
                              </div>
                              <span className="text-sm font-semibold text-purple-700 bg-white px-3 py-1 rounded-full">
                                {acq.amount}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 mb-2"><strong>Focus:</strong> {acq.focus}</p>
                            <p className="text-sm text-gray-600 italic">{acq.rationale}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Concerns */}
                  {section.concerns && (
                    <div className="mt-6">
                      <h3 className="font-bold text-gray-800 mb-3">Key Concerns & Issues</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {section.concerns.map((concern, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-red-50 p-3 rounded-lg border border-red-100">
                            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{concern}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ecosystem */}
                  {section.ecosystem && (
                    <div className="mt-6">
                      <h3 className="font-bold text-gray-800 mb-3">Ecosystem Players</h3>
                      <div className="grid md:grid-cols-3 gap-2">
                        {section.ecosystem.map((item, idx) => (
                          <div key={idx} className="bg-green-50 p-3 rounded-lg text-sm text-gray-700 text-center border border-green-100">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card mb-8 bg-gradient-to-r from-green-50 to-emerald-50"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          {johnDeereContent.keyMetrics.title}
        </h2>
        <p className="text-gray-600 mb-6">{johnDeereContent.keyMetrics.description}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {johnDeereContent.keyMetrics.metrics.map((metric, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-green-100">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-800">{metric.category}</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  {metric.benefit}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Discussion Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card bg-gradient-to-br from-blue-50 to-indigo-50 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-600" />
          Strategic Discussion Questions
        </h2>
        <p className="text-gray-600 mb-6">Critical questions for case analysis and classroom discussion</p>
        <div className="space-y-3">
          {johnDeereContent.discussionQuestions.map((question, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex gap-3 border border-blue-100">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <p className="text-gray-700 flex-1 leading-relaxed">{question}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Flashcards CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-8"
      >
        <div className="card bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="flex flex-col items-center">
            <Award className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Test Your Knowledge</h3>
            <p className="text-green-50 mb-6 max-w-2xl">
              Master the key concepts from the John Deere case with interactive flashcards. 
              Track your progress across 15 questions covering strategy, technology, competition, and more.
            </p>
            <button
              onClick={() => setShowFlashcards(true)}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              <Award className="w-5 h-5" />
              Start Flashcard Quiz
            </button>
          </div>
        </div>
      </motion.div>

      {/* Flashcards Modal */}
      {showFlashcards && (
        <FlashcardQuiz 
          flashcards={johnDeereFlashcards}
          onClose={() => setShowFlashcards(false)} 
        />
      )}
    </motion.div>
  );
};

export default JohnDeerePage;
