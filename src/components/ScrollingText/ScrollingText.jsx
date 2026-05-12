import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      // Initial state
      tl.fromTo(
        textRef.current,
        { x: "100vw", opacity: 1 }, 
        { x: "-100%", opacity: 1, ease: "none" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="">
      {/* Main Trigger Section */}
      <div ref={containerRef} className="h-screen w-full flex items-center overflow-hidden">
        <div ref={textRef} className="flex whitespace-nowrap will-change-transform">
          <h2 className="text-[336px] font-medium leading-none  text-black tracking-[-0.07em]">
            Ready to rise at seven?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;