import React, { useState, useEffect } from 'react'

import Image from "next/image";

export default function enterpriseSolution() {
    return (
        <>
        <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-white dark:text-white font-bold'>Staff Augmentation</h4></header>
        <div className='grid grid-cols-3 gap-1'>
            <div className="col-span-2 p-1">
                <div className="w-full p-2">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                Resource Capabilities
                </div>
                
              </a>
                </div>
                <div className="w-full p-2">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                Industry Verticals
                </div>
                
              </a>
                </div>
                
            </div>  
            <div className='vertical-center !top-82 bg-green w-4 h-4 !translate-y-3/4'></div>
        </div>
        </>

    )
};

