import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  Phone,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { CATEGORIES } from '../data/categoriesAndBrands';
import { useMarketplace } from '../context/MarketplaceContext';

export const Header: React.FC = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  const navigate = useNavigate();
  const { cartCount, wishlist, setIsCartDrawerOpen } = useMarketplace();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      navigate(`/category/gold-jewellery?q=${encodeURIComponent(localSearch.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Luxury Announcement Bar (Compact) */}
      <div className="bg-[#121212] text-[#D8C29A] border-b border-[#B89553]/20 text-[11px] font-medium tracking-widest uppercase py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/80">
              <Sparkles className="w-3 h-3 text-[#B89553]" />
              Complimentary Insured Vault Shipping Worldwide
            </span>
            <span className="text-[#B89553]/40">|</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="w-3 h-3 text-[#B89553]" />
              100% Certified Natural Diamonds & Hallmarked Gold
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-serif normal-case tracking-normal text-[#D8C29A]">
            <a href="tel:+918002345678" className="hover:text-white transition flex items-center gap-1">
              <Phone className="w-3 h-3" /> Concierge: +91 9153832633
            </a>
            <span className="text-[#B89553]/40">|</span>
            <span className="text-[#B89553] font-semibold">RK Private Salons</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Fixed Header */}
      <header className="sticky top-0 z-40 bg-[#121212]/95 backdrop-blur-md border-b border-[#B89553]/30 shadow-luxury transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-[#D8C29A] hover:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo Treatment */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#B89553] via-[#D8C29A] to-[#8C6D33] p-[1px] shadow-gold">
                <div className="w-full h-full bg-[#121212] flex items-center justify-center">
                  <span className="font-serif text-[#B89553] font-bold text-lg tracking-tighter">RK</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-white group-hover:text-[#D8C29A] transition leading-none">
                  RK JEWELLERY
                </span>
              </div>
            </Link>

            {/* Exactly Five Desktop Navigation Items */}
            <nav className="hidden md:flex items-center space-x-7">
              <Link 
                to="/" 
                className="text-xs uppercase tracking-widest font-medium text-white/90 hover:text-[#B89553] transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B89553] hover:after:w-full after:transition-all"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-xs uppercase tracking-widest font-medium text-white/90 hover:text-[#B89553] transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B89553] hover:after:w-full after:transition-all"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-xs uppercase tracking-widest font-medium text-white/90 hover:text-[#B89553] transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B89553] hover:after:w-full after:transition-all"
              >
                Services
              </Link>

              {/* Only Category has a Dropdown */}
              <div 
                className="relative py-4"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)}
              >
                <button 
                  className="flex items-center gap-1 text-xs uppercase tracking-widest font-medium text-[#D8C29A] hover:text-[#B89553] transition"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <span>Category</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180 text-[#B89553]' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isCategoryOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#171717] border border-[#B89553]/40 shadow-2xl rounded-sm py-2 px-3 z-50 animate-fadeIn">
                    <div className="text-[10px] uppercase tracking-wider text-[#B89553] font-semibold border-b border-[#292929] pb-1.5 mb-1.5 px-2">
                      Main Jewellery Houses
                    </div>
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.slug}`}
                        onClick={() => setIsCategoryOpen(false)}
                        className="flex items-center justify-between p-2 rounded-sm hover:bg-[#252525] group/item transition"
                      >
                        <div>
                          <div className="text-xs font-serif font-medium text-white group-hover/item:text-[#D8C29A]">
                            {cat.name}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {cat.subcategories.slice(0, 3).join(' • ')}...
                          </div>
                        </div>
                        <span className="text-[#B89553] opacity-0 group-hover/item:opacity-100 text-xs">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className="text-xs uppercase tracking-widest font-medium text-white/90 hover:text-[#B89553] transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B89553] hover:after:w-full after:transition-all"
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Action Icons */}
            <div className="flex items-center space-x-3 sm:space-x-5 text-white">
              
              {/* Search Toggle */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input 
                      type="text"
                      placeholder="Search gold, solitaire, bridal..."
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                      autoFocus
                      className="w-48 sm:w-64 bg-[#202020] border border-[#B89553]/50 text-white text-xs px-3 py-1.5 rounded-sm focus:outline-none focus:border-[#B89553]"
                    />
                    <button 
                      type="button" 
                      onClick={() => setSearchOpen(false)}
                      className="ml-1 text-gray-400 hover:text-white p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <button 
                    onClick={() => setSearchOpen(true)}
                    className="p-1.5 text-gray-300 hover:text-[#B89553] transition"
                    title="Search"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Account */}
              <Link 
                to="/contact#concierge" 
                className="p-1.5 text-gray-300 hover:text-[#B89553] transition hidden sm:inline-block"
                title="VIP Client Account"
              >
                <User className="w-4 h-4" />
              </Link>

              {/* Wishlist */}
              <Link 
                to="/category/gold-jewellery?tab=wishlist" 
                className="p-1.5 text-gray-300 hover:text-[#B89553] transition relative"
                title="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#B89553] text-[#121212] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Dynamic Cart Drawer Button */}
              <button 
                onClick={() => setIsCartDrawerOpen(true)}
                className="flex items-center gap-1.5 bg-[#B89553]/20 border border-[#B89553]/60 hover:bg-[#B89553] hover:text-[#121212] text-[#D8C29A] text-xs font-semibold px-2.5 py-1.5 rounded-sm transition shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Bag</span>
                <span className="bg-[#B89553] text-[#121212] text-[11px] font-bold px-1.5 py-0.2 rounded-full ml-0.5">
                  {cartCount}
                </span>
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#151515] border-b border-[#B89553]/30 px-4 pt-3 pb-6 space-y-3">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium uppercase tracking-wider text-white hover:text-[#B89553] py-1 border-b border-[#252525]"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium uppercase tracking-wider text-white hover:text-[#B89553] py-1 border-b border-[#252525]"
            >
              About
            </Link>
            <Link 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium uppercase tracking-wider text-white hover:text-[#B89553] py-1 border-b border-[#252525]"
            >
              Services
            </Link>

            {/* Category Collapsible on Mobile */}
            <div className="py-1 border-b border-[#252525]">
              <div className="text-xs uppercase tracking-wider text-[#B89553] font-bold mb-2">
                Five Categories:
              </div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {CATEGORIES.map(c => (
                  <Link
                    key={c.id}
                    to={`/category/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs text-gray-300 hover:text-white py-1"
                  >
                    • {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium uppercase tracking-wider text-white hover:text-[#B89553] py-1"
            >
              Contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
};
