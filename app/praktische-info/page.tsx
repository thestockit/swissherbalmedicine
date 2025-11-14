"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function WachtpostRegeling() {
  return (
    <div className="w-full bg-white">

      {/* ================= Title ================= */}
      <section className="pt-16 pb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700">
          Wachtpost regeling 1733
        </h1>
      </section>

      {/* ================= 3 Column Layout ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 pb-8">

        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
              <Check className="text-red-600" /> Weekdagen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tijdens de weekdagen is de wachtpost open vanaf{" "}
              <strong>18u tot 8u</strong>.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
              <Check className="text-red-600" /> Weekend en feestdagen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tijdens het weekend en op feestdagen is de wachtpost open van{" "}
              <strong>vrijdag 18u tot maandag 8u</strong> doorlopend.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/emergency.jpg"
              alt="Emergency Entrance"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
              <Check className="text-red-600" /> Telefoonnummer 1733
            </h3>
            <p className="text-gray-700">
              Bij levensbedreigende situaties: bel eerst <strong>112</strong>.
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-2">
              <Check className="text-red-600" /> Adres
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Hendrik Consciencestraat 33, 3000 Leuven
              <br />
              (langs <strong>Spoed Heilig Hart Ziekenhuis</strong>).
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
