import React from "react";
import Image from "next/image";

export default function Metopathy() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-10">
      {/* ================= Top Banner Section ================= */}
      <section className="w-full max-w-4xl mx-auto mt-12 mb-20 relative h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
        <Image
          src="/Herb-med.png"
          alt="Herbal Medicine Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* ================= Meteopathy Section ================= */}
      <section className="w-full max-w-6xl mx-auto mb-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/afspraak.avif"
            alt="Meteopathy Treatment"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Meteopathy Treatment
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Meteopathy refers to physical discomfort and health issues caused by
            changes in weather conditions such as temperature, humidity, or air
            pressure. Many people experience headaches, joint pain, fatigue, or
            mood changes due to these environmental shifts.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our clinic offers natural and holistic treatment approaches to help
            manage meteopathy symptoms. Using herbal remedies and personalized
            care, we aim to strengthen the body’s natural balance and improve
            overall comfort.
          </p>

          <a
            href="/appointment"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
