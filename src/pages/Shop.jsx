import { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');

  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  useEffect(() => {
    if (categorySlug) {
      setActiveCategory(categorySlug);
    } else if (filterParam === 'new') {
      setActiveCategory('new');
    } else {
      setActiveCategory('all');
    }
  }, [categorySlug, filterParam]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory === 'new') {
      filtered = filtered.filter(p => p.newArrival);
    } else if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory || p.subcategory === activeCategory);
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter(p => p.colors.some(c => selectedColors.includes(c.name)));
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, selectedSizes, selectedColors, priceRange, sortBy]);

  const allSizes = [...new Set(products.flatMap(p => p.sizes))].sort();
  const allColors = [...new Set(products.flatMap(p => p.colors.map(c => c.name)))];

  const toggleSize = (size) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const toggleColor = (color) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen">
      <div className="section-padding">
        <div className="mb-12">
          <h1 className="text-editorial text-4xl md:text-6xl mb-4">
            {activeCategory === 'new' ? 'NEW ARRIVALS' : activeCategory === 'all' ? 'SHOP ALL' : activeCategory.toUpperCase()}
          </h1>
          <p className="text-body max-w-xl">
            Premium essentials engineered for the modern man. Every piece designed with intention, crafted with care.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-primary/10">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold tracking-widest whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  activeCategory === cat.id ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
                }`}
              >
                {cat.name.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => setActiveCategory('new')}
              className={`text-xs font-semibold tracking-widest whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeCategory === 'new' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary'
              }`}
            >
              NEW ARRIVALS
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs font-semibold tracking-widest lg:hidden"
            >
              <SlidersHorizontal size={16} />
              FILTERS
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs font-semibold tracking-widest pr-8 py-2 focus:outline-none cursor-pointer"
              >
                <option value="featured">FEATURED</option>
                <option value="newest">NEWEST</option>
                <option value="price-low">PRICE LOW → HIGH</option>
                <option value="price-high">PRICE HIGH → LOW</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          <aside className={`fixed lg:static inset-0 z-40 bg-background lg:bg-transparent lg:w-64 flex-shrink-0 transition-transform duration-500 ${
            showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}>
            <div className="h-full overflow-y-auto p-6 lg:p-0">
              <div className="flex items-center justify-between lg:hidden mb-8">
                <h3 className="text-sm font-semibold tracking-widest">FILTERS</h3>
                <button onClick={() => setShowFilters(false)}><X size={20} /></button>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-semibold tracking-widest mb-4">SIZE</h4>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`w-10 h-10 text-xs font-medium border transition-colors ${
                        selectedSizes.includes(size) ? 'bg-primary text-background border-primary' : 'border-primary/20 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-semibold tracking-widest mb-4">COLOR</h4>
                <div className="flex flex-wrap gap-2">
                  {allColors.map(color => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-2 text-xs font-medium border transition-colors ${
                        selectedColors.includes(color) ? 'bg-primary text-background border-primary' : 'border-primary/20 hover:border-primary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-semibold tracking-widest mb-4">PRICE</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-secondary">
                    <span>₹0</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { setSelectedSizes([]); setSelectedColors([]); setPriceRange([0, 10000]); }}
                className="text-xs font-semibold tracking-widest underline hover:text-secondary transition-colors"
              >
                CLEAR ALL
              </button>
            </div>
          </aside>

          <div className="flex-1">
            <p className="text-xs text-secondary mb-6">{filteredProducts.length} PRODUCTS</p>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg font-medium mb-2">No products found</p>
                <p className="text-sm text-secondary">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
