"use client";
import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  Calendar,
  Award,
  Home,
  Users,
} from "lucide-react";

const AppointmentPage = () => {
  const handleBookNow = () => {
    window.open("https://wa.me/923135620039", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+923135620039";
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/afspraak.avif"
            alt="Clinic Entrance"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-emerald-800/50 to-emerald-900/70" />
        </div>

        <div className="relative z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            PKA-Swiss Herbal Clinic
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100 font-light">
            Natural Healing with Unani Medicine & Hijama Therapy
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleBookNow}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              📱 Book via WhatsApp
            </button>

            <button
              onClick={handleCall}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border border-white/30 flex items-center gap-2"
            >
              <Phone size={20} /> Call Now
            </button>
          </div>

          <div className="mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-2xl inline-block">
            <p className="text-sm text-emerald-100 tracking-widest mb-1">
              CONTACT / WHATSAPP
            </p>
            <p className="text-3xl md:text-4xl font-bold">+92 313 5620039</p>
          </div>
        </div>
      </section>

      {/* 🔹 Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Doctor Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-64 rounded-2xl overflow-hidden border-4 border-emerald-100">
                    <Image
                      src="/Qaiser.jpeg"
                      alt="Dr. A.G. Qaiser Moghal"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. A.G. Qaiser Moghal
                  </h2>
                  <p className="text-emerald-700 font-medium mb-3">
                    Author • Founder • Alternative Medicine Specialist
                  </p>

                  <p className="text-gray-700 italic border-l-4 border-emerald-500 pl-4 py-2 mb-6">
                    Author of multiple books 📚 in the field of Alternative
                    Medicine
                    <br />
                    Founder of <strong>Meteopathic Cure</strong> (Switzerland)
                    <br />
                    Founder of <strong>XYPNIOSIS</strong>
                  </p>

                  {/* Qualifications */}
                  <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Award className="text-emerald-600" /> Qualifications
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                      <li>• BSc (Hons) Psychology – UK</li>
                      <li>• Master in Psychology – HEC Pakistan</li>
                      <li>• Diploma Psychology – Switzerland</li>
                      <li>• Diploma Alternative Medicine – Switzerland</li>
                      <li>• Graduate Homeopathy – Greece</li>
                      <li>• Post Graduate Homeopathy – Switzerland</li>
                      <li>• Higher Diploma in Hijama – UK</li>
                    </ul>
                  </div>

                  {/* Experience */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">
                      Professional Experience
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • More than <strong>20 years</strong> of experience
                      </li>
                      <li>• 20 years clinical practice in Switzerland 🇨🇭</li>
                      <li>• 2 years clinical practice in United Kingdom 🇬🇧</li>
                      <li>• 2 years clinical practice in Pakistan 🇵🇰</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Team Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
              <Users className="mx-auto text-emerald-600 mb-4" size={40} />
              <h3 className="text-xl font-bold">Dr. A.G. Qaiser Moghal</h3>
              <p className="text-gray-600 mb-4">Sole Practitioner</p>
              <p className="text-emerald-800 font-medium">
                Experience: More than 20 Years
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Switzerland • UK • Pakistan
              </p>
            </div>

            {/* Timings */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Clinic Timings</h2>
              <p className="text-gray-700 font-semibold">Monday – Friday</p>
              <p className="text-emerald-700 mb-3">12:00 PM – 07:00 PM</p>
              <p className="text-red-600 font-semibold">
                Saturday & Sunday Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
