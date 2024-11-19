import React, { useState, useEffect } from 'react'

import Image from "next/image";

export default function advancedAnalytics() {
    return (
        <>
        <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-white dark:text-white font-bold'>Data Related</h4></header>
        <div className='flex flex-row'>
            <div className=" p-2">
                <div className="p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Consulting
                  <p className="menuSubContent !w-72">Expert advice to harness the full potential of your data</p>
                </div>
                
              </a>
                </div>
                <div className="w-9/12 p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Data Analytics
                  <p className="menuSubContent !w-72">Meaningful insights for data-driven decision making</p>
                </div>
                
              </a>
                </div>
                <div className="w-9/12 p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 ETL Migration
                  <p className="menuSubContent !w-72">Move, transform, and load data with minimal disruption</p>
                </div>
                
              </a>
                </div>
            </div>
            <div className="p-2">
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Data Migration
                  <p className="menuSubContent !w-72">Risk-free migration strategies for your archiving and migration needs</p>
                </div>
                
              </a>
                </div>
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Data Warehousing
                  <p className="menuSubContent !w-72">Data warehousing services to manage, store and access large volume of data</p>
                </div>
                
              </a>
                </div>
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Machine Learning
                  <p className="menuSubContent !w-72">Improve performances with machine learning algorithms</p>
                </div>
                
              </a>
                </div>
            </div> 
            <div className='vertical-center !top-48 bg-green w-4 h-4 !translate-y-3/4'></div>          
        </div>
{/* 
<div className='bg-headerbg rounded-lg flex'>
    <div className="">
                <div className="">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Consulting
                  <p className="menuSubContent">Expert advice to harness the full potential of your data</p>
                </div>
                
              </a>
                </div>
                <div className="">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 Data Analytics
                  <p className="menuSubContent">Meaningful insights for data-driven decision making</p>
                </div>
                
              </a>
                </div>
                <div className="">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/menu_icon.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-base text-white">
                 ETL Migration
                  <p className="menuSubContent">Move, transform, and load data with minimal disruption</p>
                </div>
                
              </a>
                </div>
                
            </div>
            <div className="">
                <div className="w-full p-2 rounded-lg hover:bg-headerbg group/menu">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menuIcons/quotation.png" className="ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black mt-3 group-hover/menu:text-white">
                  Quote Engine
                  <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
                </div>
                
              </a>
                </div>
                
            </div>  
                  
        </div> */}
        </>

    )
};

