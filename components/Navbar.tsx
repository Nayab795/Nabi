
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'fas fa-house' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-briefcase' },
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-brand-accent1/10 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-accent1 to-brand-accent3 animate-dot-pulse" />
          <span className="text-xl font-black tracking-tighter group-hover:text-brand-accent1 transition-colors">Nayab</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                activeSection === link.id 
                  ? 'bg-gradient-to-br from-brand-accent1 to-brand-accent2 text-white shadow-md' 
                  : 'text-brand-muted hover:text-brand-accent1 hover:bg-brand-accent1/5'
              }`}
            >
              <i className={`${link.icon} mr-2 opacity-70`}></i>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-brand-main transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-brand-main transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-brand-main transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-brand-accent1/10 shadow-2xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${
                activeSection === link.id 
                  ? 'bg-brand-accent1/10 text-brand-accent1' 
                  : 'text-brand-muted hover:bg-slate-50'
              }`}
            >
              <i className={link.icon}></i>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
