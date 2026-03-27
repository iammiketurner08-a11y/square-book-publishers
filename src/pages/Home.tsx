import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Globe, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white section-padding">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                <span>Independent Author Services</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-brand-navy leading-[1.1] mb-8">
                Your Vision, <br />
                <span className="text-brand-accent italic">Professionally</span> Published.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Premium publishing support for independent authors who value quality, transparency, and 100% ownership of their work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-navy/20">
                  Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/portfolio" className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:border-brand-navy transition-all text-center">
                  View Portfolio
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/author${i}/100/100`} alt="Author" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-yellow-500 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">Trusted by 500+ Authors</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src="https://picsum.photos/seed/publishing/1200/1600" 
                  alt="Professional Book Design" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Ownership</p>
                    <p className="text-lg font-bold text-brand-navy">100% Royalties</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 max-w-[200px]">You keep all rights and earnings from your book sales.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Distribution Support For</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-slate-800">AMAZON KDP</span>
            <span className="text-2xl font-bold text-slate-800">INGRAMSPARK</span>
            <span className="text-2xl font-bold text-slate-800">BARNES & NOBLE</span>
            <span className="text-2xl font-bold text-slate-800">APPLE BOOKS</span>
            <span className="text-2xl font-bold text-slate-800">KOBO</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Expert Support for Every Stage</h2>
            <p className="text-lg text-slate-600">From the first draft to the global marketplace, we provide the professional tools you need to succeed as an independent author.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Publishing Support', desc: 'Complete setup on major platforms with full metadata optimization.' },
              { icon: Zap, title: 'Editorial Services', desc: 'Professional editing and proofreading to polish your manuscript.' },
              { icon: Users, title: 'Design & Layout', desc: 'Custom cover design and interior formatting for print and digital.' },
              { icon: Globe, title: 'Global Distribution', desc: 'Reach readers worldwide through established distribution networks.' },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-brand-navy text-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">From Manuscript to Marketplace</h2>
              <p className="text-slate-400 text-lg mb-12">Our proven 4-step process ensures your book meets professional standards while you maintain full creative control.</p>
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Consultation', desc: 'We discuss your goals and assess your manuscript to create a tailored plan.' },
                  { step: '02', title: 'Refinement', desc: 'Our editors polish your work while designers craft your unique visual identity.' },
                  { step: '03', title: 'Production', desc: 'We handle formatting, typesetting, and platform-specific file preparation.' },
                  { step: '04', title: 'Launch', desc: 'Your book is uploaded to global platforms and ready for readers to discover.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-brand-accent font-bold text-2xl font-serif italic">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/process/800/800" 
                alt="Publishing Process" 
                className="relative z-10 rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/team/800/600" 
                alt="Our Team" 
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-brand-navy mb-8">Professional Standards. <br />Author Ownership.</h2>
              <div className="space-y-6">
                {[
                  { title: '100% Royalties', desc: 'We never take a cut of your sales. Every penny you earn is yours to keep.' },
                  { title: 'Full Rights Retention', desc: 'You remain the sole owner of your copyright and all intellectual property.' },
                  { title: 'Expert Team', desc: 'Work with seasoned professionals from the publishing industry.' },
                  { title: 'No Hidden Fees', desc: 'Transparent, upfront pricing with no surprise costs down the line.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/about" className="text-brand-navy font-bold flex items-center gap-2 hover:text-brand-accent transition-all">
                  Learn more about our mission <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Start Your Publishing Journey?</h2>
              <p className="text-slate-400 text-xl mb-12">Speak with a professional publishing consultant today and get a tailored roadmap for your book.</p>
              <Link to="/contact" className="bg-brand-accent text-brand-navy px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-2xl shadow-brand-accent/20 inline-flex items-center gap-3">
                Request a Free Consultation <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="mt-8 text-sm text-slate-500">No obligation. Your manuscript remains your property.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
