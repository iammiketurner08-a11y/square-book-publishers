import React from 'react';
import { motion } from 'motion/react';
import { Search, Edit3, Layout, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    icon: Search,
    title: 'Consultation & Assessment',
    desc: 'We begin by understanding your vision. Our consultants review your manuscript and goals to recommend the best path forward, ensuring a clear roadmap from the start.',
    details: ['Manuscript review', 'Goal setting', 'Customized strategy', 'Transparent quoting']
  },
  {
    icon: Edit3,
    title: 'Editorial & Refinement',
    desc: 'Our professional editors work with you to polish your prose. Whether you need developmental editing or a final proofread, we ensure your voice remains central.',
    details: ['Copyediting', 'Proofreading', 'Developmental feedback', 'Style consistency']
  },
  {
    icon: Layout,
    title: 'Design & Production',
    desc: 'Our designers craft a custom cover and interior layout that reflects your book’s essence. We handle all technical formatting for print and digital platforms.',
    details: ['Custom cover design', 'Interior typesetting', 'eBook conversion', 'ISBN & Metadata']
  },
  {
    icon: Rocket,
    title: 'Launch & Distribution',
    desc: 'We handle the technical setup on major platforms. Your book is uploaded, optimized, and launched into global distribution networks for readers to find.',
    details: ['Platform setup', 'Global distribution', 'Author copies', 'Launch support']
  }
];

export default function Process() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl font-bold text-brand-navy mb-6">A Proven Path to Publication.</h1>
            <p className="text-xl text-slate-600">We’ve refined our process to be transparent, efficient, and author-focused. Here is how we bring your book to life.</p>
          </div>

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <div className="w-16 h-16 bg-brand-navy text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-navy/20">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-6">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{step.desc}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                  <img 
                    src={`https://picsum.photos/seed/process-step-${i}/800/600`} 
                    alt={step.title} 
                    className="rounded-[3rem] shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-brand-navy mb-8">Ready to take the first step?</h2>
          <Link to="/contact" className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-accent transition-all inline-flex items-center gap-3">
            Schedule Your Free Consultation <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
