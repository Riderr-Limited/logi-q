import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Nigeria-born, technology-first company headquartered in Nigeria",
  "Full-stack logistics: from rider dispatch to enterprise supply chain",
  "End-to-end software development — mobile, web & enterprise",
  "Trusted IT consulting for startups and established organizations",
  "Digital skills training and ICT capacity building programmes",
  "Commitment to innovation through ongoing R&D initiatives",
  "Strong local and international partnership network",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500 p-1 shadow-2xl">
            <div className="bg-slate-900 rounded-[calc(1.5rem-4px)] p-10 space-y-4">
              <p className="text-xs text-blue-400 font-mono tracking-widest uppercase">Company Profile</p>
              <h3 className="text-2xl font-extrabold text-white leading-snug">LOGI-Q Technologies Limited</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Registered in Nigeria. A technology company built to solve real-world logistics and digital challenges through innovation, software, and smart services.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {[["Country", "Nigeria"], ["Sector", "Technology"], ["Focus", "Logistics + IT"], ["Stage", "Active"]].map(([k, v]) => (
                  <div key={k} className="bg-white/5 rounded-xl p-3">
                    <p className="text-xs text-slate-500">{k}</p>
                    <p className="text-sm font-semibold text-white">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            About Us
          </Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Driving Digital Transformation <br />Across Nigeria
          </h2>
          <Separator className="w-16 bg-blue-600 h-1 rounded-full" />
          <p className="text-slate-600 leading-relaxed">
            LOGI-Q Technologies Limited is a Nigerian technology company delivering smart logistics, enterprise software, IT services, and digital capacity building. We are committed to empowering businesses, individuals, and communities with technology.
          </p>
          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
