import React, { useState, useEffect } from 'react'

import Image from "next/image";

export default function crmSolution() {
    return (
        <>
        <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-black dark:text-white font-bold'>CRM</h4></header>
        <div className='grid grid-cols-3 gap-2'>
            <div className="col-span-2 border-r border-grey-600 mb-8">
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menu_icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                 Microsoft 365 Customer Engagement
                  <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
                </div>
                
              </a>
                </div>
                <div className="w-full p-1">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/menu/menu_icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                 Salesforce
                  <p className="menuSubContent">We deliver tailored, tech-driven solutions</p>
                </div>
                
              </a>
                </div>
                {/* <div className='w-11/12 border-b border-grey-600 mt-12 ml-4 mr-2'></div>
                <div className='w-11/12 p-2 mt-2 relative'>
                    <span className='pl-2 w-full flex'>
                        <h3 className="ml-2 mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                            Need Different Solution?
                        </h3>
                        <button
                        aria-label="talk to sales button"
                        className="absolute right-0 rounded-full bg-transparent px-3.5 py-1 text-black text-xs border-2 border-black duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho hover:text-white"
                        >
                        Talk to Sales
                        </button>
                    </span>
                    <p className='ml-4 text-metatitle'>Ut ultricies lacus non fermentum ultrices.</p>
                </div> */}
            </div>
            <div className='flex flex-col relative mt-0 w-full'>
            <div className='absolute w-4/5'>
                <video className="h-42 w-42 rounded-lg" controls>
                    <source
                        src="https://docs.material-tailwind.com/demo.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                </div>
                <div className='absolute mt-20'>
                <p className='font-bold text-sm text-black'>Learn more about features</p>
                <ul className='list-disc ml-6'>
                    <li className='text-xs text-black'>Feature  1</li>
                    <li className='text-xs text-black'>Feature  2</li>
                    <li className='text-xs text-black'>Feature  3</li>
                </ul>
                </div>
            </div>
            
            
                            
                        
            
        </div>
        </>

    )
};

