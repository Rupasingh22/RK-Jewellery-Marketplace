import { Product, CategorySlug, ProductSpecification } from '../types';
import { BRANDS, CATEGORIES } from './categoriesAndBrands';

// Curated high quality imagery for jewellery
const IMAGE_POOLS: Record<CategorySlug, string[]> = {
  'gold-jewellery': [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
  ],
  'diamond-jewellery': [
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=800&q=80',
  ],
  'silver-jewellery': [
    'https://images.unsplash.com/photo-1611591475837-128a1c97a898?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
  ],
  'bridal-jewellery': [
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611591475837-128a1c97a898?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
  ],
  'fashion-jewellery': [
    'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611591475837-128a1c97a898?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
  ],
};

const DESIGN_STYLES = [
  'Royal Mughal Antique', 'Victorian Filigree', 'Contemporary Minimalist', 
  'Temple Heritage Carved', 'Art Deco Geometric', 'Classic Solitaire',
  'Meenakari Hand-Enamelled', 'Rose-Cut Floral', 'Cascade Cluster', 'Chic Geometric'
];

const SIZES_MAP: Record<string, string[]> = {
  ring: ['6 US', '7 US', '8 US', '9 US', '10 US', '11 US'],
  bangle: ['2.4 (Small)', '2.6 (Medium)', '2.8 (Large)', '2.10 (Extra Large)'],
  necklace: ['16 inch (Choker)', '18 inch (Princess)', '22 inch (Matinee)', '26 inch (Opera)'],
  default: ['Standard Adjustable', 'One Size']
};

// Generates 50 deterministic products per brand (100 brands * 50 = 5,000 products)
function generateProducts(): Product[] {
  const products: Product[] = [];

  BRANDS.forEach((brand) => {
    const category = CATEGORIES.find(c => c.slug === brand.categorySlug)!;
    const subcats = category.subcategories;
    const imgPool = IMAGE_POOLS[brand.categorySlug];

    for (let index = 1; index <= 50; index++) {
      const subcategory = subcats[(index - 1) % subcats.length];
      const subcatLower = subcategory.toLowerCase();
      const style = DESIGN_STYLES[(index + brand.id.length) % DESIGN_STYLES.length];
      
      // Calculate realistic luxury pricing based on category
      let basePrice = 25000;
      let discountRate = 0.1;

      if (brand.categorySlug === 'gold-jewellery') {
        basePrice = 28000 + (index * 7200) + ((brand.foundedYear % 10) * 1500);
        discountRate = (index % 5 === 0) ? 0.15 : (index % 3 === 0) ? 0.08 : 0.05;
      } else if (brand.categorySlug === 'diamond-jewellery') {
        basePrice = 45000 + (index * 12500) + ((brand.foundedYear % 15) * 2500);
        discountRate = (index % 4 === 0) ? 0.18 : (index % 2 === 0) ? 0.10 : 0.06;
      } else if (brand.categorySlug === 'silver-jewellery') {
        basePrice = 1800 + (index * 420) + ((brand.foundedYear % 8) * 120);
        discountRate = (index % 3 === 0) ? 0.20 : 0.12;
      } else if (brand.categorySlug === 'bridal-jewellery') {
        basePrice = 95000 + (index * 18000) + ((brand.foundedYear % 20) * 4500);
        discountRate = (index % 6 === 0) ? 0.15 : 0.08;
      } else if (brand.categorySlug === 'fashion-jewellery') {
        basePrice = 1200 + (index * 350) + ((brand.foundedYear % 5) * 80);
        discountRate = (index % 2 === 0) ? 0.25 : 0.15;
      }

      const regularPrice = Math.round(basePrice / 100) * 100;
      const discountPercentage = Math.round(discountRate * 100);
      const discountedPrice = Math.round(regularPrice * (1 - discountRate) / 50) * 50;

      // Select images deterministically
      const primaryImg = imgPool[(index + brand.name.length) % imgPool.length];
      const secondaryImg = imgPool[(index + brand.name.length + 1) % imgPool.length];
      const tertiaryImg = imgPool[(index + brand.name.length + 2) % imgPool.length];

      // Formulate unique title
      const productName = `${brand.name} ${style} ${subcategory} #${index < 10 ? '0' + index : index}`;
      const productId = `RK-${brand.categorySlug.substring(0, 3).toUpperCase()}-${brand.id.substring(0, 4).toUpperCase()}-${1000 + index}`;
      const slug = `${brand.id}-${subcategory.toLowerCase().replace(/\s+/g, '-')}-${index}`;

      // Build category specific specifications
      const specifications: ProductSpecification = {
        jewelleryType: subcategory,
        design: style,
        size: subcatLower.includes('ring') ? '7 US Standard' : subcatLower.includes('bangle') ? '2.6 Medium' : 'Adjustable Length',
      };

      if (brand.categorySlug === 'gold-jewellery') {
        specifications.purity = index % 3 === 0 ? '24K Pure (999)' : index % 2 === 0 ? '22K BIS Hallmarked (916)' : '18K Fine Gold (750)';
        specifications.metalWeight = `${(6.5 + (index * 0.75)).toFixed(2)} grams`;
        specifications.certification = 'BIS Hallmarked with HUID Authentication';
      } else if (brand.categorySlug === 'diamond-jewellery') {
        specifications.diamondSpec = index % 2 === 0 ? 'VVS1 Clarity, Color D-E, Triple Excellent' : 'VS2 Clarity, Color F-G, Ideal Cut';
        specifications.metalType = index % 3 === 0 ? '950 Platinum' : '18K White & Rose Gold';
        specifications.diamondWeight = `${(0.45 + (index * 0.12)).toFixed(2)} Carats`;
        specifications.settingStyle = index % 2 === 0 ? '4-Prong Solitaire with Hidden Halo' : 'Micro-Pavé Channel Setting';
        specifications.certification = 'IGI & GIA Worldwide Authenticated';
      } else if (brand.categorySlug === 'silver-jewellery') {
        specifications.silverPurity = '925 Hallmarked Sterling Silver';
        specifications.metalWeight = `${(8.2 + (index * 0.9)).toFixed(2)} grams`;
        specifications.material = 'Sterling 925 Silver with Anti-Tarnish Rhodium';
        specifications.certification = '925 Silver Stamp Guarantee';
      } else if (brand.categorySlug === 'bridal-jewellery') {
        specifications.material = '22K Gold Antique Plating & Uncut Polki Diamonds';
        specifications.includedPieces = 'Choker Necklace, Pair of Chandbalis, Maang Tikka & Hathphool';
        specifications.occasion = 'Royal Wedding, Sangeet, Engagement & Reception';
        specifications.metalWeight = `${(45.0 + (index * 3.2)).toFixed(1)} grams`;
        specifications.design = `${style} Royal Heirloom Jadau`;
      } else if (brand.categorySlug === 'fashion-jewellery') {
        specifications.baseMaterial = 'Premium Brass & Hypoallergenic Alloy';
        specifications.plating = '18K Micron Micro Gold & E-Coat Protection';
        specifications.color = index % 2 === 0 ? 'Champagne Gold & Clear Crystal' : 'Antique Oxidised Silver';
        specifications.careInstructions = 'Keep away from moisture, perfumes and sprays. Store in airtight case.';
      }

      // Sizes according to subcategory
      let sizes = SIZES_MAP.default;
      if (subcatLower.includes('ring')) sizes = SIZES_MAP.ring;
      else if (subcatLower.includes('bangle') || subcatLower.includes('bracelet')) sizes = SIZES_MAP.bangle;
      else if (subcatLower.includes('necklace') || subcatLower.includes('chain')) sizes = SIZES_MAP.necklace;

      const colors = brand.categorySlug === 'gold-jewellery' 
        ? ['Yellow Gold', 'Antique Gold', 'Rose Gold']
        : brand.categorySlug === 'silver-jewellery'
        ? ['Sterling Silver', 'Oxidised Silver', 'Rose Gold Silver']
        : brand.categorySlug === 'diamond-jewellery'
        ? ['Platinum White', '18K Yellow Gold', 'Rose Gold']
        : ['Regal Gold', 'Antique Emerald', 'Ruby Rose'];

      products.push({
        id: productId,
        slug,
        name: productName,
        brandId: brand.id,
        brandName: brand.name,
        categorySlug: brand.categorySlug,
        categoryName: brand.categoryName,
        subcategory,
        regularPrice,
        discountedPrice,
        discountPercentage,
        description: `Experience the majesty of ${brand.name} with this handcrafted ${subcategory.toLowerCase()}. Curated exclusively for RK Jewellery Marketplace, this creation features ${style.toLowerCase()} detailing sculpted from premium grade materials to ensure perpetual brilliance and prestige.`,
        specifications,
        materials: [specifications.purity || specifications.silverPurity || specifications.baseMaterial || 'Precious Metals'],
        sizes,
        colors,
        weight: specifications.metalWeight || specifications.diamondWeight || 'Fine Weight',
        rating: Number((4.5 + ((index % 5) * 0.1)).toFixed(1)),
        reviewCount: 14 + (index * 7),
        stockCount: 8 + (index % 12),
        inStock: true,
        deliveryTime: '2-4 Business Days with Insured Armored Courier',
        images: [primaryImg, secondaryImg, tertiaryImg],
        isFeatured: index % 6 === 1,
        isBestseller: index % 5 === 0,
        isNewArrival: index % 4 === 0,
      });
    }
  });

  return products;
}

// Single source of truth instantiated once in memory (5,000 products)
export const ALL_PRODUCTS: Product[] = generateProducts();

// Helper functions for instantaneous lookup
export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.slug === slug || p.id === slug);
}

export function getProductsByCategory(categorySlug: CategorySlug): Product[] {
  return ALL_PRODUCTS.filter(p => p.categorySlug === categorySlug);
}

export function getProductsByBrand(brandId: string): Product[] {
  return ALL_PRODUCTS.filter(p => p.brandId === brandId || p.brandName.toLowerCase() === brandId.toLowerCase());
}

export function getFeaturedProducts(limit = 12): Product[] {
  return ALL_PRODUCTS.filter(p => p.isFeatured).slice(0, limit);
}

export function getBestsellerProducts(limit = 12): Product[] {
  return ALL_PRODUCTS.filter(p => p.isBestseller).slice(0, limit);
}

export function getNewArrivalProducts(limit = 12): Product[] {
  return ALL_PRODUCTS.filter(p => p.isNewArrival).slice(0, limit);
}

export function getRelatedProducts(currentProduct: Product, limit = 4): Product[] {
  return ALL_PRODUCTS
    .filter(p => p.id !== currentProduct.id && (p.categorySlug === currentProduct.categorySlug || p.brandId === currentProduct.brandId))
    .slice(0, limit);
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
