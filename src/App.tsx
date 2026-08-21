import { useState } from 'react';
import { TerminalHero } from './components/sections/TerminalHero';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { ArchitectureBlueprint } from './components/sections/ArchitectureBlueprint';
import { CodeInspectorSection } from './components/sections/CodeInspectorSection';
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
    <div className="relative w-full bg-[#08090C] text-[#D7E2EA] font-sans antialiased selection:bg-cyan-500 selection:text-black" style={{ overflowX: 'clip' }}>
      {/* 1. Terminal CLI Hero Section */}
      <TerminalHero
        onContactClick={() => setIsContactModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Technical Arsenal Ticker */}
      <MarqueeSection />

      {/* 3. Interactive Architecture Blueprint */}
      <ArchitectureBlueprint />

      {/* 4. Live Code Inspector */}
      <CodeInspectorSection />

      {/* 5. Engineering Bio & CS Fundamentals */}
      <AboutSection
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* 6. Career Track Record & Experience */}
      <ServicesSection />

      {/* 7. Flagship Engineering Projects */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 8. High-Tech Footer */}
      <FooterSection
        onContactClick={() => setIsContactModalOpen(true)}
      />

      {/* Modals */}
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
