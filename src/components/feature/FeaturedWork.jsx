import React from "react";

const AnimatedLink = ({ name, className = "" }) => (
  <span
    className={`hover-link-wrapper cursor-pointer inline-flex items-center gap-1 ${className}`}
  >
    <span className="hover-link-text font-semibold">{name}</span>
  </span>
);

const FeaturedWork = () => {
  return (
    <section className="bg-[#f2f2f2] min-h-[60vh] flex items-center py-12">
      <div className=" w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="text-[18px] md:text-[24px] font-medium leading-tight text-black max-w-md">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h1 className="text-[50px] lg:text-[90px] font-600 tracking-tighter leading-[0.9] flex flex-wrap items-end gap-3 text-black">
            Driving Demand &
            <span className="flex items-center gap-4">
              Discovery
              <span className="inline-block w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://i.ibb.co.com/HWynpm1/photo-1601366533287-5ee4c763ae4e.avif"
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </span>
            </span>
          </h1>
          {/* Buttons */}

          <div className="flex flex-wrap items-center gap-6 mt-4">
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-bold flex items-center hover:text-black transition-all shadow-sm border border-gray-200">
              <AnimatedLink name="Our Story ↗" />
            </button>

            <button className="text-black font-bold flex items-center  transition-all">
              <AnimatedLink name="Our Services ↗" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
