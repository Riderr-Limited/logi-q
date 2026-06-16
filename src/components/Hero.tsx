import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0a0f0d] overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* ── Background layers ── */}
      {/* Top-right green glow */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#16a34a]/[0.08] blur-[120px] pointer-events-none" />
      {/* Bottom-left accent */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#16a34a]/[0.05] blur-[100px] pointer-events-none" />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Vignette to fade grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#0a0f0d_100%)] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative flex flex-col min-h-[100svh] max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Top spacer for navbar */}
        <div className="h-[70px] shrink-0" />

        {/* Main content — grows to fill space */}
        <div className="flex-1 flex flex-col justify-center py-16 lg:py-20">

          {/* Status pill */}
          <div className="inline-flex items-center self-start gap-2 mb-8 pl-2 pr-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04]">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-[#4ade80]" />
            </span>
            <span className="text-[11px] font-semibold text-zinc-400 tracking-wide">Nigerian Technology Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-[48px] sm:text-[60px] lg:text-[76px] xl:text-[84px] font-extrabold text-white leading-[1.02] tracking-[-0.03em] mb-6 max-w-[860px]">
            Building digital
            <br className="hidden sm:block" />
            {" "}solutions that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #86efac 0%, #16a34a 70%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              power the future.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-[16px] lg:text-[18px] text-zinc-400 leading-[1.8] max-w-[520px] mb-10 font-light">
            LOGI-Q Technologies Limited designs and delivers innovative software products, digital platforms, and technology services that help businesses move faster in a digital world.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-16 lg:mb-20">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-[8px] bg-[#16a34a] hover:bg-[#15803d] text-white text-[14px] font-semibold transition-all duration-200 shadow-xl shadow-[#16a34a]/25"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center h-12 px-6 rounded-[8px] border border-white/[0.12] text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.04] text-[14px] font-medium transition-all duration-200"
            >
              Learn About Us
            </a>
          </div>

          {/* Logo in hero for brand reinforcement — subtle */}
          <div className="mb-10 opacity-30">
            <Image
              src="/logo.png"
              alt="LOGI-Q Technologies"
              width={100}
              height={32}
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom strip — pinned at bottom */}
        <div className="pb-8 lg:pb-10">
          <div className="border-t border-white/[0.07] pt-6 flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Software Development",
              "Digital Platforms",
              "IT & Cloud Services",
              "Tech Consulting",
              "ICT Training",
              "Product Innovation",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="hidden sm:block w-px h-3 bg-zinc-700" />
                )}
                <span className="text-[12px] text-zinc-600 font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
