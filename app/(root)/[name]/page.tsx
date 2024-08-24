"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
    const pathname = usePathname()
    const slug = pathname.replace("/", "")
    return (
        <div className='max-md:px-8 lg:px-10 px-2' >
            {slug}
        </div>
    )
}

export default page