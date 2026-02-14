import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  BookmarkPlus, 
  BookmarkCheck,
  Brain,
  ArrowLeft
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';
import FlashcardQuiz from '../components/FlashcardQuiz';
import { getContentById } from '../data/contentRegistry';
import { johnDeereContent, johnDeereFlashcards } from '../data/cases/johnDeereContent';
import nianticLabsContent, { nianticLabsFlashcards } from '../data/cases/nianticLabsContent';
import aiCofounderContent, { aiCofounderFlashcards } from '../data/papers/aiCofounderContent';

const ContentViewerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { markSectionRead, toggleBookmark, bookmarks } = useUserProgress();
  
  const [content, setContent] = useState(null);
  const [contentData, setContentData] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static content map - add new content imports here
  const contentMap = {
    'john-deere-ai-strategy': {
      content: johnDeereContent,
      flashcards: johnDeereFlashcards
    },
    'niantic-labs-ar-gaming': {
      content: nianticLabsContent,
      flashcards: nianticLabsFlashcards
    },
    'ai-cofounder-design-thinking': {
      content: aiCofounderContent,
      flashcards: aiCofounderFlashcards
    }
  };

  useEffect(() => {
    const loadContent = () => {
      setLoading(true);
      setError(null);
      
      try {
        // Get content metadata from registry
        const contentMeta = getContentById(id);
        
        if (!contentMeta) {
          setError('Content not found');
          setLoading(false);
          return;
        }
        
        setContent(contentMeta);
        
        // Get content data from static map
        const contentItem = contentMap[id];
        if (contentItem) {
          // Merge content with flashcards
          setContentData({
            ...contentItem.content,
            flashcards: contentItem.flashcards
          });
        } else {
          setError('Content data not found');
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading content:', err);
        setError('Failed to load content');
        setLoading(false);
      }
    };
    
    loadContent();
  }, [id]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
    
    if (!expandedSections[sectionId]) {
      markSectionRead(sectionId);
    }
  };

  const expandAll = () => {
    const allExpanded = {};
    contentData?.sections?.forEach(section => {
      allExpanded[section.id] = true;
      markSectionRead(section.id);
    });
    setExpandedSections(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSections({});
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error || !content || !contentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{error || 'Content not found'}</p>
          <button
            onClick={() => navigate('/library')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Library
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/library')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Library
        </button>

        {/* Header */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  content.type === 'case' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {content.type === 'case' ? 'Case Study' : 'Academic Paper'}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                  {content.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {contentData.title}
              </h1>
              {contentData.subtitle && (
                <p className="text-xl text-gray-600">{contentData.subtitle}</p>
              )}
            </div>
          </div>

          {/* Metadata */}
          {contentData.authors && (
            <div className="text-sm text-gray-600 mt-4 border-t pt-4">
              <p><strong>Authors:</strong> {Array.isArray(contentData.authors) ? contentData.authors.join(', ') : contentData.authors}</p>
              {contentData.institution && <p><strong>Institution:</strong> {contentData.institution}</p>}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={expandAll}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ChevronDown size={18} className="inline mr-2" />
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              <ChevronUp size={18} className="inline mr-2" />
              Collapse All
            </button>
            {content.hasFlashcards && (
              <button
                onClick={() => setShowFlashcards(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
              >
                <Brain size={18} className="inline mr-2" />
                Start Quiz
              </button>
            )}
          </div>
        </motion.div>

        {/* Executive Summary (if exists) */}
        {contentData.executiveSummary && (
          <motion.div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md p-8 mb-8 border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <p className="text-gray-700 mb-4">{contentData.executiveSummary.overview}</p>
            {contentData.executiveSummary.keyPoints && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Key Points:</h3>
                <ul className="space-y-2">
                  {contentData.executiveSummary.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Sections */}
        <div className="space-y-4">
          {contentData.sections?.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-semibold text-gray-900">{section.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {bookmarks.includes(section.id) ? (
                    <BookmarkCheck 
                      size={20} 
                      className="text-blue-600 cursor-pointer hover:text-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(section.id);
                      }}
                    />
                  ) : (
                    <BookmarkPlus 
                      size={20} 
                      className="text-gray-400 cursor-pointer hover:text-blue-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(section.id);
                      }}
                    />
                  )}
                  {expandedSections[section.id] ? (
                    <ChevronUp size={24} className="text-gray-600" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-600" />
                  )}
                </div>
              </button>

              {/* Section Content */}
              <AnimatePresence>
                {expandedSections[section.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4">
                      {Array.isArray(section.content) ? (
                        section.content.map((item, i) => (
                          <div key={i}>
                            {item.subtitle && (
                              <h4 className="font-semibold text-gray-900 mb-2">{item.subtitle}</h4>
                            )}
                            <p className="text-gray-700 leading-relaxed">{item.text || item}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                      )}

                      {/* Render special section types (stats, timeline, etc.) */}
                      {section.stats && (
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          {section.stats.map((stat, i) => (
                            <div key={i} className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                              <div className="text-sm text-gray-700">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Discussion Questions */}
        {contentData.discussionQuestions && contentData.discussionQuestions.length > 0 && (
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Discussion Questions</h2>
            <div className="space-y-4">
              {contentData.discussionQuestions.map((question, index) => (
                <div key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{question}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Flashcard Quiz Modal */}
      {showFlashcards && contentData.flashcards && (
        <FlashcardQuiz
          flashcards={contentData.flashcards}
          onClose={() => setShowFlashcards(false)}
        />
      )}
    </div>
  );
};

export default ContentViewerPage;
