import React from "react";
import Feature from "./Feature";
import FeaturedWork from "./FeaturedWork";

const AnimatedLink = ({ name, className = "" }) => (
  <span
    className={`hover-link-wrapper cursor-pointer inline-flex items-center gap-1 ${className}`}
  >
    <span className="hover-link-text font-semibold">{name}</span>
  </span>
);

const FeatureWorkSection = () => {
  return (
    <div>
      <FeaturedWork />
      <Feature />

      <div className="flex justify-center items-center">
        <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold flex items-center hover:text-black transition-all shadow-sm border border-gray-200">
          <AnimatedLink name="Explore Our Work ↗" />
        </button>
      </div>
    </div>
  );
};

export default FeatureWorkSection;
