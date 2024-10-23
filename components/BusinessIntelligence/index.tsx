import React, { useState, useEffect } from 'react'

import Image from "next/image";

export default function enterpriseSolution() {
    return (
        <>
        <header><h4 className='text-metatitle2 px-4 py-2 h-10 text-black dark:text-white font-bold'>Business Intelligence</h4></header>
        <div className='grid grid-cols-4 gap-1'>
            <div className="col-span-2 p-1">
                <div className="w-full p-2">
                    <span className='pl-2 w-full flex'>
                        <img alt="title" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="/images/menu/menu_icon-01.svg" />
                        <h3 className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                            Power BI
                        </h3>
                    </span>
                    <p className='ml-12 text-metatitle'>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
                <div className="w-full p-2">
                    <span className='pl-2 w-full flex'>
                        <img alt="title" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" src="/images/menu/menu_icon-01.svg" />
                        <h3 className="mb-0.5 text-segmenttitle text-black dark:text-white font-semibold">
                            Tableau
                        </h3>
                    </span>
                    <p className='ml-12 text-metatitle'>Ut ultricies lacus non fermentum ultrices.</p>
                </div>
                
            </div>  
                    
        </div>
        <div className='w-auto border-b border-grey-600 ml-4 mr-4'></div>
        <section className='w-11/12 p-2 mt-2 relative'>
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
                </section>
        </>

    )
};

