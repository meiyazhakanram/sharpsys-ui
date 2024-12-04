import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <div className="animate_top">
        <img
          className="w-28 h-16 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          
        />
        {/* <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
          src={imageLight}
          alt={name}
          fill
        /> */}
        </div>
    </>
  );
};

export default SingleBrand;
