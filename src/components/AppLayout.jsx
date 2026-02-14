import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavigationSidebar from './NavigationSidebar';
import ProgressBar from './ProgressBar';

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Progress Bar */}
      <ProgressBar />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-40 mt-1">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold gradient-text">AI & Design Thinking</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="flex flex-1 pt-16 lg:pt-1">
        {/* Sidebar - Desktop sticky, Mobile drawer */}
        <aside
          className={`
            fixed lg:sticky top-16 lg:top-1 left-0 h-[calc(100vh-4rem)] lg:h-[calc(100vh-0.25rem)]
            w-80 bg-white shadow-xl lg:shadow-lg
            transform transition-transform duration-300 ease-in-out z-30
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto
          `}
        >
          <NavigationSidebar onNavigate={() => setSidebarOpen(false)} />
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
