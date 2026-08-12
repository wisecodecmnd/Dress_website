import { useRef, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, cartTotal, cartCount, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, amountForFreeShipping, freeShippingProgress } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-primary/50 z-[70] transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-background z-[80] shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <h2 className="text-sm font-semibold tracking-widest">YOUR CART ({cartCount})</h2>
            </div>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-secondary/40 mb-4" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-sm text-secondary mb-6">Add some items to get started</p>
                <Link to="/shop" onClick={() => setIsCartOpen(false)} className="btn-primary">
                  CONTINUE SHOPPING
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-24 h-32 bg-primary/5 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-sm font-medium hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-secondary mt-1">
                          {item.size} / {item.color}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-primary/20">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-2 hover:bg-primary/5 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-2 hover:bg-primary/5 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-xs text-secondary hover:text-primary transition-colors underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-primary/10 p-6 space-y-4">
              {/* Free Shipping */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Truck size={14} />
                  {amountForFreeShipping > 0 ? (
                    <span>{formatPrice(amountForFreeShipping)} away from free shipping</span>
                  ) : (
                    <span className="font-medium">You qualify for free shipping!</span>
                  )}
                </div>
                <div className="h-1 bg-primary/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">Subtotal</span>
                <span className="text-lg font-semibold">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-secondary">Shipping and taxes calculated at checkout</p>
              <button className="w-full btn-primary">CHECKOUT</button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="w-full btn-outline block text-center"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
