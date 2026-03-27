import React from 'react';

export default function Disclaimer() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Disclaimer</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-sm italic">Last Updated: March 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Independent Service Provider</h2>
              <p>Square Book Publishers is an independent author services company. We provide professional support for authors who wish to self-publish their work. We are not a traditional trade publisher, and we do not acquire rights or take royalties from authors.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. No Official Affiliation</h2>
              <p>The names "Amazon," "Kindle Direct Publishing," "KDP," "Barnes & Noble," "IngramSpark," "Apple Books," "Google Books," and "Kobo" are trademarks of their respective owners. Square Book Publishers has no official affiliation with, sponsorship by, or endorsement from these companies. References to these platforms are made solely to describe the distribution and publishing channels we help authors access.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Results Disclaimer</h2>
              <p>Any testimonials or examples shown on this website are not a guarantee that you will achieve the same or similar results. Success in publishing depends on many factors, including the quality of the work, market trends, and marketing efforts. We do not guarantee bestseller status, specific sales volumes, or media placement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Professional Advice</h2>
              <p>The information provided on this website is for educational and informational purposes only. It is not intended as legal, financial, or professional publishing advice. You should consult with appropriate professionals before making significant decisions regarding your intellectual property.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">5. External Links</h2>
              <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Square Book Publishers. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
