"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#e4e4e7]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="LOGI-Q Technologies"
            width={120}
            height={40}
            className={`h-9 w-auto object-contain transition-all ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
            priority
          />
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[13px] font-medium transition-colors ${
                scrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className={`text-[13px] font-medium transition-colors ${
              scrolled ? "text-zinc-500 hover:text-zinc-900" : "text-white/70 hover:text-white"
            }`}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-8 px-4 rounded-[6px] bg-[#16a34a] hover:bg-[#15803d] text-white text-[12px] font-semibold transition-colors shadow-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={`md:hidden p-1.5 rounded-md transition-colors ${
              scrolled ? "text-zinc-700 hover:bg-zinc-100" : "text-white hover:bg-white/10"
            }`}
          >
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white border-l border-zinc-100 pt-14 px-6">
            <div className="flex items-center gap-2.5 mb-8 pb-6 border-b border-zinc-100">
              <Image src="/logo.png" alt="LOGI-Q Technologies" width={110} height={36} className="h-8 w-auto object-contain" />
            </div>
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-2 text-[14px] font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center h-10 rounded-[7px] bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-semibold transition-colors"
              >
                Get Started
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
