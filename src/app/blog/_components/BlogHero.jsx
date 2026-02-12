function BlogHero() {
  return (
    <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-alt="Abstract dark landscape with glowing geometric shapes"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_716CPd4-FT4j_bLzWLMcwioeTMkWSZ19drcqpvf4vSQec1iae5RidEbUEO6hGLCvG8Au_tYxDajkM0GKss6fhoG6NPwsiJHZpEs3g7Ebqhy-IObMvnz8AxlBoaDfNhF0IJDJT0QGsZ6FCY0K_bT7M0clIb0oo-jBOKpcQO2IQ_-LgGwWSnEkB65elGW4HX5-j4AvdyTwFFpTbg_PDT_ymynZ2JV7Qrh-emTu18u9AYA6ppO56IA1LHt56Z_Slz1cBkzOG-cPq4Lk')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b120f]/30 via-[#0b120f]/60 to-[#0b120f] z-10" />
      {/* Hero Content Card */}
      <div className="relative z-20 w-full max-w-4xl px-4 mt-10">
        <div className="glass-panel rounded-2xl p-8 md:p-12 text-center backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Design Trends
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Glassmorphism
            </span>{" "}
            in UI
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                calendar_today
              </span>
              <span>Oct 24, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                schedule
              </span>
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                visibility
              </span>
              <span>1.2k views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHero;
