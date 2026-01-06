"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden m-0 p-0">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Clinic Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base tracking-wide uppercase mb-2 text-gray-200">
          Welcome to
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
          PAK-SWISS <span className="text-[#2AAA8A]">ALTERNATIVE MEDICINE</span>
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-100 mb-6">
          Dr. A.G. Qaiser Moghal (FTJ-RUMP){" "}
        </p>

        <button className="bg-[#2AAA8A] hover:bg-[#238f74] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
          Book an appointment
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+923135620039" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-20"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
