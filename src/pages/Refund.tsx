import React from 'react';

export default function Refund() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-brand-navy mb-8">Refund Policy</h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-sm italic">Last Updated: March 27, 2026</p>
            
            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">1. General Policy</h2>
              <p>At Square Book Publishers, we strive to ensure complete satisfaction with our services. However, because our services involve professional labor and time-intensive tasks, our refund policy is based on the progress of your project.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Pre-Work Cancellation</h2>
              <p>If you cancel your order before any work has commenced on your project, you are eligible for a full refund minus a 5% administrative processing fee.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Work-in-Progress Refunds</h2>
              <p>Once work has begun, refunds are calculated based on the percentage of the project completed:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Editorial Services:</strong> Non-refundable once the editor has begun reviewing the manuscript.</li>
                <li><strong>Design Services:</strong> 50% refund available if cancelled after the initial consultation but before the first draft is delivered. No refund after the first draft is delivered.</li>
                <li><strong>Publishing Setup:</strong> Non-refundable once the platform setup or file upload process has started.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Completed Work</h2>
              <p>Fees for fully completed services are non-refundable. We provide a revision process (as outlined in our Revision Policy) to ensure the final product meets the agreed-upon specifications.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">5. How to Request a Refund</h2>
              <p>To request a refund, please contact your project manager or email support@squarebookpublishers.com with your order details and reason for the request. We process all requests within 7-10 business days.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
