import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain, Zap, Users, Briefcase, BookOpen, Search, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllContent } from '../data/contentRegistry';

export default function HomePage() {
  const allContent = getAllContent();
  const featuredContent = allContent.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
          <span className="text-blue-700 font-semibold text-sm">Welcome to Copernicus</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold gradient-text">
          Transform How You Learn
        </h1>
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
          Interactive papers and case studies designed to help MBA students deeply understand, analyze, and master complex business concepts
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link to="/library">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <BookOpen size={24} />
              Explore Library
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Key Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="card text-center">
          <div className="text-4xl font-bold text-primary mb-2">{allContent.length}</div>
          <div className="text-gray-600">Learning Modules</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-secondary mb-2">{allContent.filter(c => c.type === 'case').length}</div>
          <div className="text-gray-600">Case Studies</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-accent mb-2">{allContent.filter(c => c.type === 'paper').length}</div>
          <div className="text-gray-600">Academic Papers</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-success mb-2">100%</div>
          <div className="text-gray-600">Interactive</div>
        </div>
      </motion.div>

      {/* Platform Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="card bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Copernicus?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Named after the revolutionary astronomer who transformed our understanding of the universe, 
          Copernicus transforms how you engage with academic content. We convert static papers and case 
          studies into interactive learning experiences with collapsible sections, flashcard quizzes, 
          progress tracking, and rich visualizations.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Brain size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Deep Learning</h4>
              <p className="text-sm text-gray-600">Flashcards and interactive quizzes reinforce key concepts</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-600 rounded-lg">
              <TrendingUp size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Track Progress</h4>
              <p className="text-sm text-gray-600">Monitor your learning journey with detailed analytics</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-pink-600 rounded-lg">
              <Search size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Easy Discovery</h4>
              <p className="text-sm text-gray-600">Search and filter by topic, difficulty, and category</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Featured Content</h2>
          <Link to="/library" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
            View All
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <Link key={content.id} to={content.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                className="card hover:scale-105 transition-transform group h-full"
              >
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    content.type === 'case' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {content.type === 'case' ? 'Case Study' : 'Paper'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">{content.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{content.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.estimatedTime}</span>
                  <span className="flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                    <span className="font-semibold">Explore</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Legacy Thesis Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Original Research: AI as a Co-Founder
        </h2>
        <div className="card bg-gradient-to-br from-gray-50 to-blue-50 mb-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
            <span>Tobías van Oudheusden & Justus Willebrand</span>
            <span>•</span>
            <span>Master Thesis 2025</span>
            <span>•</span>
            <span>LUSEM</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Explore the foundational research that inspired this platform: How AI is transforming 
            the Design Thinking process in entrepreneurship, based on nine semi-structured interviews 
            with entrepreneurial design thinkers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/stages" className="card hover:scale-105 transition-transform group">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Zap className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">DT Stages Explorer</h3>
                <p className="text-gray-600">
                  Discover how AI transforms each of the five Design Thinking stages
                </p>
                <div className="flex items-center text-primary mt-2">
                  <span className="text-sm font-semibold">Explore stages</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/model" className="card hover:scale-105 transition-transform group">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Brain className="text-secondary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Conceptual Model</h3>
                <p className="text-gray-600">
                  Interactive visualization of human-AI collaboration dynamics
                </p>
                <div className="flex items-center text-secondary mt-2">
                  <span className="text-sm font-semibold">View model</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/findings" className="card hover:scale-105 transition-transform group">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Sparkles className="text-accent" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Key Findings</h3>
                <p className="text-gray-600">
                  Five aggregate dimensions discovered through qualitative analysis
                </p>
                <div className="flex items-center text-accent mt-2">
                  <span className="text-sm font-semibold">Read findings</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/analysis" className="card hover:scale-105 transition-transform group">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-success/10 rounded-lg group-hover:bg-success/20 transition-colors">
                <Users className="text-success" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Analysis & Discussion</h3>
                <p className="text-gray-600">
                  Theoretical implications and practical strategies for AI integration
                </p>
                <div className="flex items-center text-success mt-2">
                  <span className="text-sm font-semibold">Explore analysis</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
