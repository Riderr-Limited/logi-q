import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <p className="text-xl font-extrabold text-white">LOGI-Q</p>
            <p className="text-xs leading-relaxed">LOGI-Q Technologies Limited — Smart Logistics & Technology Solutions. Registered in Nigeria.</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="space-y-2 text-xs">
              {["Smart Logistics", "Software Development", "IT Services", "Tech Consulting", "ICT Training", "R&D & Innovation"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="space-y-2 text-xs">
              {["About Us", "Why Choose Us", "Partnerships", "Contact"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="bg-white/10 mb-6" />
        <p className="text-xs text-center text-slate-600">
          © {new Date().getFullYear()} LOGI-Q Technologies Limited. All rights reserved. Nigeria.
        </p>
      </div>
    </footer>
  );
}
