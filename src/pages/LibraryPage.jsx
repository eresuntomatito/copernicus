import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Briefcase, 
  Clock, 
  Tag,
  BarChart3,
  X,
  GraduationCap,
  TrendingUp
} from 'lucide-react';
import { 
  getAllContent, 
  getAllCategories, 
  getAllTags, 
  filterContent 
} from '../data/contentRegistry';

const LibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = getAllCategories();
  const allTags = getAllTags();

  // Filter content based on selected criteria
  const filteredContent = useMemo(() => {
    return filterContent({
      type: selectedType === 'all' ? null : selectedType,
      category: selectedCategory === 'all' ? null : selectedCategory,
      difficulty: selectedDifficulty === 'all' ? null : selectedDifficulty,
      tags: selectedTags.length > 0 ? selectedTags : null,
      query: searchQuery
    });
  }, [searchQuery, selectedType, selectedCategory, selectedDifficulty, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedTags([]);
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedType !== 'all' || 
    selectedCategory !== 'all' || 
    selectedDifficulty !== 'all' || 
    selectedTags.length > 0;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-300';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Innovation': return TrendingUp;
      case 'Strategy': return BarChart3;
      case 'Operations': return Briefcase;
      default: return GraduationCap;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Content Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore interactive papers and case studies designed for deep learning and engagement
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search papers, cases, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg transition-all"
            />
          </div>
        </motion.div>

        {/* Filter Toggle and Clear */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-all"
          >
            <Filter size={18} />
            <span className="font-medium">Filters</span>
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-6 py-3 bg-red-50 border-2 border-red-200 rounded-lg hover:bg-red-100 transition-all text-red-700"
            >
              <X size={18} />
              <span className="font-medium">Clear All</span>
            </button>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Type</label>
                <div className="space-y-2">
                  {['all', 'case', 'paper'].map(type => (
                    <label key={type} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="mr-2"
                      />
                      <span className="capitalize">{type === 'all' ? 'All Types' : `${type}s`}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Tags Filter */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Tags</label>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        <div className="text-center mb-6 text-gray-600">
          <span className="font-semibold text-lg">{filteredContent.length}</span> {filteredContent.length === 1 ? 'item' : 'items'} found
        </div>

        {/* Content Grid */}
        {filteredContent.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-500">No content matches your filters</p>
            <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item, index) => {
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={item.path}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 hover:scale-105 hover:-translate-y-1">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
                        <div className="flex items-start justify-between mb-4">
                          {item.type === 'case' ? (
                            <Briefcase size={32} />
                          ) : (
                            <BookOpen size={32} />
                          )}
                          <CategoryIcon size={24} className="opacity-80" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{item.subtitle}</p>
                      </div>

                      {/* Body */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                          {item.description}
                        </p>

                        {/* Meta Info */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock size={16} />
                            <span>{item.estimatedTime}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-300">
                              {item.category}
                            </span>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs flex items-center gap-1">
                                <Tag size={12} />
                                {tag}
                              </span>
                            ))}
                            {item.tags.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                +{item.tags.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Stats */}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-200 text-xs text-gray-500">
                            <span>{item.sectionCount} sections</span>
                            {item.hasFlashcards && (
                              <span>{item.flashcardCount} flashcards</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
