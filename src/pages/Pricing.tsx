import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const PACKAGES = [
  {
    name: 'Starter',
    price: '999',
    desc: 'Perfect for authors who have a polished manuscript and need professional production.',
    features: [
      'Professional Interior Formatting',
      'Custom eBook Conversion',
      'Basic Cover Design',
      'ISBN Assignment',
      'KDP & IngramSpark Setup',
      '100% Royalties Retention',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '2,499',
    desc: 'Our most popular choice for authors who want high-end editorial and design quality.',
    features: [
      'Everything in Starter',
      'Professional Copyediting',
      'Premium Custom Cover Design',
      'Global Distribution Setup',
      'Author Website (1 Page)',
      'Marketing Consultation (1hr)',
      'Metadata Optimization',
    ],
    cta: 'Choose Professional',
    popular: true,
  },
  {
    name: 'Elite',
    price: '4,999',
    desc: 'A comprehensive solution for authors aiming for a high-impact global launch.',
    features: [
      'Everything in Professional',
      'Developmental Editing',
      'Hardcover & Paperback Design',
      'Full Author Website (3 Pages)',
      'Social Media Kit',
      'Press Release Distribution',
      'Audiobook Production Support',
    ],
    cta: 'Go Elite',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-brand-navy mb-6">Transparent Pricing for Professional Publishing.</h1>
            <p className="text-xl text-slate-600">No hidden royalties, no surprise fees. Choose the package that fits your goals and maintain 100% ownership of your work.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={clsx(
                  "relative p-8 rounded-[2.5rem] border transition-all",
                  pkg.popular 
                    ? "bg-brand-navy text-white border-brand-navy shadow-2xl scale-105 z-10" 
                    : "bg-white text-slate-900 border-slate-100 shadow-xl"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-navy px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm font-bold opacity-60">Starting from</span>
                    <span className="text-4xl font-bold">${pkg.price}</span>
                  </div>
                  <p className={clsx("text-sm leading-relaxed", pkg.popular ? "text-slate-400" : "text-slate-500")}>
                    {pkg.desc}
                  </p>
                </div>
                <div className="space-y-4 mb-10">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className={clsx("w-5 h-5 shrink-0", pkg.popular ? "text-brand-accent" : "text-brand-accent")} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={clsx(
                    "block w-full py-4 rounded-2xl font-bold text-center transition-all",
                    pkg.popular 
                      ? "bg-brand-accent text-brand-navy hover:bg-white" 
                      : "bg-brand-navy text-white hover:bg-brand-accent"
                  )}
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 md:p-12 bg-white rounded-[3rem] border border-slate-100 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-6">Need a Custom Solution?</h2>
                <p className="text-slate-600 mb-8">Every book is unique. If our standard packages don't quite fit your needs, we can create a bespoke plan tailored specifically to your manuscript and goals.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" /> 100% Royalties
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" /> Full Rights
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-600 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-brand-accent" /> Expert Support
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl">
                <h4 className="font-bold text-brand-navy mb-4">Optional Add-ons:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Audiobook Production', 'Children’s Illustrations', 'Hardcover Printing', 'Press Releases', 'Author Website', 'Social Media Kit'].map((item) => (
                    <li key={item} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-accent transition-all">
                  Inquire about custom services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

