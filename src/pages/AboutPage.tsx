import React from 'react';
import { 
  Crown, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Compass, 
  Layers, 
  HeartHandshake, 
  Gem, 
  Eye, 
  Globe2, 
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      
      {/* SECTION 1: INTRODUCTION TO RK JEWELLERY MARKETPLACE */}
      <section className="bg-[#121212] text-white py-12 border-b border-[#B89553]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              An International Sanctuary of <br />
              <span className="gold-gradient-text">Haute Joaillerie & Timeless Heirlooms</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Founded to preserve the peerless grandeur of royal goldsmithing while integrating modern authentication and digital accessibility, <strong>RK Jewellery Marketplace</strong> serves as a sovereign meeting ground for over 100 global jewellery houses and discerning patrons worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR BRAND STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] sm:aspect-[4/5] rounded-sm overflow-hidden border border-[#B89553]/40 shadow-luxury">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
                alt="Brand Story Artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
              The Genesis of a Grand Marketplace
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              For generations, acquiring royal jewellery meant traveling across ancient bazaar corridors—from the jadau workshops of Rajasthan to the diamond polishing vaults of Antwerp and the temple artisans of Tamil Nadu.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              RK Jewellery Marketplace was founded with a singular ambition: to curate the world’s most venerable jewellery houses into one peerless digital house, where every gold piece is verifiable, every diamond is authenticated, and every bridal trousseau represents unbroken lineage.
            </p>
            <div className="pt-2">
              <div className="text-xs font-serif italic text-[#B89553]">
                "A jewel is not mere ornament; it is the physical memory of love, heritage, and sovereign poise."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VISION */}
      <section className="bg-[#FAF7F0] border-y border-[#E9DFD0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
              Our Sovereign Vision
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
              To be the world’s undisputed definitive digital destination for authenticated luxury jewellery, setting global benchmarks in karigari reverence, ethical sourcing, transparent valuations, and discreet client experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
            Our Guiding Mission
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] shadow-sm space-y-2">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] w-fit rounded-sm">
              <Crown className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#121212]">Preserve Artisanal Lineages</h3>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Empower generational master karigars across India and Europe by providing global patronage for authentic handcrafting.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] shadow-sm space-y-2">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] w-fit rounded-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#121212]">Ensure Absolute Transparency</h3>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Standardize hallmarking, laser-inscribed diamond certificates, and transparent making charge policies on every listing.
            </p>
          </div>

          <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] shadow-sm space-y-2">
            <div className="p-2 bg-[#B89553]/10 text-[#B89553] w-fit rounded-sm">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#121212]">Universal Vault Delivery</h3>
            <p className="text-xs text-gray-600 font-light leading-relaxed">
              Guarantee armored, insured transit directly from master vault rooms to client residences with complete confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR JEWELLERY PHILOSOPHY */}
      <section className="bg-[#173D32] text-white py-10 border-y border-[#B89553]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Philosophy of Perpetual Lustre
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
                We believe true luxury jewellery must never be ephemeral. It should withstand the passage of centuries, passing gracefully from mothers to daughters and grandmothers to brides as treasured talismans of sacred devotion and enduring family pride.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link 
                to="/category/bridal-jewellery"
                className="bg-[#D8C29A] hover:bg-[#B89553] text-[#121212] font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition shadow"
              >
                View Heirloom Sets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR JEWELLERY COLLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
            Curated Jewellery Divisions
          </h2>
          <p className="text-xs text-gray-500 font-light mt-1">
            Every category operates as an independent curated salon upholding strict material standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="p-3 bg-white border border-[#E9DFD0] rounded-sm space-y-1">
            <div className="text-xs font-serif font-bold text-[#121212]">Gold Heirlooms</div>
            <p className="text-[11px] text-gray-500">22K & 24K BIS hallmarked yellow, antique, and rose gold creations.</p>
          </div>
          <div className="p-3 bg-white border border-[#E9DFD0] rounded-sm space-y-1">
            <div className="text-xs font-serif font-bold text-[#121212]">Solitaires & Pavé</div>
            <p className="text-[11px] text-gray-500">VVS-clarity, conflict-free certified natural diamonds in platinum mounts.</p>
          </div>
          <div className="p-3 bg-white border border-[#E9DFD0] rounded-sm space-y-1">
            <div className="text-xs font-serif font-bold text-[#121212]">925 Sterling Silver</div>
            <p className="text-[11px] text-gray-500">Anti-tarnish rhodium finished silver with Swiss zirconia and tribal rawa.</p>
          </div>
          <div className="p-3 bg-white border border-[#E9DFD0] rounded-sm space-y-1">
            <div className="text-xs font-serif font-bold text-[#121212]">Bridal Couture</div>
            <p className="text-[11px] text-gray-500">Uncut Syndicate Polki, Meenakari jadau, and temple nakshi sets.</p>
          </div>
          <div className="p-3 bg-white border border-[#E9DFD0] rounded-sm space-y-1">
            <div className="text-xs font-serif font-bold text-[#121212]">Runway Fashion</div>
            <p className="text-[11px] text-gray-500">18K micron gold-plated statement pieces with Austrian crystals.</p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CRAFTSMANSHIP AND DESIGN INSPIRATION */}
      <section className="bg-[#FAF7F0] border-y border-[#E9DFD0] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                Craftsmanship & Design Inspiration
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Our catalogues celebrate timeless Indian architectural heritage: the sculpted jaali work of Amber Fort, the majestic Gopuram carvings of Madurai, and the delicate floral motifs of Persian carpets.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Simultaneously, our European diamond ateliers harness precision 3D CAD modeling, tension settings, and microscopic pavé techniques to ensure that light dances freely through every faceted pavilion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square rounded-sm overflow-hidden border border-[#E9DFD0]">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80"
                  alt="Goldsmith Craft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden border border-[#E9DFD0]">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80"
                  alt="Diamond Setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: QUALITY AND TRANSPARENCY STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
            Quality & Transparency Standards
          </h2>
          <p className="text-xs text-gray-500 font-light mt-1">
            Every product listing undergoes verifiable testing and documented assaying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-[#E9DFD0] rounded-sm space-y-1.5">
            <div className="text-xs font-serif font-bold text-[#B89553]">BIS 916 & 750 Hallmarking</div>
            <p className="text-[11px] text-gray-600 font-light">Every gold item bears government recognized hallmarking with unique HUID traceability.</p>
          </div>
          <div className="p-4 bg-white border border-[#E9DFD0] rounded-sm space-y-1.5">
            <div className="text-xs font-serif font-bold text-[#B89553]">GIA & IGI Diamond Grading</div>
            <p className="text-[11px] text-gray-600 font-light">Solitaires feature physical and digital authentication certificates detailing Cut, Color, Clarity, and Carat weight.</p>
          </div>
          <div className="p-4 bg-white border border-[#E9DFD0] rounded-sm space-y-1.5">
            <div className="text-xs font-serif font-bold text-[#B89553]">925 Sterling Assay Stamping</div>
            <p className="text-[11px] text-gray-600 font-light">Silver items carry certified 92.5% purity stamps accompanied by anti-tarnish rhodium certificates.</p>
          </div>
          <div className="p-4 bg-white border border-[#E9DFD0] rounded-sm space-y-1.5">
            <div className="text-xs font-serif font-bold text-[#B89553]">Zero Hidden Making Charges</div>
            <p className="text-[11px] text-gray-600 font-light">Clear breakdown of net metal weight, stone weight, and crafting fees on every order invoice.</p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CUSTOMER EXPERIENCE */}
      <section className="bg-[#121212] text-white py-10 border-y border-[#B89553]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Private Concierge Experience
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Enjoy personalized bridal appointments, custom ring engraving, home try-on appointments via armored courier in select metro cities, and dedicated gemological advisors available six days a week.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link 
                to="/contact"
                className="bg-[#B89553] hover:bg-[#D8C29A] text-[#121212] font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition shadow"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FUTURE VISION AND EXPANSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
            Future Expansion & Global Salons
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            As we expand across Dubai, London, Singapore, and New York, our commitment remains steadfast: celebrating genuine artisan heritage, empowering master jewellers, and offering discerning patrons a seamless luxury shopping journey.
          </p>
          <div className="pt-2">
            <Link 
              to="/category/gold-jewellery"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89553] hover:text-[#121212] transition"
            >
              <span>Explore Marketplace Catalogues</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
