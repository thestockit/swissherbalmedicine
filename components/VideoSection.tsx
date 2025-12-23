"use client";

import React from "react";

const VideoSection = () => {
  const tiktokUrl =
    "https://www.tiktok.com/@pakswissherbalpk/video/7356141737179467014";

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* ================= HEADING ================= */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Treatment Video Demonstration
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Watch our expert techniques in action
        </p>
      </div>

      {/* ================= VIDEO CONTAINER ================= */}
      <div className="max-w-4xl mx-auto">
        <div
          className="relative w-full h-80 md:h-[420px] 
                     rounded-2xl overflow-hidden shadow-xl 
                     group cursor-pointer transition-transform 
                     hover:scale-[1.02] bg-black"
          onClick={() => window.open(tiktokUrl, "_blank")}
        >
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4 shadow-lg group-hover:scale-110 transition">
              <svg
                className="w-12 h-12 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom Text */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm tracking-widest opacity-80">
            Watch Video on TikTok
          </span>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
