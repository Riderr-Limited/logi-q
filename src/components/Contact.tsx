import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Get In Touch</p>
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Ready to Work With Us?</h2>
        <p className="text-slate-500 max-w-lg mx-auto">
          Whether you need logistics solutions, software development, IT consulting, or digital training — LOGI-Q Technologies is your partner.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          {[
            { icon: MapPin, text: "Nigeria" },
            { icon: Mail, text: "hello@logiqtech.ng" },
            { icon: Phone, text: "+234 000 000 0000" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-slate-600">
              <Icon className="w-4 h-4 text-blue-600" /> {text}
            </div>
          ))}
        </div>

        <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-10 mt-4">
          Contact Us
        </Button>
      </div>
    </section>
  );
}
