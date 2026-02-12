function FeatureBlog() {
  return (
    <div className="relative group cursor-pointer">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
      <div className="relative w-full glass-panel rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
        <div
          className="h-64 lg:h-auto w-full bg-cover bg-center min-h-[300px] lg:min-h-[450px]"
          data-alt="Abstract 3D digital landscape with neon green geometric shapes"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAi5XA0xMn5uYT9gjil0VNAGnB0KjC6aRhNYBpqbXkcaG1-GLixvFRwwclsxiyS_Z_HmR8cgX5v0OH0P7wY677-mpif1DubjHurJnMimtIiXEhX4WmAdzVAeSf3Ijqmzp5e116up153-wpBtEK00-Kr_AbikCMKj_74xkwyKDji8kUuzklGi6ptUHjgOBLrqoMewPocoVXgL1KrsgCW2xXF18XYHTklvqMlaNZl-FHB4HOnwTu_7NU9PgEmMzvHS1gMjNdOQAu6yArz')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 lg:from-transparent to-transparent lg:bg-gradient-to-r lg:via-transparent lg:to-background-dark/50" />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12 gap-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider bg-primary/10">
              Featured
            </span>
            <span className="text-gray-400 text-sm">
              Jan 12, 2024 • 8 min read
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
            The Future of Digital Interfaces
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Exploring how spatial computing and AI are redefining human-computer
            interaction in the coming decade. We dive deep into glassmorphism,
            depth cues, and gesture controls.
          </p>
          <div className="pt-4">
            <button className="flex items-center gap-2 text-primary font-bold text-base group/btn">
              Read Featured Article
              <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureBlog;
