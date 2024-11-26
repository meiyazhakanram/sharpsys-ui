import React from "react";

const ServicesCRM = () => {
    return (
      <>
      {/* CRM Section */}
      <section>
        <div className="pt-2 bg-[url('/images/ourservices/services_bg1.jpg')] bg-cover bg-center">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-4">
                <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                  <p className="text-white text-xl">CRM</p>
                  <h2 className="relative text-white mb-3 text-1xl font-bold text-black dark:text-white xl:text-hero">
                    Elevate Your Customer Relationships with All-in-One CRM Solutions
                  </h2>
                  <p className="mb-25 text-white">
                    Optimize sales, marketing, and customer service with Microsoft Dynamics 365's cloud-powered CRM solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20 pt-3 bg-[#1A0C2F] md:pb-20 md:pt-2 lg:pb-20 lg:pt-2">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
              <div className="flex flex-wrap gap-1 md:flex-nowrap md:items-center mt-20">
                <div className="animate-left md:w-1/2 lg:w-1/2 mt-1">
                  <h2 className="relative text-white mb-3 text-1xl font-bold text-black dark:text-white xl:text-hero">
                    Integrate<span className="textStartGradient"> CRM to </span><span className="textLastGradient">Maximize Customer Relationships</span>
                  </h2>
                  <p className="text-white mb-4">
                    Transform your business into a customer-centric powerhouse with Microsoft Dynamics 365.
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
        </div>
        <div className="pb-10 pt-3 md:pb-10 md:pt-2 lg:pb-10 lg:pt-20">
          <div className="container mx-auto">
            <div className="animate_top mx-auto text-center">
              <h2 className="mx-auto mb-2 text-1xl text-center font-bold text-black dark:text-black md:w-4/5 xl:w-1/2 xl:text-sectiontitle2">
                Microsoft Dynamics 365 for <span className="textStartGradient">Customer Relationship Management </span><span className="textLastGradient">and Salesforce</span>
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
                  Revolutionize customer engagement with Microsoft Dynamics 365's comprehensive CRM solutions.
                </h2>
                <p className="text-black mb-4">
                  Streamline sales, marketing, customer service, and field service operations on a single platform.
                  Gain enhanced visibility into customer interactions, improve lead management, and optimize
                  customer service processes to drive faster growth and outpace your competition.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 md:flex-nowrap md:items-center mt-20">
              <div className="animate-right md:w-3/4 lg:w-3/5 bg-white pl-3">
                <h2 className="relative text-black mb-3 text-xl font-bold text-black dark:text-black xl:text-hero">
                  Empower Your Business with Expert Salesforce Solutions
                </h2>
                <p className="text-black mb-4">
                  Salesforce solutions for expert guidance, tailored solutions, and proven results. Our certified
                  team leverages best practices and advanced technology to deliver scalable, reliable, and secure
                  solutions that drive revenue growth and improve operational efficiency. With a focus on
                  customer satisfaction and success, we're dedicated to helping you achieve your business goals
                  through innovative Salesforce implementations.
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
        </div>
      </section>
    {/* CRM Section Ends */}
      </>
  );
};

export default ServicesCRM;