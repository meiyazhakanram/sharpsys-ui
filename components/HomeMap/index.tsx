"use client";
import React, { memo } from "react";
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useState } from 'react';
import {Tooltip} from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

const markers = [
  { markerOffset: -30, name: "India", coordinates: [78.9629, 20.5937], flagImg:"/images/maps/India.png" },
  { markerOffset: 15, name: "Australia", coordinates: [133.7751, -25.2744], flagImg:"/images/maps/Australia.png" },
  { markerOffset: 15, name: "Indonesia", coordinates: [113.9213, -0.7893], flagImg:"/images/maps/Indonesia.png" },
  { markerOffset: 15, name: "Turkey", coordinates: [103.8198, 1.3521], flagImg:"/images/maps/Turkey.png" },
  { markerOffset: 15, name: "UAE", coordinates: [53.8478, 23.4241], flagImg:"/images/maps/UAE.png" },
  { markerOffset: 15, name: "South Africa", coordinates: [22.9375, -30.5595], flagImg:"/images/maps/SouthAfrica.png" },
  { markerOffset: -30, name: "England", coordinates: [1.1743, 52.3555], flagImg:"/images/maps/UnitedKingdom.png" },
  { markerOffset: -30, name: "USA", coordinates: [-106.5348, 38.7946], flagImg:"/images/maps/USA.png" }
];



const HomeMap = ({fromPage, setTooltipContent}) => {
  const [showPopOver, setShowPopOver] = useState(false);
  const mapLoadedPage = fromPage;
  

const toggleState = (state : boolean) => {
  setShowPopOver(state);
};
return (
  <>
  <div className="min-h-fit bg-[#0B0A0A] flex flex-col items-center p-6 rounded-xl">
    {mapLoadedPage === 'home' ? 
    <><><h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
          Digital Ecosystem
        </h3><h4 className="mx-auto mb-4 text-3xl text-center text-wrap font-bold text-white dark:text-white">
            Integrating <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">tech for seamless,</span> connected <span className="bg-gradient-to-r from-lime-600 via-emarald-500 to-teal-400 bg-clip-text text-transparent">digital environments</span> around the globe
          </h4></></>
   : ''}
   <div className="w-10/12" data-tooltip-class-name="toolTipLocation">
    <ComposableMap>
    <ZoomableGroup>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#E4E4E4" stroke="#E4E4E4"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}      
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
    </ComposableMap>
    </div>

  </div>
  </>
  );
};

export default memo(HomeMap);