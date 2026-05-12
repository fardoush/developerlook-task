import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const MarqueeSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const marqueeData = [
    {
      id: 1,
      text: "Not Algorithms",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    },
    {
      id: 2,
      text: "Chasing Consumers",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    },
    {
      id: 3,
      text: "Creative Strategy",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    },
    {
      id: 4,
      text: "Digital Growth",
      img: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=800",
    },
    {
      id: 5,
      text: "Search Experience",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderContent = () => (
    <div className="flex items-center">
      {marqueeData.map((data) => (
        <div
          className="flex items-center gap-5 lg:gap-10  pr-5 md:pr-10"
          key={data.id}
        >
          <h1 className=" text-[75px] lg:text-[11vw] font-medium leading-none tracking-tighter text-[#111212]  whitespace-nowrap">
            {data.text}
          </h1>
          <div className="w-[18vw] h-[14vw] bg-gray-200 md:rounded-2xl rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={data.img}
              alt={data.text}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full  py-3 lg:py-16 flex items-center bg-[#f0f0f0] overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/*Cursor*/}
      <motion.div
        className="fixed top-0 left-0 py-2 px-6 bg-[#b2f6e3] text-black rounded-full flex items-center justify-center pointer-events-none z-50 text-sm font-bold shadow-sm whitespace-nowrap"
        animate={{
          x: mousePos.x - 70,
          y: mousePos.y - 20,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
      >
        Send Us Your Brief <FiArrowUpRight className="ml-2" />
      </motion.div>

      {/* Auto Slider  */}
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 120,
            repeat: Infinity,
          }}
        >
          {renderContent()}
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
