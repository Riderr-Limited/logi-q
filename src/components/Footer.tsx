import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f0d] border-t border-zinc-800">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-14 pb-10">
        <div className="grid sm:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="LOGI-Q Technologies" width={110} height={36} className="h-8 w-auto object-contain opacity-90" />
            </div>
            <p className="text-zinc-600 text-[12px] leading-relaxed max-w-[200px]">
              Digital solutions that power the future. Registered in Nigeria.
            </p>
            <div className="space-y-1.5">
              <a href="mailto:contact@riderr.ng" className="block text-[12px] text-zinc-600 hover:text-[#4ade80] transition-colors">
                contact@riderr.ng
              </a>
              <a href="tel:08026697610" className="block text-[12px] text-zinc-600 hover:text-[#4ade80] transition-colors">
                080 2669 7610
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {["Software Development", "Digital Platforms", "IT & Cloud", "Tech Consulting", "ICT Training", "Innovation"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[12px] text-zinc-600 hover:text-zinc-300 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2.5">
              {["About Us", "Our Vision", "Why LOGI-Q", "Partnerships"].map((s) => (
                <li key={s}>
                  <a href="#about" className="text-[12px] text-zinc-600 hover:text-zinc-300 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Get Started</p>
            <p className="text-[12px] text-zinc-600 leading-relaxed mb-4">
              Ready to build your next digital product?
            </p>
            <a
              href="mailto:contact@riderr.ng"
              className="inline-flex items-center h-9 px-4 rounded-[6px] bg-[#16a34a] hover:bg-[#15803d] text-white text-[12px] font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-zinc-700">
            © {year} LOGI-Q Technologies Limited. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-700">Registered in Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
