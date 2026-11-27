import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Star, 
  Award, 
  Check, 
  ChevronRight, 
  Share2, 
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { getProductBySlug, getRelatedProducts, formatINR, ALL_PRODUCTS } from '../data/productsData';
import { useMarketplace } from '../context/MarketplaceContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useMarketplace();

  // Find product
  const product = getProductBySlug(slug || '') || ALL_PRODUCTS[0];

  // Selected State
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || 'Yellow Gold');
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const relatedList = getRelatedProducts(product, 4);
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    // Open drawer automatically
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="space-y-10 pb-12">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <nav className="flex items-center space-x-2 text-[11px] text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#B89553]">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.categorySlug}`} className="hover:text-[#B89553]">{product.categoryName}</Link>
          <span>/</span>
          <Link to={`/brand/${product.brandId}`} className="hover:text-[#B89553]">{product.brandName}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Image Gallery (Space-Efficient Multi-view) */}
          <div className="lg:col-span-6 space-y-3 sticky top-24">
            
            {/* Primary Display Image */}
            <div className="relative aspect-square bg-[#FDFBF7] rounded-sm overflow-hidden border border-[#E9DFD0] shadow-sm flex items-center justify-center p-4">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Discount Tag */}
              {product.discountPercentage > 0 && (
                <div className="absolute top-3 left-3 bg-[#121212] text-[#D8C29A] text-xs font-semibold px-2.5 py-1 tracking-wider uppercase border border-[#B89553]/40">
                  {product.discountPercentage}% OFF
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition ${
                  inWishlist ? 'bg-rose-50 text-rose-600' : 'bg-white text-gray-700 hover:text-[#B89553]'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Thumbnails Strip */}
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border-2 shrink-0 transition bg-white p-1 ${
                    activeImageIndex === idx ? 'border-[#B89553]' : 'border-[#E9DFD0] hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover rounded-sm" />
                </button>
              ))}
            </div>

            {/* Authenticity Guarantee Card */}
            <div className="p-3 bg-white border border-[#E9DFD0] rounded-sm grid grid-cols-2 gap-2 text-[11px] text-gray-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#173D32] shrink-0" />
                <span>BIS / GIA Certified Assay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#B89553] shrink-0" />
                <span>Vault Armored Transit</span>
              </div>
            </div>

          </div>

          {/* Right Column: Information, Pricing, Specs & Actions */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  to={`/brand/${product.brandId}`}
                  className="text-xs uppercase tracking-widest text-[#B89553] font-bold hover:underline"
                >
                  {product.brandName}
                </Link>
                <span className="text-[10px] text-gray-400">ID: {product.id}</span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#121212] mt-1 leading-snug">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-semibold text-gray-800">{product.rating}</span>
                </div>
                <span>•</span>
                <span>{product.reviewCount} Patron Reviews</span>
                <span>•</span>
                <span className="text-[#173D32] font-semibold bg-[#173D32]/10 px-1.5 py-0.5 rounded">
                  In Stock ({product.stockCount} units available)
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-[#FAF7F0] border border-[#E9DFD0] rounded-sm flex items-baseline justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                  Direct Maison Price (Taxes Included)
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121212]">
                    {formatINR(product.discountedPrice)}
                  </span>
                  {product.regularPrice > product.discountedPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatINR(product.regularPrice)}
                    </span>
                  )}
                  {product.discountPercentage > 0 && (
                    <span className="text-xs font-semibold text-[#B89553]">
                      (Save {formatINR(product.regularPrice - product.discountedPrice)})
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={handleShare}
                className="p-2 border border-[#E9DFD0] rounded-sm hover:bg-white text-gray-600 transition"
                title="Share this listing"
              >
                <Share2 className="w-4 h-4" />
                {copied && <span className="text-[9px] text-[#B89553] block">Copied</span>}
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Available Sizes */}
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-gray-800 mb-1.5">
                <span>Select Size / Length:</span>
                <span className="text-[11px] text-[#B89553] cursor-pointer hover:underline">Sizing Guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-1.5 text-xs rounded-sm border transition ${
                      selectedSize === s
                        ? 'border-[#B89553] bg-[#121212] text-[#D8C29A] font-medium'
                        : 'border-[#E9DFD0] bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Metal & Finish Colors */}
            <div>
              <div className="text-xs font-semibold text-gray-800 mb-1.5">
                Precious Metal / Finish Variant:
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-3 py-1.5 text-xs rounded-sm border transition ${
                      selectedColor === c
                        ? 'border-[#B89553] bg-[#FAF7F0] font-semibold text-[#121212]'
                        : 'border-[#E9DFD0] bg-white text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                
                {/* Quantity */}
                <div className="flex items-center border border-[#E9DFD0] rounded-sm bg-white">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-[#FAF7F0]"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-[#FAF7F0]"
                  >
                    +
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#121212] hover:bg-[#B89553] text-[#FAF7F0] hover:text-[#121212] text-xs font-semibold uppercase tracking-widest py-3 px-4 rounded-sm transition flex items-center justify-center gap-2 shadow"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>

                {/* Buy Now */}
                <button
                  onClick={handleBuyNow}
                  className="bg-[#B89553] hover:bg-[#D8C29A] text-[#121212] text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-sm transition shadow"
                >
                  Buy Now
                </button>
              </div>

              <div className="text-[10px] text-gray-500 text-center flex items-center justify-center gap-2 pt-1">
                <span>{product.deliveryTime}</span>
                <span>•</span>
                <span className="text-[#173D32] font-semibold">15-Day Inspection Guarantee</span>
              </div>
            </div>

            {/* Category-Specific Detailed Specifications Table */}
            <div className="pt-3 border-t border-[#E9DFD0]">
              <h3 className="font-serif text-sm font-bold text-[#121212] uppercase tracking-wider mb-2">
                Certified Specifications & Karigari Details
              </h3>
              <div className="bg-white border border-[#E9DFD0] rounded-sm divide-y divide-[#FAF7F0] text-xs">
                {Object.entries(product.specifications).map(([key, val]) => {
                  if (!val) return null;
                  return (
                    <div key={key} className="p-2.5 flex justify-between items-center">
                      <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium text-gray-900 text-right">{val}</span>
                    </div>
                  );
                })}
                <div className="p-2.5 flex justify-between items-center">
                  <span className="text-gray-500">Weight Metric</span>
                  <span className="font-medium text-gray-900">{product.weight}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products Showcase */}
      {relatedList.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-[#E9DFD0]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#121212]">
              Related Jewellery from {product.brandName}
            </h2>
            <Link
              to={`/brand/${product.brandId}`}
              className="text-xs text-[#B89553] hover:underline"
            >
              View Full Salon →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {relatedList.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
