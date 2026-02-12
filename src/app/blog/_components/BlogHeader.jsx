function BlogHeader() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <h1 className="text-white text-5xl md:text-6xl font-black tracking-tight">
        Insights & Writings
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
        Thoughts on design, technology, and the future of digital interaction.
      </p>
    </div>
  );
}

export default BlogHeader;
