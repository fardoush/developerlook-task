import React, { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

const menuItems = [
  { name: "Services", hasPlus: true, isMega: true },
  { name: "International", hasPlus: true },
  { name: "About", hasPlus: true },
  { name: "Work", hasBadge: true, badgeCount: 25 },
  { name: "Careers", hasPlus: false },
  { name: "Blog", hasPlus: false },
  { name: "Webinar", hasPlus: false },
];

const coreServices = [
  "Search & Growth Strategy",
  "Digital PR",
  "Onsite SEO",
  "Social Media & Campaigns",
  "Content Experience",
  "Data & Insights",
  "B2B Marketing",
  "Social SEO/Search",
];

const AnimatedLink = ({ name, className = "" }) => (
  <span className={`hover-link-wrapper cursor-pointer ${className}`}>
    <span className="hover-link-text">{name}</span>
    <span className="hover-link-text-after">{name}</span>
  </span>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-[100]">
      {/* Top Banner */}
      <div className="px-[3px] md:px-2">
        <div className="w-full h-8 bg-[#b2f9e1] rounded-full flex items-center justify-center">
          <p className="text-[11px] md:text-sm font-semibold text-black flex items-center gap-2">
            The Category Leaderboard -{" "}
            <span className="underline cursor-pointer">Live Now</span>
          </p>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 px-6 
        ${
          scrolled
            ? "top-4 mx-auto w-[97%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-2 shadow-2xl"
            : "top-15 w-full bg-transparent py-6"
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl md:text-3xl font-black tracking-tighter text-white">
            Rise at Seven<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-[14px] font-bold text-white uppercase tracking-tight">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative pb-2 cursor-pointer"
                onMouseEnter={() => item.isMega && setIsServicesHovered(true)}
                onMouseLeave={() => item.isMega && setIsServicesHovered(false)}
              >
                <div className="flex items-center gap-1 group">
                  <spa className="text-white transition-all  hover:text-black hover:rounded-full hover:px-3 hover:py-1  hover:bg-white">{`${item.name}${item.hasPlus ? " +" : ""}`}</spa>

                  {item.hasBadge && (
                    <span className="ml-1 bg-[#b2f9e1] text-[10px] text-black px-1.5 py-0.2 rounded-full font-black">
                      {item.badgeCount}
                    </span>
                  )}
                </div>

                {/* Mega Menu for Services */}
                {item.isMega && (
                  <div
                    className={`absolute left-4/1 -translate-x-1/2 top-[100%] mt-4 w-[900px] bg-white rounded-[32px] p-8 shadow-2xl text-black transition-all duration-300 transform origin-top ${
                      isServicesHovered
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-8 text-left">
                      <div className="col-span-8">
                        <p className="text-sm capitalize font-200 text-gray-400  mb-4">
                          Core Services
                        </p>
                        <div className="grid grid-cols-2 gap-y-1 gap-x-6 normal-case text-base font-bold text-gray-900">
                          {coreServices.map((service) => (
                            <a
                              key={service}
                              href="#"
                              className="transition-colors block"
                            >
                              <AnimatedLink name={service} />
                            </a>
                          ))}
                        </div>
                      </div>
                      {/* Right Card */}
                      <div className="col-span-4 relative rounded-2xl overflow-hidden min-h-[180px] bg-gray-100 flex flex-col justify-end p-5 group/card">
                        <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                          alt="Lounge"
                          className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 text-center w-full">
                          <p className="text-white font-black text-lg mb-3">
                            The Rise Lounge
                          </p>
                          <button className="bg-black text-white text-xs font-black px-5 pt-2.5 pb-1 rounded-full uppercase">
                            <AnimatedLink name="Get In Touch ↗" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Button */}
          <div className="flex items-center justify-center gap-4">
            <button
              className={`hidden md:block px-6 pt-2.5 rounded-full text-sm font-black transition-all duration-300 ${scrolled ? "bg-black text-white  " : "bg-white text-black hover:scale-105  "}`}
            >
              <AnimatedLink className="leading-none" name="Get In Touch ↗" />
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white flex flex-col gap-1.5"
            >
              <div className="w-8 h-[2px] bg-white"></div>
              <div className="w-8 h-[2px] bg-white"></div>
            </button>
          </div>
        </div>
      </header>

      {/* (Mobile Menu Code) */}

      <div
        className={`fixed inset-3 md:inset-6 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-full opacity-0 scale-95"
        }`}
      >
        <div className="w-full h-full bg-[#1a1c1e] border border-white/10 rounded-[40px] shadow-2xl flex flex-col p-10 overflow-hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="text-white text-2xl font-black tracking-tighter">
              Rise at Seven.
            </span>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white p-2 border border-white/20 rounded-full hover:bg-white/10"
            >
              <X size={28} />
            </button>
          </div>

          <div className="">
            <nav className="flex flex-col space-y-4">
              {[
                "Services",
                "International",
                "About",
                "Work",
                "Careers",
                "Blog",
                "Webinar",
              ].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-between group py-1"
                >
                  <a
                    href="#"
                    className="text-5xl md:text-7xl font-black text-white  transition-colors uppercase tracking-tighter"
                  >
                    {name}
                  </a>

                  {["Services", "International", "About"].includes(name) && (
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full text-white">
                      <ChevronDown size={24} />
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-auto">
                <button className=" w-full bg-white text-black py-5 rounded-full font-black text-xl active:scale-95 transition-transform">
                  Get In Touch ↗
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
