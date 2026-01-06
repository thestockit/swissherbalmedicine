"use client";
import React from "react";
import Gallery from "@/components/Gallery";
import TeamHero from "@/components/TeamHero";
const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      <TeamHero /> <Gallery />{" "}
    </div>
  );
};
export default TeamPage;
