import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const Navbar = ({ onSearchOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'COLLECTIONS', path: '/collection/denim-2026' },
    { name: 'DENIM', path: '/shop/denim' },
    { name: 'NEW ARRIVALS', path: '/shop?filter=new' },
  ];

  const mobileLinks = [
    { name: 'SHOP', path: '/shop' },
    { name: 'NEW ARRIVALS', path: '/shop?filter=new' },
    { name: 'DENIM', path: '/shop/denim' },
    { name: 'SHIRTS', path: '/shop/shirts' },
    { name: 'COLLECTIONS', path: '/collection/denim-2026' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="section-padding flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight text-primary">
            NOIR <span className="font-light">&</span> DENIM
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs font-semibold tracking-widest text-primary link-underline hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button onClick={onSearchOpen} className="hidden sm:block" aria-label="Search">
              <Search size={18} strokeWidth={1.5} className="text-primary" />
            </button>
            <Link to="/account" className="hidden sm:block" aria-label="Account">
              <User size={18} strokeWidth={1.5} className="text-primary" />
            </Link>
            <button onClick={() => setIsCartOpen(true)} className="relative" aria-label="Cart">
              <ShoppingBag size={18} strokeWidth={1.5} className="text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-background text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileOpen(true)} className="lg:hidden" aria-label="Menu">
              <Menu size={24} strokeWidth={1.5} className="text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] bg-primary transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="section-padding py-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight text-background">
            NOIR <span className="font-light">&</span> DENIM
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} strokeWidth={1.5} className="text-background" />
          </button>
        </div>
        <div className="section-padding mt-16 flex flex-col gap-8">
          {mobileLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl font-bold text-background tracking-tight opacity-0 animate-slide-up"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
