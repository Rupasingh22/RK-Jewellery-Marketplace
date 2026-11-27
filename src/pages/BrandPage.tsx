import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Filter, 
  ArrowUpDown, 
  Search, 
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { BRANDS, CATEGORIES } from '../data/categoriesAndBrands';
import { getProductsByBrand, formatINR } from '../data/productsData';
import { ProductCard } from '../components/ProductCard';

export const BrandPage: React.FC = () => {
  const { brandId } = useParams<{ brandId: string }>();

  // Find the exact brand from the 100 brands directory
  const brand = BRANDS.find(b => b.id === brandId || b.slug === brandId) || BRANDS[0];
  const category = CATEGORIES.find(c => c.slug === brand.categorySlug);

  // States
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'bestseller' | 'price-low' | 'price-high'>('featured');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  // Retrieve 50 products guaranteed for this brand
  const brandProducts = useMemo(() => {
    return getProductsByBrand(brand.id);
  }, [brand.id]);

  // Subcategories present in this brand
  const brandSubcategories = useMemo(() => {
    const set = new Set(brandProducts.map(p => p.subcategory));
    return Array.from(set);
  }, [brandProducts]);

  // Filtered brand products
  const filteredProducts = useMemo(() => {
    return brandProducts.filter((product) => {
      if (selectedSubcategory !== 'all' && product.subcategory !== selectedSubcategory) {
        return false;
      }
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        if (!product.name.toLowerCase().includes(query) && !product.subcategory.toLowerCase().includes(query)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.discountedPrice - b.discountedPrice;
      if (sortBy === 'price-high') return b.discountedPrice - a.discountedPrice;
      if (sortBy === 'bestseller') return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [brandProducts, selectedSubcategory, searchTerm, sortBy]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Bestsellers highlight
  const bestsellers = brandProducts.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Brand Hero Banner */}
      <section className="relative bg-[#121212] text-white border-b border-[#B89553]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={brand.banner}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Logo & Identity */}
            <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#B89553] p-1 bg-[#181818] shrink-0 shadow-gold">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#B89553] font-bold">
                    Official Maison Salon
                  </span>
                  <span className="text-gray-400">•</span>
                  <Link 
                    to={`/category/${brand.categorySlug}`}
                    className="text-[11px] text-[#D8C29A] hover:underline"
                  >
                    {brand.categoryName}
                  </Link>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {brand.name}
                </h1>

                <p className="text-xs text-gray-300 font-light max-w-xl leading-relaxed">
                  {brand.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-300 pt-1">
                  <span className="flex items-center gap-1 text-[#D8C29A]">
                    <MapPin className="w-3 h-3 text-[#B89553]" /> {brand.origin}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#D8C29A]">
                    <Calendar className="w-3 h-3 text-[#B89553]" /> Est. {brand.foundedYear}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-400 font-medium">
                    <Star className="w-3 h-3 fill-current" /> {brand.rating} ({brand.reviewsCount} Patrons)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="md:col-span-4 bg-[#181818]/90 border border-[#B89553]/40 p-4 rounded-sm space-y-2">
              <div className="text-[10px] uppercase tracking-wider text-[#B89553] font-bold">
                Maison Specifications
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-400">Catalogue:</span>
                  <span className="font-semibold text-white">50 Certified Listings</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Speciality:</span>
                  <span className="font-medium text-[#D8C29A] truncate max-w-[170px]">{brand.speciality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Price Spectrum:</span>
                  <span className="font-medium text-white">{brand.priceRange}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Overview & Craftsmanship Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 rounded-sm border border-[#E9DFD0] shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B89553]" />
            <h2 className="font-serif text-sm uppercase tracking-wider font-bold text-[#121212]">
              Maison Heritage & Craft Overview
            </h2>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed">
            {brand.overview} RK Jewellery Marketplace directly verifies every hallmarked piece and provides armored door-to-door vault transit.
          </p>
        </div>
      </section>

      {/* Bestselling Spotlight Row */}
      {bestsellers.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-3 pb-1 border-b border-[#E9DFD0]">
            <h3 className="font-serif text-base font-bold text-[#121212]">
              Bestselling Creations by {brand.name}
            </h3>
            <span className="text-[11px] text-[#B89553] font-medium">Top Rated Heirlooms</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {bestsellers.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Main 50-Product Catalogue with Search & Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Toolbar */}
        <div className="bg-white p-3 rounded-sm border border-[#E9DFD0] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-semibold text-gray-800">
              Full Collection ({filteredProducts.length} creations)
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            
            {/* Subcategory select */}
            <select
              value={selectedSubcategory}
              onChange={(e) => {
                setSelectedSubcategory(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-[#FAF7F0] border border-[#E9DFD0] text-xs px-2.5 py-1.5 rounded-sm focus:outline-none focus:border-[#B89553]"
            >
              <option value="all">All Subcategories</option>
              {brandSubcategories.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {/* Search */}
            <div className="relative w-40 sm:w-48">
              <input
                type="text"
                placeholder="Search jewels..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm text-xs px-2.5 py-1.5 focus:outline-none focus:border-[#B89553] pr-6"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FAF7F0] border border-[#E9DFD0] text-xs px-2.5 py-1.5 rounded-sm focus:outline-none focus:border-[#B89553]"
            >
              <option value="featured">Featured First</option>
              <option value="bestseller">Bestseller</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

          </div>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white p-3 rounded-sm border border-[#E9DFD0] flex items-center justify-between text-xs">
            <button
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                window.scrollTo({ top: 400, behavior: 'smooth' });
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
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="px-3 py-1.5 border border-[#E9DFD0] rounded disabled:opacity-40 hover:bg-[#FAF7F0]"
            >
              Next →
            </button>
          </div>
        )}

      </section>

    </div>
  );
};
