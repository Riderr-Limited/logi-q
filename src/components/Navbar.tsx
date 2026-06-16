"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = ["About", "Services", "Why Us", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-blue-700">LOGI-Q</span>
          <span className="hidden sm:block text-xs font-medium text-slate-500 uppercase tracking-widest">Technologies</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">
              {l}
            </a>
          ))}
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-5">
            Get Started
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors">
            <Menu className="w-5 h-5 text-slate-700" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 pt-12">
            <nav className="flex flex-col gap-6 px-2">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setOpen(false)} className="text-base font-medium text-slate-700 hover:text-blue-700 transition-colors">
                  {l}
                </a>
              ))}
              <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full mt-2">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
