import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { WishlistProvider } from './hooks/useWishlist';
import { ToastProvider } from './hooks/useToast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CartDrawer from './components/CartDrawer';
import SearchOverlay from './components/SearchOverlay';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <CartProvider>
      <WishlistProvider>
        <ToastProvider>
          <div className="min-h-screen bg-background text-primary">
            <CustomCursor />
            <Navbar onSearchOpen={() => setSearchOpen(true)} />
            <CartDrawer />
            <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            <PageTransition key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:categorySlug" element={<Shop />} />
                <Route path="/product/:slug" element={<Product />} />
                <Route path="/collection/:slug" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<div className="pt-32 pb-20 section-padding text-center"><h1 className="text-2xl font-bold mb-4">Account</h1><p className="text-secondary">Coming soon</p></div>} />
              </Routes>
            </PageTransition>

            <Footer />
          </div>
        </ToastProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
