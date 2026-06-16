import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, TrendingUp, Users, Cpu } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Trusted & Compliant", desc: "Duly registered Nigerian company operating within all regulatory frameworks." },
  { icon: TrendingUp, title: "Proven Impact", desc: "Track record of delivering logistics and software solutions that drive measurable results." },
  { icon: Users, title: "Client-Centred", desc: "We co-create with clients — startups, enterprises, and government alike." },
  { icon: Cpu, title: "Technology-First", desc: "Our solutions are built on modern, scalable, and secure technology stacks." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-blue-700 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <Badge className="bg-white/10 text-white border-white/20 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest">
          Why LOGI-Q
        </Badge>
        <h2 className="text-4xl font-extrabold tracking-tight">Why Choose Us</h2>
        <Separator className="w-16 mx-auto bg-white/30 h-1 rounded-full" />
        <p className="text-blue-200 max-w-xl mx-auto text-base">
          We combine deep local knowledge with world-class technology to deliver outcomes that matter.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors space-y-4 backdrop-blur">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="font-bold text-white">{title}</h3>
            <p className="text-sm text-blue-200 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
