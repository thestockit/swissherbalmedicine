"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/info", label: "Information" },
  { href: "/gallery", label: "Gallery" },
  { href: "/appointment", label: "Book an Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow m-0 p-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative h-16">
          {/* Mobile Logo */}
          <div className="md:hidden flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/swiss-logo.png"
                alt="Tempelhof"
                width={180}
                height={70}
                style={{ width: "150px", height: "60px" }}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:flex items-center h-full">
            <Link href="/" className="flex items-center h-full">
              <Image
                src="/swiss-logo.png"
                alt="Tempelhof"
                width={200}
                height={50}
                style={{ width: "200px", height: "50px" }}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[16px] font-semibold uppercase h-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-[#2AAA8A] transition-colors flex items-center h-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 space-y-3 flex flex-col items-start">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="w-full text-left text-gray-800 hover:text-[#2AAA8A] font-semibold uppercase py-2 text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
