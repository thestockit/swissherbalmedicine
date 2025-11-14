"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Welkom" },
    { href: "/team", label: "Team" },
    { href: "/afspraak", label: "Afspraak Maken" },
    { href: "/praktische-info", label: "Praktische Info" },
    { href: "/wachtpost", label: "Wachtpost" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* --- MOBILE: Logo Centered --- */}
          <div className="md:hidden flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Tempelhof"
                width={130}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* --- DESKTOP: Logo Left --- */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Tempelhof"
                width={150}
                height={80}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex items-center gap-8 text-[16px] font-semibold uppercase">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-800 hover:text-[#b31b1b] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* --- MOBILE HAMBURGER BUTTON (right aligned) --- */}
          <div className="md:hidden flex items-center absolute right-4">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU SLIDE DOWN --- */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 space-y-3 flex flex-col items-start">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="w-full text-left text-gray-800 hover:text-[#b31b1b] font-semibold uppercase py-2 text-[15px]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
