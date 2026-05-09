import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiSearch, FiTrendingUp } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "SIXT",
    year: "[2023-2025]",
    tag: "Luxury Car Rental",
    bgColor: "#ff7800",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400",
  },
  {
    title: "Dojo B2B",
    year: "[2021-2025]",
    tag: "Fintech Solution",
    bgColor: "#b496ff",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400",
  },
  {
    title: "Magnet Trade",
    year: "[2023-2024]",
    tag: "E-commerce Platform",
    bgColor: "#64c8ff",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400",
  },
  {
    title: "Social search and multi channel content to #1",
    year: "[2023-2025]",
    tag: "UK holidays",
    bgColor: "#c598c3",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1400",
  },
];

const Feature = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRefs = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (window.innerWidth > 1024) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
          },
        });

        tl.to(
          leftRef.current,
          {
            y: () => -(leftRef.current.scrollHeight - window.innerHeight / 1.5),
            ease: "none",
          },
          0,
        );

        tl.to(
          rightRef.current,
          {
            y: () => -(rightRef.current.scrollHeight - window.innerHeight + 40),
            ease: "none",
          },
          0,
        );

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          onUpdate: (self) => {
            const center = window.innerHeight / 2;
            textRefs.current.forEach((el) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const elementCenter = rect.top + rect.height / 2;
              const distanceFromCenter = Math.abs(center - elementCenter);
              const opacity = Math.max(0.1, 1 - distanceFromCenter / 300);
              gsap.to(el, { opacity: opacity, duration: 0.1 });
            });
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e) => {
    const overlay = e.currentTarget.querySelector(".project-overlay");
    if (window.innerWidth > 1024) {
      gsap.to(cursorRef.current, { opacity: 1, scale: 1, duration: 0.3 });
    }
    gsap.fromTo(
      overlay,
      { clipPath: `circle(0% at 50% 100%)` },
      {
        clipPath: `circle(150% at 50% 100%)`,
        duration: 0.8,
        ease: "power2.inOut",
      },
    );
  };

  const handleMouseLeave = (e) => {
    const overlay = e.currentTarget.querySelector(".project-overlay");
    gsap.to(cursorRef.current, { opacity: 0, scale: 0, duration: 0.3 });
    gsap.to(overlay, {
      clipPath: `circle(0% at 50% 100%)`,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <section ref={sectionRef} className="relative lg:cursor-none">
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] opacity-0 scale-0 origin-center hidden lg:block"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-24 h-24 bg-[#b5f1e0] rounded-full flex items-center justify-center text-black">
          <FiArrowUpRight className="text-3xl" />
        </div>
      </div>

      <div className="min-h-screen lg:h-screen overflow-visible lg:overflow-hidden p-3">
        <div className="w-full h-full bg-black rounded-[30px] md:rounded-[40px] overflow-hidden relative border border-white/10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
            {/* LEFT SIDE*/}
            <div className="relative w-full lg:h-full flex flex-col px-6 md:px-16">
              <div className="static lg:absolute top-0 left-0 right-0 pt-10 lg:pt-12 pb-6 lg:px-16 z-30 bg-black lg:bg-transparent">
                <p className="text-white font-medium opacity-80 tracking-wider text-[20px] md:text-[22px]">
                  Featured Work
                </p>
              </div>

              {/* Gradient overlay*/}
              <div
                className="absolute inset-0 pointer-events-none z-20 hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to bottom, black 0%, transparent 20%, transparent 80%, black 100%)",
                }}
              ></div>

              {/* Titles Container */}
              <div
                ref={leftRef}
                className="space-y-6 md:space-y-12 pt-8 lg:pt-[220px] pb-10 lg:pb-[40vh]"
              >
                {projects.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => (textRefs.current[i] = el)}
                    className="flex items-start"
                  >
                    <h2 className="text-white text-[12vw] md:text-[8vw] lg:text-[4.7vw] font-semibold leading-[0.85] tracking-tighter transition-all  hover:pl-2 ">
                      {item.title.split(" ")[0]}
                    </h2>
                    <span className="text-[10px] md:text-xs text-white/50 ml-3 mt-4 font-mono">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (Images) */}
            <div className="relative w-full h-full p-4 md:p-6 lg:overflow-hidden">
              <div ref={rightRef} className="flex flex-col gap-6">
                {projects.map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onMouseLeave={(e) => handleMouseLeave(e)}
                    onClick={(e) => handleMouseEnter(e)}
                    className="relative w-full shrink-0 h-[45vh] md:h-[60vh] lg:h-[65vh] rounded-[25px] md:rounded-[30px] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* BOTTOM REVEAL OVERLAY*/}
                    <div
                      className="project-overlay absolute inset-0 p-6 md:p-10 flex flex-col justify-between pointer-events-none"
                      style={{
                        backgroundColor: item.bgColor,
                        clipPath: "circle(0% at 50% 100%)",
                      }}
                    >
                      <h3 className="text-black text-[28px] md:text-[3.5vw] font-bold leading-[1.1] max-w-[90%] tracking-tight">
                        {item.title}
                      </h3>

                      <div className="flex justify-end">
                        <div className="bg-white/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-black/5">
                          <FiSearch className="text-black text-lg" />
                          <span className="text-black font-medium text-sm">
                            {item.tag}
                          </span>
                          <FiTrendingUp className="text-black text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
