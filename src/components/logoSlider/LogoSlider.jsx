import React from "react";
import { motion } from "framer-motion";

const LogoSlider = () => {
  const logos = [
    { name: "Emirates", url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg" },
    { name: "Shark Ninja", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/SharkNinja_Logo.png" },
    { name: "Capital One", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg" },
    { name: "Red Bull", url: "https://upload.wikimedia.org/wikipedia/en/f/f5/Red_Bull_Racing_logo.svg" },
    { name: "JD Sports", url: "https://upload.wikimedia.org/wikipedia/en/0/0e/JD_Sports_logo.svg" },
    { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
    { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  ];

 
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#f0f0f0] py-6 lg:py-10 overflow-hidden  select-none">
      <div className="w-full mx-auto flex md:flex-row flex-col items-center">
        {/* Left Text */}
        <div className="whitespace-nowrap pr-4 z-10 bg-[#f0f0f0] shadow-[10px_0_15px_-5px_#f0f0f0]">
          <p className="text-sm md:text-base font-bold text-black tracking-tight">
            The agency behind...
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex items-center gap-16 md:gap-24 w-max"
            animate={{ x: ["0%", "-33.33%"] }} 
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, 
                ease: "linear",
              },
            }}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale transition-all duration-300 opacity-99 hover:opacity-100"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 md:h-10 w-auto object-contain pointer-events-none"
                />
              </div>
            ))}
          </motion.div>
          
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#f0f0f0] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;