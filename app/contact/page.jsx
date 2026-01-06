"use client";
import React from "react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      {/* 🔹 Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
      </div>

      {/* 🔹 Info + Map Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Address */}
          <div>
            <div className="flex items-center gap-2 text-[#2AAA8A] mb-1">
              <MapPin className="w-5 h-5 text-[#2AAA8A]" />
              <h3 className="uppercase text-sm font-semibold tracking-wide text-[#2AAA8A]">
                Adres
              </h3>
            </div>

            <p className="text-gray-800">
              Pak-Swiss Unani Herbal Clinic Mughal Point Kamala Road Mehmooda
              Abad Near Tariq Narsary Chock Jhelum
            </p>
            <hr className="border-t border-red-200 mt-3" />
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-[#2AAA8A] mb-1">
              <Phone className="w-5 h-5 text-[#2AAA8A]" />
              <h3 className="uppercase text-sm font-semibold tracking-wide text-[#2AAA8A]">
                Telefoon
              </h3>
            </div>
            <p className="text-gray-800">+92 313 5620039</p>
            <hr className="border-t border-[#2AAA8A] mt-3" />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-[#2AAA8A] mb-1">
              <Mail className="w-5 h-5 text-[#2AAA8A]" />
              <h3 className="uppercase text-sm font-semibold tracking-wide text-[#2AAA8A]">
                Email
              </h3>
            </div>

            <a
              href=" info@praktijkgroenendijk.be"
              className="text-gray-800 hover:underline"
            >
              moghal.alternativemedicine@gmail.com{" "}
            </a>
            <hr className="border-t border-red-200 mt-3" />
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.824470797809!2d73.714171!3d32.9556434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f917a4a96f125%3A0x6e61d3523bd593ce!2sPak-Swiss%20Herbal%20Clinic!5e0!3m2!1sen!2s!4v1766047720634!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pak-Swiss Herbal Clinic Location"
          ></iframe>
        </div>
      </div>

      {/* 🔹 Additional Info Section */}
      <div className="max-w-6xl mx-auto mt-12 space-y-4 text-gray-800">
        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          Our office is located at Islampura Rd, Phallaian, Jhelum.{" "}
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          We provide the following services: - Herbal cure after an accurate
          diagnosis; - Hijama Therapy; - Islamic psychology (xypniosis)
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          Our remedies are prepared with 💯% pure herbs. - We also visit at home
          🏠 if you need.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
