import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, BookOpen, FlaskConical, BarChart3, Lightbulb, 
  CheckCircle2, Bookmark, RotateCcw, FileCheck, Briefcase, Library 
} from 'lucide-react';
import { useUserProgress } from '../context/UserProgressContext';

// Context-aware navigation - returns relevant items based on current location
const getNavigationItems = (pathname) => {
  // Base navigation always visible
  const baseNav = [
    { id: 'home', name: 'Home', path: '/', icon: Home },
    { id: 'library', name: 'Content Library', path: '/library', icon: Library },
  ];
  
  // Thesis navigation - only show on thesis-related pages
  const thesisNav = [
    { id: 'introduction', name: 'Introduction', path: '/introduction', icon: BookOpen },
    { id: 'methodology', name: 'Methodology', path: '/methodology', icon: FlaskConical },
    { id: 'findings', name: 'Findings', path: '/findings', icon: BarChart3 },
    { id: 'analysis', name: 'Analysis', path: '/analysis', icon: Lightbulb },
    { id: 'conclusion', name: 'Conclusion', path: '/conclusion', icon: FileCheck },
    { id: 'johndeere', name: 'John Deere Case', path: '/johndeere', icon: Briefcase },
    { id: 'stages', name: 'DT Stages Explorer', path: '/stages', icon: CheckCircle2 },
    { id: 'model', name: 'Conceptual Model', path: '/model', icon: Lightbulb },
  ];
  
  // Show thesis navigation on thesis pages
  const isThesisPage = [
    '/introduction', '/methodology', '/findings', '/analysis', 
    '/conclusion', '/johndeere', '/stages', '/model'
  ].some(path => pathname === path);
  
  return isThesisPage ? [...baseNav, ...thesisNav] : baseNav;
};

export default function NavigationSidebar({ onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookmarks, resetProgress, getProgress } = useUserProgress();

  const handleNavigation = (path) => {
    navigate(path);
    onNavigate?.();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Logo/Title */}
      <div className="hidden lg:block">
        <h1 className="text-2xl font-bold gradient-text mb-2">
          Copernicus
        </h1>
        <p className="text-sm text-gray-600">
          Interactive MBA Learning Platform
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">Progress</span>
          <span className="text-sm font-bold text-primary">{getProgress()}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${getProgress()}%` }}
          />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1">
        {getNavigationItems(location.pathname).map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                transition-all duration-200 text-left
                ${isActive 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'hover:bg-gray-100 text-gray-700'
                }
              `}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bookmarks */}
      {bookmarks.length > 0 && (
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2 mb-3">
            <Bookmark size={18} className="text-accent" />
            <h3 className="font-semibold text-gray-700">Bookmarks</h3>
          </div>
          <div className="space-y-1">
            {bookmarks.slice(0, 5).map((bookmark) => (
              <div key={bookmark} className="text-sm text-gray-600 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer">
                {bookmark}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reset Progress */}
      <button
        onClick={resetProgress}
        className="w-full flex items-center justify-center space-x-2 px-4 py-2 
                   border border-gray-300 rounded-lg hover:bg-gray-50 
                   transition-colors text-gray-600 text-sm"
      >
        <RotateCcw size={16} />
        <span>Reset Progress</span>
      </button>
    </div>
  );
}
