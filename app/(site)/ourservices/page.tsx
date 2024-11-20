import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Sharpsys",
  description: "Sharpsys - Elevate your Business Productivity"
};

export default function OurServicePage() {
  return (
    <>
      <section className="pb-20 pt-3 bg-[url('/images/ourservices/services_bg1.jpg')] bg-cover bg-center md:pb-20 md:pt-2 lg:pb-20 lg:pt-20">
        <div className="container mx-auto">
          <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
            <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-20">
              <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                <p className="text-white text-xl">Enterprise Solutions</p>
                <h2 className="relative text-white mb-3 text-1xl font-bold text-black dark:text-white xl:text-hero">
                  Transform Your Business with All-in-One ERP Solutions
                </h2>
                <p className="mb-25 text-white">
                  Optimize finance, operations, and customer service with Microsoft Dynamics 365's
                  cloud-powered solutions.
                </p>
              </div>
              <div className="animate-right md:w-1/4 lg:w-2/5">
                <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black">
                  <h2 className="mb-7 text-2xl font-semibold text-black dark:text-white xl:text-3xl">Get Started with us</h2>
                  <form action="https://formbold.com/s/unique_form_id" method="POST">
                    <div className="mb-4 flex">
                      <input placeholder="Full name" className="w-full pb-2 pl-1  pt-2 rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white" type="text" />
                    </div>
                    <div className="mb-4 flex">
                      <input placeholder="Email address" className="w-full pb-2 pl-1 pt-2 rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white" type="email" />
                    </div>
                    <div className="mb-4 flex">
                      <input placeholder="Mobile Number" className="w-full pb-2 pl-1 pt-2 rounded-lg border bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white" type="email" />
                    </div>
                    <div className="mb-4 flex">
                      <textarea placeholder="Message" rows="4" className="w-full border rounded-lg pl-1 bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"></textarea>
                    </div>
                    <div className="flex flex-wrap gap-4 xl:justify-center">
                      <button aria-label="send message" className="inline-flex items-center gap-2.5 rounded-lg buttoncolor-bg px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark">
                        Request a Demo
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section><br />

      <Brands />

      <section className="pb-20 pt-3 bg-[#1A0C2F] md:pb-20 md:pt-2 lg:pb-20 lg:pt-2">
        <div className="container mx-auto">
          <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
            <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-20">
              <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                <h2 className="relative text-white mb-3 text-1xl font-bold text-black dark:text-white xl:text-hero">
                  Integrate<span className="textStartGradient"> ERP To </span><span className="textLastGradient">Maximize Efficiency</span>
                </h2>
                <p className="text-white mb-4">
                  Transform your business into a data-driven powerhouse with Microsoft Dynamics 365.
                </p>
              </div>
              <div className="animate-right md:w-1/4 lg:w-2/5">
              </div>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-20">
              <button aria-label="send message" className="inline-flex items-center rounded-2xl px-6 border py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark">
                Dynamics 365 F&O
              </button>
              <button aria-label="send message" className="inline-flex items-center rounded-2xl px-6 border py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark">
                Dynamics 365 business central
              </button>
              <button aria-label="send message" className="inline-flex items-center rounded-2xl px-6 border py-3 text-white duration-300 ease-in-out hover:bg-white hover:text-black dark:bg-btndark">
                Microsoft Power Platflorm
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="pb-10 pt-3 md:pb-10 md:pt-2 lg:pb-10 lg:pt-20">
        <div className="container mx-auto">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-1xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              <span className="textStartGradient">Microsoft </span><span className="textLastGradient">Dynamics 365</span>  for Finance and operations
            </h2>
          </div>

          <div className="flex flex-wrap gap-10 md:flex-nowrap md:items-center mt-20">
            <div className="animate-left md:w-1/4 lg:w-2/5 bg-[#F4F1F8] rounded-lg mt-0">
              <img
                src="/images/services/servicestab/Microsoft Dynamics Business Central_Manufacturing.jpg"
                alt="Microsoft Dynamics Business"
                className="w-full h-auto pl-6 object-cover"
              />
            </div>
            <div className="animate-right md:w-3/4 lg:w-3/5 bg-white pl-3">
              <h2 className="relative text-black mb-3 text-xl font-bold text-black dark:text-black xl:text-hero">
                Boost growth and efficiency with Dynamics 365 for Finance and Operations
              </h2>
              <p className="text-black mb-4">
                Streamline supply chain, finance, operations, and production on one platform. This
                comprehensive ERP solution streamlines supply chain, finance, operations, inventory,
                production, and distribution. Gain enhanced visibility and operational efficiency to drive faster
                growth and outpace your competition.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 md:flex-nowrap md:items-center mt-20">

            <div className="animate-right md:w-3/4 lg:w-3/5 bg-white pl-3">
              <h2 className="relative text-black mb-3 text-xl font-bold text-black dark:text-black xl:text-hero">
                Business Central is your all-in-one Business Management Solution
              </h2>
              <p className="text-black mb-4">
                Synchronize financials, operations, sales, and customer service on a single cloud-based
                platform and make informed decisions. Built on Dynamics NAV, Business Central offers
                cloud-based capabilities for financial management, supply chain, sales and service, operations,
                and project management. With multi-company, multi-currency support and advanced reporting,
                it provides everything you need to optimize business efficiency.
              </p>
            </div>
            <div className="animate-left md:w-1/4 lg:w-2/5 bg-[#F4F1F8] rounded-lg mt-0">
              <img
                src="/images/ourservices/business_central.jpg"
                alt="Business Central"
                className="w-full h-auto object-cover pr-4"
              />
            </div>
          </div>

        </div>
      </section>


      <section className="pb-20 pt-3 md:pb-10 md:pt-2 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-1xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              Discover more ways of how<span className="textStartGradient"> we can help your </span><span className="textLastGradient">business thrive</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              Explore our other given services that can help you enhance efficiency and streamline your
              business.</p>
          </div>


          <div className="mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-10 xl:gap-10">
            <div className="ml-0 border bg-[#2A1A46] rounded-lg p-5 pt-5">
              <h2 className="text-2xl font-semibold text-white">CRM</h2>
              <p className="text-white">Microsoft Dynamics 365 streamlines customer engagement, boosting retention with Sales,
                Insights, Service, Field, and Project Operations solutions.
              </p>
              <img
                src="/images/services/servicestab/CRM.jpg"
                alt="CRM"
                className="h-[85%] w-[100%] p-4 object-cover"
              />
            </div>

            <div className="ml-0 border bg-[#2A1A46] rounded-lg p-5 pt-5">
              <h2 className="text-2xl font-semibold text-white">Advanced Analytics</h2>
              <p className="text-white">Expert Insights with our Advanced Analytics services: Data Migration, ETL, Warehousing,
                Analytics, Machine Learning, and expert consulting.

              </p>
              <img
                src="/images/services/servicestab/Advanced Analytics.jpg"
                alt="Advanced Analytics"
                className="h-[85%] w-[100%] p-4 object-cover"
              />
            </div>
            <div className="ml-0 border bg-[#2A1A46] rounded-lg p-5 pt-5">
              <h2 className="text-2xl font-semibold text-white">Business Intelligence</h2>
              <p className="text-white">Transform data into insights using Power BI for interactive dashboards, advanced analytics, and
                self-service BI for smarter, data-driven decisions.
              </p>
              <img
                src="/images/ourservices/business_intelligence.jpg"
                alt="Business Intelligence"
                className="h-[85%] w-[100%] p-4 object-cover"
              />
            </div>

            <div className="ml-0 border bg-[#2A1A46] rounded-lg p-5 pt-5">
              <h2 className="text-2xl font-semibold text-white">Staff Augmentation</h2>
              <p className="text-white">Boost your team with our Staff Augmentation services. We provide skilled talent to fill gaps,
                ensuring your projects stay on track and succeed.
              </p>
              <img
                src="/images/services/servicestab/Staff Augmentation.jpg"
                alt="Staff Augmentation"
                className="h-[85%] w-[100%] p-4 object-cover"
              />
            </div>

          </div>


        </div>
      </section>
      <FAQ />
    </>
  );
}
