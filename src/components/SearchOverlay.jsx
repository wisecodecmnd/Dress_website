import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className={`fixed inset-0 z-[70] bg-background transition-all duration-500 ${
      isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="section-padding pt-6 flex justify-end">
        <button onClick={onClose} aria-label="Close search">
          <X size={24} strokeWidth={1.5} />
        </button>
      </div>

      <div className="section-padding max-w-3xl mx-auto mt-16">
        <div className="relative">
          <Search size={24} className="absolute left-0 top-1/2 -translate-y-1/2 text-secondary" strokeWidth={1.5} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="WHAT ARE YOU LOOKING FOR?"
            className="w-full bg-transparent border-b-2 border-primary py-4 pl-10 pr-4 text-2xl font-light tracking-tight placeholder:text-secondary/50 focus:outline-none"
          />
        </div>

        {results.length > 0 && (
          <div className="mt-10 space-y-6">
            <p className="text-xs font-semibold tracking-widest text-secondary">PRODUCTS</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-16 h-20 bg-primary/5 overflow-hidden flex-shrink-0">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium group-hover:text-secondary transition-colors">{product.name}</p>
                    <p className="text-xs text-secondary">₹{product.price.toLocaleString()}</p>
                  </div>
                  <ArrowRight size={16} className="text-secondary group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <p className="mt-10 text-secondary">No products found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
