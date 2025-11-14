"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#b31b1b] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto flex justify-start items-center gap-10 px-4">

        {/* Address */}
        <div className="flex items-center gap-2 opacity-90">
          <MapPin size={16} className="text-white" />
          <span>Vanden Tymplestraat 45 / 0001, 3000 Leuven</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 opacity-90">
          <Phone size={16} className="text-white" />
          <span>016 89 90 90</span>
        </div>

      </div>
    </div>
  );
}
