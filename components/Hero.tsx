
import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const roles = [
    "Web & App Developer",
    "React Native Specialist",
    "Clean UI Enthusiast"
  ];
  const typedText = useTypewriter(roles);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-accent1/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-accent3/10 rounded-full blur-[100px] animate-float-alt"></div>

      <div className="container mx-auto text-center z-10">
        <div className="inline-block px-4 py-2 rounded-2xl bg-brand-accent1/5 border border-brand-accent1/20 mb-6 animate-pulse">
          <span className="text-brand-accent1 font-bold text-sm tracking-widest uppercase">Available for Internships</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-[1.1]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent1 via-brand-accent4 to-brand-accent3">Nayab</span>
        </h1>

        <div className="h-10 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-brand-accent2 tracking-widest uppercase">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-muted leading-relaxed font-medium mb-12">
          Fresh BS IT graduate specializing in AI, mobile app development, and web solutions. 
          Expertise in React Native, Python, and Firebase.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-br from-brand-accent1 to-brand-accent2 text-white font-extrabold text-lg shadow-[0_12px_30px_rgba(59,130,246,0.35)] hover:scale-105 transition-transform">
            See Projects
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-4 rounded-2xl border-2 border-brand-accent1 text-brand-accent1 font-extrabold text-lg hover:bg-brand-accent1/5 transition-colors">
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-brand-muted text-sm font-semibold border-t border-brand-accent1/10 pt-8">
          <span className="flex items-center gap-2"><i className="fas fa-location-dot text-brand-accent1"></i> Wah / Taxila, Pakistan</span>
          <span className="flex items-center gap-2"><i className="fas fa-briefcase text-brand-accent1"></i> Junior Dev / IT Roles</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
