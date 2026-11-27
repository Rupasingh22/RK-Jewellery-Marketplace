import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MarketplaceProvider } from './context/MarketplaceContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { CategoryPage } from './pages/CategoryPage';
import { BrandPage } from './pages/BrandPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

// Scroll to top on navigation change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <MarketplaceProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#121212]">
          
          {/* Fixed Luxury Header */}
          <Header />

          {/* Dynamic Content Views */}
          <main className="flex-grow">
            <Routes>
              {/* Exactly 5 Main Navigation Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Dedicated 100 Brand Salon Pages */}
              <Route path="/brand/:brandId" element={<BrandPage />} />

              {/* Dedicated High Jewellery Detail Page */}
              <Route path="/product/:slug" element={<ProductDetailPage />} />

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Cart Drawer */}
          <CartDrawer />

          {/* Fixed Reusable Luxury Footer */}
          <Footer />

        </div>
      </BrowserRouter>
    </MarketplaceProvider>
  );
};

export default App;
