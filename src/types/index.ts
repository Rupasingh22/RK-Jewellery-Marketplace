export type CategorySlug = 
  | 'gold-jewellery'
  | 'diamond-jewellery'
  | 'silver-jewellery'
  | 'bridal-jewellery'
  | 'fashion-jewellery';

export interface CategoryInfo {
  id: string;
  slug: CategorySlug;
  name: string;
  tagline: string;
  heroImage: string;
  bannerImage: string;
  description: string;
  subcategories: string[];
  attributes: string[];
}

export interface BrandInfo {
  id: string;
  slug: string;
  name: string;
  categorySlug: CategorySlug;
  categoryName: string;
  origin: string;
  foundedYear: number;
  speciality: string;
  logo: string;
  banner: string;
  description: string;
  overview: string;
  rating: number;
  reviewsCount: number;
  priceRange: string;
}

export interface ProductSpecification {
  purity?: string;
  metalWeight?: string;
  jewelleryType?: string;
  design?: string;
  size?: string;
  certification?: string;
  diamondSpec?: string;
  metalType?: string;
  diamondWeight?: string;
  settingStyle?: string;
  silverPurity?: string;
  material?: string;
  includedPieces?: string;
  occasion?: string;
  baseMaterial?: string;
  plating?: string;
  color?: string;
  careInstructions?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandId: string;
  brandName: string;
  categorySlug: CategorySlug;
  categoryName: string;
  subcategory: string;
  regularPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  description: string;
  specifications: ProductSpecification;
  materials: string[];
  sizes: string[];
  colors: string[];
  weight: string;
  rating: number;
  reviewCount: number;
  stockCount: number;
  inStock: boolean;
  deliveryTime: string;
  images: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  productName?: string;
}
