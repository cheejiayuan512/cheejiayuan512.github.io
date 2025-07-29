import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AchievementsPage from './pages/AchievementsPage';
import CoachingExperiencePage from './pages/CoachingExperiencePage';
import GalleryPage from './pages/GalleryPage';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <main style={{ minHeight: '80vh' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/coaching" element={<CoachingExperiencePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
