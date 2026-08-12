import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-background pt-20 pb-10">
      <div className="section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6 text-background/60">SHOP</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Denim', 'Shirts', 'T-Shirts', 'Jackets', 'Jeans'].map(item => (
                <li key={item}>
                  <Link to={`/shop${item === 'New Arrivals' ? '?filter=new' : item === 'Denim' ? '/denim' : `/${item.toLowerCase().replace('-', '-')}`}`} 
                    className="text-sm text-background/80 hover:text-background transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6 text-background/60">ABOUT</h4>
            <ul className="space-y-3">
              {['Our Story', 'How We Make It', 'Sustainability'].map(item => (
                <li key={item}>
                  <Link to="/about" className="text-sm text-background/80 hover:text-background transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6 text-background/60">HELP</h4>
            <ul className="space-y-3">
              {['Contact', 'Shipping', 'Returns', 'Size Guide', 'FAQ'].map(item => (
                <li key={item}>
                  <Link to="/contact" className="text-sm text-background/80 hover:text-background transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-widest mb-6 text-background/60">SOCIAL</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/60">© 2026 NOIR & DENIM. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-background/60 hover:text-background transition-colors">Privacy</Link>
            <Link to="/" className="text-xs text-background/60 hover:text-background transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
