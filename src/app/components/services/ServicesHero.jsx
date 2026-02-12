function ServicesHero() {
  return (
    <section className="w-full px-6 lg:px-40 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-radial-glow opacity-60 pointer-events-none" />
      <div className="max-w-[960px] mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-bold uppercase tracking-wider">
            Available for new projects
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Expert Services & <br className="hidden md:block" />
          <span className="text-white">Tailored Solutions</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Elevating brands through precision code and immersive design. We build
          digital experiences that scale with your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="h-12 px-8 rounded-xl bg-primary text-background-dark font-bold text-base hover:shadow-neon hover:scale-105 transition-all duration-300">
            View Pricing
          </button>
          <button className="h-12 px-8 rounded-xl glass-panel text-white font-medium text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
            Our Process
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
