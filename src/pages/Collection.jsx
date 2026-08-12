import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCollectionBySlug, products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Collection = () => {
  const { slug } = useParams();
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return (
      <div className="pt-32 pb-20 section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Collection not found</h1>
        <Link to="/shop" className="btn-primary">SHOP ALL</Link>
      </div>
    );
  }

  const collectionProducts = products.filter(p => collection.products.includes(p.id));

  return (
    <div>
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center section-padding">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-background/70 mb-4">COLLECTION</p>
            <h1 className="text-editorial text-5xl md:text-7xl lg:text-8xl text-background mb-6">{collection.name}</h1>
            <p className="text-background/80 max-w-lg mx-auto text-lg">{collection.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 section-padding">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-secondary mb-2">{collectionProducts.length} PIECES</p>
            <h2 className="text-editorial text-2xl md:text-3xl">FEATURED PRODUCTS</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold tracking-widest group">
            SHOP ALL
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {collectionProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collection;
