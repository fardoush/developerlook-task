import React from "react";
import Card from "./Card";
import { FiArrowUpRight } from "react-icons/fi";

const NewsSection = () => {
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

  return (
    <section className="bg-[#F3F3F3] py-20">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between md:mb-10 md:border-b border-gray-300 pb-0 md:pb-6">
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

          <button className="hidden md:flex mt-6 md:mt-0 px-3 py-2 bg-white rounded-full hover:rounded-md text-[13px] font-normal items-center gap-2 transition-all duration-500 w-fit group text-black">
            <AnimatedLink name="Explore More Thoughts ↗" />
          </button>
        </div>

        {/* Card Grid Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {newsData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
