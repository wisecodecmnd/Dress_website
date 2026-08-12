import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const location = useLocation();

  useEffect(() => {
    if (children !== displayChildren) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        window.scrollTo(0, 0);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div className={`transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
