function ServicesGrid() {
  return (
    <section className="w-full px-6 lg:px-40 py-20 bg-background-dark/50 border-t border-glass-border relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-white/60 max-w-lg">
            Comprehensive digital solutions designed to help your business
            thrive in the modern landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-neon">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">code</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Web Development
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Custom front-end & back-end solutions built for performance,
                scalability, and security using modern frameworks.
              </p>
            </div>
            <a
              className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
              href="#"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </a>
          </div>
          {/* Service Card 2 */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-neon">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">brush</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                UI/UX Design
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                User-centric interfaces and interactive prototyping. We design
                products that are intuitive and delightful.
              </p>
            </div>
            <a
              className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
              href="#"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </a>
          </div>
          {/* Service Card 3 */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-neon">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                auto_awesome
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Brand Identity
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Logos, typography, and visual systems that stand out. We craft
                the visual language of your business.
              </p>
            </div>
            <a
              className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
              href="#"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </a>
          </div>
          {/* Service Card 4 */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-neon">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                smartphone
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Apps</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Native and cross-platform mobile applications designed for iOS
                and Android ecosystems.
              </p>
            </div>
            <a
              className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
              href="#"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </a>
          </div>
          {/* Service Card 5 */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-neon">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                google_my_business
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                SEO Optimization
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Data-driven strategies to improve your visibility and ranking on
                search engines.
              </p>
            </div>
            <a
              className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
              href="#"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </a>
          </div>
          {/* Service Card 6 */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-neon">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">
                rocket_launch
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Growth Strategy
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Market analysis and growth hacking techniques to scale your user
                base rapidly.
              </p>
            </div>
            <a
              className="mt-auto flex items-center text-primary text-sm font-bold gap-2 group/link"
              href="#"
            >
              Learn More{" "}
              <span className="material-symbols-outlined text-lg transition-transform group-hover/link:translate-x-1">
                arrow_right_alt
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
