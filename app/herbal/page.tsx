import React from "react";
import Image from "next/image";

export default function WachtpostPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-10">
      {/* ================= Banner Section ================= */}
      <section className="w-full max-w-4xl mt-12 mb-16 relative h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
        <Image
          src="/Herb-med.png"
          alt="Herbal Medicine Banner"
          fill
          className="object-cover"
        />
      </section>

      {/* ================= Intro Content Section ================= */}
      <section className="w-full max-w-3xl text-center mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">
          Authentic Unani & Herbal Medicine
        </h2>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            Dear Patients,
            <br />
            We offer authentic Unani and herbal medicines prepared from
            carefully selected natural ingredients. Our formulations are
            designed to promote overall health, balance, and long-term
            well-being.
          </p>

          <p>
            Each treatment is prescribed only after proper consultation and
            diagnosis by an experienced practitioner, ensuring safe, effective,
            and personalized natural care for every patient.
          </p>
        </div>
      </section>

      {/* ================= Image + Content Section ================= */}
      <section className="w-full max-w-6xl mx-auto mb-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/medicine-herbal.png"
            alt="Herbal Clinic"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Trusted Herbal Medical Clinic
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our clinic specializes in natural healing through time-tested herbal
            and Unani treatments. We combine traditional wisdom with modern
            medical understanding to provide safe, effective, and personalized
            healthcare solutions for our patients.
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
