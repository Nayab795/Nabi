
import React from 'react';

const About: React.FC = () => {
  const badges = ["Team Player", "Quick Learner", "Clean UI", "Time Management"];

  return (
    <section id="about" className="py-24 px-6 bg-white/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 flex flex-col">
                About Me
                <span className="w-20 h-1.5 bg-gradient-to-r from-brand-accent1 to-brand-accent3 rounded-full mt-4"></span>
              </h3>
              <p className="text-brand-muted text-lg leading-loose">
                I’m Nayab, a detail‑oriented Web & App Developer with a love for learning and problem‑solving. 
                I enjoy chess for strategy and nature photography for creativity. I specialize in building 
                intuitive interfaces and robust backend solutions using React Native, FastAPI, and Firebase.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map(badge => (
                <span key={badge} className="px-5 py-2.5 rounded-full bg-white border border-brand-accent1/10 shadow-sm text-brand-accent1 font-bold text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-brand-accent1/10 shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent1/10 flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-brand-accent1 text-xl"></i>
              </div>
              <h4 className="text-xl font-extrabold mb-4">What I’m Seeking</h4>
              <p className="text-brand-muted leading-relaxed">
                Roles in <strong className="text-brand-accent1">Banking / Software Houses / IT Sector</strong> where I can grow and innovate.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-brand-accent1/10 shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent3/10 flex items-center justify-center mb-6">
                <i className="fas fa-chess text-brand-accent3 text-xl"></i>
              </div>
              <h4 className="text-xl font-extrabold mb-4">Hobbies</h4>
              <p className="text-brand-muted leading-relaxed">
                Nature photography, strategy games, traveling, and books that expand horizons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
