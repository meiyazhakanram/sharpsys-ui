"use client";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
              Elevate Your Business
            </h2>
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
              <span className="textStartGradient">Productivity</span><span className="textLastGradient"> with Sharpsys</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
              Stay ahead of the curve with cutting-edge technology designed to maximize efficiency and unleash your organization's full potential
            </p>
            <div className="mt-5 text-center">
              <button type="button" className="text-black border button-border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get a quote
              </button>
              <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                Schedule a call
              </button>
            </div>
          </div>



          <div className="mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <div className="inline-flex grid-cols-3 gap-7.5">

              <div className="w-6/12 h-80 mt-5 rounded-lg bg-[#FFF2E2] border-[#FFF2E2]">
                <a href="#">
                  <img className="rounded-t-lg" src="/images/blog/blog-01.png" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">15+ years of <br />trusted expertise</h5>
                  </a>
                  <p className="mb-4 font-normal text-gray-300 dark:text-gray-200">Delivering excellence always</p>
                </div>
              </div>


              <div className="w-[120%] h-90 bg-[#DBECFF] border border-[#DBECFF] rounded-lg shadow ">
                <a href="#" className="flex flex-col items-center md:flex-row md:max-w-xl">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-full md:rounded-none md:rounded-s-lg" src="/images/blog/blog-02.png" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology Conglomerate</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We are a technology conglomerate delivering innovative, reliable solutions for lasting success.</p>
                  </div>
                </a>
              </div>

              <div className="w-6/12 h-80 mt-5 rounded-lg bg-[#FFF2E2] border-[#FFF2E2]">
                <a href="#">
                  <img className="rounded-t-lg" src="/images/blog/blog-01.png" alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-500 dark:text-white">45+ clients across the globe</h5>
                  </a>
                  <p className="mb-4 font-normal text-gray-300 dark:text-gray-200">Trusted by 45 clients worldwide for exceptional technology solutions</p>
                </div>
              </div>


            </div>
          </div>




        </div>
      </section>
    </>
  );
};

export default Hero;
