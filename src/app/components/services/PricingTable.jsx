function PricingTable() {
  return (
    <section className="w-full px-6 lg:px-40 py-20 bg-background-dark/50 border-y border-glass-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-white/60">
            Choose the plan that best fits your project needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Starter Plan */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col">
            <h3 className="text-lg font-medium text-white/80 mb-2">Starter</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-white">$1,999</span>
              <span className="text-white/40 text-sm">/ project</span>
            </div>
            <p className="text-white/60 text-sm mb-8">
              Perfect for small businesses looking to establish an online
              presence.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                5-Page Website
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Basic SEO
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Mobile Responsive
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                1 Month Support
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-bold hover:bg-primary hover:text-background-dark transition-all duration-300">
              Get Started
            </button>
          </div>
          {/* Professional Plan (Most Popular) */}
          <div className="relative glass-panel rounded-2xl p-8 flex flex-col border-primary/50 shadow-neon transform scale-105 z-10 bg-[#15201b]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-green-400 text-background-dark text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-lg font-medium text-white mb-2">
              Professional
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$4,999</span>
              <span className="text-white/40 text-sm">/ project</span>
            </div>
            <p className="text-white/60 text-sm mb-8">
              Comprehensive solution for growing brands needing robust
              functionality.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                10+ Page Custom Design
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                CMS Integration
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Advanced SEO & Analytics
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                3 Months Support
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Speed Optimization
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-primary text-background-dark font-bold hover:shadow-neon hover:scale-[1.02] transition-all duration-300">
              Choose Plan
            </button>
          </div>
          {/* Enterprise Plan */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col">
            <h3 className="text-lg font-medium text-white/80 mb-2">
              Enterprise
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-3xl font-bold text-white">Custom</span>
            </div>
            <p className="text-white/60 text-sm mb-8">
              Tailored for large organizations with complex requirements.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Unlimited Pages
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Custom Web App Dev
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Priority 24/7 Support
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="material-symbols-outlined text-primary text-base">
                  check_circle
                </span>{" "}
                Dedicated Project Manager
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-primary/30 text-primary font-bold hover:bg-primary hover:text-background-dark transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
