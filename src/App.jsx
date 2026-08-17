import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOManager from './components/SEOManager';
import CustomCursor from './components/CustomCursor';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import { ProjectModal, VideoModal } from './components/Modals';

// Page Components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenEstimate = (service = null) => {
    setSelectedService(service);
    setIsEstimateOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#fcfdfd] text-[#1e293b] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
        
        {/* Dynamic SEO Meta & Title Manager */}
        <SEOManager />

        {/* Custom UPLINTIX Logo Cursor Follower */}
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar onOpenEstimate={() => handleOpenEstimate()} />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenProject={(proj) => setSelectedProject(proj)} 
                  onOpenVideo={() => setIsVideoOpen(true)}
                />
              } 
            />
            <Route path="/services" element={<ServicesPage />} />
            <Route 
              path="/work" 
              element={<WorkPage onOpenProject={(proj) => setSelectedProject(proj)} />} 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Fallback route */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenProject={(proj) => setSelectedProject(proj)} 
                  onOpenVideo={() => setIsVideoOpen(true)}
                />
              } 
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ProjectEstimatorModal
          isOpen={isEstimateOpen}
          onClose={() => setIsEstimateOpen(false)}
          initialService={selectedService}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onStartProject={() => handleOpenEstimate()}
        />

        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />

      </div>
    </Router>
  );
}
