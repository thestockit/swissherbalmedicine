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
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 group"
            >
              <span>📱</span>
              Book via WhatsApp
            </button>

            <button
              onClick={handleCall}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border border-white/30 flex items-center gap-2"
            >
              <Phone size={20} />
              Call Now
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
          {/* Left Column - Doctor's Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Doctor Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-64 mx-auto md:mx-0 rounded-2xl overflow-hidden border-4 border-emerald-100 shadow-lg">
                    <Image
                      src="/Qaiser.jpeg"
                      alt="Dr. A.G. Qaiser Moghal"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <User className="text-emerald-700" size={24} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Dr. A.G. Qaiser Moghal
                      </h2>
                      <p className="text-emerald-700 font-medium">
                        Author & Founder
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic border-l-4 border-emerald-500 pl-4 py-2 mb-6">
                    Founder of Meteopathic Cure and Xypniosis
                  </p>

                  <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Award className="text-emerald-600" />
                      Qualifications & Certifications
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "BSc (Honours) in Psychology – UK",
                        "Master in Psychology – HEC (Equivalency) Pakistan",
                        "Graduate FTJ-RUMP – Islamabad",
                        "Diploma in Psychology – Switzerland",
                        "Diploma in Alternative Medicine – Switzerland",
                        "Graduate in Homeopathy – Greece",
                        "Post-Graduation in Homeopathy – Switzerland",
                        "Higher Diploma in Cupping Therapy – UK",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Information Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Home className="text-blue-700" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Clinic Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin
                      className="text-emerald-600 mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        PKA-Swiss Herbal Clinic
                      </h3>
                      <p className="text-gray-600">
                        Mughal Point, Jhelum, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Phone
                      className="text-emerald-600 mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">
                        Contact
                      </h3>
                      <p className="text-gray-600 font-mono">
                        0092 313 5620039
                      </p>
                      <p className="text-sm text-emerald-600">
                        (WhatsApp Available)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gray-50 rounded-2xl p-6 md:col-span-2">
                  <div className="flex items-start gap-3">
                    <Mail
                      className="text-emerald-600 mt-1 flex-shrink-0"
                      size={22}
                    />
                    <div className="w-full">
                      <h3 className="font-bold text-gray-800 text-lg mb-2">
                        Email Address
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <a
                          href="mailto:moghal.meteopathiccure@gmail.com"
                          className="text-emerald-700 hover:text-emerald-900 transition-colors bg-white px-4 py-2 rounded-lg border hover:shadow"
                        >
                          moghal.meteopathiccure@gmail.com
                        </a>
                        <a
                          href="mailto:moghal.alternativemedicine@gmail.com"
                          className="text-emerald-700 hover:text-emerald-900 transition-colors bg-white px-4 py-2 rounded-lg border hover:shadow"
                        >
                          moghal.alternativemedicine@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Note */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-amber-800 flex items-start gap-2">
                  <span className="font-bold">📝 Note:</span>
                  For Xypniotic sessions via WhatsApp, contact the above
                  WhatsApp number.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Team Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="text-purple-700" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
              </div>

              <div className="text-center p-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-100 to-emerald-300 flex items-center justify-center mb-4 shadow-lg">
                  <User className="text-emerald-700" size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Dr. A.G. Qaiser Moghal
                </h3>
                <p className="text-gray-600 mb-4">Sole Practitioner</p>
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="text-emerald-800 font-medium">
                    <span className="font-bold">Experience:</span> Approximately
                    2 years
                  </p>
                </div>
              </div>
            </div>

            {/* Timing Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Clock className="text-orange-700" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Clinic Timings
                </h2>
              </div>

              <div className="space-y-4">
                {/* Working Days */}
                <div className="bg-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">
                      Monday to Friday
                    </h3>
                    <span className="bg-emerald-600 text-white text-sm px-3 py-1 rounded-full">
                      Open
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-emerald-600" />
                    <span className="text-lg font-semibold">
                      12:00 PM – 07:00 PM
                    </span>
                  </div>
                </div>

                {/* Weekend */}
                <div className="bg-red-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800">
                      Saturday & Sunday
                    </h3>
                    <span className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                      Closed
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar size={18} className="text-red-600" />
                    <span className="text-lg font-semibold">Clinic Closed</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3 mt-6">
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>💬</span>
                    Message on WhatsApp
                  </button>
                  <button
                    onClick={handleCall}
                    className="w-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    Call Now
                  </button>
                </div>
              </div>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <ul className="space-y-3">
                {[
                  "Unani Herbal Medicine",
                  "Hijama (Cupping) Therapy",
                  "Xypniotic Sessions",
                  "Natural Healing Consultations",
                  "Alternative Medicine",
                  "Psychological Counseling",
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 🔹 Footer Note */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Our Clinic?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="text-emerald-600 text-3xl mb-2">🌿</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Natural Healing
                </h4>
                <p className="text-gray-600 text-sm">
                  Pure Unani herbal remedies with no side effects
                </p>
              </div>
              <div className="p-4">
                <div className="text-emerald-600 text-3xl mb-2">👨‍⚕️</div>
                <h4 className="font-bold text-gray-800 mb-2">Expert Care</h4>
                <p className="text-gray-600 text-sm">
                  Personalized treatment by a certified specialist
                </p>
              </div>
              <div className="p-4">
                <div className="text-emerald-600 text-3xl mb-2">💯</div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Traditional Wisdom
                </h4>
                <p className="text-gray-600 text-sm">
                  Ancient healing techniques with modern approach
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                <span className="font-bold text-emerald-700">
                  Walk-in appointments available
                </span>{" "}
                during working hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
