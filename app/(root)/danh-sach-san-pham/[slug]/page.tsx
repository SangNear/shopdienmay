import { getAllProductBySlug } from '@/lib/actions/actions';
import React from 'react'


const DanhSachSanPham = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug
    const listProduct = await getAllProductBySlug(slug)
    
    


    return (
        <div className='lg:px-20 max-md:px-2 w-full'>
            <div className='flex flex-col w-full'>

                {slug}
            </div>
        </div>
    )
}

export default DanhSachSanPham