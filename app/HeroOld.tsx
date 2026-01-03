export function Hero() {
  return (
    <section className="min-h-[70vh] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
        <canvas
          className="absolute inset-0 pointer-events-none"
          width={945}
          height={1038}
          style={{ opacity: "0.4" }}
        />
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-500 rounded-full mix-blend-screen filter blur-[120px]"
          style={{
            opacity: "0.15",
            transform:
              "translateX(51.0507px) translateY(25.5254px) scale(1.05105)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-primary-400 rounded-full mix-blend-screen filter blur-[120px]"
          style={{
            opacity: "0.12",
            transform:
              "translateX(-126.738px) translateY(-146.523px) scale(1.03262)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary-300 rounded-full mix-blend-screen filter blur-[100px]"
          style={{
            opacity: "0.1",
            transform:
              "translateX(3.88097px) translateY(3.88097px) scale(1.2597)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary-600 rounded-full mix-blend-screen filter blur-[100px]"
          style={{
            opacity: "0.08",
            transform:
              "translateX(-83.961px) translateY(41.9805px) scale(1.08396)",
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0f0f0f] pointer-events-none z-10" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(193, 160, 115, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(193, 160, 115, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div style={{ opacity: 1, transform: "none" }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span
              className="inline-block bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                backgroundPosition: "93.28% 50%",
              }}
            >
              Catchy Me!
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Сервис для cold outreach
          </p>
        </div>
        <div
          className="max-w-3xl mx-auto mb-8"
          style={{ opacity: 1, transform: "none" }}
        >
          <p className="text-xl md:text-3xl text-primary-400 mb-3 font-bold leading-tight">
            Персонализируем аутрич и повышаем конверсию до x10
            <sup className="text-xs text-primary-400 ml-1">[1]</sup>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div
              className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-primary-500/20 rounded-lg p-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="text-3xl font-bold text-primary-400 mb-1">
                10x
              </div>
              <div className="text-sm text-gray-400">Конверсия</div>
            </div>
            <div
              className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-primary-500/20 rounded-lg p-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="text-3xl font-bold text-primary-400 mb-1">
                AI-Powered
              </div>
              <div className="text-sm text-gray-400">Глубокое исследование</div>
            </div>
            <div
              className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-primary-500/20 rounded-lg p-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="text-3xl font-bold text-primary-400 mb-1">
                100%
              </div>
              <div className="text-sm text-gray-400">Персонализация</div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          style={{ opacity: 1, transform: "none" }}
        >
          <a href="/register">
            <div tabIndex={0} style={{ transform: "none" }}>
              <div
                className="inline-block"
                tabIndex={0}
                style={{ transform: "none" }}
              >
                <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-400 text-[#1a1a1a] font-semibold hover:from-primary-400 hover:to-primary-300 focus:ring-primary-500 shadow-lg shadow-primary-500/20 px-6 py-3 text-lg min-w-[220px] text-lg font-semibold shadow-lg shadow-primary-500/10">
                  Попробовать бесплатно
                  <svg
                    className="w-5 h-5 ml-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
