import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (type: 'email' | 'phone') => {
    const text = type === 'email' ? PERSONAL_INFO.email : PERSONAL_INFO.phone;
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Prepare mailto link as functional fallback for static client environment
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Abdul Aziz,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <span>GET IN TOUCH DIRECTLY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Contact Abdul Aziz
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Open to entry-level industrial electrical maintenance roles in factories, mills, or electrical contracting companies. Reach out directly via email, phone, or the validated contact form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Email */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase block">Verified Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('email')}
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copiedType === 'email' && (
              <p className="text-[11px] text-emerald-400 font-mono">✓ Email copied to clipboard</p>
            )}
          </div>

          {/* Card 2: Phone */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase block">Direct Phone</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy('phone')}
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy phone number"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copiedType === 'phone' && (
              <p className="text-[11px] text-emerald-400 font-mono">✓ Phone number copied to clipboard</p>
            )}
          </div>

          {/* Card 3: WhatsApp Quick Chat */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase block">WhatsApp Messenger</span>
                <span className="text-sm font-bold text-white block">Fast Direct Response</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Available for quick messaging regarding interviews, technical assessments, or site walk-throughs.
            </p>
            <a
              href="https://wa.me/923452489424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+92 3452489424)</span>
            </a>
          </div>

          {/* Card 4: Work Availability Badge */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold">
              <Clock className="w-4 h-4" />
              <span>EMPLOYMENT AVAILABILITY</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              • Available for immediate start in industrial maintenance and installation roles.
            </p>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              • Flexible with plant shift rotations (day/night shifts) and weekend maintenance shutdowns.
            </p>
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                download="Abdul_Aziz_Electrical_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline text-[11px] font-mono"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download verified CV document (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form with Validation & Mailto Fallback */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Send a Direct Message
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below. As no server-side database is required, this form will validate your inputs and open your email client pre-filled with the message details.
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-xs text-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-bold font-mono">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Email Staged Successfully</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  Your default email client has been triggered with your message formatted to <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                  className="inline-block text-cyan-400 underline font-mono text-[11px] pt-1"
                >
                  Click here if your email app did not open automatically
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    Your Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Khan"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-rose-400 font-mono block">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. manager@factory.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-rose-400 font-mono block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono text-slate-300">
                    Subject / Role Opportunity <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Industrial Maintenance Technician Interview"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-rose-400 font-mono block">{errors.subject}</span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-xs font-mono text-slate-300">
                  Message Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe the electrical technician position, plant requirements, shift timings, or interview details..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none ${
                    errors.message ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-400 font-mono block">{errors.message}</span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-cyan-600/30 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Direct communication: no intermediaries or third-party mailing queues.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
