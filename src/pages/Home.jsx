import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Instagram, Heart } from 'lucide-react';
import { products, getNewArrivals } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import { formatPrice } from '../utils/helpers';
import ProductCard from '../components/ProductCard';
import Marquee from '../components/Marquee';

const Home = () => {
  const heroImageRef = useRef(null);
  const [email, setEmail] = useState('');
  const [outfit, setOutfit] = useState({ top: null, bottom: null, outerwear: null, accessory: null });
  const { addToCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroImageRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      heroImageRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };

    const handleScroll = () => {
      if (!heroImageRef.current) return;
      const scrollY = window.scrollY;
      const scale = 1 + scrollY * 0.0003;
      heroImageRef.current.style.transform = `scale(${Math.min(scale, 1.15)})`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      showToast('Welcome to the club!');
      setEmail('');
    }
  };

  const handleAddLook = () => {
    if (outfit.top) {
      addToCart(outfit.top, outfit.top.sizes[1], outfit.top.colors[0].name);
      if (outfit.bottom) addToCart(outfit.bottom, outfit.bottom.sizes[1], outfit.bottom.colors[0].name);
      if (outfit.outerwear) addToCart(outfit.outerwear, outfit.outerwear.sizes[1], outfit.outerwear.colors[0].name);
      if (outfit.accessory) addToCart(outfit.accessory, outfit.accessory.sizes[0], outfit.accessory.colors[0].name);
      showToast('Look added to cart!');
    }
  };

  const outfitTotal = [outfit.top, outfit.bottom, outfit.outerwear, outfit.accessory]
    .filter(Boolean)
    .reduce((sum, item) => sum + item.price, 0);

  const tops = products.filter(p => p.category === 'shirts' || p.category === 't-shirts');
  const bottoms = products.filter(p => p.category === 'jeans');
  const outerwears = products.filter(p => p.category === 'jackets');
  const accessories = products.filter(p => p.category === 'accessories');

  const newArrivals = getNewArrivals();

  const categories = [
    { name: 'DENIM', image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&q=80', path: '/shop/denim' },
    { name: 'SHIRTS', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80', path: '/shop/shirts' },
    { name: 'T-SHIRTS', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', path: '/shop/t-shirts' },
    { name: 'JACKETS', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80', path: '/shop/jackets' },
    { name: 'JEANS', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', path: '/shop/jeans' },
  ];

  const socialImages = [
    'https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&q=80',
    'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&q=80',
    'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&q=80',
    'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80',
    'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
    'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
    'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=400&q=80',
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-primary">
        <div ref={heroImageRef} className="absolute inset-0 transition-transform duration-300 ease-out">
          <img
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1600&q=80"
            alt="Premium men's fashion"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/30" />

        <div className="relative z-10 h-full flex flex-col justify-end section-padding pb-20 md:pb-32">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-background/70 mb-6">
              NEW SEASON / 2026
            </p>
            <h1 className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-background mb-8 leading-[0.9]">
              BUILT FOR<br />
              THE WAY YOU<br />
              MOVE.
            </h1>
            <p className="text-base md:text-lg text-background/80 max-w-md mb-10">
              Premium everyday essentials engineered for modern men.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary bg-background text-primary hover:bg-background/90">
                SHOP NEW ARRIVALS
              </Link>
              <Link to="/shop/denim" className="btn-outline border-background text-background hover:bg-background hover:text-primary">
                EXPLORE DENIM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* FEATURED COLLECTION */}
      <section className="py-20 md:py-32 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
              alt="Denim Edit"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="lg:pl-20 xl:pl-32 py-8 lg:py-0">
            <p className="text-xs font-semibold tracking-[0.3em] text-secondary mb-4">FEATURED COLLECTION</p>
            <h2 className="text-editorial text-4xl md:text-6xl lg:text-7xl mb-6">THE DENIM<br />EDIT</h2>
            <div className="space-y-6 max-w-md">
              <h3 className="text-xl font-semibold">Denim Overshirt</h3>
              <p className="text-2xl font-bold">₹2,499</p>
              <p className="text-body">Premium washed denim. Relaxed contemporary fit. The piece that started it all.</p>
              <Link to="/shop/denim" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest group">
                SHOP THE EDIT
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="py-20 md:py-32 section-padding">
        <h2 className="text-editorial text-3xl md:text-5xl mb-12 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              to={cat.path}
              className="group relative overflow-hidden aspect-[3/4] reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <span className="text-background text-sm md:text-base font-semibold tracking-widest flex items-center gap-2">
                  {cat.name}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-20 md:py-32">
        <div className="section-padding mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-secondary mb-3">JUST DROPPED</p>
            <h2 className="text-editorial text-3xl md:text-5xl">NEW ARRIVALS</h2>
          </div>
          <Link to="/shop?filter=new" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold tracking-widest group">
            VIEW ALL
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="pl-6 sm:pl-8 lg:pl-16 xl:pl-24">
          <div className="horizontal-scroll no-scrollbar pb-4">
            {newArrivals.map(product => (
              <div key={product.id} className="w-[280px] sm:w-[320px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL STORY */}
      <section className="py-20 md:py-32 section-padding overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-editorial text-4xl md:text-6xl lg:text-7xl mb-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              NOT JUST<br />CLOTHES.<br />A DAILY<br />UNIFORM.
            </h2>
            <p className="text-body text-lg max-w-md mb-8 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              We believe in fewer, better things. Pieces that work harder, last longer, and feel right from day one. 
              No trends. No noise. Just clothes that make sense.
            </p>
            <Link to="/about" className="btn-outline reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              OUR STORY
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
                alt="Editorial fashion"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-64 hidden lg:block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=400&q=80"
                alt="Detail shot"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DENIM STORY */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=1600&q=80"
          alt="Denim story"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center section-padding">
          <div className="max-w-2xl">
            <h2 className="text-editorial text-5xl md:text-7xl lg:text-8xl text-background mb-6">
              DENIM,<br />REDEFINED.
            </h2>
            <p className="text-background/80 text-lg mb-10 max-w-md mx-auto">
              From raw selvedge to washed comfort. Every pair tells a story. Make yours.
            </p>
            <Link to="/shop/denim" className="btn-primary bg-background text-primary hover:bg-background/90">
              EXPLORE DENIM
            </Link>
          </div>
        </div>
      </section>

      {/* STYLE BUILDER */}
      <section className="py-20 md:py-32 section-padding bg-primary/5">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-secondary mb-3">INTERACTIVE</p>
          <h2 className="text-editorial text-3xl md:text-5xl">BUILD YOUR LOOK</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-background p-8 md:p-12">
            <div className="space-y-4">
              {['top', 'bottom', 'outerwear', 'accessory'].map((type) => {
                const item = outfit[type];
                return (
                  <div key={type} className="flex items-center justify-between py-4 border-b border-primary/10">
                    <span className="text-xs font-semibold tracking-widest text-secondary uppercase">{type}</span>
                    {item ? (
                      <div className="flex items-center gap-4">
                        <img src={item.images[0]} alt={item.name} className="w-12 h-16 object-cover" loading="lazy" />
                        <div className="text-right">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-secondary">{formatPrice(item.price)}</p>
                        </div>
                        <button
                          onClick={() => setOutfit(prev => ({ ...prev, [type]: null }))}
                          className="text-secondary hover:text-primary"
                        >
                          <ArrowUpRight size={14} className="rotate-45" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-sm text-secondary">Select {type}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-8 pt-6 border-t-2 border-primary">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold tracking-widest">TOTAL LOOK</span>
                <span className="text-2xl font-bold">{formatPrice(outfitTotal)}</span>
              </div>
              <button
                onClick={handleAddLook}
                disabled={!outfit.top}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ADD LOOK TO CART
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {[
              { type: 'top', label: 'TOP', items: tops },
              { type: 'bottom', label: 'BOTTOM', items: bottoms },
              { type: 'outerwear', label: 'OUTERWEAR', items: outerwears },
              { type: 'accessory', label: 'ACCESSORY', items: accessories },
            ].map(({ type, label, items }) => (
              <div key={type}>
                <p className="text-xs font-semibold tracking-widest text-secondary mb-4">{label}</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {items.slice(0, 4).map(item => (
                    <button
                      key={item.id}
                      onClick={() => setOutfit(prev => ({ ...prev, [type]: item }))}
                      className={`relative aspect-[3/4] overflow-hidden border-2 transition-all ${
                        outfit[type]?.id === item.id ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                      {outfit[type]?.id === item.id && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <Heart size={16} className="text-background fill-background" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-32 md:py-48 section-padding text-center">
        <h2 className="text-editorial text-4xl md:text-6xl lg:text-8xl reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          GOOD CLOTHES<br />SHOULDN'T TRY<br />TOO HARD.
        </h2>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 md:py-32 section-padding">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] text-secondary mb-3">@NOIRANDDENIM</p>
          <h2 className="text-editorial text-3xl md:text-5xl mb-6">FOLLOW THE JOURNEY</h2>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest group">
            <Instagram size={16} />
            FOLLOW US
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {socialImages.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden">
              <img
                src={img}
                alt={`Social ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={24} className="text-background opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 md:py-32 section-padding bg-primary text-background">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-editorial text-3xl md:text-5xl mb-6">STAY IN THE LOOP.</h2>
          <p className="text-background/70 mb-10">New drops, exclusive offers, and style notes. No spam, ever.</p>
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 bg-transparent border-b-2 border-background/30 py-4 px-0 text-background placeholder:text-background/40 focus:outline-none focus:border-background"
              required
            />
            <button type="submit" className="btn-primary bg-background text-primary hover:bg-background/90">
              JOIN US
            </button>
          </form>
          <p className="text-xs text-background/40 mt-6">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
