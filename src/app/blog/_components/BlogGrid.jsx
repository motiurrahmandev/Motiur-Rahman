function BlogGrid() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Article Card 1 */}
        <article className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="React code snippet on a dark monitor with neon blue highlights"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJrHTmj80lfB4aogq3sHkeU-yJDGucvLNvuq3l8EfjE2ZsOUrknhYG5lPAru9hDcwDK6zrnuj0Y-H4xSNQkMTtBDZWNjH2YOEABGIzckFfIsHDWL2PP10pLDwzHH9xUE90laJTesPaOhpLQ-ySykmQI8aSZ8hJsN1wGwHwEKSthstWmsa_oH7IVZvJdDlmZnlO6LceeJWtekRW_RWx4bllju0mnaGG5sxxvK_aDqpb6ooWFvlNvHuXplQ0xrWcQyzYfk5c775Bf_ur')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Engineering
              </span>
              <span className="text-gray-500 text-xs">Dec 12 • 5 min read</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="hover-underline-animation">
                Building with React Server Components
              </span>
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              A practical guide to understanding the new paradigm of React
              rendering and how it impacts performance.
            </p>
          </div>
        </article>
        {/* Article Card 2 */}
        <article className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Dark abstract geometric patterns representing UI design"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfOyuHELQCZqw-_UCbU7kergXcZ1ajJFqNuY8nHTwQluHRpYhCTJEWaR8Q8AEMjG3yXVsHPK-9ykR2jYBpD4kPuSYMNJoijarxtxnxTLZ34SOBk_ljA3hA0HOOW3yBDkHJF_j_POqmiX4rkz_z02zVCR0hiOYh3YeNJNcnct8sqIicJkI8tcVjCHQI9HkddzAY6ZrSAcucoirpqIS6A68wIKTGanYt0v7VDOlTiLq-BOSsp0TJ6FNuzORLHfiarFzxBJ_uVsslVGWD')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                UI/UX
              </span>
              <span className="text-gray-500 text-xs">Nov 28 • 8 min read</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="hover-underline-animation">
                Mastering Dark Mode Design
              </span>
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              Why simply inverting colors isn't enough. We explore contrast
              ratios, elevation, and accessibility in dark themes.
            </p>
          </div>
        </article>
        {/* Article Card 3 */}
        <article className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Abstract fluid shapes with smooth gradients"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmQJHTwQxNfJ33d3Z3EwWU73zfvFqpVwAZk2IHyO58vsWFHK2b-XOxL_CrR7D-KewpD3Yri1VugJXlG0pC8r-rVtfGW5tKucdru2grfMuAet9CxB-HLOO_2QHfQzCOnJfRllfgTojvo6aWW9zH4D9L1hzjogPpuZlmQxenZHki2kRh0KMtq0XkXC-Wvj_OUbtcaZXMxBhLyfaiOJBr92r5hhdAEa8VtP34v4ZtooIeo0WEsuHhTd1kFAv0m0tV2ro3IR8gv_kOP4ln')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Design
              </span>
              <span className="text-gray-500 text-xs">Nov 15 • 4 min read</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="hover-underline-animation">
                The Psychology of Micro-interactions
              </span>
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              How small animations can create delight and improve user retention
              in your applications.
            </p>
          </div>
        </article>
        {/* Article Card 4 */}
        <article className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Abstract colorful light trails illustrating animation"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChvLKA9E7jQbgcXb62gf92rrvotZOMxgUnng_mwiEW2WvRSBtu9Q_4VVzvbdqc3nelw4-0TcCQ5QyUKMkXALRfH9Ls9Uka8o6gRKwIedJuKGxW3fTYusi2nK8YXq-r6uLWGN5iTnNCwTFoo35GBDhE2p6AJAyz_A-pU1YykiV5sAHmibCfEhAM8F5C0e77fwOxzZrg0vyEyK_zcKz7eLRy1E6pkigwDpVG87GOiT5X89Unt6-N67pjVGDgfNepA2VQDa62HjhwvN5N')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Tutorial
              </span>
              <span className="text-gray-500 text-xs">Oct 30 • 6 min read</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="hover-underline-animation">
                Accessible Web Animation
              </span>
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              Respecting user preferences with `prefers-reduced-motion` and
              designing inclusive motion experiences.
            </p>
          </div>
        </article>
        {/* Article Card 5 */}
        <article className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Rust programming language code on a dark screen"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlgEq1qY38XtEAaYlI1Fug06FsdCViJ60SEXaPs8VKHdDm3hMu7WGzLK2yVV0CNfyxEwKfdpsMTA_kTkBroGyIB4KGZ6NUOpirVC3zQ7l3JOu8soM3XykWErVgHecIag5oSnBKDjmTw-3oqc1oItKd5nOTQHx9xwf_9i9L6f0ab7dBbp1eH1ZF9Cix3HkcY_xpvIYq4J1oeLyKhwNm3fj3CbJpjHXimpHav5cfd0M304-uq7boY7SUTSg9MSvzRKrBzyaJyd8GDHmP')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                Engineering
              </span>
              <span className="text-gray-500 text-xs">
                Oct 12 • 10 min read
              </span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="hover-underline-animation">
                Rust for Frontend Developers
              </span>
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              Is it time to learn Rust? A look at the ecosystem, tooling, and
              WebAssembly potential.
            </p>
          </div>
        </article>
        {/* Article Card 6 */}
        <article className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-surface-dark">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Foldable phone concept with abstract UI"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD98Qg8HE-HAEAhoCyCgsrJJNxp6P6vtHy8HDEo1Plx4XLyd9bJDpiDgE12B73Qr8TxXwTpWO4uOwjuEvv6BJNkfInd1BW41vdJwlRqdFz-0n4freKxl7wmczH5IeL5TQK6z7zJN2w7oYmwAip80f7yfuJtZFwRusHvEUVfchKBMC_MdujsN_W0HqQOqi1HSz3BFu-W60mz0xmqSmRdtBKJds39Ryry2IKJvuwXjdCoUeuIig_M8rAovzORAuWkZ_vsY6vUry_Uytam')",
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                UI/UX
              </span>
              <span className="text-gray-500 text-xs">Sep 25 • 7 min read</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="hover-underline-animation">
                Designing for Foldable Devices
              </span>
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              Adapting responsive design principles for dual-screen and folding
              display form factors.
            </p>
          </div>
        </article>
      </div>
      <div className="flex justify-center py-8">
        <button className="px-8 py-3 rounded-full border border-white/10 hover:border-primary text-white hover:text-primary transition-colors text-sm font-bold flex items-center gap-2">
          Load More Articles
          <span className="material-symbols-outlined text-lg">expand_more</span>
        </button>
      </div>
    </>
  );
}

export default BlogGrid;
