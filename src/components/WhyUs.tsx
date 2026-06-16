const reasons = [
  {
    number: "01",
    title: "Modern, Scalable Solutions",
    desc: "We build on current, maintainable technology stacks — no legacy tech, no shortcuts.",
  },
  {
    number: "02",
    title: "Strong Focus on Innovation",
    desc: "Every product we ship is designed with usability and long-term product thinking at its core.",
  },
  {
    number: "03",
    title: "Reliable & Secure Systems",
    desc: "Security and reliability are not afterthoughts — they are part of our development process from day one.",
  },
  {
    number: "04",
    title: "Expert-Driven Approach",
    desc: "Our team brings deep hands-on experience across software, infrastructure, and product design.",
  },
  {
    number: "05",
    title: "Tailored to Your Growth",
    desc: "Solutions are co-designed around your business model, user needs, and growth trajectory.",
  },
  {
    number: "06",
    title: "Long-Term Value",
    desc: "We measure success by the lasting impact we create for your business — not just project delivery.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 lg:py-36 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-lg">
            <p className="text-[11px] font-bold text-[#16a34a] tracking-[0.2em] uppercase mb-3">Why LOGI-Q</p>
            <h2 className="text-[38px] lg:text-[50px] font-extrabold text-zinc-900 leading-[1.08] tracking-[-0.025em]">
              Why businesses choose us.
            </h2>
          </div>
          <p className="text-[14px] text-zinc-500 leading-relaxed max-w-xs lg:text-right">
            We combine local market understanding with world-class software delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-200 rounded-2xl overflow-hidden bg-zinc-100 divide-y divide-zinc-200 sm:divide-y-0">
          {reasons.map(({ number, title, desc }, i) => (
            <div
              key={number}
              className={`bg-white p-8 lg:p-9 group hover:bg-[#fafff9] transition-colors ${
                i % 3 !== 2 ? "lg:border-r lg:border-zinc-200" : ""
              } ${i < 3 ? "sm:border-b sm:border-zinc-200" : ""}`}
            >
              <span className="block text-[11px] font-bold text-zinc-300 tabular-nums tracking-wider mb-5">{number}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="text-[15px] font-bold text-zinc-900 mb-2.5 leading-snug">{title}</h3>
              <p className="text-[13px] text-zinc-500 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
