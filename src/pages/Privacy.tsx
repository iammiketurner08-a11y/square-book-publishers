import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-sm italic">Last Updated: March 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
              <p>Square Book Publishers ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. The Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To register you as a new customer.</li>
                <li>To process and deliver your order.</li>
                <li>To manage our relationship with you.</li>
                <li>To improve our website, products/services, marketing or customer relationships.</li>
                <li>To provide you with information or advertising relating to our products or services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Advertising & Analytics</h2>
              <p>We use third-party services such as Google Ads and Microsoft Ads to provide targeted advertising. These services may use cookies and similar technologies to collect information about your activities on this and other websites to provide you with advertising based on your interests.</p>
              <p>You can opt out of interest-based advertising by visiting the Network Advertising Initiative opt-out page or using browser settings to block cookies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: support@squarebookpublishers.com</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
