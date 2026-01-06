"use client";

import React from "react";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Doctors from "@/components/Doctors";
import HijamaTherapy from "@/components/HijamaTherapy";
import Medicine from "@/components/Medicine";
import VideoSection from "@/components/VideoSection";

const HomePage = () => {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <Hero />
      <HijamaTherapy />
      <Medicine />
      <News />
      <Doctors />
      <VideoSection />
    </div>
  );
};

export default HomePage;
