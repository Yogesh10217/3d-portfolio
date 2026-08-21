import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { FooterSection } from './components/sections/FooterSection';
import { ContactModal } from './components/ui/ContactModal';
import { ProjectModal } from './components/ui/ProjectModal';
import { ProjectItem } from './types/portfolio';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased selection:bg-purple-600 selection:text-white" style={{ overflowX: 'clip' }}>
      {/* 1. Hero Section */}
      <HeroSection
        onContactClick={() => setIsContactModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Skills & Marquee Section */}
      <MarqueeSection />

      {/* 3. About & Achievements Section */}
      <AboutSection
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* 4. Experience & Education Section */}
      <ServicesSection />

      {/* 5. Projects & Architecture Section */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 6. Footer Section */}
      <FooterSection
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
