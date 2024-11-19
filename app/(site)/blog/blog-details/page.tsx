"use client";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Blog } from "@/types/blog";
import { Metadata } from "next";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import  blogData from "@/components/Blog/blogData";
import parse from "html-react-parser";




const SingleBlogPage = () => {
  const search = useSearchParams();
  const blogId = Number(search.get('id'));



  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-12">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="lg:w-full">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              {blogData.map((blog) => (
                  (blog._id == blogId ? 
                    <><div className="mb-10 w-full overflow-hidden ">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blog.mainImage}
                        alt="Blog Image"
                        fill
                        className="rounded-md object-cover object-center" />
                    </div>
                  </div><h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                      {blog.title}
                    </h2><ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                      <li>
                        <span className="text-black font-bold dark:text-white">Author: </span>{" "}
                        Jhon Doe
                      </li>
                      <li>
                        <span className="text-black font-bold dark:text-white">
                          Published On:
                        </span>July 30, 2023
                      </li>
                      <li>
                        <span className="text-black font-bold dark:text-white">
                          Category:
                        </span>
                        Events
                      </li>
                    </ul><div className="blog-details">
                      <p className="text-justify">
                        {parse(blog.metadata || '')}
                        {/* {<div dangerouslySetInnerHTML={{__html : blog.metadata || ''}}></div>} */}
                      </p>
                    </div></>
                    : "")
              ))}              
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
