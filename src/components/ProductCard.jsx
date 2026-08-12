import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';
import { formatPrice } from '../utils/helpers';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizes, setShowSizes] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const handleQuickAdd = (e, size) => {
    e.preventDefault();
    e.stopPropagation();
    if (!size) {
      setShowSizes(true);
      return;
    }
    addToCart(product, size, product.colors[0].name);
    showToast(`${product.name} added to cart`);
    setShowSizes(false);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    showToast(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setShowSizes(false); }}
    >
      <div className="relative overflow-hidden bg-primary/5 aspect-[3/4] mb-4">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 w-9 h-9 bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            strokeWidth={1.5}
            className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}
          />
        </button>

        {/* Quick Add */}
        {showQuickAdd && (
          <div className={`absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm p-3 transition-all duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
            {showSizes ? (
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={(e) => handleQuickAdd(e, size)}
                    className="flex-1 min-w-[40px] py-2 text-xs font-medium border border-primary hover:bg-primary hover:text-background transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={(e) => handleQuickAdd(e, null)}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold tracking-widest bg-primary text-background hover:bg-accent transition-colors"
              >
                <ShoppingBag size={14} />
                QUICK ADD
              </button>
            )}
          </div>
        )}

        {product.newArrival && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest bg-primary text-background px-2 py-1">
            NEW
          </span>
        )}
      </div>

      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-medium group-hover:text-secondary transition-colors">{product.name}</h3>
          {product.rating && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={12} className="fill-primary text-primary" />
              <span className="text-xs text-secondary">{product.rating}</span>
            </div>
          )}
        </div>
        <p className="text-xs text-secondary capitalize">{product.category}</p>
        <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
        {product.colors.length > 1 && (
          <div className="flex gap-1.5 pt-1">
            {product.colors.map(color => (
              <span
                key={color.name}
                className="w-3 h-3 rounded-full border border-primary/20"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
