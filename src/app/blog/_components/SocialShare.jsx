function SocialShare() {
  return (
    <div className="hidden lg:block lg:col-span-2">
      {/* Share Buttons Sticky */}
      <div className="sticky top-24 flex flex-col gap-4 items-center">
        <span
          className="text-xs text-slate-500 font-bold uppercase tracking-widest rotate-180 py-4"
          style={{ writingMode: "vertical-rl" }}
        >
          Share Article
        </span>
        <button className="size-10 rounded-full bg-white/5 hover:bg-[#1da1f2] hover:text-white text-slate-400 flex items-center justify-center transition-all">
          <svg
            aria-hidden="true"
            className="size-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </button>
        <button className="size-10 rounded-full bg-white/5 hover:bg-[#0a66c2] hover:text-white text-slate-400 flex items-center justify-center transition-all">
          <svg
            aria-hidden="true"
            className="size-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              clipRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button className="size-10 rounded-full bg-white/5 hover:bg-primary hover:text-black text-slate-400 flex items-center justify-center transition-all">
          <span className="material-symbols-outlined text-lg">
            content_copy
          </span>
        </button>
      </div>
    </div>
  );
}

export default SocialShare;
