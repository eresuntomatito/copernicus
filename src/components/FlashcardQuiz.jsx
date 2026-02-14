import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Check, X, ChevronLeft, ChevronRight, Award, Sparkles } from 'lucide-react';

const FlashcardQuiz = ({ flashcards, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState(new Set());
  const [needsReview, setNeedsReview] = useState(new Set());
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCelebration, setShowCelebration] = useState(false);

  // Handle case where no flashcards are provided
  if (!flashcards || flashcards.length === 0) {
    return null;
  }

  const categories = ['all', ...new Set(flashcards.map(card => card.category))];
  
  const filteredCards = filterCategory === 'all' 
    ? flashcards 
    : flashcards.filter(card => card.category === filterCategory);

  const currentCard = filteredCards[currentIndex];
  const progress = ((masteredCards.size) / flashcards.length) * 100;

  useEffect(() => {
    if (masteredCards.size === flashcards.length && masteredCards.size > 0) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 5000);
    }
  }, [masteredCards.size, flashcards.length]);

  const handleFlip = () => setFlipped(!flipped);

  const handleMastered = () => {
    const newMastered = new Set(masteredCards);
    newMastered.add(currentCard.id);
    setMasteredCards(newMastered);
    
    const newNeedsReview = new Set(needsReview);
    newNeedsReview.delete(currentCard.id);
    setNeedsReview(newNeedsReview);
    
    nextCard();
  };

  const handleNeedsReview = () => {
    const newNeedsReview = new Set(needsReview);
    newNeedsReview.add(currentCard.id);
    setNeedsReview(newNeedsReview);
    
    const newMastered = new Set(masteredCards);
    newMastered.delete(currentCard.id);
    setMasteredCards(newMastered);
    
    nextCard();
  };

  const nextCard = () => {
    setFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevCard = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const resetProgress = () => {
    setMasteredCards(new Set());
    setNeedsReview(new Set());
    setCurrentIndex(0);
    setFlipped(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Strategy: 'bg-blue-100 text-blue-700',
      Financial: 'bg-green-100 text-green-700',
      Technology: 'bg-purple-100 text-purple-700',
      Market: 'bg-orange-100 text-orange-700',
      Competition: 'bg-red-100 text-red-700',
      Challenges: 'bg-yellow-100 text-yellow-700',
      Data: 'bg-indigo-100 text-indigo-700',
      Benefits: 'bg-emerald-100 text-emerald-700',
      Ecosystem: 'bg-teal-100 text-teal-700',
      History: 'bg-amber-100 text-amber-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  if (!currentCard) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">John Deere Case Flashcards</h2>
              <p className="text-green-100">Master key concepts and strategic decisions</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Close flashcards"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress: {masteredCards.size} / {flashcards.length} mastered</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-white h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setFilterCategory(category);
                  setCurrentIndex(0);
                  setFlipped(false);
                }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === category
                    ? 'bg-white text-green-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Flashcard */}
        <div className="p-8">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(currentCard.difficulty)}`}>
                {currentCard.difficulty}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(currentCard.category)}`}>
                {currentCard.category}
              </span>
            </div>
            <span className="text-gray-500 font-medium">
              Card {currentIndex + 1} of {filteredCards.length}
            </span>
          </div>

          {/* Card Flip Animation */}
          <div 
            className="relative h-96 mb-6 cursor-pointer perspective-1000"
            onClick={handleFlip}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={flipped ? 'answer' : 'question'}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center ${
                  flipped 
                    ? 'bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300' 
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300'
                }`}
              >
                <div className="max-w-2xl overflow-y-auto max-h-full">
                  {!flipped ? (
                    <>
                      <div className="text-5xl mb-4">❓</div>
                      <p className="text-xl font-semibold text-gray-800 leading-relaxed">
                        {currentCard.question}
                      </p>
                      <p className="text-sm text-gray-500 mt-6">Click anywhere to reveal answer</p>
                    </>
                  ) : (
                    <>
                      <div className="text-5xl mb-4">✅</div>
                      <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line text-left">
                        {currentCard.answer}
                      </p>
                      <p className="text-sm text-gray-500 mt-6">Click to flip back</p>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Status Indicators */}
          <div className="flex gap-4 justify-center mb-6">
            {masteredCards.has(currentCard.id) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 text-green-600 font-medium bg-green-50 px-4 py-2 rounded-full"
              >
                <Check className="w-5 h-5" />
                Mastered
              </motion.div>
            )}
            {needsReview.has(currentCard.id) && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 text-orange-600 font-medium bg-orange-50 px-4 py-2 rounded-full"
              >
                <RotateCcw className="w-5 h-5" />
                Needs Review
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          {flipped && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 justify-center mb-6"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNeedsReview();
                }}
                className="flex items-center gap-2 px-6 py-3 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors font-medium shadow-sm"
              >
                <RotateCcw className="w-5 h-5" />
                Needs Review
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleMastered();
                }}
                className="flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium shadow-sm"
              >
                <Check className="w-5 h-5" />
                Mastered
              </button>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevCard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              onClick={resetProgress}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Progress
            </button>

            <button
              onClick={nextCard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
              <div className="text-2xl font-bold text-green-700">{masteredCards.size}</div>
              <div className="text-sm text-gray-600">Mastered</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-100">
              <div className="text-2xl font-bold text-orange-700">{needsReview.size}</div>
              <div className="text-sm text-gray-600">Need Review</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
              <div className="text-2xl font-bold text-blue-700">
                {flashcards.length - masteredCards.size - needsReview.size}
              </div>
              <div className="text-sm text-gray-600">Not Started</div>
            </div>
          </div>

          {/* Completion Message */}
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-xl text-center shadow-xl"
            >
              <div className="flex justify-center mb-3">
                <Award className="w-16 h-16 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold mb-2">🎉 Congratulations! 🎉</h3>
              <p className="text-lg">You've mastered all John Deere case flashcards!</p>
              <p className="text-green-100 text-sm mt-2">
                You're now ready to analyze strategic transformation cases like a pro!
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FlashcardQuiz;
