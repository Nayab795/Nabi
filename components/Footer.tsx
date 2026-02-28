
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-brand-accent1/10 bg-white/20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-brand-muted font-bold">
          © {new Date().getFullYear()} <span className="text-brand-accent1">Nayab</span> — All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-sm font-black text-brand-light uppercase tracking-widest">
          <span>Urdu</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent1"></div>
          <span>English</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent1"></div>
          <span>Punjabi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
