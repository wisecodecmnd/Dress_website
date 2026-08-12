import { useEffect, useRef } from 'react';

const About = () => {
  const sectionsRef = useRef([]);

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
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const storySections = [
    {
      title: 'WHY WE EXIST',
      text: "We started NOIR & DENIM because we were tired of choosing between fast fashion that falls apart and luxury we couldn't afford. We believed there was a middle ground: premium essentials at honest prices.",
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80'
    },
    {
      title: 'OUR APPROACH',
      text: 'We design everything in-house. No middlemen. No markups. Just direct relationships with the best mills and factories. We visit every facility we work with. We know the people who make our clothes.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
    },
    {
      title: 'FABRIC',
      text: 'The best clothes start with the best materials. We source premium cotton from sustainable farms, partner with heritage denim mills in Japan and Italy, and test every fabric for durability and comfort.',
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80'
    },
    {
      title: 'FIT',
      text: 'We fit on real bodies, not mannequins. Every size is graded individually. We adjust patterns based on customer feedback. Our goal is simple: clothes that feel like they were made for you.',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&q=80'
    },
    {
      title: 'CRAFT',
      text: 'Details matter. Reinforced stress points. Premium hardware. Clean finishes. We obsess over the things most people never see, because that's what separates good from great.',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
    },
    {
      title: 'SUSTAINABILITY',
      text: "We're not perfect, but we're trying. Organic cotton where possible. Recycled packaging. Reduced water usage in denim production. Small steps toward a smaller footprint.",
      image: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80'
    }
  ];

  return (
    <div>
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 section-padding bg-primary text-background">
        <h1 className="text-editorial text-5xl md:text-7xl lg:text-8xl mb-8 max-w-4xl">
          WE MAKE CLOTHES<br />THAT STAY.
        </h1>
        <p className="text-background/70 text-lg max-w-xl">
          Built for the long haul. Designed for everyday life. Made by people who care.
        </p>
      </section>

      <div className="section-padding py-20 md:py-32 space-y-32 md:space-y-48">
        {storySections.map((section, i) => (
          <div
            key={section.title}
            ref={addToRefs}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <p className="text-xs font-semibold tracking-[0.3em] text-secondary mb-4">0{i + 1}</p>
              <h2 className="text-editorial text-3xl md:text-5xl mb-6">{section.title}</h2>
              <p className="text-body text-lg leading-relaxed">{section.text}</p>
            </div>
            <div className={`aspect-[4/5] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
