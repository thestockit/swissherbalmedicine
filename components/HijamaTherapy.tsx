"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HijamaTherapy = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      {/* ================= Section Title ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Hijama Therapy (Cupping) at Pak-Swiss Unani Herbal Clinic
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Introduction to Hijama Therapy
        </p>
        <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto mt-2"></div>
      </div>

      {/* ================= Main Content ================= */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Text Content */}
        <div className="flex-1 text-gray-700 space-y-8">
          {/* Introduction */}
          <div className="space-y-4">
            <p>
              Hijama Therapy, also known as Cupping, is an ancient, natural
              therapeutic practice utilized for centuries in Unani Medicine,
              Traditional Chinese Medicine, and other healing traditions. The
              therapy works by creating suction on the skin, which enhances
              circulation, removes stagnation, and activates the body's natural
              healing mechanisms.
            </p>
            <p>
              At Pak-Swiss Unani Herbal Clinic, Hijama treatments are conducted
              with precision, care, and strict hygiene standards, ensuring both
              safety and therapeutic effectiveness.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Our Hijama Therapy Services
            </h3>

            {/* Dry Hijama */}
            <div>
              <h4 className="text-xl font-semibold mb-1">
                🟢 Dry Hijama (Dry Cupping)
              </h4>
              <p>
                <strong>Purpose:</strong> Muscle relaxation, improved blood
                flow, relief from tension, and stimulation of energy pathways.
              </p>
              <p>
                <strong>Common Uses:</strong> Back pain, neck stiffness,
                shoulder tightness, stress-related discomfort.
              </p>
            </div>

            {/* Wet Hijama */}
            <div>
              <h4 className="text-xl font-semibold mb-1">
                🔴 Wet Hijama (Wet Cupping)
              </h4>
              <p>
                <strong>Purpose:</strong> Detoxification and removal of
                stagnated blood through controlled superficial incisions.
              </p>
              <p>
                <strong>Common Uses:</strong> Chronic pain, inflammation,
                fatigue, blood circulation imbalance, and immune support.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              🌟 Key Benefits of Hijama Therapy
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Relief from chronic pain and muscular stiffness</li>
              <li>Improved circulation and tissue nourishment</li>
              <li>Support in detoxification and waste removal</li>
              <li>Enhanced immune response</li>
              <li>Reduction in stress and mental fatigue</li>
            </ul>
          </div>

          {/* Booking CTA */}
          <div className="text-center pt-6">
            <p className="mb-6">
              Experience a balanced and holistic healing approach through Hijama
              Therapy combined with Unani herbal medicine.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#2AAA8A] hover:bg-[#238f74] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md"
            >
              Contact & Book Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 h-80 relative rounded-lg overflow-hidden">
          <Image
            src="/Hijama-pic.jpeg"
            alt="Hijama Therapy"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* ================= NEW SECTION: Clinic Overview ================= */}
      <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12 space-y-8">
        <h3 className="text-3xl font-bold text-gray-800 text-center">
          Pak-Swiss Unani Herbal Clinic
        </h3>

        <p className="text-gray-700">
          Pak-Swiss Unani Herbal Clinic is led by{" "}
          <strong>A. G. Qaiser Moghal</strong>, a qualified practitioner of
          Unani Herbal Medicine, trained at Islamabad Tibbia College,
          Rawalpindi. The clinic follows a classical Unani system that
          emphasizes holistic, patient-centered healing.
        </p>

        <p className="text-gray-700">
          Rather than focusing solely on symptoms, treatment is designed to
          identify and correct the root causes of illness through natural
          remedies, lifestyle balance, and temperament-based care.
        </p>

        {/* Clinical Approach */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Our Clinical Approach</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive case history evaluation</li>
            <li>Pulse diagnosis (Nabz)</li>
            <li>Tongue, eye, and nail examination</li>
            <li>Assessment of temperament and constitution (Mizaj)</li>
            <li>Preparation of individualized Unani herbal remedies</li>
            <li>Personalized dietary and lifestyle guidance</li>
            <li>Follow-up planning and preventive care advice</li>
          </ul>
        </div>

        {/* Hijama Role */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">
            Hijama Therapy as Part of Holistic Care
          </h4>
          <p className="text-gray-700 mb-3">
            Hijama (Cupping) Therapy is integrated as a detoxifying and
            therapeutic procedure in accordance with Unani and prophetic medical
            principles.
          </p>
          <p className="text-gray-700">
            It may assist in managing chronic pain, headaches, digestive
            concerns, joint discomfort, stress, fatigue, and circulatory
            imbalances. All sessions follow strict hygiene and individualized
            assessment protocols.
          </p>
        </div>

        <p className="text-gray-700 font-medium text-center pt-4">
          At Pak-Swiss Unani Herbal Clinic, healing is achieved through a
          balanced combination of medicine, diet, detoxification, lifestyle
          correction, and patient education—ensuring long-term wellness.
        </p>
      </div>
    </section>
  );
};

export default HijamaTherapy;
