import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-[100]">
      {/* Top Banner */}

      <div className="px-[3px] md:px-2">
        <div className="w-full h-8 bg-[#b2f9e1] rounded-full overflow-hidden flex items-center justify-center">
          <p className="text-[11px] md:text-sm font-semibold text-black flex items-center gap-2 leading-none">
            The Category Leaderboard -
            <span className="underline cursor-pointer">Live Now</span>
          </p>
        </div>
      </div>
      {/* Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 
        ${
          scrolled
            ? "top-4 mx-auto w-[97%]  bg-white/10 backdrop-blur-xl border border-white/20 rounded-full py-2 shadow-2xl"
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
            {/* Services */}
            <div
              className="relative pb-6 -mb-6 cursor-pointer flex items-center"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <a
                href="#"
                className="hover:bg-white hover:rounded-full hover:px-3 hover:text-black transition-opacity flex items-center gap-1"
              >
                Services +
              </a>

              {/* Dropdown */}
              <div
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
                className={`absolute left-1/2 -translate-x-1/2 top-[80%] mt-2 w-[750px] bg-white rounded-[32px] p-8 shadow-2xl text-black transition-all duration-300 transform origin-top ${
                  isServicesHovered
                    ? "opacity-100 scale-100 pointer-events-auto visible"
                    : "opacity-0 scale-95 pointer-events-none invisible"
                }`}
              >
                <div className="grid grid-cols-12 gap-8 text-left">
                  {/* Left */}
                  <div className="col-span-7">
                    <p className="text-[11px] uppercase tracking-wider text-gray-400 font-extrabold mb-4 ">
                      Core Services
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 normal-case text-[15px] font-bold text-gray-900">
                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Search & Growth Strategy
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Digital PR
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Onsite SEO
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Social Media & Campaigns
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Content Experience
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Data & Insights
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        B2B Marketing
                      </a>

                      <a
                        href="#"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Social SEO/Search
                      </a>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="col-span-5 relative rounded-2xl overflow-hidden min-h-[180px] bg-gray-100 flex flex-col justify-end p-5 group/card">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                      alt="The Rise Lounge"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 text-center w-full">
                      <p className="text-white font-black text-lg mb-3 tracking-tight">
                        The Rise Lounge
                      </p>

                      <a
                        href="#"
                        className="inline-block bg-black text-white text-xs font-black px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors uppercase tracking-wider"
                      >
                        View All Services ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Menu */}
            {["International +", "About +"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:bg-white hover:rounded-full hover:px-3 hover:text-black transition-opacity"
              >
                {item}
              </a>
            ))}

            <a href="#" className="relative hover:bg-white hover:rounded-full hover:px-3 hover:text-black">
              Work
              <span className="absolute -top-3 -right-5 bg-[#b2f9e1] text-[10px] text-black px-1.5 py-0.5 rounded-full font-black">
                25
              </span>
            </a>

            {["Careers", "Blog", "Webinar"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:bg-white hover:rounded-full hover:px-3 hover:text-black transition-opacity"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 shadow-lg ${
                scrolled
                  ? "bg-black text-white"
                  : "bg-white text-black hover:scale-105"
              }`}
            >
              Get In Touch ↗
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-white p-1"
            >
              <div className="w-8 h-[2px] bg-white mb-1.5"></div>
              <div className="w-8 h-[2px] bg-white"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
                  className="text-5xl md:text-7xl font-black text-white hover:text-blue-400 transition-colors uppercase tracking-tighter"
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
          </nav>

          <div className="mt-auto">
            <button className="w-full bg-white text-black py-5 rounded-full font-black text-xl active:scale-95 transition-transform">
              Get In Touch ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
