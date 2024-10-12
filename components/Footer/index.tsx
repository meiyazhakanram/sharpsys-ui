"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-black  text-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-10">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo.svg"
                    alt="Logo"
                    className="dark:block"
                  />
                </a>
                <h1 className="text-4xl dark:text-white mb-10 mt-5">
                  Subscribe to the newsletter
                </h1>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-1 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-2 text-xl dark:text-white">
                    Home
                  </h4>

                  <ul>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Our Clients
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Why Sharpsys?
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h5 className="mb-2 text-xl dark:text-white">
                    Our Services
                  </h5>

                  <ul>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Enterprise Solutions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        CRM
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Data Related
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Business Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Staff Augmenttion
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-2 text-xl dark:text-white">
                    Our Products
                  </h4>

                  <ul>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Drag & Drop
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        E-Invoice Integration
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Quote Engine
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-2 text-xl dark:text-white">
                    Company
                  </h4>

                  <ul>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mb-3 text-sm inline-block hover:text-primary">
                        Quote Engine
                      </a>
                    </li>
                  </ul>
                </motion.div>




              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col text-right flex-wrap border-t border-stroke py-7 dark:border-strokedark">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; - 2022 Sharpsys Software Solutions [l] Pvt. Ltd., | All rights reserved
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
