"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TelephoneComponent = ({ phoneNumber }: { phoneNumber: string }) => {
  const buttonRef = useRef<HTMLDivElement>(null); // Reference for the button

  useEffect(() => {
    // Initial pop-in effect with rotation and scaling
    gsap.fromTo(
      buttonRef.current,
      { scale: 0, rotate: -45, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)", // Energetic pop-in
      }
    );

    // Floating effect: gently moves up and down continuously
    gsap.to(buttonRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // Smooth floating motion
    });
  }, []);

  return (
    <div ref={buttonRef} className="fixed bottom-16 right-5">
      <a
        href={`tel:${phoneNumber}`}
        className="relative bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-2 px-2 rounded-full shadow-xl text-sm
        hover:shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 ease-in-out flex items-center justify-center gap-3
        before:absolute before:content-[''] before:w-12 before:h-12 before:bg-white/30 before:rounded-full before:blur-lg before:opacity-0 hover:before:opacity-100"
      >
        {/* SVG Phone Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a2 2 0 011.8 1.11l1.6 3.2a2 2 0 01-.45 2.38L8.91 12.8a11.97 11.97 0 005.29 5.29l1.11-1.11a2 2 0 012.38-.45l3.2 1.6a2 2 0 011.11 1.8V19a2 2 0 01-2 2h-2c-9.94 0-18-8.06-18-18V5z"
          />
        </svg>
        Tổng đài hỗ trợ
      </a>
    </div>
  );
};

export default TelephoneComponent;
