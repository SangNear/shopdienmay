"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Page = () => {
    const pathname = usePathname()
    console.log("pathname edit:", pathname);
    
  return (
    <div>edit </div>
  )
}

export default Page