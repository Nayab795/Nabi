
import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  onOpenModal: (url: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  const projects: Project[] = [
    {
      id: 'stylist',
      title: 'AI Virtual Stylish App',
      tag: 'Mobile • React Native',
      icon: 'fas fa-mobile-alt',
      description: 'A mobile application that helps users try outfits virtually and manage their wardrobe.',
      points: ['Wardrobe uploads & gallery', 'Authentication & image storage', 'Clean UI & smooth interactions'],
      images: [
        'https://picsum.photos/400/700?random=1',
        'https://picsum.photos/400/700?random=2',
        'https://picsum.photos/400/700?random=3',
        'https://picsum.photos/400/700?random=4'
      ]
    },
    {
      id: 'resume',
      title: 'AI Resume Analyzer',
      tag: 'Web • React • AI',
      icon: 'fas fa-brain',
      description: 'Intelligent resume analysis tool providing real-time ATS scoring and suggestions.',
      points: ['AI-powered feedback', 'ATS optimization scoring', 'Real-time dashboard'],
      images: [
        'https://picsum.photos/800/450?random=5',
        'https://picsum.photos/800/450?random=6',
        'https://picsum.photos/800/450?random=7'
      ]
    },
    {
      id: 'story',
      title: 'AI Story Generator',
      tag: 'Web • AI / NLP',
      icon: 'fas fa-book-open',
      description: 'NLP application that generates creative stories based on user-driven prompts.',
      points: ['Prompt-based generation', 'Responsive layouts', 'Real-time NLP processing'],
      images: [
        'https://picsum.photos/800/450?random=8',
        'https://picsum.photos/800/450?random=9',
        'https://picsum.photos/800/450?random=10'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-black mb-16 text-center lg:text-left">Selected Works</h3>
        
        <div className="grid lg:grid-cols-1 gap-20">
          {projects.map((project) => (
            <div key={project.id} className="grid lg:grid-cols-2 gap-12 items-center border-b border-brand-accent1/10 pb-20 last:border-0">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-1.5 rounded-xl bg-gradient-to-br from-brand-accent1 to-brand-accent2 text-white text-xs font-black uppercase tracking-wider">
                    {project.tag}
                  </div>
                </div>
                <h4 className="text-3xl font-black">{project.title}</h4>
                <p className="text-brand-muted text-lg leading-relaxed">{project.description}</p>
                
                <ul className="space-y-3">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-muted font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent1"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {project.images.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => onOpenModal(img)}
                      className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition-transform snap-center ${project.id === 'stylist' ? 'w-48 aspect-[9/16]' : 'w-72 aspect-video'}`}
                    >
                      <img src={img} alt={`${project.title} ${idx}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                        <i className="fas fa-expand text-white text-2xl"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
