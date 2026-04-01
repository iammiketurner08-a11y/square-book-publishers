import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      genre: formData.get('genre'),
      status: formData.get('status'),
      message: formData.get('message'),
    };

    console.log('[Contact] Submitting form data:', data);

    try {
      console.log('[Contact] Fetching /api/contact...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      console.log('[Contact] Raw response (first 200 chars):', responseText.substring(0, 200));

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error('[Contact] JSON Parse Error:', e);
        const isHtml = responseText.trim().toLowerCase().startsWith('<!doctype') || responseText.trim().toLowerCase().startsWith('<html');
        if (isHtml) {
          throw new Error(`The server returned an HTML page instead of a success message. This usually means the API route doesn't exist on this server or you are being redirected.`);
        }
        throw new Error(`Server returned an unreadable response. Please check the console for details.`);
      }

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send inquiry. Please try again.');
      }

      navigate('/thank-you');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-bold text-brand-navy mb-8">Let’s Bring Your Book to Life.</h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Whether you have a finished manuscript or just a brilliant idea, our consultants are ready to help you navigate your publishing journey.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Email Us</h4>
                    <p className="text-slate-500">support@squarebookpublishers.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Call Us</h4>
                    <p className="text-slate-500">+1 (786) 904-8744</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                    <Clock className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Business Hours</h4>
                    <p className="text-slate-500">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-brand-navy rounded-3xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="text-brand-accent w-8 h-8" />
                  <h4 className="text-xl font-bold">Free Consultation</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our initial consultations are always free and come with no obligation. We'll discuss your goals, assess your manuscript's needs, and provide a transparent quote.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input required name="name" type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input required name="email" type="email" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input name="phone" type="tel" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="+1 (000) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Book Genre</label>
                    <select name="genre" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all">
                      <option value="Fiction">Fiction</option>
                      <option value="Non-Fiction">Non-Fiction</option>
                      <option value="Children's Book">Children's Book</option>
                      <option value="Memoir / Biography">Memoir / Biography</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Manuscript Status</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['In Progress', 'Finished', 'Needs Editing'].map((status) => (
                      <label key={status} className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-all">
                        <input type="radio" name="status" value={status} className="accent-brand-accent" />
                        <span className="text-xs font-medium text-slate-600">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Tell us about your project</label>
                  <textarea name="message" rows={4} className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 outline-none transition-all" placeholder="Briefly describe your book and your goals..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input required type="checkbox" className="mt-1 accent-brand-accent" />
                  <p className="text-xs text-slate-500 leading-relaxed">
                    I agree to the <Link to="/privacy" className="text-brand-accent underline">Privacy Policy</Link> and consent to be contacted regarding my inquiry.
                  </p>
                </div>
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
                    {error}
                  </div>
                )}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-navy/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Request a Free Quote'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
