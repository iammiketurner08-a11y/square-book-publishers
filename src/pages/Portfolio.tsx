import React from 'react';
import { motion } from 'motion/react';

const PROJECTS = [
  { title: 'The Silent Horizon', category: 'Fiction', image: 'https://picsum.photos/seed/book1/600/800' },
  { title: 'Digital Renaissance', category: 'Non-Fiction', image: 'https://picsum.photos/seed/book2/600/800' },
  { title: 'The Little Dreamer', category: 'Children’s', image: 'https://picsum.photos/seed/book3/600/800' },
  { title: 'Beyond the Veil', category: 'Fantasy', image: 'https://picsum.photos/seed/book4/600/800' },
  { title: 'Modern Leadership', category: 'Business', image: 'https://picsum.photos/seed/book5/600/800' },
  { title: 'Echoes of Time', category: 'Memoir', image: 'https://picsum.photos/seed/book6/600/800' },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-bold text-brand-navy mb-6">A Showcase of Author Excellence.</h1>
            <p className="text-xl text-slate-600">Explore a selection of recent projects we’ve helped bring to life. From striking covers to professional interior layouts.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                    <p className="text-white font-bold text-lg">{project.title}</p>
                  </div>
                </div>
                <h4 className="font-bold text-brand-navy">{project.title}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{project.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-white rounded-[3rem] border border-slate-100 text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Your Book Could Be Next</h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">All samples shown are real client projects. We respect author privacy and only showcase work with explicit permission.</p>
            <p className="text-xs text-slate-400 italic">Note: Platform availability and distribution results vary by project.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
