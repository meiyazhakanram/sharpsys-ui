"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

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

      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
