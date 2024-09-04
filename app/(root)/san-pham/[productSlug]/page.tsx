"use client"
import { Separator } from '@/components/ui/separator';
import { convertSlugToString } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react'

const ChiTietSanPham = () => {
    const pathName = usePathname()
    const slug = pathName.split('/').filter(Boolean).pop()
    
    return (
        <div className='lg:px-20 max-md:px-2 w-full my-5'>
            <h1 className='text-xl font-semibold mb-2'>Smart Tivi Samsung 4K Crystal UHD 70 inch UA70DU7000</h1>
            <Separator className='bg-gray-300' />
            
        </div>
    )
}

export default ChiTietSanPham