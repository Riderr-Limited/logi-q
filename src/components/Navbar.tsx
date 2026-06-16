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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1410]/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">

        {/* Logo — always visible since navbar stays dark */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="LOGI-Q Technologies"
            width={130}
            height={44}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:contact@riderr.ng"
            className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center h-[34px] px-4 rounded-[7px] bg-[#16a34a] hover:bg-[#15803d] text-white text-[12px] font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-1.5 text-white/70 hover:text-white transition-colors">
            <Menu className="w-5 h-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-[#0d1410] border-l border-white/[0.07] pt-14 px-6">
            <div className="mb-8 pb-6 border-b border-white/[0.07]">
              <Image
                src="/logo.png"
                alt="LOGI-Q Technologies"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-2 text-[14px] font-medium text-white/60 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center h-10 rounded-[7px] bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-semibold transition-colors"
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
