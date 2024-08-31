import ProductCart from '@/components/ProductCart';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { getAllProductBySlug } from '@/lib/actions/actions';
import { convertSlugToString } from '@/lib/utils';
import React from 'react'

const DanhSachSanPham = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug
    const menuTitle = convertSlugToString(slug)
    // const listProduct = await getAllProductBySlug(slug)
    return (
        <div className='lg:px-20 max-md:px-2 w-full'>
            {slug}
            {/* <div className='flex flex-col w-full gap-5'>
                <div className='h-auto w-full bg-white p-4 my-5 rounded-xl'>
                    <h2 className='text-[#3f3f3f] font-bold uppercase'>Top 10 {menuTitle} được yêu thích nhất</h2>
                    <div className="  w-full  shadow-2xl  overflow-hidden rounded-2xl py-2">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className=""
                        >
                            <CarouselContent>
                                {Array.from({ length: 9 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="max-sm:basis-1/2 max-md:basis-1/3 max-lg:basis-1/4 lg:basis-1/5 flex justify-around"
                                    >
                                        <ProductCart />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            
                        </Carousel>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default DanhSachSanPham