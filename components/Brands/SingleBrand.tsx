import React from "react";
import { Brand } from "@/types/brand";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  return (
    <>
      <div className="animate_top">
        <img
          className="w-48 h-24"
          src={image}
          alt={name}      
        />
        </div>
    </>
  );
};

export default SingleBrand;
