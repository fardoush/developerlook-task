import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Digital PR",
    bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  },
  {
    id: 2,
    title: "Organic Social & Content",
    bgImage:
      "https://images.unsplash.com/photo-1546177461-17179921c1d8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Search & Growth Strategy",
    bgImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 4,
    title: "Content Experience",
    bgImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
  },
  {
    id: 5,
    title: "Data & Insights",
    bgImage: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Onsite SEO",
    bgImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


const AnimatedLink = ({ name, className = "" }) => (
    <span className={`hover-link-wrapper cursor-pointer ${className}`}>
      <span className="hover-link-text">{name}</span>
      <span className="hover-link-text-after">{name}</span>
    </span>
  );


const ServicesSection = () => {
  return (
    <section className="bg-[#eeedeb] py-6 md:py-12 lg:py-16 px-0 md:px-2 lg:px-5 font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between md:mb-10 md:border-b border-gray-300 pb-0 md:pb-6">
        <h2 className="text-[60px] md:text-[75px] lg:text-[100px] font-medium tracking-tighter text-[#1a1a1a] flex flex-wrap md:flex-nowrap items-center gap-x-3 gap-y-0 leading-[1.1]">
          <span>Our</span>

          <span className="inline-block w-[54px] h-[54px] md:w-[75px] md:h-[75px] lg:w-20 lg:h-20 overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200"
              alt="team"
              className="w-full h-full object-cover"
            />
          </span>

          <span className="w-full md:w-auto">Services</span>
        </h2>
        <button className="hidden md:flex mt-6 md:mt-0 px-3 py-2 bg-white rounded-full hover:rounded-md text-[13px] font-normal items-center gap-2 transition-all duration-500 w-fit group text-black">
            <AnimatedLink name="View All Services ↗" />
          </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-16 gap-x-2 px-0 lg:px-10 items-stretch">
        {services.map((service, index) => (
          <div key={service.id} className="group relative cursor-pointer flex">
            {/* Desktop Hover Background*/}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full z-0 overflow-hidden -ml-11"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div
              className={`
                relative z-10 flex items-center py-4 transition-all duration-500 group-hover:px-0
                border-0 border-b-1 border-b-gray-300 
                group-hover:border-b-transparent
                w-full
                
                ${index >= 4 ? "md:border-b-0" : ""}
                ${index === 5 ? "border-b-0" : ""}
              `}
            >
              {/* Image for Mobile and Tablet*/}
              <div className="lg:hidden w-[48px] h-[48px] md:w-[64px] md:h-[64px] shrink-0 overflow-hidden md:rounded-xl rounded-lg mr-3">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-0 overflow-hidden group-hover:w-12 transition-all duration-500 flex items-center">
                <FiArrowUpRight className="text-white text-4xl mr-2 shrink-0" />
              </div>

              <h3 className="text-[30px] lg:text-[60px] font-medium tracking-tighter text-[#1a1a1a] group-hover:text-white transition-colors duration-500 leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="mt-0 md:hidden flex justify-center">
        <button className=" md:flex justify-center mt-3 md:mt-0 px-3 pt-3 pb-1.5 w-full bg-white rounded-full text-[13px] font-normal items-center gap-2 transition-all w-fit group text-black">
            <AnimatedLink name="View All Services ↗" />
          </button>
      </div>
    </section>
  );
};

export default ServicesSection;
