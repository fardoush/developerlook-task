import React, { useState, useRef } from "react";

const Card = ({ image, title, author, authorImg, time }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      className={`flex flex-col gap-5 transition-transform duration-500 ease-out ${
        isHovered ? "-translate-y-[5px]" : "translate-y-0"
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[550px] overflow-hidden rounded-2xl cursor-none group bg-gray-100"
      >
        {/* 1. Base Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        />

        {/* 2. Hover Blur Image */}
        <img
          src={image}
          alt={`${title} blurred`}
          className="absolute inset-0 h-full w-full object-cover backdrop-blur-3xl transition-all duration-700 ease-in-out rounded-2xl"
          style={{
            filter: isHovered ? "blur(10px) brightness(0.9)" : "blur(0px)",
            clipPath: isHovered
              ? "circle(150% at 50% 100%)"
              : "circle(0% at 50% 100%)",
          }}
        />

        {/* 3. Floating Arrow */}
        <div
          className="pointer-events-none absolute hidden lg:flex items-center justify-center w-24 h-24 bg-[#B0FBDE] rounded-full transition-transform duration-150 ease-out z-10"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 bg-white border border-gray-200 px-1 rounded-full text-[13px] font-medium border-none">
            <div className="w-4 h-4 rounded-full">
              <img
                src={authorImg}
                alt={author}
                className="w-full h-full object-cover rounded-full"
              />
            </div>{" "}
            {author}
          </span>

          <span className="flex items-center gap-1 bg-white border border-gray-200 px-1 rounded-full text-[13px] font-medium border-none text-gray-500">
            🕒 {time}
          </span>
        </div>

        <h3 className="text-2xl max-w-md font-bold leading-[1.2] tracking-tight text-black transition-colors cursor-pointer">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
