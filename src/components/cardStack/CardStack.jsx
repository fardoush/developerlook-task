import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CardStack = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-140%"]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.6], ["0%", "-140%"]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.85], ["0%", "-15%"]);

  const cards = [
    {
      id: 1,
      title: "Pioneers",
      color: "bg-black",
      textColor: "text-white",
      desc: "We're dedicated to creating the industry narrative that others follow 3 years from now.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300",
      rotate: 4,
      y: y1,
      zIndex: 30,
    },
    {
      id: 2,
      title: "Award Winning",
      color: "bg-[#b2f9e1]",
      textColor: "text-black",
      desc: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300",
      rotate: 8,
      y: y2,
      zIndex: 20,
    },
    {
      id: 3,
      title: "Organic Media",
      color: "bg-white",
      textColor: "text-black",
      desc: "We paved the path for creative SEO, multi-channel search with Digital PR.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300",
      rotate: 12,
      y: y3,
      zIndex: 10,
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-[#ececec]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="mb-28 flex flex-col items-center">
          <h3 className="text-black font-medium text-lg tracking-tight">
            Legacy In The Making
          </h3>
        </div>
      
        <div className="relative w-[550px] h-[550px] aspect-[4/5] xl:py-10 xl:px-14">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              style={{ 
                y: card.y, 
                rotate: card.rotate,
                zIndex: card.zIndex 
              }}
              className={`absolute inset-0 ${card.color} rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl border border-black/5`}
            >
              {card.img && (
                <div className="rounded-xl overflow-hidden w-full aspect-4/3 relative lg:aspect-1/1 lg:rounded-2xl lg:w-48 4xl:w-56 shadow-lg">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover "
                  />
                </div>
              )}
              <h2 className={`text-[68px] leading-none font-medium tracking-tight pt-8 pb-3 ${card.textColor} `}>
                {card.title}
              </h2>
              <p className={`text-xs md:text-sm font-normal ${card.textColor} max-w-xs mx-auto`}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStack;