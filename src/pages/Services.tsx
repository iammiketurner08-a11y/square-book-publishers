import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Book, Edit, PenTool, Globe, Layout, Image, Headphones, Printer, FileText, CheckSquare, Globe2, Truck, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'publishing',
    icon: Book,
    title: 'Book Publishing',
    desc: 'Complete technical setup on major platforms like Amazon KDP and IngramSpark.',
    features: ['Platform account setup', 'Metadata optimization', 'File upload & validation', 'ISBN assignment support']
  },
  {
    id: 'editing',
    icon: Edit,
    title: 'Professional Editing',
    desc: 'Polishing your manuscript to meet industry standards while preserving your voice.',
    features: ['Copyediting', 'Developmental editing', 'Line editing', 'Critique reports']
  },
  {
    id: 'proofreading',
    icon: CheckSquare,
    title: 'Proofreading',
    desc: 'The final polish to catch remaining typos, grammar issues, and formatting glitches.',
    features: ['Spelling & grammar', 'Punctuation check', 'Consistency review', 'Final quality control']
  },
  {
    id: 'formatting',
    icon: Layout,
    title: 'Interior Formatting',
    desc: 'Professional typesetting for a seamless reading experience across all devices.',
    features: ['Print-ready PDFs', 'Reflowable eBooks', 'Custom chapter headers', 'Image optimization']
  },
  {
    id: 'typesetting',
    icon: FileText,
    title: 'Typesetting',
    desc: 'Advanced interior design for complex layouts, non-fiction, and academic works.',
    features: ['Custom font selection', 'Complex table styling', 'Footnote management', 'Index creation']
  },
  {
    id: 'cover-design',
    icon: PenTool,
    title: 'Cover Design',
    desc: 'Striking, market-ready covers designed to capture readers’ attention.',
    features: ['Front, back & spine design', 'eBook & Print versions', 'Unlimited revisions', 'High-res source files']
  },
  {
    id: 'isbn-support',
    icon: Hash,
    title: 'ISBN Support',
    desc: 'Assistance with obtaining and registering official ISBNs and barcodes.',
    features: ['ISBN procurement', 'Barcode generation', 'Bowker registration', 'Copyright page setup']
  },
  {
    id: 'marketing',
    icon: Globe,
    title: 'Book Marketing',
    desc: 'Strategic guidance to help your book find its audience in a crowded market.',
    features: ['Marketing roadmap', 'Press release writing', 'Social media kits', 'Amazon ad setup']
  },
  {
    id: 'author-website',
    icon: Globe2,
    title: 'Author Website',
    desc: 'A professional online home for you and your books to build your author brand.',
    features: ['Custom design', 'Mobile responsive', 'Mailing list integration', 'Book gallery']
  },
  {
    id: 'illustration',
    icon: Image,
    title: 'Illustration Design',
    desc: 'Custom artwork for children’s books, covers, and interior enhancements.',
    features: ['Character design', 'Full-page spreads', 'Consistent style', 'Commercial rights']
  },
  {
    id: 'childrens-publishing',
    icon: Book,
    title: 'Children’s Publishing',
    desc: 'Specialized support for the unique requirements of children’s book authors.',
    features: ['Layout for kids', 'Illustration sync', 'Trim size guidance', 'Print quality check']
  },
  {
    id: 'printing',
    icon: Printer,
    title: 'Book Printing',
    desc: 'High-quality physical book production with various binding and paper options.',
    features: ['Hardcover & Paperback', 'Premium paper stock', 'Bulk order discounts', 'Quality assurance']
  },
  {
    id: 'audiobook',
    icon: Headphones,
    title: 'Audiobook Creation',
    desc: 'Bringing your story to life with professional narration and production.',
    features: ['Narrator selection', 'Studio recording', 'ACX/Findaway setup', 'Audio mastering']
  },
  {
    id: 'distribution',
    icon: Truck,
    title: 'Distribution Service',
    desc: 'Expanding your reach to libraries, bookstores, and international retailers.',
    features: ['Global distribution', 'Library placement', 'Wholesale setup', 'Sales reporting']
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-brand-navy mb-6">Professional Services for Independent Authors.</h1>
            <p className="text-xl text-slate-600">We provide the expertise and tools you need at every stage of the publishing process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-brand-accent group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${service.id}`} className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-accent transition-all">
                  View Details <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-brand-navy mb-6">Not sure where to start?</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Every author’s journey is unique. Our consultants can help you identify exactly which services you need to achieve your specific goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">Free manuscript assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">Transparent service roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">No long-term contracts</span>
                  </div>
                </div>
                <div className="mt-10">
                  <Link to="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold hover:bg-brand-accent transition-all inline-flex items-center gap-2">
                    Request a Consultation <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/services-consult/800/600" 
                  alt="Consultation" 
                  className="rounded-3xl shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
