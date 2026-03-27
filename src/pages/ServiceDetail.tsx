import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

const SERVICE_DATA: Record<string, any> = {
  publishing: {
    title: 'Book Publishing Support',
    hero: 'Professional Platform Setup & Launch.',
    desc: 'We handle the technical complexities of getting your book onto major global platforms, ensuring your metadata is optimized and your files are validated.',
    targetAudience: 'Independent authors ready to launch their finished manuscript on global platforms like Amazon KDP and IngramSpark.',
    includes: [
      'KDP & IngramSpark account setup',
      'Metadata & keyword optimization',
      'Category selection strategy',
      'ISBN assignment assistance',
      'Final file upload & validation',
      'Pricing & royalty configuration'
    ],
    deliverables: [
      'Live book listings on selected platforms',
      'Optimized metadata report',
      'Platform login credentials',
      'Launch day checklist'
    ],
    turnaround: '4-6 weeks',
    notIncluded: 'Marketing services, bulk printing, or developmental editing (available separately).',
    addons: [
      'Expedited launch (2 weeks)',
      'Additional platform setup (Kobo, Apple, etc.)',
      'Copyright registration assistance'
    ],
    process: [
      { title: 'Assessment', desc: 'We review your files and goals to ensure platform compatibility.' },
      { title: 'Account Setup', desc: 'We configure your publishing accounts with correct tax and royalty info.' },
      { title: 'Optimization', desc: 'We research and apply the best categories and keywords for your genre.' },
      { title: 'Launch', desc: 'We upload final files and monitor for approval and live status.' }
    ],
    faqs: [
      { q: 'Do I keep my royalties?', a: 'Yes, 100%. We do not take any percentage of your sales.' },
      { q: 'Who owns the accounts?', a: 'You do. We set them up in your name, and you have full control.' }
    ],
    disclaimer: 'Platform approval times may vary and are outside of our direct control.'
  },
  editing: {
    title: 'Professional Editing',
    hero: 'Polishing Your Prose to Perfection.',
    desc: 'Our seasoned editors work with you to refine your manuscript, ensuring it meets industry standards while preserving your unique authorial voice.',
    targetAudience: 'Authors with a completed first draft who want to ensure their story is clear, engaging, and error-free.',
    includes: [
      'Copyediting for grammar & style',
      'Proofreading for final errors',
      'Consistency & flow checks',
      'Style sheet creation',
      'Tracked changes for review',
      'Final clean manuscript'
    ],
    deliverables: [
      'Manuscript with tracked changes',
      'Clean final manuscript',
      'Custom style sheet',
      'Editorial summary letter'
    ],
    turnaround: '6-10 weeks',
    notIncluded: 'Ghostwriting or major structural rewrites.',
    addons: [
      'Developmental critique',
      'Blurb/Synopsis writing',
      'Second pass proofread'
    ],
    process: [
      { title: 'Sample Edit', desc: 'We provide a short sample to ensure a good fit with your editor.' },
      { title: 'First Pass', desc: 'Comprehensive editing focusing on grammar, style, and flow.' },
      { title: 'Author Review', desc: 'You review all changes and suggestions.' },
      { title: 'Final Polish', desc: 'A final check to ensure all revisions are correctly implemented.' }
    ],
    faqs: [
      { q: 'Will you change my voice?', a: 'No. Our goal is to enhance your voice, not replace it.' },
      { q: 'How many rounds are included?', a: 'One comprehensive round with a final polish pass.' }
    ]
  },
  proofreading: {
    title: 'Professional Proofreading',
    hero: 'The Final Line of Defense.',
    desc: 'A meticulous final check of your formatted manuscript to catch any lingering typos, punctuation errors, or layout inconsistencies before you hit publish.',
    targetAudience: 'Authors who have already completed copyediting and formatting and need a final set of eyes before launch.',
    includes: [
      'Typo & spelling correction',
      'Punctuation & grammar check',
      'Formatting consistency check',
      'Word usage & syntax verification'
    ],
    deliverables: [
      'Marked-up PDF or Word document',
      'Final error-free manuscript',
      'Proofreading report'
    ],
    turnaround: '2-3 weeks',
    notIncluded: 'Style changes, structural editing, or fact-checking.',
    addons: [
      'Cold read (no prior knowledge)',
      'Formatting fix-ups'
    ],
    process: [
      { title: 'Review', desc: 'We scan the manuscript for obvious layout issues.' },
      { title: 'Meticulous Read', desc: 'A word-by-word check for technical errors.' },
      { title: 'Verification', desc: 'Ensuring all corrections are applied to the final file.' }
    ],
    faqs: [
      { q: 'Is this different from copyediting?', a: 'Yes. Proofreading is the final technical check, while copyediting is more about style and flow.' }
    ]
  },
  formatting: {
    title: 'Interior Formatting',
    hero: 'Professional Layout for Print & Digital.',
    desc: 'We transform your manuscript into a beautiful, readable book that meets the technical requirements of all major retailers.',
    targetAudience: 'Authors who want a professional reading experience for their audience across all devices.',
    includes: [
      'Print-ready PDF creation',
      'Reflowable eBook (ePub) conversion',
      'Custom chapter headers',
      'Table of Contents generation',
      'Image & graphic optimization'
    ],
    deliverables: [
      'Print-ready PDF',
      'Validated ePub file',
      'Source files (on request)'
    ],
    turnaround: '2-4 weeks',
    notIncluded: 'Cover design or editorial changes.',
    addons: [
      'Complex layout (tables, charts)',
      'Fixed-layout eBook conversion'
    ],
    process: [
      { title: 'Style Selection', desc: 'Choose from a variety of professional interior styles.' },
      { title: 'Drafting', desc: 'We lay out your text and images according to industry standards.' },
      { title: 'Review', desc: 'You check the layout for any flow or design issues.' },
      { title: 'Finalization', desc: 'We generate the final production files for all platforms.' }
    ],
    faqs: [
      { q: 'Will it work on Kindle?', a: 'Yes, our ePub files are fully compatible with Kindle and all other major eReaders.' }
    ]
  },
  typesetting: {
    title: 'Professional Typesetting',
    hero: 'The Art of Beautiful Typography.',
    desc: 'Advanced interior design focusing on kerning, tracking, and custom font selection to create a premium reading experience for print books.',
    targetAudience: 'Authors of high-end fiction, poetry, or non-fiction who want a bespoke aesthetic.',
    includes: [
      'Custom font selection',
      'Manual kerning & tracking',
      'Drop caps & custom ornaments',
      'Advanced widow/orphan control'
    ],
    deliverables: [
      'High-end print-ready PDF',
      'Custom style guide'
    ],
    turnaround: '3-5 weeks',
    notIncluded: 'eBook conversion (available as add-on).',
    addons: [
      'Custom illustration integration',
      'Special edition layout'
    ],
    process: [
      { title: 'Design Concept', desc: 'We discuss the mood and aesthetic of your book.' },
      { title: 'Manual Layout', desc: 'Meticulous typesetting of every page.' },
      { title: 'Fine-tuning', desc: 'Adjusting spacing and flow for maximum readability.' }
    ],
    faqs: [
      { q: 'Why typesetting over standard formatting?', a: 'Typesetting is a more manual, artistic process focused on the visual beauty of the printed page.' }
    ]
  },
  'cover-design': {
    title: 'Cover Design',
    hero: 'A Cover That Sells Your Story.',
    desc: 'Our designers create striking, market-ready covers that capture the essence of your book and stand out on crowded retail shelves.',
    targetAudience: 'Authors who understand that readers DO judge a book by its cover and want a professional edge.',
    includes: [
      'Custom front cover design',
      'Full wrap (front, back, spine)',
      'eBook & Print versions',
      '3D mockups for marketing'
    ],
    deliverables: [
      'High-res print-ready PDF',
      'Optimized eBook JPEG',
      'Marketing mockups'
    ],
    turnaround: '3-5 weeks',
    notIncluded: 'Custom illustrations (available as add-on).',
    addons: [
      'Audiobook cover version',
      'Social media banners',
      'Box set design'
    ],
    process: [
      { title: 'Briefing', desc: 'We discuss your genre, themes, and design preferences.' },
      { title: 'Concepts', desc: 'We provide initial design directions for your feedback.' },
      { title: 'Refinement', desc: 'We polish the chosen concept until it is perfect.' },
      { title: 'Final Files', desc: 'We generate all necessary files for print and digital.' }
    ],
    faqs: [
      { q: 'How many revisions do I get?', a: 'We offer unlimited revisions on the chosen concept to ensure you love it.' }
    ]
  },
  'isbn-support': {
    title: 'ISBN & Metadata Support',
    hero: 'The Foundation of Your Book’s Identity.',
    desc: 'We help you navigate the technical world of ISBNs, barcodes, and metadata to ensure your book is correctly indexed and discoverable.',
    targetAudience: 'Authors who want to ensure their book is professionally registered and easy for retailers to find.',
    includes: [
      'ISBN assignment guidance',
      'Barcode generation',
      'BISAC code selection',
      'Metadata optimization'
    ],
    deliverables: [
      'ISBN registration confirmation',
      'High-res barcode files',
      'Metadata optimization report'
    ],
    turnaround: '1-2 weeks',
    notIncluded: 'Cost of ISBNs (must be purchased from Bowker/relevant agency).',
    addons: [
      'Library of Congress registration',
      'Copyright filing'
    ],
    process: [
      { title: 'Consultation', desc: 'We explain the different ISBN options available to you.' },
      { title: 'Registration', desc: 'We assist with the technical filing and metadata entry.' },
      { title: 'Verification', desc: 'We ensure all data is correctly reflected in global databases.' }
    ],
    faqs: [
      { q: 'Do I need my own ISBN?', a: 'We recommend authors own their ISBNs to maintain full control, and we help you through that process.' }
    ]
  },
  marketing: {
    title: 'Book Marketing',
    hero: 'Connecting Your Story with Readers.',
    desc: 'We help you navigate the crowded marketplace with a strategic roadmap designed to build your author platform and reach your target audience.',
    targetAudience: 'Authors ready to move from production to promotion and build a sustainable readership.',
    includes: [
      'Custom marketing roadmap',
      'Press release writing & distribution',
      'Social media promotional kit',
      'Amazon Advertising setup',
      'Author website consultation',
      'Global distribution channel setup'
    ],
    deliverables: [
      'Comprehensive marketing plan',
      'Press release copy',
      'Social media graphics',
      'Ad campaign reports'
    ],
    turnaround: 'Ongoing / Strategy-based',
    notIncluded: 'Guaranteed sales or media placements.',
    addons: [
      'Email newsletter setup',
      'Book tour coordination',
      'A+ Content design'
    ],
    process: [
      { title: 'Strategy Session', desc: 'We identify your target audience and unique selling points.' },
      { title: 'Asset Creation', desc: 'We build the tools and copy needed for your campaign.' },
      { title: 'Execution', desc: 'We launch ads, distribute releases, and coordinate outreach.' },
      { title: 'Analysis', desc: 'We review results and adjust the strategy for long-term growth.' }
    ],
    faqs: [
      { q: 'Can you guarantee sales?', a: 'No ethical marketer can guarantee sales, but we provide the best possible tools to achieve them.' }
    ]
  },
  'author-website': {
    title: 'Author Website Design',
    hero: 'Your Digital Home Base.',
    desc: 'A professional, mobile-responsive website designed to showcase your books, collect email subscribers, and connect with your readers.',
    targetAudience: 'Authors who want a professional online presence that they fully own and control.',
    includes: [
      'Custom design & layout',
      'Mobile responsiveness',
      'Email list integration',
      'Book showcase pages',
      'Blog setup'
    ],
    deliverables: [
      'Live, fully functional website',
      'User manual for updates',
      'Domain & hosting setup'
    ],
    turnaround: '4-8 weeks',
    notIncluded: 'Ongoing content writing or monthly hosting fees.',
    addons: [
      'eCommerce integration',
      'Advanced SEO package',
      'Logo design'
    ],
    process: [
      { title: 'Planning', desc: 'We map out the structure and content of your site.' },
      { title: 'Design', desc: 'We create a visual style that matches your author brand.' },
      { title: 'Development', desc: 'We build the site and integrate all necessary tools.' },
      { title: 'Launch', desc: 'We go live and provide training on how to manage your site.' }
    ],
    faqs: [
      { q: 'Will I be able to update it myself?', a: 'Yes, we build on user-friendly platforms and provide training.' }
    ]
  },
  illustration: {
    title: 'Illustration Design',
    hero: 'Bringing Your Vision to Life.',
    desc: 'Professional custom illustrations for children’s books, covers, or interior accents, tailored to your specific style and vision.',
    targetAudience: 'Authors of children’s books or illustrated works who need high-quality, original artwork.',
    includes: [
      'Character design',
      'Full-page spreads',
      'Spot illustrations',
      'Cover art'
    ],
    deliverables: [
      'High-resolution digital files',
      'Full commercial rights',
      'Source files (on request)'
    ],
    turnaround: '8-16 weeks (varies by project size)',
    notIncluded: 'Formatting or typesetting (available separately).',
    addons: [
      'Character style guide',
      'Promotional artwork'
    ],
    process: [
      { title: 'Sketching', desc: 'We provide rough sketches for your approval of composition and characters.' },
      { title: 'Coloring', desc: 'We apply professional color and texture to the approved sketches.' },
      { title: 'Finalization', desc: 'We deliver high-resolution files ready for print.' }
    ],
    faqs: [
      { q: 'Do I own the rights?', a: 'Yes, you receive full commercial rights to use the illustrations for your book and marketing.' }
    ]
  },
  'childrens-publishing': {
    title: 'Children’s Book Publishing',
    hero: 'Whimsical Stories, Professional Results.',
    desc: 'Specialized support for children’s book authors, from illustration coordination to complex fixed-layout formatting.',
    targetAudience: 'Authors of picture books, middle-grade fiction, or educational works for children.',
    includes: [
      'Illustration coordination',
      'Fixed-layout eBook conversion',
      'Print-on-Demand setup',
      'Genre-specific metadata'
    ],
    deliverables: [
      'Live book listings',
      'Fixed-layout ePub/Mobi',
      'Print-ready PDF'
    ],
    turnaround: '12-20 weeks (including illustrations)',
    notIncluded: 'Marketing or bulk printing.',
    addons: [
      'Hardcover setup',
      'Activity book conversion'
    ],
    process: [
      { title: 'Planning', desc: 'We coordinate the timeline between writing, art, and production.' },
      { title: 'Production', desc: 'We integrate text and art into a seamless layout.' },
      { title: 'Launch', desc: 'We handle the technical upload for both print and digital.' }
    ],
    faqs: [
      { q: 'Can you help me find an illustrator?', a: 'Yes, we have a network of talented artists we can recommend.' }
    ]
  },
  printing: {
    title: 'Book Printing Support',
    hero: 'From Digital Files to Physical Books.',
    desc: 'We coordinate with professional printers to ensure your book is produced to the highest standards, whether you need 1 copy or 10,000.',
    targetAudience: 'Authors who need high-quality physical copies for events, bookstores, or personal use.',
    includes: [
      'Print-on-Demand setup',
      'Bulk offset coordination',
      'Paper & finish selection',
      'Proof review assistance'
    ],
    deliverables: [
      'Physical book proofs',
      'Final printed copies',
      'Shipping coordination'
    ],
    turnaround: '2-6 weeks (varies by method)',
    notIncluded: 'Cost of printing or shipping (paid directly to printer).',
    addons: [
      'Specialty finishes (foil, emboss)',
      'Custom endpapers'
    ],
    process: [
      { title: 'Selection', desc: 'We help you choose the right paper, trim size, and binding.' },
      { title: 'Proofing', desc: 'We review a physical sample to ensure quality.' },
      { title: 'Production', desc: 'The printer produces your full order.' }
    ],
    faqs: [
      { q: 'What is the difference between POD and Offset?', a: 'POD is for small quantities, while Offset is more cost-effective for large runs.' }
    ]
  },
  audiobook: {
    title: 'Audiobook Creation',
    hero: 'Your Story, Narrated Professionally.',
    desc: 'Complete production support for audiobooks, from narrator selection and recording to final distribution on Audible and beyond.',
    targetAudience: 'Authors who want to reach the rapidly growing audience of audiobook listeners.',
    includes: [
      'Narrator casting & auditions',
      'Professional recording & editing',
      'ACX/Findaway distribution setup',
      'Audio mastering to retail standards'
    ],
    deliverables: [
      'Mastered audio files',
      'Live listings on Audible/iTunes',
      'Audiobook cover art'
    ],
    turnaround: '6-12 weeks',
    notIncluded: 'Narrator fees (paid directly or via royalty share).',
    addons: [
      'Multi-voice narration',
      'Sound effect integration'
    ],
    process: [
      { title: 'Casting', desc: 'We help you find the perfect voice for your story.' },
      { title: 'Recording', desc: 'Professional narration and editing of your manuscript.' },
      { title: 'Quality Assurance & Mastering', desc: 'Meticulous review for narration accuracy and technical mastering to meet ACX and retail standards.' },
      { title: 'Distribution', desc: 'We handle the technical upload and metadata for audio platforms.' }
    ],
    faqs: [
      { q: 'How do I pay the narrator?', a: 'We can set up upfront payment or royalty-share agreements depending on the platform.' }
    ]
  },
  distribution: {
    title: 'Global Distribution',
    hero: 'Reach Readers Everywhere.',
    desc: 'We expand your book’s reach far beyond Amazon, placing it in the catalogs of libraries, independent bookstores, and international retailers.',
    targetAudience: 'Authors who want maximum visibility and accessibility for their work.',
    includes: [
      'IngramSpark global distribution',
      'Library catalog registration',
      'International retail setup',
      'Wholesale pricing strategy'
    ],
    deliverables: [
      'Expanded distribution report',
      'Library listing confirmation',
      'International sales setup'
    ],
    turnaround: '4-8 weeks',
    notIncluded: 'Guaranteed stocking in physical bookstores.',
    addons: [
      'Direct-to-consumer sales setup',
      'Foreign rights consultation'
    ],
    process: [
      { title: 'Strategy', desc: 'We determine the best distribution channels for your genre.' },
      { title: 'Setup', desc: 'We handle the technical registration with global wholesalers.' },
      { title: 'Monitoring', desc: 'We ensure your book is appearing correctly across all channels.' }
    ],
    faqs: [
      { q: 'Will my book be in physical stores?', a: 'It will be available for them to order, which is the standard for independent authors.' }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICE_DATA[id || 'publishing'] || SERVICE_DATA.publishing;

  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-brand-navy mb-6">{service.title}</h1>
            <p className="text-2xl text-brand-accent italic mb-8">{service.hero}</p>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">{service.desc}</p>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm inline-block">
              <p className="text-sm font-bold text-brand-navy uppercase tracking-widest mb-2">Target Audience</p>
              <p className="text-slate-600">{service.targetAudience}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-8">What’s Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.includes.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-brand-navy mb-8">Deliverables</h2>
                <ul className="space-y-3">
                  {service.deliverables.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.addons && (
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-8">Optional Add-ons</h2>
                  <div className="flex flex-wrap gap-3">
                    {service.addons.map((item: string, i: number) => (
                      <span key={i} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
                        + {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-12">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
                <h3 className="text-2xl font-bold text-brand-navy mb-8">Our Process</h3>
                <div className="space-y-8">
                  {service.process.map((step: any, i: number) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-brand-accent font-bold text-xl italic">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h4 className="font-bold text-brand-navy mb-2">{step.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-brand-navy text-white">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-brand-accent" /> Important Notes
                </h4>
                <div className="space-y-4 text-sm text-slate-400">
                  <p><strong>Estimated Turnaround:</strong> {service.turnaround}</p>
                  <p><strong>Not Included:</strong> {service.notIncluded}</p>
                  {service.disclaimer && <p className="italic text-xs mt-4">Note: {service.disclaimer}</p>}
                </div>
              </div>

              <div className="bg-brand-accent/10 p-8 rounded-3xl border border-brand-accent/20">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {service.faqs.map((faq: any, i: number) => (
                    <div key={i}>
                      <p className="font-bold text-brand-navy text-sm mb-2">{faq.q}</p>
                      <p className="text-sm text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Ready to get started with {service.title}?</h2>
            <p className="text-lg text-slate-600 mb-10">Speak with a publishing consultant today and get a custom quote for your project.</p>
            <Link to="/contact" className="bg-brand-navy text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-accent transition-all inline-flex items-center gap-3 shadow-xl shadow-brand-navy/20">
              Request a Free Quote <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
