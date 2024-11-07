"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import Image from "next/image";
import Services from "../Services";
import UserStories from "../UserStories";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-white py-11 mb-8 mt-8">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="mx-auto mb-6 text-xl text-gray-300 text-center">
            Trusted by the world's leading organizations
          </h3>
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-stone-50 to-cyan-50 py-11 md:px-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="mx-auto mb-4 text-xl text-grey-400 text-center">
            Why Sharpsys?
          </h3>
          <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
            We <span className="textStartGradient">seamlessly</span><span className="textLastGradient"> unify systems</span> into one
          </h4>

          <div className="mt-5 grid grid-cols-2 gap-7.5 md:grid-cols-2 lg:mt-5 lg:grid-cols-2 xl:mt-7 xl:gap-12.5">
            <div className="animate_top z-40 rounded-lg border gradient-border border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                <img alt="title" width="48" height="48" src="/images/why/why_01.png" className="md:ml-5 md:mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Focused Roadmap</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We deliver tailored, tech-driven solutions</p>
                </div>
              </a>
            </div>

            <div className="animate_top z-40 rounded-lg border gradient-border border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                <img alt="title" width="48" height="48" src="/images/why/why_02.png" className="md:ml-5 md:mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Reliable Predictability</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Managing scope, time and budget with precision</p>
                </div>
              </a>
            </div>

            <div className="animate_top z-40 !rounded-lg border gradient-border bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                <img alt="title" width="48" height="48" src="/images/why/why_03.png" className="md:ml-5 md:mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Steady Performance</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We meet client demands using proven methods</p>
                </div>
              </a>
            </div>

            <div className="animate_top z-40 !rounded-lg border gradient-border border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                <img alt="title" width="48" height="48" src="/images/why/why_04.png" className="md:ml-5 md:mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Agile Engagement</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ensuring transparency at every development</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-stone-50 to-cyan-50 py-1 mb-8">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex md:flex-wrap xl:flex-row justify-center gap-8 lg:gap-42.5">
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-2xl font-bold text-black dark:text-white xl:text-sectiontitle4">100M</h3>
              <p className="text-xs">Client Satisfaction</p></div>
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-2xl font-bold text-black dark:text-white xl:text-sectiontitle4">24Hrs</h3>
              <p className="text-xs">Expert Support Team</p></div>
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-2xl font-bold text-black dark:text-white xl:text-sectiontitle4">98K+</h3>
              <p className="text-xs">Sales Count</p></div>
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-2xl font-bold text-black dark:text-white xl:text-sectiontitle4">208+</h3>
              <p className="text-xs">Client Worldwide</p></div>
          </div>
        </div>
      </section>




      <section className="py-11 mt-4 bg-[#1F0A3C] mb-15">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
            We are experts in
          </h3>
          <h4 className="mx-auto mb-4 text-3xl text-center text-white font-bold dark:text-white">
            Microsoft Dynamics & it's services
          </h4>
        </div>
       

         <div className="flex flex-col md:flex-row gap-1">
         <div className="px-6 mx-12 rounded-lg border border-stroke bg-slate-50 p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
            <div className="flex justify-center pt-2"><img width={128} height={128} src="/images/services/Dynamics365_scalable.svg" alt="product image" /></div>
              <div className="flex flex-col items-center md:flex-row md:max-w-xl">
              
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Microsoft Dynamics 365 Business Central: Your All-in-One Cloud Solution</h5>
                  <p className="mb-3 font-normal text-slate-400 dark:text-gray-400">Empower your small to medium-sized business with Microsoft Dynamics 365 Business Central, a comprehensive cloud-based platform for seamless management and growth.</p>
                <a href="#" className="underline text-black">Know More</a>
                </div>
              </div>
            </div>
          <div className="xl:w-6/12 px-6 mx-6 xl:pr-8">
              <div className="mb-8 rounded-lg border border-stroke bg-slate-50 p-1 py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">         
                  <div className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                  <img alt="title" width="92" height="92" src="/images/services/business_central.svg" className="pl-4" />
                    <h5 className="mb-2 px-6 md:text-xl xl:text-lg font-bold tracking-tight text-gray-900 dark:text-white">Microsoft Dynamics 365 F&O: Comprehensive Financial Management
                    </h5>
                  </div>
                <p className="mb-3 ml-6 xl:text-sm text-slate-400 dark:text-gray-400">Optimize budgeting, project management, and financial operations with Microsoft Dynamics 365 Finance & Operations, tailored for large international companies.
                </p>
                  <a href="#" className="ml-6 underline text-black">Know More</a>
              </div>
              <div className="rounded-lg border border-stroke bg-slate-50 p-1 py-3 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">         
                  <div className="flex flex-col items-center md:flex-row md:max-w-xl cursor-text">
                  <img alt="title" width="96" height="96" src="/images/services/microsoft_power_platform.svg" className="pl-4" />
                    <h5 className="mb-2 px-6 md:text-xl xl:text-lg font-bold tracking-tight text-gray-900 dark:text-white">Microsoft Power Platform: Unlock Data-Driven Insights</h5>
                  </div>
                <p className="mb-3 ml-6 xl:text-sm text-slate-400 dark:text-gray-400">Harness the power of data with Microsoft Power Platform. Build apps, automate workflows, and gain insights to drive smarter, faster business decisions.
                </p>
                  <a href="#" className="ml-6 underline text-black">Know More</a>
              </div>
            
          </div>
          
        </div>
      </section>
      <Services/>

      {/* Our Implementation */}
      <section className="py-11 mt-4 bg-[#0B0A0A] mb-15">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-1 lg:gap-32.5">
            <div className="animate_left relative mx-auto md:block md:w-1/2">
              <h4 className="relative mb-3 text-lg font-bold text-white dark:text-white lg:text-4xl">
                Our <span className="textStartGradient">Imp</span><span className="textLastGradient">lementation</span> Strategy
              </h4>
            </div>
            <div className="animate_right relative mx-auto md:block md:w-1/2">
              <p className="relative mb-3 text-sm p-0 text-white dark:text-white sm:text-sm">
                Our approach blends traditional waterfall, Microsoft's Sure Step, and agile methods to ensure
                precise, timely, and flexible project delivery.
              </p>
            </div>
          </div>




          <div className="relative mx-auto bg-[#0B0A0A] mt-5 max-w-[1207px] px-4 md:px-5 xl:mt-5 xl:px-0">
            <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
              {/* <!-- Pricing Item --> */}
              <div className="w-full max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg mb-4" src="/images/imple1.png" alt="product image" />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold text-white dark:text-white">Classic Implementation</h5>
                  <div className="flex justify-between">
                    A structured, step-by-step approach using the traditional waterfall model, ensuring thorough,
                    sequential project completion.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src="/images/imple2.png" alt="product image" />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold text-white dark:text-white">Standard Methodology</h5>
                  <div className="flex justify-between">
                    Microsoft's Sure Step Methodology guarantees precise scoping and timelines, offering clarity at
                    every stage of implementation.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm">
                <img className="p-8 rounded-t-lg mb-7" src="/images/imple3.png" alt="product image" />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold text-white dark:text-white">Modern Methodology</h5>
                  <div className="flex justify-between">
                    Agile/Rapid Implementation enables faster go-live with iterative development, enhancing
                    flexibility and quicker business outcomes.
                  </div>
                </div>
              </div>


            </div>
          </div>


        </div>
      </section >

      {/* User Stories */}
      <UserStories/>


      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
