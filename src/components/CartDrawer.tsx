import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useMarketplace } from '../context/MarketplaceContext';
import { formatINR } from '../data/productsData';
import { Link } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartDrawerOpen, 
    setIsCartDrawerOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart
  } = useMarketplace();

  if (!isCartDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F0] border-l border-[#B89553]/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 bg-[#121212] text-white flex items-center justify-between border-b border-[#B89553]/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#B89553]" />
              <h2 className="font-serif text-base font-semibold tracking-wide text-[#D8C29A]">
                Your Shopping Bag ({cart.length})
              </h2>
            </div>
            <button 
              onClick={() => setIsCartDrawerOpen(false)}
              className="text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Notice */}
          <div className="bg-[#173D32] text-white/90 text-xs py-2 px-4 flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#B89553]" />
              Complimentary Vault Shipping Unlocked
            </span>
            <span className="text-[11px] text-[#D8C29A]">Insured by Brink’s</span>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#E9DFD0]/60 flex items-center justify-center text-[#B89553]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-medium text-gray-800">Your bag is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Explore our luxury gold, solitaire diamonds, and bridal collections to curate your trousseau.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="mt-2 bg-[#121212] text-[#D8C29A] text-xs font-semibold px-4 py-2 uppercase tracking-wider rounded-sm hover:bg-[#B89553] hover:text-[#121212] transition"
                >
                  Explore Jewellery
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div 
                  key={`${item.product.id}-${item.selectedSize}-${idx}`} 
                  className="flex gap-3 bg-white p-2.5 rounded-sm border border-[#E9DFD0] relative group shadow-sm"
                >
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name} 
                    className="w-16 h-16 object-cover rounded-sm bg-[#FDFBF7] shrink-0 border border-[#FAF7F0]" 
                  />

                  <div className="flex-1 min-w-0 pr-6">
                    <div className="text-[10px] text-[#B89553] font-medium uppercase tracking-wider">
                      {item.product.brandName}
                    </div>
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsCartDrawerOpen(false)}
                      className="font-serif text-xs font-semibold text-[#121212] hover:text-[#B89553] line-clamp-1"
                    >
                      {item.product.name}
                    </Link>

                    <div className="text-[10px] text-gray-500 mt-0.5">
                      Size: {item.selectedSize} | Color: {item.selectedColor}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="font-serif text-xs font-bold text-[#121212]">
                        {formatINR(item.product.discountedPrice * item.quantity)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E9DFD0] rounded-sm text-xs bg-[#FAF7F0]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                          className="px-2 py-0.5 text-gray-600 hover:text-black hover:bg-[#E9DFD0]"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                          className="px-2 py-0.5 text-gray-600 hover:text-black hover:bg-[#E9DFD0]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-rose-600 p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-4 bg-white border-t border-[#E9DFD0] space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">{formatINR(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Insured Courier & Taxes</span>
                  <span className="text-[#173D32] font-semibold">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#121212] pt-2 border-t border-[#FAF7F0]">
                  <span>Total Amount</span>
                  <span className="font-serif text-base text-[#121212]">{formatINR(cartTotal)}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    alert('Order confirmed! Our Private Concierge will reach out with armoured delivery details.');
                    clearCart();
                    setIsCartDrawerOpen(false);
                  }}
                  className="flex-1 bg-[#121212] hover:bg-[#B89553] text-[#D8C29A] hover:text-[#121212] font-semibold py-2.5 px-4 text-xs tracking-widest uppercase transition flex items-center justify-center gap-2 rounded-sm shadow"
                >
                  <span>Secure Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#173D32]" />
                <span>256-bit Bank Grade Encrypted Payment Gateway</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
