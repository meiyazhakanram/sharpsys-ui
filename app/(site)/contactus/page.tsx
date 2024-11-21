import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import HomeMap from "@/components/HomeMap";
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
          <h1 className="mx-auto mb-2 text-4xl font-bold text-white text-center xl:text-sectiontitle3">
            Let's connect!
          </h1>
          <p className="text-white text-center">Share your story with us, and let's explore the possibilities together.</p>
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
                Partner with Us for <span className="textStartGradient">Tailored</span><span className="textLastGradient"> Tech Solutions Today</span>
              </h2>
              <p className="mb-25">
                Looking for solutions to transform your business digitally? Reach out to us, and let’s customize
                the perfect solution for your business.
              </p>
              <button type="button" className="focus:outline-none text-white buttoncolor-bg font-small rounded-lg text-sm px-5 py-2">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#E6BD00] py-11 mt-4 -mb-5 text-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center text-black gap-8 lg:gap-32.5">
            <div className="animate_right md:w-1/2">
              <span className="font-medium text-black underline dark:text-black md:mt-5">
                For Support
              </span>
              <h2 className="relative mb-3 text-2xl font-bold xl:text-hero">
                Need Assistance? We're Here for Your Tech Support
              </h2>
              <p className="mb-25 text-black">
                If you are already using our solutions, discuss your technical setbacks with us. Connect with our
                support team for quick solutions to your technical challenges.
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
                <h5 className="text-lg font-semibold"><span className="underline">For General equiries</span></h5>
                <div className="flex justify-between">
                  We’re here to sort your queries about the digital evolution of your business. Reach out, and we’ll
                  provide the details you need.
                </div>
              </div>
              <div className="ml-3 mb-2 flex items-center gap-5">
                <div className="w-1/3">
                  <p><svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>+91 8220933382</p>
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
                <h5 className="text-lg font-semibold"><span className="underline">For Demo Requests</span></h5>
                <div className="flex justify-between mb-6">
                  Explore our solutions in action. Contact our team and we'll schedule a personalized walkthrough
                  for you.
                </div>
              </div>
              <div className="ml-3 mb-2 flex items-center gap-5">
                <div className="w-1/3">
                  <p><svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>+91 8220933384</p>
                </div>
                <div className="w-2/3 mr-1">
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                  <p>jay.p@sharpsyssoft.com</p></div>
              </div>
            </div>

            <div className="w-full rounded-lg bg-white text-black dark:text-black">
              <div className="flex mt-2 ml-2 h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle2 font-semibold text-black dark:text-white">03</p></div>
              <div className="px-5 pb-5">
                <h5 className="text-lg font-semibold"><span className="underline">For Sales Inquiry</span></h5>
                <div className="flex justify-between">
                  We will help you choose the right solution and pricing for your business. Connect with us for
                  your automation requirements.
                </div>
              </div>
              <div className="ml-3 mb-2 flex items-center gap-5">
                <div className="w-1/3">
                  <p><svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>+91 8220933384</p>
                </div>
                <div className="w-2/3 mr-1">
                  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                  <p>jay.p@sharpsyssoft.com</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-1 pt-4 bg-white md:pb-2 md:pt-4 lg:pb-4 lg:pt-2">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="mt-12.5 grid grid-cols-1 gap-0.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-0.5">
            <div className="animate_top z-40">
              <span className="font-medium underline dark:text-white md:mt-5">
                Our Locations
              </span>
              <h3 className="text-xl font-semibold text-black dark:text-white xl:text-itemtitle">We <span className="textStartGradient">Work</span><span className="textLastGradient"> Here</span></h3>
            </div>

            <div className="animate_top">
              <img alt="title" loading="lazy" width="36" height="36" src="/images/icon/indiaflag.png" />
              <h3 className="text-sm font-semibold text-black">Sharpsys Software Solutions [l] Pvt. Ltd.,</h3>
              <p className="text-sm font-medium text-black text-gray-500">No.14,Venu's Building,
                Mahalakshmi Nagar Ext III,<br />
                Mahalakshmi Nagar Main Road, Nandivaram,<br />
                Guduvanchery-603 202.<br />Tamil Nadu, India</p>
            </div>

            <div className="animate_top z-40">
              <img alt="title" loading="lazy" width="36" height="36" src="/images/icon/usaflag.png" />
              <h3 className="text-sm font-semibold text-black">Sharpsys Software Solutions [l] Pvt. Ltd.,</h3>
              <p className="text-sm font-medium text-black text-gray-500">66 West Flagler Street,<br /> Suite 900 Miami, FL 33130</p></div>
          </div>
        </div>
      </section>
      {/* Geo Location */}
      <HomeMap />


      <section className="pb-5 pt-10 md:pb-10 md:pt-18 lg:pb-14 lg:pt-12">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
      <FAQ />
    </>
  );
}
