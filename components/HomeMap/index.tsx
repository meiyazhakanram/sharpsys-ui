"use client";
import React from "react";


const HomeMap = () => (
  <div className="min-h-fit bg-[#0B0A0A] flex flex-col items-center p-6">
    <h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
      Digital Ecosystem
    </h3>
    <h4 className="mx-auto mb-4 text-3xl text-center text-wrap font-bold text-white dark:text-white">
      Integrating <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">tech for seamless,</span> connected <span className="bg-gradient-to-r from-lime-600 via-emarald-500 to-teal-400 bg-clip-text text-transparent">digital environments</span> around the globe
    </h4>
    <img src="/images/worldMap.svg" alt="world map" className="w-auto h-auto" />
  </div>
);

export default HomeMap;