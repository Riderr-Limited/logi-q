import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTEgMWg1OHY1OEgxVjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-40" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            🇳🇬 Nigeria&apos;s Smart Logistics Platform
          </Badge>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Powering the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Smart Logistics
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            LOGI-Q Technologies Limited connects businesses, riders, and customers through cutting-edge technology — making dispatch, delivery, and supply chain management seamless across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 gap-2">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-600 text-slate-300 hover:bg-slate-800">
              Learn More
            </Button>
          </div>

          <div className="flex gap-10 pt-4">
            {[["500+", "Deliveries Daily"], ["50+", "Partner Riders"], ["10+", "Enterprise Clients"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white">{val}</p>
                <p className="text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual cards */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {[
            { icon: Package, title: "Smart Dispatch", desc: "Real-time rider matching and parcel tracking" },
            { icon: Zap, title: "Fast Delivery", desc: "Same-day courier solutions across Nigeria" },
            { icon: Globe, title: "Digital Platform", desc: "App-based logistics for businesses of all sizes" },
            { icon: ArrowRight, title: "Supply Chain", desc: "End-to-end supply chain technology solutions" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <p className="font-semibold text-white text-sm">{title}</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
