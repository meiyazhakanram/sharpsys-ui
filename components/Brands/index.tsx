"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import Image from "next/image";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-white py-11 mb-8">
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


      <section className="bg-white py-11 mb-4">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h3 className="mx-auto mb-4 text-xl text-gray-300 text-center">
            Why Sharpsys?
          </h3>
          <h4 className="mx-auto mb-4 text-3xl text-center font-bold text-black dark:text-white">
            We <span className="textStartGradient">seamlessly unify systems</span> into one
          </h4>

          <div className="mt-5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-5 lg:grid-cols-2 xl:mt-7 xl:gap-12.5">
            <div className="animate_top z-40 rounded-lg border border-stroke bg-white p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/icon/icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Focused Roadmap</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We deliver tailored, tech-driven solutions</p>
                </div>
              </a>
            </div>

            <div className="animate_top z-40 rounded-lg border border-stroke bg-white p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/icon/icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Reliable Predictability</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Managing scope, time and budget with precision</p>
                </div>
              </a>
            </div>

            <div className="animate_top z-40 rounded-lg border border-stroke bg-white p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/icon/icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Stedy Performance</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We meet client demands using proven methods</p>
                </div>
              </a>
            </div>

            <div className="animate_top z-40 rounded-lg border border-stroke bg-white p-1 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/icon/icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Aglie Engagement</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ensuring transparency at every development</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white py-1 mb-8">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">100M</h3>
              <p className="text-lg lg:text-para2">Client Satisfaction</p></div>
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">24Hrs</h3>
              <p className="text-lg lg:text-para2">Expert Support Team</p></div>
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">98K+</h3>
              <p className="text-lg lg:text-para2">Sales Count</p></div>
            <div className="animate_top text-center">
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">208+</h3>
              <p className="text-lg lg:text-para2">Client Worldwide</p></div>
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

          <div className="flex grid grid-cols-3 justify-center gap-7.5 md:grid-cols-3 lg:grid-cols-4 xl:gap-10">

            <div className="row-span-4 col-span-2 bg-white rounded-lg border-[#1F0A3C]">
              <img className="ml-25 mt-14 mr-2 mb-2" src="/images/blog/blog-01.png" alt="" />
              <h5 className="ml-7 mb-3 mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Microsoft dynamics 365 F&O:Comprehensive Finacial Management</h5>
              <p className="ml-7 mb-4 font-normal text-gray-500 dark:text-gray-200">
                Optimze budgeting, project management and finacial operations with Microsoft Dynamics 365 Finance & Operations,tailored for large international companies.
              </p>
              <p>
                <a className="ml-7 mb-4 font-normal underline text-gray-500 dark:text-gray-200">Know More</a>
              </p>
              <p className="mb-1"></p>

            </div>

            <div className="row-span-2 col-span-2 bg-white rounded-lg border-[#1F0A3C]">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/icon/icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Microsoft dynamics 365 F&O:Comprehensive Finacial Management</h5>
                </div>
              </a>
              <p className="ml-7 mb-3 font-normal text-gray-500 dark:text-gray-200">
                Optimze budgeting, project management and finacial operations with Microsoft Dynamics 365 Finance & Operations,tailored for large international companies.
              </p>
              <p>
                <a className="ml-7 mb-1 font-normal underline text-gray-500 dark:text-gray-200">Know More</a>
              </p>

            </div>
            <div className="row-span-2 col-span-2 bg-white rounded-lg border-[#1F0A3C]">
              <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                <img alt="title" width="36" height="36" src="/images/icon/icon-01.svg" className="bg-primary ml-5 mr-2" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Microsoft dynamics 365 F&O:Comprehensive Finacial Management</h5>
                </div>
              </a>
              <p className="ml-7 mb-3 font-normal text-gray-500 dark:text-gray-200">
                Optimze budgeting, project management and finacial operations with Microsoft Dynamics 365 Finance & Operations,tailored for large international companies.
              </p>
              <p>
                <a className="ml-7 mb-1 font-normal underline text-gray-500 dark:text-gray-200">Know More</a>
              </p>
            </div>
          </div>
        </div>
      </section>


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
                Our approach blendsOur approach blendsOur approach blendsOur approach blendsOur approach blendsOur approach blendsOur approach blends
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
                    Microsoft's Sure step methodology guarantees precies scoping and timelines, offering clarity at every stage of implementation
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg" src="/images/imple2.png" alt="product image" />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold text-white dark:text-white">Standard Methodology</h5>
                  <div className="flex justify-between">
                    Microsoft's Sure step methodology guarantees precies scoping and timelines, offering clarity at every stage of implementation
                  </div>
                </div>
              </div>

              <div className="w-full max-w-sm">
                <img className="p-8 rounded-t-lg mb-7" src="/images/imple3.png" alt="product image" />
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold text-white dark:text-white">Modern Methodology</h5>
                  <div className="flex justify-between">
                    Microsoft's Sure step methodology guarantees precies scoping and timelines, offering clarity at every stage of implementation
                  </div>
                </div>
              </div>


            </div>
          </div>


        </div>
      </section >


      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
