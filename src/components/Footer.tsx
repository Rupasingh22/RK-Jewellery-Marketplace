import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Truck, 
  RotateCcw, 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { CATEGORIES } from '../data/categoriesAndBrands';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#121212] text-gray-300 border-t border-[#B89553]/30 pt-10 pb-6 relative z-10">
      
      {/* 4 Pillars Trust Row - Compact Luxury Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 border-b border-[#292929]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded bg-[#181818]/60 border border-[#B89553]/20">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] rounded-sm shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">100% Certified Purity</div>
              <div className="text-[11px] text-gray-400">BIS Hallmarked & GIA Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded bg-[#181818]/60 border border-[#B89553]/20">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] rounded-sm shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">Insured Armored Delivery</div>
              <div className="text-[11px] text-gray-400">Doorstep Vault Transit</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded bg-[#181818]/60 border border-[#B89553]/20">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] rounded-sm shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">Lifetime Exchange & Buyback</div>
              <div className="text-[11px] text-gray-400">Transparent Valuations</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded bg-[#181818]/60 border border-[#B89553]/20">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] rounded-sm shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-wide">Master Karigari Guarantee</div>
              <div className="text-[11px] text-gray-400">Royal Finishing Standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 5-Column Navigation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Col 1: Brand & House Intro */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#B89553] to-[#8C6D33] p-[1px]">
                <div className="w-full h-full bg-[#121212] flex items-center justify-center font-serif text-[#B89553] font-bold text-sm">
                  RK
                </div>
              </div>
              <span className="font-serif text-lg font-bold tracking-widest text-white">
                RK JEWELLERY MARKETPLACE
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed pr-4">
              RK Jewellery Marketplace is an international luxury jewellery house uniting the finest legacy maisons and contemporary ateliers. We curate over 100 distinguished jewellery houses and 5,000+ certified gold, solitaire, sterling silver, and bridal masterpieces.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-1.5 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B89553] shrink-0" />
                <span>Pune , Maharashtra , India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B89553] shrink-0" />
                <span>Concierge & Private Appointments: +91 9153832633</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B89553] shrink-0" />
                <span>rkvertex22@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: The 5 Categories */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D8C29A] uppercase mb-3">
              Jewellery Houses
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map(c => (
                <li key={c.id}>
                  <Link 
                    to={`/category/${c.slug}`} 
                    className="hover:text-[#B89553] transition flex items-center gap-1.5"
                  >
                    <span className="text-[#B89553]/60 text-[10px]">›</span>
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/brand/tanishq-gold" className="text-gray-400 hover:text-white transition flex items-center gap-1.5">
                  <span className="text-[#B89553]/60 text-[10px]">›</span>
                  100 Brand Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Care & Policies */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D8C29A] uppercase mb-3">
              Client Care & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-[#B89553] transition">Our Brand Story</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B89553] transition">Customization Enquiries</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B89553] transition">Book A Private Salon</Link>
              </li>
              <li>
                <Link to="/contact#faq" className="hover:text-[#B89553] transition">Gold & Diamond FAQ</Link>
              </li>
              <li>
                <span className="text-gray-400">Certificate Verification</span>
              </li>
              <li>
                <span className="text-gray-400">Lifetime Buyback Policy</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#D8C29A] uppercase mb-3">
              The Royal Gazette
            </h4>
            <p className="text-[11px] text-gray-400 mb-2.5">
              Subscribe to receive private invitations to high-jewellery showcases and bespoke launches.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your VIP email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1b1b1b] border border-[#B89553]/40 rounded-sm text-xs px-3 py-2 text-white focus:outline-none focus:border-[#B89553] pr-8"
                />
                <button 
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#B89553] hover:text-white"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#B89553] flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Welcome to the RK Gazette.
                </div>
              )}
            </form>

            <div className="pt-3">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Connect with Maison</div>
              <div className="flex items-center space-x-3 text-xs text-[#D8C29A]">
                <span className="hover:text-white cursor-pointer transition">Instagram</span>
                <span>•</span>
                <span className="hover:text-white cursor-pointer transition">Facebook</span>
                <span>•</span>
                <span className="hover:text-white cursor-pointer transition">YouTube</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-[#222222] text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {new Date().getFullYear()} RK Jewellery Marketplace Inc. All global rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-gray-300 cursor-pointer">Terms & Conditions</span>
          <span>•</span>
          <span className="hover:text-gray-300 cursor-pointer">Return & Refund Policy</span>
          <span>•</span>
          <span className="hover:text-gray-300 cursor-pointer">Authenticity Guarantee</span>
        </div>
      </div>
    </footer>
  );
};
