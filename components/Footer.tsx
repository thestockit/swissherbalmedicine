"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#c6e24b] text-black">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-l-4 border-green-1000 pl-2 flex items-center gap-2">
            <img
              src="/swiss-logo.png"
              alt="Pak-Swiss Logo"
              className="w-10 h-10" // increased size
            />
            Pak-Swiss
          </h3>

          <p className="text-sm leading-relaxed">
            Pak-Swiss Unani Herbal Clinic Mughal Point Kamala Road Mehmooda Abad
            Near Tariq Narsary Chock Jhelum
          </p>
          <p className="text-sm mt-3">Tel: +92 3135620039</p>
          <p className="text-sm">Mail: moghal.alternativemedicine@gmail.com</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-700 pl-2">
            Sitemap
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline text-black">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/praktische-info"
                className="hover:underline text-black"
              >
                Information
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:underline text-black">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/afspraak" className="hover:underline text-black">
                Book an Appointment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-green-700 pl-2">
            Openingsuren
          </h3>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between">
              <span>Mon:</span> <span>12:00 PM - 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Tue:</span> <span>12:00 PM - 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Wed:</span> <span>12:00 PM - 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Thu:</span> <span>12:00 PM - 7:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Fri:</span> <span>12:00 PM - 7:00 PM</span>
            </li>
            <li className="flex justify-between text-gray-500">
              <span>Sat:</span> <span>Closed</span>
            </li>
            <li className="flex justify-between text-gray-500">
              <span>Sun:</span> <span>Closed</span>
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-700">
            Approximately 2 years of experience running the practice.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-green-700 text-white text-sm py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            © Copyright All rights reserved.
            {new Date().getFullYear()} |{" "}
            <a
              href="https://thestockit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline text-white"
            >
              The Stockit
            </a>
          </p>
          <Link href="#" className="hover:underline text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
