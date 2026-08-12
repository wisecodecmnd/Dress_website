export const products = [
  {
    id: 1,
    slug: 'indigo-relaxed-denim-shirt',
    name: 'Indigo Relaxed Denim Shirt',
    category: 'shirts',
    subcategory: 'denim-shirts',
    price: 2499,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Indigo', hex: '#1a237e' },
      { name: 'Black', hex: '#111111' }
    ],
    description: 'Premium washed denim shirt with a relaxed contemporary fit. Features button-down collar, chest pockets, and reinforced seams. Made from 100% cotton denim with a soft hand-feel finish.',
    fabric: '100% Cotton Denim, 8oz weight',
    care: 'Machine wash cold. Tumble dry low. Do not bleach.',
    fit: 'Relaxed fit. Model is 6\'1\" wearing size M.',
    rating: 4.8,
    reviews: 124,
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: 2,
    slug: 'black-oversized-denim-shirt',
    name: 'Black Oversized Denim Shirt',
    category: 'shirts',
    subcategory: 'denim-shirts',
    price: 2699,
    images: [
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Indigo', hex: '#1a237e' }
    ],
    description: 'Oversized denim shirt in deep black wash. Drop shoulders, extended hem, and oversized silhouette. Perfect for layering or wearing as a standalone piece.',
    fabric: '100% Cotton Denim, 10oz weight',
    care: 'Machine wash cold inside out. Hang dry recommended.',
    fit: 'Oversized fit. Size down for regular fit.',
    rating: 4.7,
    reviews: 89,
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: 3,
    slug: 'washed-blue-denim-jacket',
    name: 'Washed Blue Denim Jacket',
    category: 'jackets',
    subcategory: 'denim-jackets',
    price: 3499,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Washed Blue', hex: '#4a6fa5' },
      { name: 'Black', hex: '#111111' }
    ],
    description: 'Classic trucker jacket in premium washed blue denim. Features branded buttons, adjustable waist tabs, and interior pocket. A timeless piece that gets better with age.',
    fabric: '100% Cotton Denim, 12oz selvedge',
    care: 'Dry clean recommended. Spot clean when possible.',
    fit: 'Regular fit. True to size.',
    rating: 4.9,
    reviews: 156,
    featured: true,
    newArrival: false,
    inStock: true
  },
  {
    id: 4,
    slug: 'sand-utility-shirt',
    name: 'Sand Utility Shirt',
    category: 'shirts',
    subcategory: 'casual-shirts',
    price: 2299,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sand', hex: '#c4a77d' },
      { name: 'Olive', hex: '#556b2f' },
      { name: 'Black', hex: '#111111' }
    ],
    description: 'Military-inspired utility shirt in sand cotton twill. Features dual chest pockets, button cuffs, and a structured collar. Versatile piece for smart-casual looks.',
    fabric: '100% Cotton Twill',
    care: 'Machine wash cold. Iron on medium heat.',
    fit: 'Regular fit. True to size.',
    rating: 4.6,
    reviews: 72,
    featured: false,
    newArrival: true,
    inStock: true
  },
  {
    id: 5,
    slug: 'black-essential-tee',
    name: 'Black Essential Tee',
    category: 't-shirts',
    subcategory: 'premium-tees',
    price: 999,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#ffffff' },
      { name: 'Grey', hex: '#808080' }
    ],
    description: 'The perfect everyday tee. Heavyweight cotton with a structured fit that holds its shape. Pre-shrunk and garment-washed for ultimate softness.',
    fabric: '220gsm 100% Organic Cotton',
    care: 'Machine wash cold. Tumble dry low.',
    fit: 'Regular fit. True to size.',
    rating: 4.5,
    reviews: 203,
    featured: false,
    newArrival: false,
    inStock: true
  },
  {
    id: 6,
    slug: 'heavyweight-white-tee',
    name: 'Heavyweight White Tee',
    category: 't-shirts',
    subcategory: 'premium-tees',
    price: 1199,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Black', hex: '#111111' },
      { name: 'Off-White', hex: '#f5f3ef' }
    ],
    description: 'Premium heavyweight tee in crisp white. 260gsm cotton with reinforced collar and double-stitched hems. The foundation of every great outfit.',
    fabric: '260gsm 100% Cotton',
    care: 'Machine wash cold. Do not bleach. Hang dry.',
    fit: 'Slightly oversized. Size down for regular fit.',
    rating: 4.7,
    reviews: 178,
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: 7,
    slug: 'relaxed-black-jeans',
    name: 'Relaxed Black Jeans',
    category: 'jeans',
    subcategory: 'relaxed-jeans',
    price: 2799,
    images: [
      'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Indigo', hex: '#1a237e' }
    ],
    description: 'Relaxed fit jeans in deep black wash. Mid-rise with a straight leg. Features branded hardware and contrast stitching. Comfortable all-day wear.',
    fabric: '98% Cotton, 2% Elastane',
    care: 'Machine wash cold inside out. Hang dry.',
    fit: 'Relaxed fit. Mid-rise. Straight leg.',
    rating: 4.6,
    reviews: 145,
    featured: false,
    newArrival: true,
    inStock: true
  },
  {
    id: 8,
    slug: 'vintage-blue-jeans',
    name: 'Vintage Blue Jeans',
    category: 'jeans',
    subcategory: 'straight-jeans',
    price: 2999,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Vintage Blue', hex: '#4a6fa5' },
      { name: 'Light Wash', hex: '#8fa8c8' }
    ],
    description: 'Straight leg jeans in vintage blue wash with authentic whiskering and fading. Classic five-pocket styling with leather patch detail.',
    fabric: '100% Cotton Denim, 12oz',
    care: 'Wash sparingly. Machine wash cold when needed.',
    fit: 'Straight fit. Mid-rise. True to size.',
    rating: 4.8,
    reviews: 192,
    featured: true,
    newArrival: false,
    inStock: true
  },
  {
    id: 9,
    slug: 'navy-oversized-shirt',
    name: 'Navy Oversized Shirt',
    category: 'shirts',
    subcategory: 'oversized-shirts',
    price: 2199,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Navy', hex: '#1a237e' },
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#ffffff' }
    ],
    description: 'Oversized button-up shirt in premium navy cotton poplin. Features a relaxed silhouette, curved hem, and mother-of-pearl buttons.',
    fabric: '100% Cotton Poplin',
    care: 'Machine wash cold. Iron on low heat.',
    fit: 'Oversized fit. Size down for regular fit.',
    rating: 4.5,
    reviews: 67,
    featured: false,
    newArrival: true,
    inStock: true
  },
  {
    id: 10,
    slug: 'olive-cargo-pants',
    name: 'Olive Cargo Pants',
    category: 'jeans',
    subcategory: 'cargo-pants',
    price: 2599,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Olive', hex: '#556b2f' },
      { name: 'Black', hex: '#111111' },
      { name: 'Sand', hex: '#c4a77d' }
    ],
    description: 'Utility cargo pants in olive cotton twill. Features multiple pockets, adjustable cuffs, and a relaxed tapered fit. Built for movement.',
    fabric: '100% Cotton Twill',
    care: 'Machine wash cold. Tumble dry low.',
    fit: 'Relaxed tapered fit. True to size.',
    rating: 4.4,
    reviews: 98,
    featured: false,
    newArrival: true,
    inStock: true
  },
  {
    id: 11,
    slug: 'black-denim-jacket',
    name: 'Black Denim Jacket',
    category: 'jackets',
    subcategory: 'denim-jackets',
    price: 3299,
    images: [
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Indigo', hex: '#1a237e' }
    ],
    description: 'Slim-fit denim jacket in deep black. Features minimal branding, clean lines, and a modern silhouette. Perfect for layering.',
    fabric: '98% Cotton, 2% Elastane Denim',
    care: 'Dry clean recommended. Spot clean when possible.',
    fit: 'Slim fit. Size up for regular fit.',
    rating: 4.7,
    reviews: 134,
    featured: true,
    newArrival: false,
    inStock: true
  },
  {
    id: 12,
    slug: 'grey-marl-oversized-tee',
    name: 'Grey Marl Oversized Tee',
    category: 't-shirts',
    subcategory: 'oversized-tees',
    price: 1299,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Grey Marl', hex: '#808080' },
      { name: 'Black', hex: '#111111' },
      { name: 'White', hex: '#ffffff' }
    ],
    description: 'Oversized tee in premium grey marl cotton. Dropped shoulders, extended length, and a relaxed drape. The ultimate casual piece.',
    fabric: '240gsm Cotton Jersey',
    care: 'Machine wash cold. Tumble dry low.',
    fit: 'Oversized fit. Size down for regular fit.',
    rating: 4.6,
    reviews: 87,
    featured: false,
    newArrival: true,
    inStock: true
  },
  {
    id: 13,
    slug: 'indigo-slim-jeans',
    name: 'Indigo Slim Jeans',
    category: 'jeans',
    subcategory: 'slim-jeans',
    price: 2899,
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      { name: 'Indigo', hex: '#1a237e' },
      { name: 'Black', hex: '#111111' }
    ],
    description: 'Slim fit jeans in deep indigo with minimal fading. Clean, modern silhouette with stretch for comfort. A wardrobe essential.',
    fabric: '98% Cotton, 2% Elastane',
    care: 'Wash inside out. Machine wash cold. Hang dry.',
    fit: 'Slim fit. Mid-rise. True to size.',
    rating: 4.5,
    reviews: 156,
    featured: false,
    newArrival: false,
    inStock: true
  },
  {
    id: 14,
    slug: 'white-oxford-shirt',
    name: 'White Oxford Shirt',
    category: 'shirts',
    subcategory: 'casual-shirts',
    price: 1999,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Light Blue', hex: '#8fa8c8' },
      { name: 'Pink', hex: '#d4a5a5' }
    ],
    description: 'Classic Oxford shirt in premium white cotton. Button-down collar, single chest pocket, and a tailored fit. Smart casual perfection.',
    fabric: '100% Cotton Oxford',
    care: 'Machine wash warm. Iron on medium heat.',
    fit: 'Slim fit. True to size.',
    rating: 4.8,
    reviews: 210,
    featured: false,
    newArrival: false,
    inStock: true
  },
  {
    id: 15,
    slug: 'tan-suede-jacket',
    name: 'Tan Suede Jacket',
    category: 'jackets',
    subcategory: 'leather-jackets',
    price: 4999,
    images: [
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Tan', hex: '#c4a77d' },
      { name: 'Brown', hex: '#8b4513' }
    ],
    description: 'Premium suede jacket in rich tan. Features zip closure, ribbed cuffs, and quilted lining. A statement piece that elevates any outfit.',
    fabric: '100% Genuine Suede with Polyester Lining',
    care: 'Professional leather clean only.',
    fit: 'Regular fit. True to size.',
    rating: 4.9,
    reviews: 76,
    featured: true,
    newArrival: true,
    inStock: true
  },
  {
    id: 16,
    slug: 'black-leather-belt',
    name: 'Black Leather Belt',
    category: 'accessories',
    subcategory: 'belts',
    price: 1499,
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'
    ],
    hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#111111' },
      { name: 'Brown', hex: '#8b4513' }
    ],
    description: 'Premium full-grain leather belt with brushed metal buckle. Hand-stitched edges and embossed logo detail. Built to last a lifetime.',
    fabric: 'Full-Grain Leather',
    care: 'Wipe clean with damp cloth. Condition periodically.',
    fit: 'Measure waist and order corresponding size.',
    rating: 4.7,
    reviews: 143,
    featured: false,
    newArrival: false,
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All', slug: 'all' },
  { id: 'denim', name: 'Denim', slug: 'denim' },
  { id: 'shirts', name: 'Shirts', slug: 'shirts' },
  { id: 't-shirts', name: 'T-Shirts', slug: 't-shirts' },
  { id: 'jackets', name: 'Jackets', slug: 'jackets' },
  { id: 'jeans', name: 'Jeans', slug: 'jeans' },
  { id: 'accessories', name: 'Accessories', slug: 'accessories' }
];

export const collections = [
  {
    id: 'denim-2026',
    slug: 'denim-2026',
    name: 'Denim 2026',
    description: 'Our most ambitious denim collection yet. Reimagined fits, premium washes, and sustainable craftsmanship.',
    image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=1200&q=80',
    products: [1, 2, 3, 7, 8, 11, 13]
  },
  {
    id: 'essentials',
    slug: 'essentials',
    name: 'The Essentials',
    description: 'Timeless pieces that form the foundation of every great wardrobe. Quality you can feel.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
    products: [5, 6, 12, 14]
  },
  {
    id: 'new-arrivals',
    slug: 'new-arrivals',
    name: 'New Arrivals',
    description: 'The latest drops. Fresh styles, new colors, and updated fits for the season ahead.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80',
    products: [1, 2, 4, 6, 7, 9, 10, 12, 15]
  }
];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category) => 
  category === 'all' ? products : products.filter(p => p.category === category || p.subcategory === category);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getNewArrivals = () => products.filter(p => p.newArrival);
export const getCollectionBySlug = (slug) => collections.find(c => c.slug === slug);
