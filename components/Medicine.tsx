"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Medicine = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          HERBAL MOTHER TINCTURES
        </h2>
        <p>Extracting Nature’s Healing Essence from Every Herb</p>
        <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto"></div>
      </div>

      {/* News Card */}
      <article className="bg-gray-50 rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-6xl mx-auto transition-all duration-300 hover:shadow-lg">
        {/* Image */}
        <div className="relative w-full md:w-1/3 aspect-[4/3] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src="/harbal-img.jfif"
            alt="The Founder of Meteopathy"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-gray-800">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Herbal Mother Tinctures
          </h3>

          <p className="text-base text-gray-700 leading-relaxed mb-6">
            These are mother tinctures of different herbs, prepared using a
            traditional method to extract the therapeutic essence of each plant.
            Mother tinctures are highly concentrated liquid extracts that retain
            the natural healing properties of herbs, supporting overall
            wellness, immunity, and balance in the body.
          </p>

          <Link
            href="/herbal"
            className="inline-block bg-[#2AAA8A] hover:bg-[#238f74] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md"
          >
            Read more
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Medicine;
