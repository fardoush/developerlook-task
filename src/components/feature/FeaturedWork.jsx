import React from "react";

const AnimatedLink = ({ name, className = "" }) => (
  <span className={`hover-link-wrapper cursor-pointer ${className}`}>
    <span className="hover-link-text">{name}</span>
    <span className="hover-link-text-after">{name}</span>
  </span>
);

const FeaturedWork = () => {
  return (
    <section className="bg-[#f2f2f2] flex items-center lg:py-16 py-8">
      <div className=" w-full mx-auto flex flex-col md:flex-row items-center justify-between md:gap-10 gap-3">
        {/* Left Side */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="text-[18px] md:text-[24px] font-medium tracking-[0.001rem] text-black max-w-md">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <h1 className="text-[45px] lg:text-[88px] font-medium tracking-tighter leading-[0.9] flex flex-wrap items-end lg:gap-3 gap-1 text-black">
            Driving Demand &
            <span className="flex items-center gap-4">
              Discovery
              <span className="inline-block w-[50px] h-[50px] lg:w-[90px] lg:h-[90px] lg:rounded-xl rounded-lg overflow-hidden ">
                <img
                  src="https://i.ibb.co.com/HWynpm1/photo-1601366533287-5ee4c763ae4e.avif"
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </span>
            </span>
          </h1>
          {/* Buttons */}

          <div className="flex flex-wrap items-center gap-1 mt-4">
            <button className="hidden md:flex mt-6 md:mt-0 px-3 py-1.5 bg-white rounded-full hover:rounded-md text-[13px] font-normal items-center gap-2 transition-all duration-500 w-fit group text-black">
              <AnimatedLink name="Our Story ↗" />
            </button>

            <button className="hidden md:flex mt-6 md:mt-0 px-3 py-2 bg-transparent rounded-full text-[13px] font-normal items-center gap-2 transition-all w-fit group text-black">
              <AnimatedLink name="Our Services ↗" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
