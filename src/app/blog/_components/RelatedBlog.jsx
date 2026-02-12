function RelatedBlog() {
  return (
    <section className="w-full bg-[#080d0b] border-t border-white/5 py-16 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-white">Related Readings</h2>
          <a
            className="text-primary text-sm font-medium hover:underline decoration-primary underline-offset-4 flex items-center gap-1"
            href="#"
          >
            View all{" "}
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <a className="group block h-full" href="#">
            <div className="glass-panel glass-panel-hover rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  alt="Abstract fluid 3D shapes rendering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Abstract orange and black fluid shapes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYdcOSDDD5vjiAPMWC5rkL0CiimpOm9eoA-w4tecTrBWX0uDngsQGOjY1TVqYlcRDzVfnjQKM-LBtv8M3fqkwDlviRPGVWZLm2E9DsqDcUdqgAJMOwLk2IjoHwWISLhypT3M7bRMgNeKHfFrr9qe-y57JxNtB3YP_jcu8f_xeLFxOfT4F4bJFjxNmdhULl3-LEa_eTV-xjdufX-OjVFNahuWF02scDHwv27-UPyoqhkfAWcq3dgDMRMvRvYK7OSZ5KDnrmNvURKp9"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    UX Theory
                  </span>
                  <span className="text-xs text-slate-500">Sep 12</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Psychology of Colors in Dark Mode
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  How to use saturation effectively without causing eye strain
                  for your users.
                </p>
              </div>
            </div>
          </a>
          {/* Card 2 */}
          <a className="group block h-full" href="#">
            <div className="glass-panel glass-panel-hover rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  alt="Computer screen with code editor syntax highlighting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Coding screen with syntax highlighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeXpGHoEuEgxtKDrgAW2epeo4pTrypQmBLImibp3nXt8ql4Fx5V7ahuGcPTDWVcrmWpzi03GKMnt3hKEcqIkZvp18W1zTbe_u8oE-D9-BH_355amdBDQunW-UdeHDsTd1DaiAdveH6lhtj8ENXXGO43QY6JBF8bgtLfPPX8OuMFa5J1DlaNz2A8e-AQBZSLyLH1fCZ9IKDva1aSayCPyyCth0fXaxYUYe4WmdOv65fge2U-XQCj98yoI25zluUt5fG_4EyDtucMUSj"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    Dev
                  </span>
                  <span className="text-xs text-slate-500">Aug 28</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Tailwind CSS v4 Features
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  Exploring the new engine and what it means for rapid UI
                  development.
                </p>
              </div>
            </div>
          </a>
          {/* Card 3 */}
          <a className="group block h-full" href="#">
            <div className="glass-panel glass-panel-hover rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  alt="Neon glowing geometric wireframe landscape"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Neon pink and blue wireframe grid"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo-xuR9MnBlGM8YgHDfoD1tOjc9pE-aU2N8cUt5zS0jlXc8l2pLS1Q4l40MyvoYw-SyS9S8Y5r4AnzAbSYFX_wcVKR_JrlY4aSllnmBxaLIJD6W-1H81Jd8ITSyZ0gmxcI8dr2kH4zdAn74b2dPtRZ7pMEYQmPJQ4PR71O5_oT2pDaQlfXooYQCb8C6qTZfzVbKBMN92tuqz5HCc-y8OLPQ8UdYRFAtB0v9WOzWp80FHDw13XdMfqGYfNc_UGYeZUax5oxH4jjT94T"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    Visuals
                  </span>
                  <span className="text-xs text-slate-500">Aug 10</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Creating Neo-Brutalism Web Assets
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  A step-by-step guide to creating high contrast, bold web
                  graphics.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default RelatedBlog;
