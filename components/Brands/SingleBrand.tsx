import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <div className="animate_top mx-w-full relative block h-16 w-[98px]">
        <Image
          className="transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          fill
        />
        <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        />
        </div>
    </>
  );
};

export default SingleBrand;
