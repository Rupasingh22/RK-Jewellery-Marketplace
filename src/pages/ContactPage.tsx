import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: 'General Enquiry',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        enquiryType: 'General Enquiry',
        subject: '',
        message: ''
      });
    }, 6000);
  };

  const faqs = [
    {
      q: 'How does RK Jewellery Marketplace guarantee gold purity?',
      a: 'Every gold jewel listed on our marketplace is 100% BIS Hallmarked with a verifiable 6-digit HUID (Hallmark Unique Identification Number) readable through the government portal.'
    },
    {
      q: 'Are all diamonds certified by international gemological laboratories?',
      a: 'Yes. Solitaires above 0.30 carats feature physical certificates from GIA (Gemological Institute of America) or IGI (International Gemological Institute) with laser inscriptions on the girdle.'
    },
    {
      q: 'How is high-value jewellery shipped securely?',
      a: 'All orders are dispatched via dedicated armored logistics partners (such as Brink’s and Sequel Logistics) in tamper-evident, electronically monitored vault cases.'
    },
    {
      q: 'What is your lifetime exchange and buyback policy?',
      a: 'We offer transparent lifetime buyback and exchange on gold bullion value and prevailing diamond market rates across participating maison partners.'
    },
    {
      q: 'Can I request a private salon appointment or bridal home preview?',
      a: 'Yes, our Concierge can arrange discrete viewing appointments at our flagship Imperial Tower salon or schedule an armored home try-on service in select metro regions.'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 pb-12">
      
      {/* SECTION 1: CONTACT HERO SECTION */}
      <section className="bg-[#121212] text-white py-12 border-b border-[#B89553]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Connect with The <br />
              <span className="gold-gradient-text">RK Private Concierge</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Whether you wish to commission a bespoke bridal trousseau, verify certificate records, or schedule a discreet salon appointment, our advisors are at your sovereign service.
            </p>
          </div>
        </div>
      </section>

      {/* SECTIONS 2, 3, 4: COMPANY INFORMATION, CONTACT FORM & CUSTOMER SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Company Info & Customer Support (Sections 2 & 4) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SECTION 2: COMPANY INFORMATION */}
            <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] shadow-sm space-y-4">
              <div className="border-b border-[#FAF7F0] pb-2">
                <h2 className="font-serif text-lg font-bold text-[#121212]">
                  Maison Headquarters
                </h2>
              </div>

              <div className="space-y-3 text-xs text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B89553] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">RK Imperial Tower</div>
                    <div className="text-gray-500 font-light">Pune , Maharashtra, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B89553] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Direct Concierge Telephony</div>
                    <div className="text-gray-500 font-light">+91 9153832633</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B89553] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Official Correspondence</div>
                    <div className="text-gray-500 font-light">rkvertex22@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B89553] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Salon Hours</div>
                    <div className="text-gray-500 font-light">Monday – Saturday: 10:00 AM – 8:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: CUSTOMER SUPPORT CHANNELS */}
            <div className="bg-[#FAF7F0] p-5 rounded-sm border border-[#E9DFD0] space-y-3">
              <h3 className="font-serif text-base font-bold text-[#121212]">
                Dedicated Support Desks
              </h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Our support team is organized into three specialised desks: Bullion & Purity Assay Desk, Diamond Authentication Office, and Matrimonial Trousseau Advisory.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-[#173D32]">
                <ShieldCheck className="w-4 h-4" />
                <span>24-Hour Callback Assurance for Patrons</span>
              </div>
            </div>

          </div>

          {/* Right Column: SECTION 3 - CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E9DFD0] shadow-luxury">
              <div className="border-b border-[#FAF7F0] pb-3 mb-5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#121212]">
                  Send a Formal Enquiry
                </h2>
                <p className="text-xs text-gray-500 font-light mt-0.5">
                  Complete the fields below to connect with a senior jewellery specialist.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-[#173D32]/10 border border-[#173D32]/30 rounded-sm text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#173D32] mx-auto" />
                  <h3 className="font-serif text-lg font-bold text-[#173D32]">Enquiry Dispatched with Honour</h3>
                  <p className="text-xs text-gray-700 max-w-sm mx-auto">
                    Thank you, {formData.fullName}. Your request has been assigned to a Senior Joaillerie Concierge who will respond via phone and encrypted email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rupa Singh"
                        className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-3 py-2 text-gray-900 focus:outline-none focus:border-[#B89553]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rkvertex22@gmail.com"
                        className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-3 py-2 text-gray-900 focus:outline-none focus:border-[#B89553]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9153832633"
                        className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-3 py-2 text-gray-900 focus:outline-none focus:border-[#B89553]"
                      />
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-700 mb-1">
                        Enquiry Type *
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-3 py-2 text-gray-900 focus:outline-none focus:border-[#B89553]"
                      >
                        <option>General Enquiry</option>
                        <option>Jewellery Enquiries</option>
                        <option>Bridal Collection Enquiries</option>
                        <option>Custom Jewellery Enquiries</option>
                        <option>Certificate Verification</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Consultation for 22K Kundan Polki Bridal Set"
                      className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-3 py-2 text-gray-900 focus:outline-none focus:border-[#B89553]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify design preferences, carat weights, wedding date, or custom requests..."
                      className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-3 py-2 text-gray-900 focus:outline-none focus:border-[#B89553]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#121212] hover:bg-[#B89553] text-[#D8C29A] hover:text-[#121212] font-semibold text-xs uppercase tracking-widest py-3 px-4 rounded-sm transition flex items-center justify-center gap-2 shadow"
                  >
                    <span>Transmit Formal Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* SECTIONS 5, 6, 7: SPECIALISED ENQUIRIES PANELS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* SECTION 5: JEWELLERY ENQUIRIES */}
          <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] space-y-2">
            <h3 className="font-serif text-base font-bold text-[#121212]">Jewellery Enquiries</h3>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Seeking specific weight metrics, hallmark registration, or current gold rate adjustments? Our gem desk provides instant clarity on all 5,000+ catalog listings.
            </p>
            <div className="text-[11px] text-[#B89553] font-medium pt-1">
              jewellerydesk@rkjewellerymarketplace.com
            </div>
          </div>

          {/* SECTION 6: BRIDAL COLLECTION ENQUIRIES */}
          <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] space-y-2">
            <h3 className="font-serif text-base font-bold text-[#121212]">Bridal Collection Enquiries</h3>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Planning wedding trousseaus across regional traditions (Kundan Jadau, Polki, Temple Gold, or Victorian Diamond suites). Includes dedicated family video previews.
            </p>
            <div className="text-[11px] text-[#B89553] font-medium pt-1">
              bridal@rkjewellerymarketplace.com
            </div>
          </div>

          {/* SECTION 7: CUSTOM JEWELLERY ENQUIRIES */}
          <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] space-y-2">
            <h3 className="font-serif text-base font-bold text-[#121212]">Custom Jewellery Enquiries</h3>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Transform family rough diamonds, modify existing antique settings, or build one-of-a-kind engagement solitaires from scratch with 3D wax prototypes.
            </p>
            <div className="text-[11px] text-[#B89553] font-medium pt-1">
              bespoke@rkjewellerymarketplace.com
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-2 pt-2">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#E9DFD0] rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#121212] hover:bg-[#FAF7F0] transition"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#B89553] font-bold text-base ml-2">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-gray-600 font-light leading-relaxed border-t border-[#FAF7F0]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL MEDIA CONNECTIONS */}
      <section className="bg-[#173D32] text-white py-10 border-y border-[#B89553]/30 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h2 className="font-serif text-2xl font-bold text-white">
            Connect Across Haute Joaillerie Media
          </h2>
          <p className="text-xs text-gray-200 font-light leading-relaxed">
            Follow our daily archival exhibitions, behind-the-scenes karigari films, and private launch announcements.
          </p>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs text-[#D8C29A]">
            <span className="hover:text-white cursor-pointer transition font-medium">@RKJewelleryOfficial (Instagram)</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition font-medium">RK Luxury House (Facebook)</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition font-medium">RK Joaillerie Channel (YouTube)</span>
          </div>
        </div>
      </section>

      {/* SECTION 10: LOCATION AND MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#E9DFD0] rounded-sm overflow-hidden bg-white">
          <div className="p-4 bg-[#FAF7F0] border-b border-[#E9DFD0] flex flex-col sm:flex-row items-baseline justify-between">
            <div>
              <h3 className="font-serif text-base font-bold text-[#121212]">
                The Imperial Tower Flagship Salon & Assaying Laboratory
              </h3>
            </div>
            <span className="text-xs text-gray-500 font-light mt-1 sm:mt-0">
              By Prior Appointment Only
            </span>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 aspect-[21/9] bg-[#121212] rounded-sm flex items-center justify-center relative overflow-hidden border border-[#222222]">
              <div className="text-center p-4 z-10">
                <MapPin className="w-8 h-8 text-[#B89553] mx-auto mb-2 animate-bounce" />
                <div className="font-serif text-sm font-bold text-white">RK Imperial Tower, Mumbai</div>
                <div className="text-[11px] text-gray-400">Lat: 18.9322° N, Long: 72.8347° E (Fort Joaillerie Quarter)</div>
              </div>
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#B89553_1px,transparent_1px)] [background-size:12px_12px]" />
            </div>

            <div className="space-y-3 text-xs text-gray-600 font-light">
              <div className="font-serif font-bold text-sm text-[#121212]">Valet & Armored Reception</div>
              <p>
                Private salon patrons enjoy secure subterranean valet parking, biometric vault security, and private chambers for bridal trousseau evaluation.
              </p>
              <div className="pt-1">
                <a 
                  href="tel:+91 9153832633"
                  className="text-xs font-semibold uppercase tracking-wider text-[#B89553] hover:underline"
                >
                  Dial Salon Security Desk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
