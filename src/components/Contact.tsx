import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-white border-t border-zinc-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* CTA block — asymmetric, not centred */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center mb-20">
          <div>
            <p className="text-[11px] font-bold text-[#16a34a] tracking-[0.2em] uppercase mb-4">Let&apos;s Build Together</p>
            <h2 className="text-[38px] lg:text-[54px] font-extrabold text-zinc-900 leading-[1.07] tracking-[-0.025em] mb-5">
              Turn your idea into a
              <br />
              <span className="text-[#16a34a]">powerful digital product.</span>
            </h2>
            <p className="text-[15px] text-zinc-500 leading-[1.8] max-w-[500px]">
              At LOGI-Q Technologies Limited, we partner with businesses and individuals to design, build, and scale technology that creates real impact. Get in touch today.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <a
              href="mailto:contact@riderr.ng"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-[8px] bg-[#16a34a] hover:bg-[#15803d] text-white text-[14px] font-semibold transition-all shadow-lg shadow-[#16a34a]/20 whitespace-nowrap"
            >
              Send Us a Message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="tel:08026697610"
              className="inline-flex items-center justify-center h-12 px-7 rounded-[8px] border border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 text-[14px] font-medium transition-all"
            >
              Call Us
            </a>
          </div>
        </div>

        {/* Contact details — horizontal strip */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-zinc-100">
          {[
            {
              label: "Email",
              value: "contact@riderr.ng",
              href: "mailto:contact@riderr.ng",
            },
            {
              label: "Phone",
              value: "080 2669 7610",
              href: "tel:08026697610",
            },
            {
              label: "Location",
              value: "Nigeria",
              href: undefined,
            },
          ].map(({ label, value, href }) => (
            <div key={label}>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{label}</p>
              {href ? (
                <a href={href} className="text-[14px] font-semibold text-zinc-900 hover:text-[#16a34a] transition-colors">
                  {value}
                </a>
              ) : (
                <p className="text-[14px] font-semibold text-zinc-900">{value}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
