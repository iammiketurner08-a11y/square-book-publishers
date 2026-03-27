import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Star, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-8">Dedicated to the Independent Author’s Success.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Square Book Publishers was founded on a simple principle: every author deserves professional-grade publishing support without sacrificing their rights or royalties.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We bridge the gap between self-publishing and traditional publishing. By providing high-end editorial, design, and distribution services, we empower authors to compete on a global scale while maintaining 100% creative and financial control.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are not a traditional trade publisher. We do not acquire rights or take royalties. Instead, we are your professional partner, providing the expertise you need to navigate the complex world of modern publishing.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-3xl font-bold text-brand-navy mb-2">500+</h4>
                  <p className="text-sm text-slate-500">Books Published</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-3xl font-bold text-brand-navy mb-2">100%</h4>
                  <p className="text-sm text-slate-500">Author Ownership</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/about-mission/800/1000" 
                alt="Our Mission" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Not */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-brand-navy text-center mb-12 text-brand-accent italic">Transparency First</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Check className="text-green-500" /> Who We Are
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>Independent author services provider</li>
                  <li>Professional editorial and design house</li>
                  <li>Distribution and platform setup experts</li>
                  <li>Author advocates and partners</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Shield className="text-brand-accent" /> Who We Are Not
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>A traditional trade publisher (we don't buy rights)</li>
                  <li>Affiliated with Amazon or KDP officially</li>
                  <li>A "guaranteed bestseller" factory</li>
                  <li>A company that takes your royalties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: 'Quality', desc: 'We never compromise on the professional standard of your book.' },
              { icon: Users, title: 'Transparency', desc: 'No hidden fees, no misleading claims, just honest service.' },
              { icon: Award, title: 'Empowerment', desc: 'Giving authors the tools to succeed on their own terms.' },
            ].map((value, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
