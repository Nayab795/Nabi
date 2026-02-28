
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationSection from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (url: string) => setModalImage(url);
  const closeModal = () => setModalImage(null);

  return (
    <div className="relative overflow-x-hidden font-sans text-brand-main selection:bg-brand-accent1 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenModal={openModal} />
        <EducationSection />
        <Contact />
      </main>

      <Footer />
      
      {modalImage && (
        <Modal imageUrl={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
