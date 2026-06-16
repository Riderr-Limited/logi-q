import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Truck, Code2, Cloud, Lightbulb, BookOpen, ShoppingBag, FlaskConical, Handshake,
} from "lucide-react";

const services = [
  { icon: Truck, label: "Smart Logistics", desc: "App-based dispatch, courier services, and rider connection for fast parcel delivery." },
  { icon: Code2, label: "Software & Apps", desc: "Custom software, mobile apps, websites, and enterprise digital platforms." },
  { icon: Cloud, label: "IT & Cloud Services", desc: "System integration, cloud services, data management, and cybersecurity." },
  { icon: Lightbulb, label: "Tech Consulting", desc: "Digital transformation advisory for startups, individuals, and organizations." },
  { icon: BookOpen, label: "ICT Training", desc: "Capacity building, digital skills workshops, mentoring, and online learning." },
  { icon: ShoppingBag, label: "Tech Products", desc: "Development, distribution, and sale of software solutions and digital content." },
  { icon: FlaskConical, label: "R&D / Innovation", desc: "Research and development in smart logistics and digital services." },
  { icon: Handshake, label: "Partnerships", desc: "Joint ventures and collaborations within and outside Nigeria." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-100 text-blue-700 border-blue-200 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            What We Do
          </Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Our Services</h2>
          <Separator className="w-16 mx-auto bg-blue-600 h-1 rounded-full" />
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            From smart logistics to enterprise software, we deliver technology solutions that drive growth across Nigeria and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, label, desc }) => (
            <Card key={label} className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-white">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
