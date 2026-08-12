import { useState, useEffect, useCallback, createContext, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product, size, color, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.size === size && item.color === color
      );

      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, {
        cartId: Date.now().toString(36) + Math.random().toString(36).substr(2),
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size,
        color,
        quantity
      }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId, quantity) => {
    if (quantity < 1) {
      setCart(prev => prev.filter(item => item.cartId !== cartId));
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingThreshold = 3500;
  const freeShippingProgress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
  const amountForFreeShipping = Math.max(freeShippingThreshold - cartTotal, 0);

  return (
    <CartContext.Provider value={{
      cart,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      freeShippingProgress,
      amountForFreeShipping,
      freeShippingThreshold
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
