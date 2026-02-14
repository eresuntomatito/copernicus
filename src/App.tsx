import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProgressProvider } from './context/UserProgressContext';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import ContentViewerPage from './pages/ContentViewerPage';
import IntroductionPage from './pages/IntroductionPage';
import MethodologyPage from './pages/MethodologyPage';
import FindingsPage from './pages/FindingsPage';
import AnalysisPage from './pages/AnalysisPage';
import ConclusionPage from './pages/ConclusionPage';
import JohnDeerePage from './pages/JohnDeerePage';
import './App.css';

function App() {
  return (
    <Router>
      <UserProgressProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/case/:id" element={<ContentViewerPage />} />
            <Route path="/paper/:id" element={<ContentViewerPage />} />
            
            {/* Legacy thesis routes - keeping for backward compatibility */}
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/findings" element={<FindingsPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/conclusion" element={<ConclusionPage />} />
            <Route path="/johndeere" element={<JohnDeerePage />} />
            <Route path="/stages" element={<div className="card"><h1 className="text-3xl font-bold mb-4">DT Stages Explorer</h1><p>Coming soon...</p></div>} />
            <Route path="/model" element={<div className="card"><h1 className="text-3xl font-bold mb-4">Conceptual Model</h1><p>Coming soon...</p></div>} />
          </Routes>
        </AppLayout>
      </UserProgressProvider>
    </Router>
  );
}

export default App;
