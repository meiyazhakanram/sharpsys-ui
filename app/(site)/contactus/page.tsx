import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Sharpsys",
  description: "Sharpsys - Elevate your Business Productivity"
};

export default function ContactUsPage() {
  return (
    <>
      <section className="pb-16 pt-30 bg-[#0B0A0A] rounded-3xl md:pb-40 md:pt-28 lg:pb-30 lg:pt-32">
        <div className="container mx-auto">
          <h1 className="mx-auto mb-6 text-4xl font-bold text-white text-center xl:text-sectiontitle3">
            Let us know if we can help you
          </h1>
          <div className="mt-5 text-center">
            <button type="button" className="text-black bg-white rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-11 mt-4 -mb-5">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_left relative mx-auto aspect-[588/526.5] md:block md:w-1/2">
              <Image src="/images/contactus1.png" alt="About" className="" fill />
            </div>
            <div className="animate_right md:w-1/2"            >
              <span className="font-medium text-black dark:text-black">
                <span className="mb-4 underline text-black ">
                  New User
                </span>
              </span>
              <h2 className="relative mb-3 text-2xl font-bold text-black dark:text-white xl:text-hero">
                I Need to know what I can get from sharpsys
              </h2>
              <p className="mb-25">
                Porta in ullamcorpor lorem.sed Nullam Lorem tincidut urna Porta in ullamcorpor lorem
                .sed Nullam Lorem tincidut urna Porta in ullamcorpor lorem.sed Nullam Lorem tincidut urna
              </p>
              <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#0B0A0A] py-11 mt-4 -mb-5 text-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_right md:w-1/2">
              <span className="font-medium text-white underline dark:text-white md:mt-5">
                Our Support
              </span>
              <h2 className="relative mb-3 text-2xl font-bold xl:text-hero">
                Reach us out based on your requirements
              </h2>
              <p className="mb-25">
                Porta in ullamcorpor lorem.sed Nullam Lorem tincidut urna Porta in ullamcorpor lorem
                .sed Nullam Lorem tincidut urna Porta in ullamcorpor lorem.sed Nullam Lorem tincidut urna
              </p>
            </div>
            <div className="animate_left relative mx-auto aspect-[588/526.5] md:block md:w-1/2">
              <Image src="/images/contactus1.png" alt="About" className="" fill />
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-5 max-w-c-1390 px-4 md:px-5 xl:mt-5 xl:px-0">
          <div className="flex flex-wrap justify-center gap-1 lg:flex-nowrap xl:gap-5.5">
            {/* <!-- Pricing Item --> */}
            <div className="w-full rounded-lg bg-white text-black dark:text-black">
              <div className="flex mt-2 ml-2 h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle2 font-semibold text-black dark:text-white">01</p></div>
              <div className="px-5 pb-5">
                <h5 className="text-lg font-semibold"><span className="underline">Looking for</span> General equiries</h5>
                <div className="flex justify-between">
                  Microsoft's Sure step methodology guarantees precies scoping and timelines, offering clarity at every stage of implementation.
                </div>
              </div>
              <div className="ml-3 mb-2 flex items-center gap-5">
                <div className="w-1/3">
                  <p><svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>+91 8181881818</p>
                </div>
                <div className="w-2/3 mr-1">
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                  <p>
                    contactus@sharpsyssoft.com</p></div>
              </div>
            </div>

            <div className="w-full rounded-lg bg-white shadow text-black dark:text-black">
              <div className="flex mt-2 ml-2 h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle2 font-semibold text-black dark:text-white">02</p></div>
              <div className="px-5 pb-5">
                <h5 className="text-lg font-semibold"><span className="underline">For Demo</span> Requests</h5>
                <div className="flex justify-between">
                  Microsoft's Sure step methodology guarantees precies scoping and timelines, offering clarity at every stage of implementation.
                </div>
              </div>
              <div className="ml-3 mb-2 flex items-center gap-5">
                <div className="w-1/3">
                  <p><svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>+91 8181881818</p>
                </div>
                <div className="w-2/3 mr-1">
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                  <p>
                    contactus@sharpsyssoft.com</p></div>
              </div>
            </div>

            <div className="w-full rounded-lg bg-white text-black dark:text-black">
              <div className="flex mt-2 ml-2 h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle2 font-semibold text-black dark:text-white">03</p></div>
              <div className="px-5 pb-5">
                <h5 className="text-lg font-semibold"><span className="underline">For Sales</span> Inquiry</h5>
                <div className="flex justify-between">
                  Microsoft's Sure step methodology guarantees precies scoping and timelines, offering clarity at every stage of implementation.
                </div>
              </div>
              <div className="ml-3 mb-2 flex items-center gap-5">
                <div className="w-1/3">
                  <p><svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>+91 8181881818</p>
                </div>
                <div className="w-2/3 mr-1">
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                  <p>
                    contactus@sharpsyssoft.com</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      


      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
      <FAQ />
    </>
  );
}
