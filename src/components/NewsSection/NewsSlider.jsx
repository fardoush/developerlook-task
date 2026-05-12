import React, { useRef, useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const NewsSlider = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const newsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
      author: "Ray Saddiq",
      authorImg:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "3 mins",
      title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      author: "Ray Saddiq",
      authorImg:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "5 mins",
      title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
      author: "Carrie Rose",
      authorImg:
        "https://images.unsplash.com/photo-1648474484044-bb82df2f5a1f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "2 mins",
      title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    },
  ];

  const AnimatedLink = ({ name, className = "" }) => (
    <span className={`hover-link-wrapper cursor-pointer ${className}`}>
      <span className="hover-link-text">{name}</span>
      <span className="hover-link-text-after">{name}</span>
    </span>
  );

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;

      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className=" text-black font-sans mb-5">
      {/* Header Section */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between md:mb-10 md:border-b border-gray-300 pb-0 md:pb-6">
        <h2 className="text-[60px] md:text-[75px] lg:text-[100px] font-medium tracking-tighter text-[#1a1a1a] flex flex-wrap md:flex-nowrap items-center gap-x-3 gap-y-0 leading-[1.1]">
          <span>What's</span>

          <span className="inline-block w-[54px] h-[54px] md:w-[75px] md:h-[75px] lg:w-20 lg:h-20 overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200"
              alt="team"
              className="w-full h-full object-cover"
            />
          </span>

          <span className="w-full md:w-auto">New</span>
        </h2>

        <button className="hidden md:flex mt-6 md:mt-0 px-5 py-2 bg-white border border-gray-200 rounded-full text-[13px] font-bold items-center gap-1 hover:bg-gray-100 transition-all shadow-sm w-fit">
          Explore More Thoughts <FiArrowUpRight size={18} />
        </button>
      </div>

      {/* Slider Wrapper */}
      <div className="">
        {/* News Cards Slider */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {newsData.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full md:w-[45%] snap-start"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 bg-white border border-gray-200 px-1 rounded-full text-[13px] font-medium border-none">
                  <div className="w-4 h-4 rounded-full">
                    <img
                      src={card.authorImg}
                      alt={card.author}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>{" "}
                  {card.author}
                </span>

                <span className="flex items-center gap-1 bg-white border border-gray-200 px-1 rounded-full text-[13px] font-medium border-none text-gray-500">
                  🕒 {card.time}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-snug mb-1">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="w-full h-1 bg-gray-200 mt-10 relative">
        <div
          className="absolute left-0 top-0 h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className=" mb-5 md:hidden flex justify-center ">
        <button className="mt-2 md:flex justify-center md:mt-0 px-3 pt-2 bg-white rounded-full text-[13px] font-normal items-center gap-2 transition-all w-fit group text-black">
          <AnimatedLink name="Explore More Thoughts ↗" />
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
