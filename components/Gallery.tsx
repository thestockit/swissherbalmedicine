"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Gallery = () => {
  const tiktokUrl =
    "https://www.tiktok.com/@pakswissherbalpk/video/7356141737179467014";

  const galleryImages = [
    {
      src: "/checkup-room.jpeg",
      description: "Cupping Therapy Room",
    },
    {
      src: "/hurbel-bottel.jpeg",
      description: "Authentic Unani Herbal Medicines",
    },
    {
      src: "/Visiting patient room.jpeg",
      description: "Consulting Room",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 space-y-24">
      {/* ================= TOP HEADING ================= */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Global Training & Achievements
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          A journey of certifications, training sessions, and professional
          development across different platforms and locations.
        </p>
      </div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300">
              <Image
                src={item.src}
                alt={item.description}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Description */}
            <div className="mt-4 text-center">
              <p className="text-gray-700 font-medium text-lg">
                {item.description}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {index === 0 &&
                  "Fully equipped for cupping therapy and patient comfort"}
                {index === 1 && "Pure herbal extracts prepared traditionally"}
                {index === 2 &&
                  "Private consultation space for personalized Unani treatment"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Doctor Section ================= */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Left - Video */}
        <div
          className="relative w-full md:w-1/2 h-80 md:h-[420px] 
                     rounded-2xl overflow-hidden shadow-xl 
                     group cursor-pointer transition-transform 
                     hover:scale-[1.02] bg-black"
          onClick={() => window.open(tiktokUrl, "_blank")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 shadow-lg group-hover:scale-110 transition">
              <svg
                className="w-12 h-12 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm tracking-widest opacity-80">
            Watch Video
          </span>
        </div>

        {/* Right - Doctor Info */}
        <div className="md:w-1/2 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-[#2AAA8A] mb-2">
            Unani & Hijama Specialist
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Dr. A. G. Qaiser Moghal
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              "Unani Herbal Cure is a natural system of healing.",
              "It primarily uses herbs to prepare natural remedies.",
              "The roots of Unani medicine originate from ancient Greece.",
              "Arabic Muslim scholars further developed it.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight
                  className="text-[#2AAA8A] mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/team"
            className="inline-block bg-[#2AAA8A] hover:bg-[#238f74] 
                       text-white px-6 py-2 rounded-full font-semibold transition"
          >
            View Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
