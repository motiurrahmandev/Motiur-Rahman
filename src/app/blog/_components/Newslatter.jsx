function Newslatter() {
  return (
    <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden mt-8">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-3 max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">Join the Newsletter</h2>
          <p className="text-gray-300">
            Stay in the loop. Join 2,000+ designers receiving my weekly
            breakdown on design, tech, and building products.
          </p>
        </div>
        <div className="w-full md:w-auto flex-shrink-0">
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
            <input
              className="w-full sm:w-64 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-primary hover:bg-white text-background-dark font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap"
              type="button"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-3 text-center md:text-left">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newslatter;
