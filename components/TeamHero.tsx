"use client";

import Image from "next/image";
import React from "react";

const TeamHero = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Our Gallery
      </h2>

      {/* Line */}
      <div className="w-20 h-[2px] bg-[#2AAA8A] mx-auto mb-6" />

      {/* Subtitle */}
      <p className="text-gray-600 max-w-3xl mx-auto">
        At <strong>Pak-Swiss Unani Herbal Clinic</strong>, we offer professional
        Hijama (Cupping) Therapy performed by qualified and certified
        therapists. This time-tested holistic treatment enhances blood
        circulation, supports natural detoxification, relieves pain, and
        stimulates the body’s self-healing mechanisms. All procedures are
        carried out under strict hygiene protocols and are personalized
        according to each patient’s health condition and Unani principles.
      </p>

      {/* Team Image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl h-auto rounded-lg overflow-hidden shadow-md">
          <Image
            src="/gallery-one.jpeg"
            alt="Ons Team"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
