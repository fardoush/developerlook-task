import React from "react";
import Feature from "./Feature";
import FeaturedWork from "./FeaturedWork";

const AnimatedLink = ({ name, className = "" }) => (
  <span className={`hover-link-wrapper cursor-pointer ${className}`}>
    <span className="hover-link-text">{name}</span>
    <span className="hover-link-text-after">{name}</span>
  </span>
);

const FeatureWorkSection = () => {
  return (
    <div>
      <FeaturedWork />
      <Feature />

      <div className="flex justify-center items-center">
        <button className="md:flex mt-6 md:mt-0 px-3 py-2 bg-white rounded-full text-xs font-normal items-center gap-2 transition-all w-fit group text-black">
          <AnimatedLink name="Explore Our Work ↗" />
        </button>
      </div>
    </div>
  );
};

export default FeatureWorkSection;
