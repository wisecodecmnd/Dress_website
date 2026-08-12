const Marquee = () => {
  const items = ['PREMIUM FABRICS', 'MODERN FIT', 'BUILT TO LAST', 'MADE FOR EVERYDAY', 'DENIM / SHIRTS / ESSENTIALS'];

  return (
    <div className="bg-primary text-background py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-semibold tracking-[0.3em] mx-8 flex items-center gap-8">
            {item}
            <span className="w-2 h-2 bg-background/30 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
