import { Code2, LayoutDashboard, Cloud, Lightbulb, BookOpen, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    label: "Software Development",
    desc: "We design and build high-quality web applications, mobile apps, and enterprise software tailored to your business needs and user experience goals.",
  },
  {
    icon: LayoutDashboard,
    number: "02",
    label: "Digital Platforms & Products",
    desc: "We create scalable digital platforms that connect users, automate processes, and improve productivity across industries.",
  },
  {
    icon: Cloud,
    number: "03",
    label: "IT & Technology Services",
    desc: "End-to-end technology solutions including system integration, cloud infrastructure, data management, cybersecurity, and technical support.",
  },
  {
    icon: Lightbulb,
    number: "04",
    label: "Technology Consulting",
    desc: "We help startups and organisations plan, design, and implement effective digital strategies and software architectures.",
  },
  {
    icon: BookOpen,
    number: "05",
    label: "ICT Training & Capacity Building",
    desc: "Practical training, workshops, and mentorship programs to help individuals and teams build strong digital and software development skills.",
  },
  {
    icon: Sparkles,
    number: "06",
    label: "Innovation & Product Development",
    desc: "We research, design, and develop innovative technology products that solve real-world challenges and improve digital experiences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Section header — left aligned, not centred */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div className="max-w-lg">
            <p className="text-[11px] font-bold text-[#16a34a] tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h2 className="text-[38px] lg:text-[50px] font-extrabold text-zinc-900 leading-[1.08] tracking-[-0.025em]">
              Everything your business needs to go digital.
            </h2>
          </div>
          <p className="text-[14px] text-zinc-500 leading-relaxed max-w-xs lg:text-right">
            From early-stage MVPs to full enterprise platforms — we build it all.
          </p>
        </div>

        {/* Services — two columns, editorial list style */}
        <div className="grid lg:grid-cols-2 gap-px bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
          {services.map(({ icon: Icon, number, label, desc }) => (
            <div
              key={number}
              className="group bg-white hover:bg-[#fafff9] transition-colors p-8 lg:p-10"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-[11px] font-bold text-zinc-300 tabular-nums tracking-wider">{number}</span>
                <div className="w-9 h-9 rounded-[8px] bg-zinc-50 group-hover:bg-[#16a34a] border border-zinc-200 group-hover:border-[#16a34a] flex items-center justify-center transition-all">
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-[16px] font-bold text-zinc-900 mb-2.5 leading-snug">{label}</h3>
              <p className="text-[13px] text-zinc-500 leading-[1.7]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
