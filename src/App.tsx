import { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import StackPage from './components/StackPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const darkPages = ['stack', 'projects', 'education_career'];
    if (darkPages.includes(currentPage)) {
      document.body.style.backgroundColor = '#0f172a';
    } else {
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [currentPage]);

  const getTheme = () => {
    const darkPages = ['stack', 'projects', 'education_career'];
    return darkPages.includes(currentPage) ? 'dark' : 'light';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'stack':
        return <StackPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'education_career':
        return <ExperiencePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} theme={getTheme()} />
      {renderPage()}
      <SpeedInsights />
    </div>
  );
}

export default App;
