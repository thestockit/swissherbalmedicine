"use client";

import React from "react";
import { MapPin, Phone, Facebook, Instagram } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#C6E24B] text-black text-sm py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Left side - Contact Info */}
        <div className="flex items-center gap-10">
          {/* Address with hover effect */}
          <div className="flex items-center gap-2 opacity-90 group cursor-pointer">
            <MapPin
              size={16}
              className="text-black group-hover:scale-110 transition-transform duration-200"
            />
            <span className="group-hover:underline group-hover:underline-offset-2 transition-all duration-200">
              Islampura Rd, Phallaian, Jhelum
            </span>
          </div>

          {/* Phone with hover effect */}
          <div className="flex items-center gap-2 opacity-90 group cursor-pointer">
            <Phone
              size={16}
              className="text-black group-hover:scale-110 transition-transform duration-200"
            />
            <span className="group-hover:underline group-hover:underline-offset-2 transition-all duration-200">
              +92 313 5620039
            </span>
          </div>
        </div>

        {/* Right side - Social Media Icons with zoom effect */}
        <div className="flex items-center gap-4">
          {/* Facebook Icon with zoom */}
          <a
            href="https://www.facebook.com/qaiser.moghal.3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="Facebook"
          >
            <Facebook size={18} className="text-black" />
          </a>

          {/* TikTok Icon with zoom */}
          <a
            href="https://www.tiktok.com/@pakswissherbalpk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:scale-110 transition-transform duration-200"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
