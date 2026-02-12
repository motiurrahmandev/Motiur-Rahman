function BlogCard() {
  return (
    <article className="col-span-1 lg:col-span-7 prose-content text-slate-300">
      <div id="intro">
        <p className="text-xl md:text-2xl leading-relaxed text-slate-200 font-light mb-8">
          Design is constantly evolving, and 2024 brings new challenges and
          aesthetics to the forefront of user interface design. We are seeing a
          shift from flat minimalism back to depth, texture, and light.
        </p>
        <p>
          The digital landscape is becoming increasingly immersive. As screens
          improve with higher refresh rates and deeper blacks (OLED), designers
          are leveraging these capabilities to create interfaces that feel
          alive. The{" "}
          <a
            className="text-primary hover:underline decoration-primary underline-offset-4"
            href="#"
          >
            new wave of UI
          </a>{" "}
          isn't just about looking good—it's about creating an emotional
          connection through visual fidelity.
        </p>
      </div>
      <div className="my-10">
        <img
          alt="Cyberpunk city street with neon signs and futuristic interface overlay"
          className="w-full h-auto rounded-xl shadow-lg border border-white/10"
          data-alt="Futuristic cyberpunk interface concept art"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3YKZk24ECWx5rAI5nv0bWDG4fiI3MJKWGJ77FnajFhm195U3Z6ELHuTNqHk4Sol1RzdB7AzCPpvXDgoQT1VQe-ysMyBpfYXgKKXxM-93XS7D5KpHz82hKkBaPsM_U3Qa3JfYeWTjZd2zLjIDcHz92Zdam3GtovBK72G0WQufHYZBJ3XJIE7Vu7h9IS1D0nKwk4y1au6YvGCYC7VuFahFpiYWFbPkJlprsm5FFJaFVCXHXm_3xVgCUKb7Wr0LTzipMRcgNgYHLt8rL"
        />
        <p className="text-center text-xs text-slate-500 mt-3">
          Figure 1: Conceptual Interface Depth
        </p>
      </div>
      <h2
        className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3"
        id="glassmorphism"
      >
        <span className="text-primary text-2xl">#</span> Glassmorphism in 2024
      </h2>
      <p>
        Glassmorphism hasn't left; it has matured. Gone are the days of
        illegible text on blurry backgrounds. The modern iteration uses high
        contrast, subtle borders, and noise textures to ensure accessibility
        while maintaining that premium, frosted look.
      </p>
      <div className="bg-[#1a2c24] rounded-lg p-6 my-8 border-l-4 border-primary overflow-x-auto">
        <code className="text-sm font-mono text-emerald-100">
          <span className="text-primary">.glass-panel</span>
        </code>
      </div>
      <p>
        Notice the shift towards darker glass surfaces. In dark mode
        specifically, "smoked glass" is becoming the standard for modal windows
        and sticky headers, providing context of what lies beneath without
        distracting from the content.
      </p>
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic text-xl text-white bg-gradient-to-r from-primary/10 to-transparent rounded-r-lg">
        "Design is not just what it looks like and feels like. Design is how it
        works. In 2024, it's also about how it glows."
        <footer className="text-sm text-primary not-italic font-bold mt-2 uppercase tracking-wide">
          — Steve Jobs (Paraphrased for the Future)
        </footer>
      </blockquote>
      <h2
        className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3"
        id="neon-typography"
      >
        <span className="text-primary text-2xl">#</span> Neon Typography
      </h2>
      <p>
        We are seeing a resurgence of glowing text elements. However, unlike the
        early web, this is used sparingly. Headers, active states, and key data
        points often receive a subtle `text-shadow` or glow effect to denote
        hierarchy.
      </p>
      <p>
        Combining bold, grotesque sans-serif fonts like{" "}
        <span className="font-bold text-white">Space Grotesk</span> with
        delicate neon accents creates a "Cyber-Swiss" aesthetic—highly
        structured but visually electric.
      </p>
      <h2
        className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3"
        id="accessibility"
      >
        <span className="text-primary text-2xl">#</span> Accessibility First
      </h2>
      <p>
        Despite the focus on aesthetics, accessibility remains paramount. Dark
        mode interfaces must maintain a contrast ratio of at least 4.5:1 for
        normal text. The temptation to use low-contrast greys must be fought
        with rigorous testing.
      </p>
      <hr className="border-white/10 my-12" />
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        <a
          className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
          href="#"
        >
          #UI/UX
        </a>
        <a
          className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
          href="#"
        >
          #DesignTrends
        </a>
        <a
          className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
          href="#"
        >
          #CSS
        </a>
        <a
          className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-300 border border-white/10 transition-colors"
          href="#"
        >
          #WebDev
        </a>
      </div>
      {/* Author Card */}
      <div className="glass-panel p-8 rounded-xl flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
        <div className="relative">
          <img
            alt="Portrait of Alex Morgan, UI Designer"
            className="size-20 rounded-full object-cover border-2 border-primary shadow-[0_0_15px_rgba(6,249,132,0.3)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgg8evMvVtmbTmJWhkYQ1y7VsNzyj3MzLyMmmgG7jUlrFN0tbnjcfF7w-NWgO_F8yN5tWiiIabNRJT0wIrDaMFr9IrDmyvfz4rPODiWdqKwrrALAd-1eFsLgVkzWKoMDlnRDKOTbGFZ8v8D2UTlQevFA6a7D_6wdNI9iqC7UV9sGrDvIU1qalyu8zVvTYxJJOF8Z69rGl03x6WiRkSHbzNwyTou2tjn-cfSUIp4dS9SeyKWb915762A6nBlYdL4VxTFZQF0ukewoR"
          />
          <div className="absolute bottom-0 right-0 size-5 bg-primary rounded-full border-4 border-[#0b120f]" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold mb-1">Alex Morgan</h3>
          <p className="text-primary text-sm font-medium mb-3">
            Senior Product Designer
          </p>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            Obsessed with pixels, code, and caffeine. I write about the
            intersection of design engineering and user experience. Building the
            future one div at a time.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <a
              className="size-8 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              className="size-8 rounded bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all group"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">
                alternate_email
              </span>
            </a>
          </div>
        </div>
        <button className="shrink-0 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-black font-bold text-sm transition-all whitespace-nowrap">
          Follow
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
