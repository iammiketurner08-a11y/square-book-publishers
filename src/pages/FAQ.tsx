import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQS = [
  {
    q: "What does Square Book Publishers do?",
    a: "We are an independent author services company providing end-to-end publishing support, including editorial, design, production, marketing, and platform setup. We help authors prepare and publish their books through relevant distribution channels."
  },
  {
    q: "Are you a traditional trade publisher?",
    a: "No. We do not acquire rights or take royalties. You retain 100% ownership of your work and all earnings from your sales. We are a service-based partner paid for our expertise and labor."
  },
  {
    q: "Are you affiliated with Amazon or KDP?",
    a: "No. Square Book Publishers is an independent service provider. While we help authors set up their books on platforms like Amazon KDP, IngramSpark, and Barnes & Noble, we are not officially affiliated with or endorsed by these companies."
  },
  {
    q: "Do you guarantee bestseller status?",
    a: "No. We provide professional-grade tools and marketing strategies to give your book the best possible chance of success, but we do not guarantee specific sales figures, rankings, or media coverage."
  },
  {
    q: "Who owns the files and the copyright?",
    a: "You do. 100%. All files we create for you (formatted interiors, cover designs, etc.) are your property. You retain full copyright and intellectual property rights at all times."
  },
  {
    q: "What is your refund policy?",
    a: "We offer a transparent refund policy based on the stage of your project. Details can be found on our dedicated Refund Policy page. Generally, work already completed is non-refundable."
  },
  {
    q: "How long does the publishing process take?",
    a: "Timelines vary depending on the scope of services. A standard publishing package typically takes 8-12 weeks from manuscript submission to final launch, assuming timely author feedback."
  },
  {
    q: "Do you handle book printing?",
    a: "We set up your book for Print-on-Demand (POD) through major platforms. If you require bulk offset printing, we can provide custom quotes and coordinate with our printing partners."
  }
];

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-brand-navy mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600">Find answers to common questions about our services, process, and independent publishing.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-9">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Still have questions?</h2>
            <Link to="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all inline-flex items-center gap-2">
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
