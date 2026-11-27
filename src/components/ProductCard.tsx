import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatINR } from '../data/productsData';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, toggleWishlist, isInWishlist } = useMarketplace();
  const navigate = useNavigate();

  const inWishlist = isInWishlist(product.id);
  const currentImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.slug}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white border border-[#E9DFD0] hover:border-[#B89553] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-luxury cursor-pointer relative"
    >
      {/* Badges / Discount */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start">
        {product.discountPercentage > 0 && (
          <span className="bg-[#121212] text-[#D8C29A] text-[10px] font-semibold px-2 py-0.5 tracking-wider uppercase rounded-none border border-[#B89553]/40">
            {product.discountPercentage}% OFF
          </span>
        )}
        {product.isBestseller && (
          <span className="bg-[#B89553] text-[#121212] text-[9px] font-bold px-1.5 py-0.5 tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistClick}
        aria-label="Wishlist"
        className={`absolute top-2 right-2 z-10 p-1.5 rounded-full transition-all duration-200 ${
          inWishlist 
            ? 'bg-rose-50 text-rose-600 shadow' 
            : 'bg-white/80 hover:bg-white text-gray-700 hover:text-[#B89553] shadow-sm'
        }`}
      >
        <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-current' : ''}`} />
      </button>

      {/* Image Gallery Container */}
      <div className="relative aspect-square bg-[#FDFBF7] overflow-hidden flex items-center justify-center p-2">
        <img
          src={currentImage}
          alt={product.name}
          loading="lazy"
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Hover Action Strip */}
        <div className="absolute bottom-2 inset-x-2 hidden group-hover:flex items-center gap-1.5 transition-opacity duration-200 z-10">
          <button
            onClick={handleQuickAdd}
            className="flex-1 bg-[#121212] hover:bg-[#B89553] text-[#FAF7F0] hover:text-[#121212] text-[11px] font-medium py-1.5 px-2 flex items-center justify-center gap-1 tracking-wider uppercase transition rounded-sm shadow"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.slug}`);
            }}
            className="p-1.5 bg-white/90 hover:bg-white text-[#121212] rounded-sm shadow hover:text-[#B89553] transition"
            title="Quick View"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Content Details (Space Efficient) */}
      <div className="p-3 flex flex-col flex-grow justify-between border-t border-[#F2ECE1]">
        <div>
          {/* Brand & Category Link */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
            <Link 
              to={`/brand/${product.brandId}`}
              onClick={(e) => e.stopPropagation()}
              className="text-[#B89553] hover:underline font-medium truncate max-w-[140px]"
            >
              {product.brandName}
            </Link>
            <span className="flex items-center gap-0.5 text-amber-500 text-[10px]">
              <Star className="w-2.5 h-2.5 fill-current" />
              <span>{product.rating}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-sm font-semibold text-[#121212] group-hover:text-[#B89553] transition-colors line-clamp-1 leading-snug">
            {product.name}
          </h3>

          {/* Subcategory & Spec Pill */}
          <div className="mt-1 flex items-center gap-2 text-[10px] text-gray-500">
            <span className="bg-[#FAF7F0] px-1.5 py-0.5 rounded border border-[#E9DFD0]">
              {product.subcategory}
            </span>
            <span className="truncate">
              {product.weight}
            </span>
          </div>
        </div>

        {/* Pricing & Add Button */}
        <div className="mt-2.5 pt-2 border-t border-dashed border-[#E9DFD0]/60 flex items-baseline justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-sm sm:text-base font-bold text-[#121212]">
              {formatINR(product.discountedPrice)}
            </span>
            {product.regularPrice > product.discountedPrice && (
              <span className="text-[11px] text-gray-400 line-through">
                {formatINR(product.regularPrice)}
              </span>
            )}
          </div>

          <span className="text-[10px] text-[#173D32] font-semibold bg-[#173D32]/10 px-1 rounded flex items-center gap-0.5">
            <ShieldCheck className="w-2.5 h-2.5" /> Certified
          </span>
        </div>
      </div>
    </div>
  );
};
