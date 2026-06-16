export default function TrustStrip() {
  const items = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "Fast", label: "Delivery & Iteration" },
    { value: "Secure", label: "Systems & Infrastructure" },
    { value: "Nigeria", label: "Registered & Compliant" },
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-wrap items-center justify-between gap-y-6">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-4">
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-zinc-300" />}
              <div>
                <p className="text-[22px] font-bold text-zinc-900 leading-none mb-1">{item.value}</p>
                <p className="text-[12px] text-zinc-500 font-medium">{item.label}</p>
              </div>
            </div>
          ))}

          <div className="w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#16a34a] hover:text-[#15803d] transition-colors"
            >
              Work with us
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
