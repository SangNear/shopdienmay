"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { menuNavLinks } from "@/constants";
import { toslug } from "@/lib/utils";
import { UrlObject } from "url";
import { gsap } from "gsap";

const Menu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTopMenuVisible, setIsTopMenuVisible] = useState(true);
  const submenuRef = useRef<HTMLDivElement | null>(null);

  console.log("scroll", isTopMenuVisible);
  console.log("submenuRef", submenuRef);
  
  // Effect to add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const topMenuHeight = 150; // Adjust this based on your top menu's height
      const scrollPosition = window.scrollY;
      setIsTopMenuVisible(scrollPosition < topMenuHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to handle GSAP animation
  useEffect(() => {
    if (submenuRef.current) {
      if (!isTopMenuVisible) {
        // Slide down animation when submenu becomes visible
        gsap.to(submenuRef.current, {
          y: 0,
          autoAlpha: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        // Slide up animation when submenu is hidden
        gsap.to(submenuRef.current, {
          y: -100,
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }
  }, [isTopMenuVisible]);

  return (
    <div className="max-lg:hidden relative z-10 flex flex-col gap-2 w-full">
      <div className="bg-[red] w-full lg:px-20">
        <div className="flex justify-between relative">
          {menuNavLinks.map((item, index) => {
            const IconComponent = item.icon; // Dynamically reference the icon
            return (
              <div
                key={index}
                className=""
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={`/danh-sach-san-pham/${item.route}`}
                  className="flex flex-col text-white items-center hover:bg-white hover:text-[#fe0000] rounded-xl px-4 py-2"
                >
                  <IconComponent /> {/* Render the icon component */}
                  <span>{item.name}</span>
                </Link>
                {hoveredIndex === index && (
                  <div className="absolute left-0 top-full grid grid-cols-4 gap-4 w-full bg-white h-auto rounded-xl border shadow-lg lg:px-10">
                    {item.subMenu?.map((sub) => (
                      <div key={sub.subMenuTitle} className="flex flex-col">
                        <h4 className="text-lg font-semibold">
                          {sub.subMenuTitle}
                        </h4>
                        <div className="flex flex-col gap-2">
                          {sub.subMenuRoute.map((subroute) => {
                            const route = toslug(subroute);
                            return (
                              <Link
                                href={`/danh-sach-san-pham/${route as unknown as UrlObject}`}
                                key={subroute}
                                className="text-base hover:text-[#fe0000] cursor-pointer w-fit ml-3"
                              >
                                {subroute}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Submenu */}
      <div
        ref={submenuRef}
        className={`bg-white w-full lg:px-20 transition-all fixed top-0 ${
          isTopMenuVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ transform: "translateY(-100%)", opacity: 0 }}
      >
        <div className="flex justify-between relative">
          {menuNavLinks.map((item, index) => {
            const IconComponent = item.icon; // Dynamically reference the icon
            return (
              <div
                key={index}
                className=""
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={`/danh-sach-san-pham/${item.route}`}
                  className="flex flex-col text-[red] items-center hover:bg-[red] hover:text-white rounded-xl px-4 py-2"
                >
                  <IconComponent /> {/* Render the icon component */}
                  <span>{item.name}</span>
                </Link>
                {hoveredIndex === index && (
                  <div className="absolute left-0 top-full grid grid-cols-4 gap-4 w-full bg-white h-auto rounded-xl border shadow-lg lg:px-10">
                    {item.subMenu?.map((sub) => (
                      <div key={sub.subMenuTitle} className="flex flex-col">
                        <h4 className="text-lg font-semibold">
                          {sub.subMenuTitle}
                        </h4>
                        <div className="flex flex-col gap-2">
                          {sub.subMenuRoute.map((subroute) => {
                            const route = toslug(subroute);
                            return (
                              <Link
                                href={`/danh-sach-san-pham/${route as unknown as UrlObject}`}
                                key={subroute}
                                className="text-base hover:text-[red]  cursor-pointer w-fit ml-3"
                              >
                                {subroute}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
