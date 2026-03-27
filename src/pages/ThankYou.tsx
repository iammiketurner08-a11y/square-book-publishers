import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Send, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="pt-20 min-h-[80vh] flex items-center">
      <section className="section-padding w-full">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-navy/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <Send className="w-12 h-12" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Message Received!</h1>
                
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Thank you for reaching out to Square Book Publishers. A dedicated publishing consultant has been notified and will contact you within <span className="font-bold text-brand-navy">24 business hours</span> to discuss your project.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-medium text-slate-700">Inquiry Logged</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-medium text-slate-700">Consultant Assigned</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/" 
                    className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-navy/20"
                  >
                    Return Home
                  </Link>
                  <Link 
                    to="/portfolio" 
                    className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-brand-navy transition-all flex items-center justify-center gap-2"
                  >
                    Browse Portfolio <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 text-slate-500 text-sm">
              <p>Need immediate assistance? Call us at <a href="tel:+1234567890" className="font-bold text-brand-navy hover:text-brand-accent transition-colors">+1 (234) 567-890</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
