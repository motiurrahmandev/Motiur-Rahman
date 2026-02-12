function BlogSidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-24">
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
            Contents
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                className="flex items-center gap-3 text-primary font-medium text-sm border-l-2 border-primary pl-3 -ml-3 bg-primary/5 py-1 rounded-r"
                href="#intro"
              >
                <span>01</span> Introduction
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm pl-3 border-l-2 border-transparent hover:border-white/20"
                href="#glassmorphism"
              >
                <span>02</span> Glassmorphism 2024
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm pl-3 border-l-2 border-transparent hover:border-white/20"
                href="#neon-typography"
              >
                <span>03</span> Neon Typography
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm pl-3 border-l-2 border-transparent hover:border-white/20"
                href="#accessibility"
              >
                <span>04</span> Accessibility First
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm pl-3 border-l-2 border-transparent hover:border-white/20"
                href="#conclusion"
              >
                <span>05</span> Conclusion
              </a>
            </li>
          </ul>
        </div>
        {/* Promo Card Small */}
        <div className="mt-8 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-900/20 border border-primary/20 p-6 text-center">
          <div className="size-12 bg-primary text-[#0b120f] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>
          <h4 className="text-white font-bold mb-2">Weekly Digest</h4>
          <p className="text-xs text-slate-400 mb-4">
            Get the latest design trends delivered to your inbox.
          </p>
          <button className="w-full py-2 rounded bg-primary/10 hover:bg-primary text-primary hover:text-black font-bold text-xs transition-colors border border-primary/50 hover:border-primary">
            Sign Up
          </button>
        </div>
      </div>
    </aside>
  );
}

export default BlogSidebar;
