import React, { useRef, useState, useEffect } from "react";

const LegacySlider = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const originalCards = [
    {
      id: 1,
      title: "Pioneers",
      desc: "We are dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it. ",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Award Winners",
      desc: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000",
      bgColor: "bg-[#B9F9E1]",
      textColor: "text-black",
    },
    {
      id: 3,
      title: "Creative Thinkers",
      desc: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      bgColor: "bg-indigo-900",
      textColor: "text-white",
    },
  ];

  const cards = [...originalCards, ...originalCards];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const halfWidth = scrollWidth / 2;

      if (scrollLeft >= halfWidth) {
        scrollRef.current.scrollLeft = scrollLeft - halfWidth;
      } else if (scrollLeft <= 0) {
        scrollRef.current.scrollLeft = halfWidth;
      }

      const currentScroll = scrollLeft % halfWidth;
      const progress = (currentScroll / (halfWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div className="py-10 overflow-hidden md:px-3 bg-transparent">
      <div className="w-full mx-auto">
        <h2 className="text-center text-base text-black font-normal mb-2 tracking-tighter ">
          Legacy In The Making
        </h2>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 md:pl-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={` min-w-full md:min-w-[400px] md:w-[75%] w-full ${card.bgColor} rounded-2xl p-6 snap-start flex-shrink-0 flex flex-col h-[550px]  transition-transform duration-300`}
            >
              <div className="w-full md:h-[298px] h-1/2 rounded-2xl overflow-hidden mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={`flex flex-col justify-center items-center ${card.textColor}`}>
                <h3 className="text-3xl font-bold text-center">{card.title}</h3>
                <p className="text-sm max-w-sm leading-relaxed text-center opacity-90">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className=" flex justify-center ">
          <div className="w-full  h-[4px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-black"
              style={{ width: `${Math.min(scrollProgress, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacySlider;
