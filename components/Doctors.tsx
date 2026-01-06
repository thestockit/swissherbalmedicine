"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Doctors = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2AAA8A]">Dr.</h2>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          A.G.Qaiser Moghal (FTJ-RUMP) Registered Unani Medical Practitioner
        </p>
      </div>

      {/* ================= Doctor ================= */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/Qaiser.jpeg"
            alt="Dr. A.G. Qaiser Moghal"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - Info */}
        <div className="md:w-1/2 text-gray-800">
          <ul className="space-y-3 mb-8">
            {[
              "Dr. A. G. Qaiser Moghal – Author.",
              "Founder of Meteopathic Cure and Xypniosis.",
              "BSc (Honours) in Psychology – UK.",
              "Master in Psychology (HEC Equivalency) – Islamabad, Pakistan.",
              "Graduate from FTJ-RUMP – Islamabad, Pakistan.",
              "Diploma in Psychology – Switzerland.",
              "Diploma in Alternative Medicine – Switzerland.",
              "Graduate in Homeopathy – Greece.",
              "Post-Graduation in Homeopathy – Switzerland.",
              "Higher Diploma in Cupping Therapy – UK.",
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
            href="/appointment"
            className="inline-block bg-[#2AAA8A] hover:bg-[#238f74] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
            More info
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
