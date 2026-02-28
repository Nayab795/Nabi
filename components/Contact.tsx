
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6">Let's Connect</h3>
              <p className="text-brand-muted text-lg font-medium max-w-md">
                Open to opportunities in IT support, tech operations, and junior development. Reach out anytime!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:nayabnabi9@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-brand-accent1/10 shadow-sm hover:shadow-xl hover:bg-brand-accent1/5 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent1/10 flex items-center justify-center text-brand-accent1 text-2xl group-hover:scale-110 transition-transform">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <span className="text-xs font-black text-brand-light uppercase tracking-widest">Email</span>
                  <p className="text-lg font-bold">nayabnabi9@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923165750596" target="_blank" rel="noopener" className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-brand-accent1/10 shadow-sm hover:shadow-xl hover:bg-green-50 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 text-2xl group-hover:scale-110 transition-transform">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <span className="text-xs font-black text-brand-light uppercase tracking-widest">WhatsApp</span>
                  <p className="text-lg font-bold">+92 316 575 0596</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-brand-accent1/10 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent4/10 flex items-center justify-center text-brand-accent4 text-2xl">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <span className="text-xs font-black text-brand-light uppercase tracking-widest">Location</span>
                  <p className="text-lg font-bold">Wah / Taxila, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=Askari%20Cement%20Hassan%20Abad%20Wah%20Taxila%20Pakistan&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
