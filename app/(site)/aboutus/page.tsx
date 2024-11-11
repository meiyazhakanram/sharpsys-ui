import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import UserStories from "@/components/UserStories";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Sharpsys",
  description: "Sharpsys - Elevate your Business Productivity"
};

export default function AboutUsPage() {
  return (
    <>
      <section className="overflow-hidden pb-1 pt-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-2xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              Ultimate Solutions For All Your<span className="textStartGradient"> Dynamic </span><span className="textLastGradient">Business Needs</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              Scale your business with data-driven insights to optimize workflows, boost productivity, and
              achieve sustainable growth.
            </p>
          </div>
          <div className="container mx-auto mb-4">
            <img
              src="/path/to/your-image.jpg"
              alt="Team working"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-5.5 mb-5 md:grid-cols-1 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-32">
            <div className="border p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-800">65%</h3>
              <p className="text-gray-600 mt-2">Text to be added</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-800">24 Hrs</h3>
              <p className="text-gray-600 mt-2">Text to be added.</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-600 mt-2">Text to be added.</p>
            </div>
          </div>


          <div className="container mx-auto mb-10 mt-15">
            <div className="animate_top mx-auto text-center">
              <h2 className="mx-auto mb-2 text-2xl mb-10 text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
                Meet our <span className="textLastGradient">Founder</span>
              </h2>
            </div>


            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
                <div className="animate-left md:w-1/4 lg:w-2/5 mt-0">
                  <img
                    src="/path/to/your-image.jpg"
                    alt="Team working"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="animate-right md:w-3/4 lg:w-3/5">
                  <p className="mb-5">Sharpsys was established in 2011 by Mr. Narayanan, who began his professional journey in
                    1993 as an extraordinary Mathematics teacher. Transitioning into the corporate world in 1998 as
                    a software engineer, Mr. Narayanan faced numerous challenges but steadily rose through the
                    ranks. In 2004, he became a Technical Consultant at Firstware, progressed to Associate
                    Manager at Sundaram Infotech in 2005, advanced to Senior Consultant at GSR in 2008, and
                    ultimately attained the role of Delivery Head at Jean Martin, a US-based company, in 2010.<br />
                    With over 15 years of expertise as a technical specialist, Mr. Narayanan founded Sharpsys
                    Software Solutions (I) Pvt Ltd, providing tailored ERP solutions to businesses of all sizes.
                    Tragically, Mr. Narayanan passed away from COVID-19 at the age of 52 on 30th August 2020.<br />
                    Despite the founder’s loss, Sharpsys continues to flourish under the leadership of Mrs.
                    Hemalatha Narayanan, Mr. Javagal Srinath Narayanan and Mr. Harikrishnan Indrababu. Driven
                    by a commitment to excellence and innovation, the company remains dedicated to delivering
                    cutting-edge technological solutions that empower businesses to succeed.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="pb-16 pt-15 mb-10 bg-[#2B1A46] md:pb-15 md:pt-15 lg:pb-15 lg:pt-15">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
            <div className="animate-left md:w-1/4 lg:w-2/5 mt-0">
              <h1 className="mx-auto mb-2 text-3xl font-bold text-white 2xl:text-sectiontitle1">
                Transforming <br /><span className="textStartGradient">Businesses</span><span className="textLastGradient"> with Data</span>
              </h1>
            </div>
            <div className="animate-right mb-2 md:w-3/4 lg:w-3/5 text-white">
              Empowering businesses with data-driven ERP solutions, revitalizing industries through actionable insights, streamlined processes, and
              sustainable growth.
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-3 lg:mt-15 lg:grid-cols-3 xl:mt-10 xl:gap-10">
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
              <h2 className="text-2xl font-semibold text-black">Innovative ERP Solutions</h2>
              <p className="text-sm font-medium text-black">We deliver customized ERP solutions tailored to the unique needs of each client, helping
                businesses improve operational efficiency, optimize workflows, and achieve long-term,
                sustainable growth.
              </p>
            </div>

            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
              <h2 className="text-2xl font-semibold text-black">Data-Driven Decisions</h2>
              <p className="text-sm font-medium text-black">Our mission is to empower companies with advanced data analytics, enabling them to make
                informed decisions, identify opportunities, mitigate risks, and enhance overall business
                performance and agility.
              </p>
            </div>
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
              <h2 className="text-2xl font-semibold text-black">Customer-Centered Approach</h2>
              <p className="text-sm font-medium text-black">We prioritize customer needs by providing personalized services and innovative solutions,
                ensuring businesses can overcome challenges, streamline operations, and succeed in a
                competitive marketplace.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="overflow-hidden bg-[#FAFAFA] pb-1 pt-14 mb-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-2xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              The<span className="textStartGradient"> Sharpsys </span><span className="textLastGradient"> Story</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              A testament to the power of perseverance
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5.5 md:grid-cols-4 lg:mt-15 lg:grid-cols-4 xl:mt-10 xl:gap-10">
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="ml-0 border bg-white rounded-lg p-3 pt-3">
              <img
                src="/path/to/your-image.jpg"
                alt="Team working"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="pb-16 pt-15 mb-10 md:pb-15 md:pt-15 lg:pb-15 lg:pt-15">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center">
            <div className="animate-left md:w-1/4 lg:w-2/5 mt-0">
              <h1 className="mx-auto mb-2 text-3xl font-bold text-black 2xl:text-sectiontitle1">
                The milestones that shaped us
              </h1>
            </div>
            <div className="animate-right mb-2 md:w-3/4 lg:w-3/5 text-black">
              From our first project to our latest breakthrough, each of the milestones is a testament to our
              resilience, innovation, and unwavering commitment to excellence.
            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#0A0A0A] py-11 mt-4 mb-5 text-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mx-auto mb-2 text-2xl text-center font-bold text-white dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
              Our <span className="textStartGradient">Dedicated </span><span className="textLastGradient">Crew</span>
            </h2>
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-center text-gray-500">
              The team of experts who go the extra mile for every client.
            </p>
          </div>
        </div>
      </section>
      {/* User Stories */}
      <UserStories />

    </>
  );
}
