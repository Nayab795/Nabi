
import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { icon: 'fas fa-code', title: 'Programming', description: 'Python, JavaScript, PHP, SQL' },
    { icon: 'fas fa-mobile-alt', title: 'App Development', description: 'React Native (Expo)' },
    { icon: 'fas fa-globe', title: 'Web Development', description: 'HTML, CSS, JavaScript, React JS' },
    { icon: 'fas fa-database', title: 'Databases', description: 'Firebase, MySQL, XAMPP' },
    { icon: 'fas fa-brain', title: 'AI / ML', description: 'TensorFlow, Pandas, NumPy, Matplotlib' },
    { icon: 'fas fa-tools', title: 'Tools', description: 'Power BI, Git, GitHub, REST APIs' },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-brand-accent1/[0.03] to-brand-accent2/[0.03]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black mb-4">Technical Skills</h3>
          <p className="text-brand-muted font-medium">My specialized toolkit for modern development</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-brand-accent1/10 shadow-[0_10px_30px_rgba(59,130,246,0.05)] hover:shadow-2xl hover:-translate-y-2 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent1/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-accent1/10 transition-colors"></div>
              
              <div className="relative">
                <i className={`${skill.icon} text-4xl mb-6 bg-gradient-to-br from-brand-accent1 to-brand-accent2 bg-clip-text text-transparent`}></i>
                <h4 className="text-xl font-black mb-3">{skill.title}</h4>
                <p className="text-brand-muted leading-relaxed font-medium">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
