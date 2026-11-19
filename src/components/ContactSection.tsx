import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: 'AI Commercial Video Production',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [handoffUrl, setHandoffUrl] = useState('');

  const servicesList = [
    'AI Commercial Video Production',
    'Graphic Design',
    'Website Design for Brands',
    'Multiple Services',
    'Other',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format (e.g. name@brand.com).';
    }

    if (!formData.company.trim()) {
      errs.company = 'Please enter your company or brand name.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please provide a brief project description (min 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp Handoff Message
    const textMsg = encodeURIComponent(
      `*New Project Enquiry — ZINAT STUDIO*\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Brand:* ${formData.company}\n` +
      `*Service:* ${formData.service}\n` +
      `*Budget:* ${formData.budget || 'Not specified'}\n` +
      `*Project Brief:* ${formData.description}`
    );
    const waUrl = `https://wa.me/2349129129572?text=${textMsg}`;
    setHandoffUrl(waUrl);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#08070D] overflow-hidden min-h-screen">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/10 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#211039]/60 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* SECTION HEADER */}
        <div className="reveal-on-scroll max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#211039]/60 border border-[#8B5CF6]/40 text-[#C4A7FF] text-xs font-mono tracking-[0.25em] uppercase mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            DIRECT COMMISSIONS & INQUIRIES
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3FA] mb-6">
            <span className="letter-bounce">HAVE</span> <span className="letter-bounce">AN</span> <span className="letter-bounce">IDEA?</span>
            <br />
            <span className="text-shimmer">
              LET'S MAKE IT UNFORGETTABLE.
            </span>
          </h1>
          <p className="font-body text-[#B9B7C6] text-base sm:text-lg leading-relaxed max-w-2xl">
            Have a brand, a vision or a project waiting to come to life? Tell us what you have in mind. Connect directly with our studio directors below.
          </p>
        </div>

        {/* TWO COLUMN GRID: DIRECT STUDIO CHANNELS & DEDICATED WORKING ENQUIRY FORM */}
        <div className="reveal-on-scroll delay-200 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: OFFICIAL CONTACT CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171026] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#8B5CF6] mb-2">
                STUDIO DIRECT CONTACT
              </div>
              <h2 className="font-display font-bold text-2xl text-[#F5F3FA] mb-6">
                ZINAT STUDIO
              </h2>

              <div className="space-y-4">
                
                {/* Email Item */}
                <a
                  href="mailto:dollyziba@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#211039]/40 border border-white/[0.06] hover:border-[#8B5CF6]/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4A7FF] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-[#B9B7C6] uppercase">
                      Studio Email
                    </div>
                    <div className="text-sm sm:text-base font-display font-semibold text-[#F5F3FA] group-hover:text-[#C4A7FF] transition-colors">
                      dollyziba@gmail.com
                    </div>
                  </div>
                </a>

                {/* Direct Phone Item */}
                <a
                  href="tel:09129129572"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#211039]/40 border border-white/[0.06] hover:border-[#8B5CF6]/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4A7FF] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-[#B9B7C6] uppercase">
                      Studio Phone
                    </div>
                    <div className="text-sm sm:text-base font-display font-semibold text-[#F5F3FA] group-hover:text-[#C4A7FF] transition-colors">
                      09129129572
                    </div>
                  </div>
                </a>

                {/* WhatsApp Item */}
                <a
                  href="https://wa.me/2349129129572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#211039]/40 border border-white/[0.06] hover:border-[#25D366]/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-[#B9B7C6] uppercase">
                      WhatsApp Direct
                    </div>
                    <div className="text-sm sm:text-base font-display font-semibold text-[#F5F3FA] group-hover:text-[#25D366] transition-colors">
                      +234 912 912 9572
                    </div>
                  </div>
                </a>

              </div>

              {/* Working hours notice */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs font-mono text-[#B9B7C6] flex items-center justify-between">
                <span>GLOBAL CLIENT INTAKE</span>
                <span className="text-[#8B5CF6]">WITHIN 24 HOURS</span>
              </div>
            </div>
          </div>

          {/* RIGHT: COMPLETE FUNCTIONAL PROJECT ENQUIRY FORM */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#171026] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <h2 className="font-display font-bold text-xl text-[#F5F3FA]">
                    PROJECT BRIEF & ENQUIRY
                  </h2>
                  <p className="text-xs text-[#B9B7C6] mt-0.5">
                    Share your vision, requested deliverables, and timeline.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#8B5CF6] bg-[#211039] px-2.5 py-1 rounded border border-white/[0.08]">
                  OFFICIAL DESK
                </span>
              </div>

              {isSubmitted ? (
                /* SUCCESS STATE WITH DIRECT CHANNELS HANDOFF */
                <div className="py-10 text-center space-y-6 animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6] text-[#C4A7FF] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-display font-extrabold text-3xl text-[#F5F3FA]">
                    ENQUIRY PREPARED!
                  </h3>

                  <p className="font-body text-[#B9B7C6] max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project brief for <strong className="text-[#C4A7FF]">{formData.company}</strong> has been structured. Send directly via WhatsApp or Email:
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                      href={handoffUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>OPEN IN WHATSAPP NOW</span>
                    </a>

                    <a
                      href={`mailto:dollyziba@gmail.com?subject=Project Enquiry from ${formData.company}&body=Hi ZINAT STUDIO,%0D%0A%0D%0AFrom: ${formData.fullName}%0D%0AService: ${formData.service}%0D%0ABudget: ${formData.budget}%0D%0A%0D%0AProject Brief:%0D%0A${encodeURIComponent(formData.description)}`}
                      className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#101018] border border-white/20 text-[#F5F3FA] hover:text-white font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>SEND DIRECT EMAIL</span>
                    </a>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          service: 'AI Commercial Video Production',
                          budget: '',
                          description: '',
                        });
                      }}
                      className="text-xs font-mono text-[#B9B7C6] hover:text-[#C4A7FF] underline"
                    >
                      Submit another project enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* CONTACT FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B7C6] mb-2">
                        Full Name <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Jordan Vance"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#101018] border text-[#F5F3FA] placeholder-[#B9B7C6]/40 text-sm focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#8B5CF6]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B7C6] mb-2">
                        Email Address <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jordan@brand.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#101018] border text-[#F5F3FA] placeholder-[#B9B7C6]/40 text-sm focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#8B5CF6]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Company / Brand Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B7C6] mb-2">
                        Company or Brand Name <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kinetix Motors"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#101018] border text-[#F5F3FA] placeholder-[#B9B7C6]/40 text-sm focus:outline-none transition-colors ${
                          errors.company ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#8B5CF6]'
                        }`}
                      />
                      {errors.company && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B7C6] mb-2">
                        Service Required <span className="text-[#8B5CF6]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-white/10 text-[#F5F3FA] text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-[#101018] text-[#F5F3FA]">
                            {svc}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Project Budget (Optional) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B7C6] mb-2">
                      Project Budget <span className="text-[#B9B7C6]/60 font-sans normal-case">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. $5,000 - $15,000 / Flexible"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#101018] border border-white/10 text-[#F5F3FA] placeholder-[#B9B7C6]/40 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9B7C6] mb-2">
                      Project Description <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your vision, target timeline, deliverables, or desired aesthetic..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#101018] border text-[#F5F3FA] placeholder-[#B9B7C6]/40 text-sm focus:outline-none transition-colors resize-none ${
                        errors.description ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#8B5CF6]'
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="pointer"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#743BF6] to-[#8B5CF6] hover:opacity-95 text-white font-display font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.45)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>PACKAGING ENQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND PROJECT ENQUIRY</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
