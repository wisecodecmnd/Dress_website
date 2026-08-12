import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ChevronDown, Plus, Minus, Truck, RotateCcw, Ruler } from 'lucide-react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';
import { formatPrice } from '../utils/helpers';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedColor(product.colors[0].name);
      setSelectedSize('');
      setQuantity(1);
      setSelectedImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="btn-primary">SHOP ALL</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    showToast('Added to cart');
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    showToast('Proceeding to checkout...');
  };

  const accordionItems = [
    { title: 'DETAILS', content: product.description },
    { title: 'FABRIC & CARE', content: `${product.fabric}

${product.care}` },
    { title: 'FIT & SIZING', content: product.fit },
    { title: 'SHIPPING & RETURNS', content: 'Free shipping on orders over ₹3,500. Standard delivery 3-5 business days. Easy returns within 14 days of delivery. Items must be unworn with original tags attached.' },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div
              className="relative aspect-[3/4] bg-primary/5 overflow-hidden mb-4 cursor-zoom-in"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              />
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedImage(i); setIsZoomed(false); }}
                  className={`w-20 h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest text-secondary mb-2 uppercase">{product.category}</p>
              <h1 className="text-editorial text-3xl md:text-4xl mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold">{formatPrice(product.price)}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-secondary'} />
                  ))}
                  <span className="text-xs text-secondary ml-1">{product.reviews} Reviews</span>
                </div>
              </div>
              <p className="text-body">{product.description}</p>
            </div>

            {/* Color */}
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest mb-3">COLOR: {selectedColor}</p>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? 'border-primary scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold tracking-widest">SIZE</p>
                <button className="text-xs text-secondary underline flex items-center gap-1">
                  <Ruler size={12} /> SIZE GUIDE
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-sm font-medium border transition-colors ${
                      selectedSize === size ? 'bg-primary text-background border-primary' : 'border-primary/20 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-primary/20">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-primary/5">
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-primary/5">
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={handleAddToCart} className="flex-1 btn-primary">
                ADD TO CART
              </button>
              <button
                onClick={() => { toggleWishlist(product.id); showToast(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist'); }}
                className="w-14 h-14 border border-primary/20 flex items-center justify-center hover:border-primary transition-colors"
              >
                <Heart size={18} className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''} />
              </button>
            </div>

            <button onClick={handleBuyNow} className="w-full btn-outline mb-8">
              BUY IT NOW
            </button>

            <div className="flex flex-wrap gap-6 mb-10 text-xs text-secondary">
              <span className="flex items-center gap-2"><Truck size={14} /> Free shipping over ₹3,500</span>
              <span className="flex items-center gap-2"><RotateCcw size={14} /> 14-day returns</span>
            </div>

            {/* Accordions */}
            <div className="border-t border-primary/10">
              {accordionItems.map((item, i) => (
                <div key={item.title} className="border-b border-primary/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs font-semibold tracking-widest">{item.title}</span>
                    <ChevronDown size={16} className={`transition-transform ${openAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === i ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                    <p className="text-sm text-secondary whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-32">
            <h2 className="text-editorial text-2xl md:text-3xl mb-10">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
