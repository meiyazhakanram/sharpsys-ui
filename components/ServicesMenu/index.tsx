import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";


import serviceMenuData from "./serviceMenuData";
import Enterprisesolution from '../EnterpriseSolution';
import CRMSolution from '../CRMSolution';
import AdvancedAnalytics from '../AdvancedAnalytics';
import BusinessIntelligence from '../BusinessIntelligence';
import StaffAugmentation from '../StaffAugmentation';


// export default function ServicesMenu() {
    const ServicesMenu = (props) => {
        console.log(props);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);


  const pathUrl = usePathname();
  const [isHovered, setIsHovered] = useState(0);

    const handleMouseOver = (e) => {
        switch (e.target.getAttribute('data-key')) {
            case "0":
                setIsHovered(1)
                break
            case "1":
                setIsHovered(2)
                break
            case "2":
                setIsHovered(3)
                break
            case "3":
                setIsHovered(4)
                break
            case "4":
                setIsHovered(5)
            break
        }
      }

    return (
        <>
        <header><h3 className='text-metatitle2 pl-2 text-black dark:text-white font-bold'>Our Services</h3></header>
<div className='flex flex-col md:flex-row flex-1 gap-8'>
            {/* Nav Menu Start   */}
            <aside className='w-full md:w-60 bg-slate-100'>
        {/* <div className='mb-4 inline-block bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection'>Enterprise Solution</div> */}
        <ul className='bg-grey'>
        {serviceMenuData.map((menuItem, key) => (
          <li key={key} data-key={key} className={`px-4.5 py-4 cursor-pointer dark:border dark:border-strokedark dark:bg-blacksection hover:bg-white rounded-lg`} onMouseOver={handleMouseOver} onMouseOut={() => setIsHovered(isHovered)}>
            {menuItem.title}              
</li>

        ))}
        </ul>
        </aside>
        <main className='flex-1 bg-white rounded-lg'>
            checkDropDown();
        {/* {(isHovered === 0 && <Enterprisesolution/> || */}
        {(isHovered === 1 && <Enterprisesolution/> || 
        isHovered === 2 && <CRMSolution/> ||
        isHovered === 3 && <AdvancedAnalytics/> ||
        isHovered === 4 && <BusinessIntelligence/> ||
        isHovered === 5 && <StaffAugmentation/>
        )}
        {/* <AdvancedAnalytics/> */}
      
          
        </main>
        </div>
        </>
    )
}
export default ServicesMenu;
