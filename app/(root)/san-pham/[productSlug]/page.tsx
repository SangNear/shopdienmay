"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

const ChiTietSanPham = () => {
    const pathName = usePathname()
    const slug = pathName.split('/').filter(Boolean).pop()

    console.log(slug);
    return (
        <div>Chi tiết sản phẩm {slug}</div>
    )
}

export default ChiTietSanPham