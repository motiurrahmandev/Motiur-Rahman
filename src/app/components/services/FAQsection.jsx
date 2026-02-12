function FAQsection() {
  return (
    <section className="w-full px-6 lg:px-40 py-20">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {/* FAQ Item 1 */}
          <details className="group glass-panel rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-primary transition-colors">
              What is your typical timeline for a project?
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
              A standard brochure website typically takes 2-4 weeks. More
              complex projects with custom functionality or e-commerce features
              usually range from 6-12 weeks depending on the scope.
            </div>
          </details>
          {/* FAQ Item 2 */}
          <details className="group glass-panel rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-primary transition-colors">
              Do you offer post-launch support?
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
              Absolutely. We offer various maintenance packages that include
              security updates, content changes, and technical support to ensure
              your site continues to run smoothly.
            </div>
          </details>
          {/* FAQ Item 3 */}
          <details className="group glass-panel rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-primary transition-colors">
              Can you help with branding as well?
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
              Yes, our team includes branding specialists. We can help with logo
              design, brand guidelines, color palettes, and overall visual
              identity before we start the development process.
            </div>
          </details>
          {/* FAQ Item 4 */}
          <details className="group glass-panel rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-primary transition-colors">
              How do payments work?
              <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed">
              We typically require a 50% deposit to secure your slot in our
              schedule and begin the work. The remaining 50% is due upon project
              completion and before final launch.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQsection;
