import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Crown, 
  Award, 
  Clock, 
  ChevronRight, 
  Star, 
  Gem, 
  Compass, 
  Flame, 
  Gift, 
  Layers
} from 'lucide-react';
import { CATEGORIES, BRANDS } from '../data/categoriesAndBrands';
import { 
  getFeaturedProducts, 
  getBestsellerProducts, 
  getNewArrivalProducts, 
  formatINR 
} from '../data/productsData';
import { ProductCard } from '../components/ProductCard';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bestseller' | 'new' | 'featured'>('bestseller');

  const featuredList = getFeaturedProducts(8);
  const bestsellersList = getBestsellerProducts(8);
  const newArrivalsList = getNewArrivalProducts(8);

  const displayedProducts = activeTab === 'bestseller' 
    ? bestsellersList 
    : activeTab === 'new' 
    ? newArrivalsList 
    : featuredList;

  // Selected featured brands across all categories
  const featuredBrands = BRANDS.slice(0, 12);

  // Customer Reviews Data
  const customerReviews = [
    {
      id: 'rev-1',
      name: 'Princess Gayatri Devi',
      location: 'Jaipur, Rajasthan',
      review: 'The craftsmanship of the royal polki bridal necklace exceeded all expectations. The hallmarking and certificate documentation gave complete peace of mind. Truly international standard.',
      rating: 5,
      product: 'Sabyasachi Heritage Polki Suite'
    },
    {
      id: 'rev-2',
      name: 'Aishwarya R. Menon',
      location: 'Kochi, Kerala',
      review: 'Purchased an authentic 22K temple kasu mala. The weight, density, and finish are impeccably royal. The insured armoured delivery arrived in two days with sealed security cases.',
      rating: 5,
      product: 'Malabar Gold Heritage Haram'
    },
    {
      id: 'rev-3',
      name: 'Vikram & Meera Singhania',
      location: 'Mumbai, Maharashtra',
      review: 'Finding certified solitaire diamond rings with triple excellent cut was effortless on RK Marketplace. The concierge service assisted with custom sizing seamlessly.',
      rating: 5,
      product: 'De Beers Forevermark Solitaire 2.5ct'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 pb-12">
      
      {/* SECTION 1: LUXURY HERO EXPERIENCE (Compact, Editorial, Non-oversized) */}
      <section className="relative bg-[#121212] text-white overflow-hidden border-b border-[#B89553]/30">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B89553_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] border border-[#B89553]/50 rounded-full text-xs font-medium text-[#D8C29A]">
                <Crown className="w-3.5 h-3.5 text-[#B89553]" />
                <span className="tracking-widest uppercase text-[10px]">International Haute Joaillerie</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Peerless Heirlooms. <br />
                <span className="gold-gradient-text italic font-normal">Pure Gold, Solitaires & Regal Trousseaus.</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light leading-relaxed">
                Welcome to <strong className="text-[#D8C29A] font-medium">RK Jewellery Marketplace</strong>, the premier luxury sanctuary curating over 100 royal heritage houses and 5,000+ certified jewellery masterpieces. From 24K pure bullion artistry to rare solitaire cuts.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/category/bridal-jewellery"
                  className="bg-[#B89553] hover:bg-[#D8C29A] text-[#121212] font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition flex items-center gap-2 shadow-gold"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/category/diamond-jewellery"
                  className="border border-[#B89553]/60 hover:border-white text-white font-medium text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition hover:bg-white/10"
                >
                  Explore Jewellery
                </Link>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#252525] max-w-lg">
                <div>
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#D8C29A]">100+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Iconic Maisons</div>
                </div>
                <div>
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#D8C29A]">5,000+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Certified Jewels</div>
                </div>
                <div>
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#D8C29A]">100%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">BIS Hallmarked</div>
                </div>
              </div>
            </div>

            {/* Right Editorial Hero Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md rounded-sm overflow-hidden border border-[#B89553]/40 shadow-2xl p-1 bg-gradient-to-b from-[#B89553]/30 via-transparent to-[#B89553]/20">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#1A1A1A]">
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
                    alt="Haute Jewellery Campaign"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Luxury Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#121212]/90 backdrop-blur-md border border-[#B89553]/50 p-3 rounded-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-[#B89553] font-semibold">Maison Spotlight</span>
                        <div className="font-serif text-xs font-bold text-white">Sabyasachi Heritage Polki Choker</div>
                      </div>
                      <Link 
                        to="/product/sabyasachi-heritage-polki-jewellery-2" 
                        className="text-[10px] text-[#D8C29A] hover:underline flex items-center gap-0.5"
                      >
                        Inspect <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: EXPLORE JEWELLERY CATEGORIES (All 5 Categories Displayed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-2 border-b border-[#E9DFD0]">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">The Five Pillars</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
              Explore Main Jewellery Categories
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-sm font-light mt-1 sm:mt-0">
            Dedicated master departments spanning pure gold, natural diamonds, fine sterling silver, bespoke bridal suites, and haute couture fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group relative bg-[#121212] rounded-sm overflow-hidden border border-[#E9DFD0] hover:border-[#B89553] transition-all duration-300 shadow-sm flex flex-col"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-[#202020]">
                <img
                  src={cat.heroImage}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[9px] uppercase tracking-widest text-[#B89553] font-semibold">
                    Category 0{i + 1}
                  </div>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#D8C29A] transition-colors leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                    {cat.subcategories.slice(0, 3).join(', ')}
                  </p>
                </div>
              </div>

              <div className="p-2.5 bg-white flex items-center justify-between text-xs border-t border-[#FAF7F0]">
                <span className="text-[11px] font-medium text-gray-700 group-hover:text-[#B89553] transition">
                  Browse 20 Maisons
                </span>
                <span className="text-[#B89553] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: EXCLUSIVE BRAND COLLECTIONS (Featured Brands with Logos) */}
      <section className="bg-[#173D32] text-white py-10 border-y border-[#B89553]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#D8C29A] font-bold">100 Prestigious Houses</span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Exclusive Brand Collections
              </h2>
            </div>
            <Link 
              to="/category/gold-jewellery" 
              className="text-xs text-[#D8C29A] hover:underline flex items-center gap-1 mt-1 sm:mt-0"
            >
              View Full 100 Brand Directory <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {featuredBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brand/${brand.id}`}
                className="group bg-[#122A22] border border-[#B89553]/30 hover:border-[#B89553] p-3 rounded-sm flex flex-col items-center text-center transition-all duration-300 hover:bg-[#0E201A] shadow-sm"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 p-1 mb-2 border border-[#B89553]/40 group-hover:scale-105 transition">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="font-serif text-xs font-semibold text-white group-hover:text-[#D8C29A] line-clamp-1">
                  {brand.name}
                </h4>
                <span className="text-[9px] text-[#D8C29A]/80 uppercase tracking-wider mt-0.5">
                  {brand.origin.split(',')[0]}
                </span>
                <span className="text-[10px] text-gray-300 mt-1 font-medium bg-[#173D32] px-2 py-0.5 rounded border border-[#B89553]/20">
                  50+ Jewels
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 & 5: DYNAMIC TRENDING JEWELLERY & NEW ARRIVALS (Tabs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-2 border-b border-[#E9DFD0] gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">Curated Highlights</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
              Trending Masterpieces & New Arrivals
            </h2>
          </div>

          {/* Luxury Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#FAF7F0] p-1 border border-[#E9DFD0] rounded-sm">
            <button
              onClick={() => setActiveTab('bestseller')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition rounded-sm ${
                activeTab === 'bestseller' 
                  ? 'bg-[#121212] text-[#D8C29A] shadow-sm' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Trending & Bestsellers
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition rounded-sm ${
                activeTab === 'new' 
                  ? 'bg-[#121212] text-[#D8C29A] shadow-sm' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              New Arrivals
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wider uppercase transition rounded-sm ${
                activeTab === 'featured' 
                  ? 'bg-[#121212] text-[#D8C29A] shadow-sm' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Curator’s Choice
            </button>
          </div>
        </div>

        {/* Dense Efficient 4-Column Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 6: BRIDAL & WEDDING COLLECTION SHOWCASE (Luxurious Photography & Narrative) */}
      <section className="bg-[#121212] text-white py-12 border-y border-[#B89553]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-[#B89553]/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80"
                  alt="Royal Bridal Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4 bg-[#B89553] text-[#121212] text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase">
                  Royal Trousseau
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">
                Maha Vivaha & Royalty
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                The Royal Bridal & Wedding Sanctum
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Sculpted for life’s most auspicious passage. Immerse in uncut syndicate polki chokers, Bikaneri Meenakari enamels, authentic temple nakshi harams, and matching hathphool sets designed by imperial goldsmiths.
              </p>

              {/* Bridal Highlights */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="border border-[#282828] p-3 rounded-sm bg-[#181818]/80">
                  <div className="text-xs font-serif font-bold text-[#D8C29A]">Imperial Jadau & Polki</div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Syndicate uncut diamonds backed by pure 24K gold foil setting.</p>
                </div>
                <div className="border border-[#282828] p-3 rounded-sm bg-[#181818]/80">
                  <div className="text-xs font-serif font-bold text-[#D8C29A]">Sacred Temple Carvings</div>
                  <p className="text-[11px] text-gray-400 mt-0.5">Auspicious Lakshmi, Peacock, and Hansa motifs in 22K hallmarked gold.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Link
                  to="/category/bridal-jewellery"
                  className="bg-[#B89553] hover:bg-[#D8C29A] text-[#121212] font-semibold text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition flex items-center gap-2 shadow-gold"
                >
                  <span>Explore 20 Bridal Maisons</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/services"
                  className="text-xs text-[#D8C29A] hover:text-white underline tracking-wider"
                >
                  Custom Trousseau Consultation
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: PREMIUM GOLD & DIAMOND COLLECTION (Product Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-6 pb-2 border-b border-[#E9DFD0]">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">Bullion & Solitaire Brilliance</div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
              Premium Gold & Diamond Vault
            </h2>
          </div>
          <Link
            to="/category/diamond-jewellery"
            className="text-xs text-[#B89553] hover:underline flex items-center gap-1 font-medium mt-1 sm:mt-0"
          >
            Explore Solitaire Collection <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {featuredList.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* SECTION 8: EXCLUSIVE OFFERS & BESPOKE INCENTIVES (Compact Banner) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#173D32] via-[#122A22] to-[#121212] text-white rounded-sm border border-[#B89553]/40 p-6 sm:p-8 shadow-luxury relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <span className="bg-[#B89553] text-[#121212] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-none">
                Private Salon Offer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Festive Solitaire & Bullion Privileges
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light">
                Enjoy zero making charges on diamond solitaires above 1.5 carats, plus complimentary certified gold coins with bridal trousseaus valued above ₹2,00,000.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-center gap-3">
              <Link
                to="/category/gold-jewellery"
                className="bg-[#D8C29A] hover:bg-[#B89553] text-[#121212] text-xs font-semibold uppercase tracking-widest px-6 py-2.5 rounded-sm transition shadow"
              >
                Claim Privilege
              </Link>
              <span className="text-[10px] text-[#D8C29A]/80 tracking-wide">
                *Applies to select participating maisons.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: CUSTOMER REVIEWS & ROYAL TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">Patron Endorsements</div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
            Words from Discerning Patrons
          </h2>
          <p className="text-xs text-gray-500 font-light mt-1">
            Read verified experiences from royal families, bridal couples, and high jewellery collectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {customerReviews.map((rev) => (
            <div 
              key={rev.id} 
              className="bg-white p-5 rounded-sm border border-[#E9DFD0] hover:border-[#B89553] shadow-sm transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#FAF7F0] flex items-center justify-between">
                <div>
                  <div className="font-serif text-xs font-bold text-[#121212]">{rev.name}</div>
                  <div className="text-[10px] text-gray-400">{rev.location}</div>
                </div>
                <span className="text-[9px] bg-[#FAF7F0] text-[#B89553] font-medium px-2 py-0.5 rounded border border-[#E9DFD0]">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: LUXURY SHOPPING CTA (Sophisticated Closing Section) */}
      <section className="bg-[#121212] text-white py-12 border-t border-[#B89553]/40 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1 text-[#B89553] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" /> The International Standard of Luxury
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
            Begin Your Haute Joaillerie Journey Today
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto leading-relaxed">
            Experience the confluence of authentic heritage and modern digital shopping ease. Browse 100 brands, 5,000+ certified listings, and receive discrete vault-delivered jewellery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/category/gold-jewellery"
              className="bg-[#B89553] hover:bg-[#D8C29A] text-[#121212] font-semibold text-xs uppercase tracking-widest px-8 py-3 rounded-sm transition shadow-gold"
            >
              Enter The Marketplace
            </Link>
            <Link
              to="/contact"
              className="border border-[#B89553] text-white hover:bg-white/10 font-medium text-xs uppercase tracking-widest px-8 py-3 rounded-sm transition"
            >
              Book Concierge Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
