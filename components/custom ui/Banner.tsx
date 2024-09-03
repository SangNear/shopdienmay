"use client";
import { imagesCarousel } from "@/constants";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Banner = () => {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    const isFirstImg = curr === 0;
    const newIndex = isFirstImg ? imagesCarousel.length - 1 : curr - 1;
    setCurr(newIndex);
  };
  const next = () => {
    const isLastImg = curr === imagesCarousel.length - 1;
    const newIndex = isLastImg ? 0 : curr + 1;
    setCurr(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000); // 2000ms = 2s

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [curr]);
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {imagesCarousel.map((image, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Image
              src={image.src}
              alt={image.name}
              className="max-sm:px-2 max-sm:mt-2 max-sm:rounded-2xl sm:h-[400px] w-full max-sm:object-contain object-fill"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Banner;
