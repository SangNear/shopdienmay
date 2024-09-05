"use client"
import { menuLinksAdmin } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const MenuLeftAdmin = () => {
    const pathname = usePathname()
    return (
        <div className="h-screen left-0 top-0 sticky  p-10  flex flex-col gap-16 shadow-xl max-lg:hidden bg-blue-2">
            <h1 className='text-xl uppercase font-bold text-[#fe0000]'>Shop dien may</h1>
            <div className="flex flex-col gap-14">
                {menuLinksAdmin.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <Link href={item.route} key={index} className={`flex gap-4 text-body-medium hover:text-[#fe0000] ${pathname === item.route ? "text-[#fe0000]" : ""}`}>
                            <IconComponent />
                            <p>{item.name}</p>
                        </Link>

                    );
                })}

            </div>
        </div>
    )
}

export default MenuLeftAdmin