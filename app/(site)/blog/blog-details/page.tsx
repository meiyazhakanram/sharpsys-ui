"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import parse from "html-react-parser";

const SingleBlogPage = () => {
  const search = useSearchParams();
  const blogId = Number(search.get('id'));

  return (
    <>
      <section className="pb-20 pt-35 mt-20 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-12">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="lg:w-full">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              {blogData.map((blog) => (
                (blog._id == blogId ?
                  <><div className="mb-10 w-full overflow-hidden">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blog.mainImage}
                        alt="Blog Image"
                        fill
                        className="rounded-md object-cover object-center" />
                    </div>
                  </div><h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                      {blog.title}
                    </h2><div className="blog-details">
                      <div className="text-black text-justify">
                        {parse(blog.metadata || '')}
                      </div>
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
