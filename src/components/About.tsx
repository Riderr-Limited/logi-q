export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-zinc-950 overflow-hidden relative">

      {/* Subtle right glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16a34a]/[0.06] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Top: full-width pull statement */}
        <div className="mb-20 max-w-[700px]">
          <p className="text-[11px] font-bold text-[#4ade80] tracking-[0.2em] uppercase mb-5">About Us</p>
          <h2 className="text-[38px] lg:text-[54px] font-extrabold text-white leading-[1.07] tracking-[-0.025em] mb-6">
            A Nigerian technology company built for real impact.
          </h2>
          <p className="text-[16px] text-zinc-400 leading-[1.8] font-light max-w-[560px]">
            LOGI-Q Technologies Limited is registered and headquartered in Nigeria. We design, develop, and deliver digital solutions that solve real business problems — from early-stage startups to growing enterprises.
          </p>
        </div>

        {/* Two column — text left, details right */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* Left — mission + vision */}
          <div className="space-y-12">
            <div className="border-l-2 border-[#16a34a] pl-6">
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Our Vision</p>
              <p className="text-[17px] text-zinc-200 leading-[1.75] font-light">
                To become a leading African software and technology company delivering world-class digital solutions that transform businesses and everyday life.
              </p>
            </div>
            <div className="border-l-2 border-zinc-700 pl-6">
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Our Mission</p>
              <p className="text-[17px] text-zinc-400 leading-[1.75] font-light">
                To build innovative software and technology solutions that empower businesses, enhance productivity, and drive digital transformation across industries.
              </p>
            </div>
          </div>

          {/* Right — company facts card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 divide-y divide-zinc-800">
            {[
              ["Country", "Nigeria"],
              ["Type", "Technology Company"],
              ["Speciality", "Software & Digital Platforms"],
              ["Clients", "Startups & Enterprises"],
              ["Status", "Active & Growing"],
            ].map(([key, val]) => (
              <div key={key} className="py-4 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">{key}</span>
                <span className="text-[13px] font-semibold text-white">{val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
