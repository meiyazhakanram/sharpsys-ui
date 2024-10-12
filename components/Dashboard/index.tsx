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
        </div>
      </section >
    </>
  );
};

export default Hero;
