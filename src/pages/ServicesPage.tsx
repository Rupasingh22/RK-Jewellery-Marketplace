import React from 'react';
import { 
  ShoppingBag, 
  Crown, 
  Sparkles, 
  Gem, 
  Heart, 
  Compass, 
  ShieldCheck, 
  Truck, 
  Headphones, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Premium Jewellery Shopping',
      icon: ShoppingBag,
      desc: 'Seamless digital browsing across 100 global luxury houses with certified assay documentation and insured transit.',
      cta: 'Explore All Jewels',
      link: '/category/gold-jewellery'
    },
    {
      id: 2,
      title: 'Gold Jewellery Collections',
      icon: Crown,
      desc: '22K & 24K pure hallmarked gold rings, necklaces, bangles, and mangalsutras created by generational artisans.',
      cta: 'Browse Gold Collection',
      link: '/category/gold-jewellery'
    },
    {
      id: 3,
      title: 'Diamond Jewellery Collections',
      icon: Gem,
      desc: 'GIA & IGI certified solitaires, tension-set eternity bands, and red-carpet tennis bracelets in platinum and gold.',
      cta: 'Browse Diamond Vault',
      link: '/category/diamond-jewellery'
    },
    {
      id: 4,
      title: 'Silver Jewellery Collections',
      icon: Sparkles,
      desc: 'Hallmarked 925 sterling silver jewels treated with anti-tarnish rhodium, featuring Swiss zirconia and oxidised designs.',
      cta: 'Browse Silver Ornaments',
      link: '/category/silver-jewellery'
    },
    {
      id: 5,
      title: 'Bridal Jewellery Collections',
      icon: Heart,
      desc: 'Complete bridal trousseau suites: authentic syndicate polki chokers, temple nakshi harams, and matching tikkas.',
      cta: 'Browse Bridal Trousseau',
      link: '/category/bridal-jewellery'
    },
    {
      id: 6,
      title: 'Fashion Jewellery Collections',
      icon: Compass,
      desc: 'Modern runway statements, 18K micro-plated chandelier earrings, layered chains, and crystal cuffs for evening galas.',
      cta: 'Browse Fashion Studio',
      link: '/category/fashion-jewellery'
    },
    {
      id: 7,
      title: 'Jewellery Customization Enquiries',
      icon: Crown,
      desc: 'Bespoke design consultations with master gemologists to create custom engagement rings and heirloom bridal suites.',
      cta: 'Submit Custom Request',
      link: '/contact#custom'
    },
    {
      id: 8,
      title: 'Secure Payment Options',
      icon: ShieldCheck,
      desc: '256-bit bank-grade encryption supporting all major international cards, split payments, luxury bank wire, and UPI.',
      cta: 'Learn About Security',
      link: '/contact#faq'
    },
    {
      id: 9,
      title: 'Order Tracking, Returns & Support',
      icon: Truck,
      desc: 'Real-time GPS tracking of armoured vault couriers, 15-day return window, and lifetime guaranteed buyback valuations.',
      cta: 'Track An Existing Vault',
      link: '/contact#support'
    },
    {
      id: 10,
      title: 'Customer Assistance & Shopping Guidance',
      icon: Headphones,
      desc: 'Dedicated private concierge advisors available 6 days a week for carat sizing, diamond cut advisory, and gift curation.',
      cta: 'Speak with Concierge',
      link: '/contact#concierge'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12 pb-12">
      
      {/* Header Banner */}
      <section className="bg-[#121212] text-white py-12 border-b border-[#B89553]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">
              Services & Patron Privileges
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Bespoke Services of an <br />
              <span className="gold-gradient-text">International Jewellery House</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              From certified high-jewellery curation to bespoke bridal consultations and discrete armoured transit, explore the ten hallmark facilities offered to every patron of RK Jewellery Marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* The 10 Detailed Services Sections (Grid format for high space-efficiency) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                className="bg-white p-5 rounded-sm border border-[#E9DFD0] hover:border-[#B89553] shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-[#B89553] group-hover:bg-[#121212] group-hover:text-[#D8C29A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#B89553] uppercase tracking-widest">
                      Service 0{srv.id}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-base sm:text-lg font-bold text-[#121212] group-hover:text-[#B89553] transition-colors">
                      {srv.title}
                    </h2>
                    <p className="text-xs text-gray-600 font-light leading-relaxed mt-1">
                      {srv.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-[#FAF7F0] flex items-center justify-between">
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#121212] hover:text-[#B89553] transition"
                  >
                    <span>{srv.cta}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <span className="text-[10px] text-gray-400">Guaranteed Assured</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Service Assurance Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#173D32] text-white p-6 sm:p-8 rounded-sm border border-[#B89553]/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Need a Custom Jewellery Commission?
            </h3>
            <p className="text-xs text-gray-200 mt-1 max-w-xl font-light">
              Connect directly with our master bench jewellers to recreate ancestral pieces, modify carat mountings, or craft singular bridal sets.
            </p>
          </div>
          <Link
            to="/contact#custom"
            className="bg-[#D8C29A] hover:bg-[#B89553] text-[#121212] font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition shrink-0 shadow"
          >
            Initiate Commission
          </Link>
        </div>
      </section>

    </div>
  );
};
