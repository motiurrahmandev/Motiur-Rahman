function SearchAndFilter() {
  return (
    <div className=" top-20 z-40 py-4 -mx-6 px-6 lg:-mx-10 lg:px-10 bg-background-dark/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <button className="px-5 py-2 rounded-full bg-primary text-background-dark font-bold text-sm whitespace-nowrap">
            All
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-gray-300 hover:border-primary hover:text-primary transition-colors text-sm font-medium whitespace-nowrap">
            Engineering
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-gray-300 hover:border-primary hover:text-primary transition-colors text-sm font-medium whitespace-nowrap">
            UI/UX
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-gray-300 hover:border-primary hover:text-primary transition-colors text-sm font-medium whitespace-nowrap">
            Career
          </button>
          <button className="px-5 py-2 rounded-full border border-white/10 text-gray-300 hover:border-primary hover:text-primary transition-colors text-sm font-medium whitespace-nowrap">
            Tutorial
          </button>
        </div>
        <div className="relative w-full md:w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
            search
          </span>
          <input
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all"
            placeholder="Search articles..."
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchAndFilter;
