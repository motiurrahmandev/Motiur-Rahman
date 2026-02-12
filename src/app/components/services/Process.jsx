function Process() {
  return (
    <section className="w-full px-6 lg:px-40 py-20 lg:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-white/60">
            A transparent, step-by-step workflow designed for efficiency.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 z-0" />
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#1b2721] border-2 border-primary text-primary flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
            <p className="text-white/60 text-sm">
              We deep dive into your goals, audience, and market to understand
              the challenge.
            </p>
          </div>
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#1b2721] border-2 border-primary text-primary flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
            <p className="text-white/60 text-sm">
              Developing a roadmap and architectural plan to ensure success.
            </p>
          </div>
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#1b2721] border-2 border-primary text-primary flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
            <p className="text-white/60 text-sm">
              Agile development and design sprints with regular updates and
              feedback loops.
            </p>
          </div>
          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-[#1b2721] border-2 border-primary text-primary flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
              04
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
            <p className="text-white/60 text-sm">
              Rigorous testing, final deployment, and post-launch support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
