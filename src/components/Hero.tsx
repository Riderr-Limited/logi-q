import { ArrowRight, MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f0d] flex flex-col justify-center overflow-hidden">

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      {/* Green gradient pool — top right */}
      <div className="absolute -top-32 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#16a34a]/[0.07] blur-[100px] pointer-events-none" />
      {/* Faint green bottom left */}
      <div className="absolute bottom-0 -left-20 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#16a34a]/[0.05] blur-[80px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 mb-10 pl-1 pr-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" />
          <span className="text-[11px] font-medium text-zinc-400 tracking-wide">Nigeria-Based Technology Company</span>
        </div>

        {/* Main headline — left-heavy, intentionally wide */}
        <div className="max-w-[820px]">
          <h1 className="text-[52px] sm:text-[64px] lg:text-[78px] font-extrabold text-white leading-[1.0] tracking-[-0.03em] mb-6">
            Building digital
            <br />
            solutions that{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #4ade80 0%, #16a34a 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              power the future.
            </span>
          </h1>

          <p className="text-[17px] text-zinc-400 leading-[1.75] max-w-[540px] mb-10 font-light">
            LOGI-Q Technologies Limited designs and delivers innovative software products, digital platforms, and technology services that help businesses move faster in a digital world.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-[8px] bg-[#16a34a] hover:bg-[#15803d] text-white text-[14px] font-semibold transition-all shadow-lg shadow-[#16a34a]/20"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-[8px] border border-white/[0.1] text-zinc-300 hover:text-white hover:border-white/20 text-[14px] font-medium transition-all"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Bottom strip — capabilities list */}
        <div className="mt-24 lg:mt-32 pt-8 border-t border-white/[0.07] flex flex-wrap gap-x-10 gap-y-4">
          {[
            "Software Development",
            "Digital Platforms",
            "IT & Cloud Services",
            "Tech Consulting",
            "ICT Training",
            "Product Innovation",
          ].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              {i > 0 && <span className="hidden sm:block w-px h-3 bg-zinc-700" />}
              <span className="text-[12px] text-zinc-500 font-medium tracking-wide">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
