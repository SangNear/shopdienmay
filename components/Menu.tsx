"use client"
import Link from "next/link";
import React, { useState } from "react";
import { menuNavLinks } from "@/constants";
const Menu = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="w-full bg-[red] lg:px-10 max-lg:hidden relative">
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
                                href={item.route}
                                className="flex flex-col text-white items-center hover:bg-white hover:text-[#fe0000] rounded-xl px-4 py-2"
                            >
                                <IconComponent /> {/* Render the icon component */}
                                <span>{item.name}</span>
                            </Link>
                            {
                                hoveredIndex === index &&
                                <div className="absolute left-0 top-full grid grid-cols-4 gap-4 w-full bg-white h-60 rounded-xl border shadow-lg lg:px-10">
                                    {item.subMenu?.map((sub) => (
                                        <div className="flex flex-col">
                                            <h4 className="text-lg font-semibold ">{sub.subMenuTitle}</h4>
                                            <div className="flex flex-col gap-2">
                                                {sub.subMenuRoute.map((subroute) => (
                                                    <span className="text-base hover:text-[#fe0000] cursor-pointer w-fit ml-3">
                                                        {subroute}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
