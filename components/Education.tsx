
import React from 'react';
import { Education } from '../types';

const EducationSection: React.FC = () => {
  const items: Education[] = [
    { 
      date: '2021 – 2025', 
      title: 'BS Information Technology', 
      institution: 'FG Postgraduate College, Wah Cantt', 
      details: 'Affiliated with University of the Punjab | CGPA: 3.09 / 4.00' 
    },
    { 
      date: '2019 – 2021', 
      title: 'Intermediate (ICS)', 
      institution: 'Cantt College for Girls, Wah Cantt', 
      details: 'Federal Board | Marks: 893 / 1100' 
    },
    { 
      date: '2017 – 2018', 
      title: 'Matriculation (Computer Science)', 
      institution: 'Fauji Foundation High School, Wah', 
      details: 'Rawalpindi Board | Marks: 693 / 1100' 
    }
  ];

  return (
    <section id="education" className="py-24 px-6 bg-slate-50/50">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-3xl md:text-4xl font-black mb-16 text-center">Education</h3>
        
        <div className="relative pl-8 border-l-4 border-brand-accent1/20 space-y-12 ml-4">
          {items.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Point */}
              <div className="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-white border-4 border-brand-accent1 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-brand-accent1 animate-ping"></div>
              </div>

              <div className="p-8 rounded-[2rem] bg-white border border-brand-accent1/10 shadow-lg hover:shadow-2xl transition-all">
                <span className="text-brand-accent1 font-black text-sm mb-2 block uppercase tracking-widest">{item.date}</span>
                <h4 className="text-2xl font-black mb-2">{item.title}</h4>
                <p className="text-brand-muted font-bold text-lg mb-4">{item.institution}</p>
                <p className="text-brand-muted font-medium bg-slate-50 p-4 rounded-xl border-l-4 border-brand-accent2">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
