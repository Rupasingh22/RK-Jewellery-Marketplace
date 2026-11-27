import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Filter, 
  ChevronDown, 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  ArrowUpDown, 
  Search,
  RotateCcw,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { CATEGORIES, BRANDS } from '../data/categoriesAndBrands';
import { getProductsByCategory, formatINR } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';
import { CategorySlug, Product } from '../types';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fallback to gold-jewellery if not found
  const currentCategory = CATEGORIES.find(c => c.slug === slug) || CATEGORIES[0];
  const categoryBrands = BRANDS.filter(b => b.categorySlug === currentCategory.slug);

  // States
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [priceMax, setPriceMax] = useState<number>(1000000);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 16;

  // Fetch category products (1,000 products per category across 20 brands * 50)
  const allCategoryProducts = useMemo(() => {
    return getProductsByCategory(currentCategory.slug);
  }, [currentCategory.slug]);

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return allCategoryProducts.filter((product) => {
      // Subcategory filter
      if (selectedSubcategory !== 'all' && product.subcategory !== selectedSubcategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && product.brandId !== selectedBrand) {
        return false;
      }
      // Price filter
      if (product.discountedPrice > priceMax) {
        return false;
      }
      // Search term
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchTitle = product.name.toLowerCase().includes(query);
        const matchBrand = product.brandName.toLowerCase().includes(query);
        const matchSubcat = product.subcategory.toLowerCase().includes(query);
        if (!matchTitle && !matchBrand && !matchSubcat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.discountedPrice - b.discountedPrice;
      if (sortBy === 'price-high') return b.discountedPrice - a.discountedPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [allCategoryProducts, selectedSubcategory, selectedBrand, priceMax, searchTerm, sortBy]);

  // Pagination slice
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const resetFilters = () => {
    setSelectedSubcategory('all');
    setSelectedBrand('all');
    setPriceMax(1000000);
    setSearchTerm('');
    setSortBy('featured');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Category Hero Banner (Compact & Rich) */}
      <section className="relative bg-[#121212] text-white overflow-hidden border-b border-[#B89553]/30">
        <div className="absolute inset-0 opacity-25">
          <img
            src={currentCategory.bannerImage}
            alt={currentCategory.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#B89553] font-bold">
              <Crown className="w-3.5 h-3.5" /> Department 0{CATEGORIES.findIndex(c => c.slug === currentCategory.slug) + 1}
            </div>
            
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white tracking-wide">
              {currentCategory.name}
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {currentCategory.description}
            </p>

            {/* Quick Pills for Category Attributes */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentCategory.attributes.map((attr, idx) => (
                <span 
                  key={idx}
                  className="bg-[#1C1C1C] border border-[#B89553]/40 text-[#D8C29A] text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                >
                  ✓ {attr}
                </span>
              ))}
              <span className="bg-[#B89553] text-[#121212] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                20 Dedicated Maisons
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured 20 Brand Strip for Current Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#E9DFD0] bg-white p-3 rounded-sm">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#FAF7F0]">
            <span className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">
              20 Featured Maisons in {currentCategory.name}
            </span>
            <span className="text-[10px] text-gray-400">Click brand to inspect dedicated salon</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {categoryBrands.map((b) => (
              <Link
                key={b.id}
                to={`/brand/${b.id}`}
                className="shrink-0 flex items-center gap-2 bg-[#FAF7F0] hover:bg-[#121212] hover:text-[#D8C29A] text-gray-800 border border-[#E9DFD0] px-2.5 py-1.5 rounded-sm transition text-xs group"
              >
                <img src={b.logo} alt={b.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
                <span className="font-serif text-xs font-semibold whitespace-nowrap">{b.name}</span>
                <span className="text-[9px] text-[#B89553] opacity-0 group-hover:opacity-100">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog View: Filters & Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Control Bar */}
        <div className="bg-white p-3 rounded-sm border border-[#E9DFD0] mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 bg-[#121212] text-[#D8C29A] text-xs px-3 py-1.5 rounded-sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            <span className="text-xs text-gray-500 font-medium">
              Showing <strong className="text-gray-900">{filteredProducts.length}</strong> creations
            </span>
          </div>

          {/* Quick Search & Sort Control */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="relative flex-1 sm:w-56">
              <input
                type="text"
                placeholder="Search creations..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-2.5 py-1.5 focus:outline-none focus:border-[#B89553] pr-7"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#B89553]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-2 py-1.5 focus:outline-none focus:border-[#B89553] text-gray-800"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Desktop Left Filter Sidebar (Compact & Space Efficient) */}
          <div className={`lg:col-span-3 space-y-4 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-4 rounded-sm border border-[#E9DFD0] shadow-sm space-y-4 sticky top-24">
              
              <div className="flex items-center justify-between pb-2 border-b border-[#FAF7F0]">
                <h3 className="font-serif text-sm font-bold text-[#121212] flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-[#B89553]" />
                  Refine Jewellery
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-[10px] text-[#B89553] hover:underline flex items-center gap-0.5"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              </div>

              {/* Subcategories Filter */}
              <div>
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-gray-800 mb-2">
                  Subcategory
                </h4>
                <div className="space-y-1 max-h-48 overflow-y-auto pr-1 text-xs">
                  <button
                    onClick={() => { setSelectedSubcategory('all'); setCurrentPage(1); }}
                    className={`w-full text-left px-2 py-1 rounded text-xs flex justify-between items-center transition ${
                      selectedSubcategory === 'all' 
                        ? 'bg-[#121212] text-[#D8C29A] font-semibold' 
                        : 'text-gray-700 hover:bg-[#FAF7F0]'
                    }`}
                  >
                    <span>All Subcategories</span>
                    <span className="text-[10px] opacity-70">{allCategoryProducts.length}</span>
                  </button>

                  {currentCategory.subcategories.map((subcat) => {
                    const count = allCategoryProducts.filter(p => p.subcategory === subcat).length;
                    return (
                      <button
                        key={subcat}
                        onClick={() => { setSelectedSubcategory(subcat); setCurrentPage(1); }}
                        className={`w-full text-left px-2 py-1 rounded text-xs flex justify-between items-center transition ${
                          selectedSubcategory === subcat 
                            ? 'bg-[#121212] text-[#D8C29A] font-semibold' 
                            : 'text-gray-700 hover:bg-[#FAF7F0]'
                        }`}
                      >
                        <span className="truncate">{subcat}</span>
                        <span className="text-[10px] opacity-70">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands Filter */}
              <div>
                <h4 className="text-[11px] uppercase tracking-wider font-semibold text-gray-800 mb-2">
                  Select Maison ({categoryBrands.length})
                </h4>
                <div className="space-y-1 max-h-48 overflow-y-auto pr-1 text-xs">
                  <button
                    onClick={() => { setSelectedBrand('all'); setCurrentPage(1); }}
                    className={`w-full text-left px-2 py-1 rounded text-xs flex justify-between items-center transition ${
                      selectedBrand === 'all' 
                        ? 'bg-[#121212] text-[#D8C29A] font-semibold' 
                        : 'text-gray-700 hover:bg-[#FAF7F0]'
                    }`}
                  >
                    <span>All Maisons</span>
                    <span className="text-[10px] opacity-70">{allCategoryProducts.length}</span>
                  </button>

                  {categoryBrands.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => { setSelectedBrand(b.id); setCurrentPage(1); }}
                      className={`w-full text-left px-2 py-1 rounded text-xs flex justify-between items-center transition ${
                        selectedBrand === b.id 
                          ? 'bg-[#121212] text-[#D8C29A] font-semibold' 
                          : 'text-gray-700 hover:bg-[#FAF7F0]'
                      }`}
                    >
                      <span className="truncate">{b.name}</span>
                      <span className="text-[10px] opacity-70">50</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Maximum Price Range Slider */}
              <div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-gray-800 mb-1">
                  <span>Max Budget</span>
                  <span className="text-[#B89553] font-bold">{formatINR(priceMax)}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="1000000"
                  step="5000"
                  value={priceMax}
                  onChange={(e) => {
                    setPriceMax(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="w-full accent-[#B89553]"
                />
              </div>

              {/* Authenticity Assurance Box */}
              <div className="p-3 bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-center space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#173D32] mx-auto" />
                <div className="text-[11px] font-bold text-gray-900">Assay Certified</div>
                <p className="text-[10px] text-gray-500">Every jewel is assayed and sealed with government recognized hallmark.</p>
              </div>

            </div>
          </div>

          {/* Right Column: 4-Column Responsive Product Grid */}
          <div className="lg:col-span-9 space-y-6">
            {paginatedProducts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-sm border border-[#E9DFD0] space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF7F0] flex items-center justify-center text-gray-400">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-800">No matching creations found</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try broadening your budget slider or clearing subcategory and maison filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#121212] text-[#D8C29A] text-xs font-semibold px-4 py-2 uppercase tracking-wider rounded-sm hover:bg-[#B89553] hover:text-[#121212] transition"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="bg-white p-3 rounded-sm border border-[#E9DFD0] flex items-center justify-between text-xs">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage(p => Math.max(1, p - 1));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 border border-[#E9DFD0] rounded disabled:opacity-40 hover:bg-[#FAF7F0]"
                    >
                      ← Previous
                    </button>

                    <span className="text-gray-600 font-medium">
                      Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                    </span>

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setCurrentPage(p => Math.min(totalPages, p + 1));
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 border border-[#E9DFD0] rounded disabled:opacity-40 hover:bg-[#FAF7F0]"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
