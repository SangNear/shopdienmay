"use client"
import React from 'react'
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { ImagesStock } from '@/constants'

interface ImageStockProps {
    title: String
    imageStock: ImagesStock[]
}

const ImageStock = ({ title, imageStock }: ImageStockProps) => {
    const plugin = React.useRef(
        Autoplay({ delay: 500, })
    )
    return (
        <div className='flex flex-col justify-center items-center gap-2  my-3 w-full'>
            <h3 className='w-[50%] p-2 uppercase bg-white border  text-[#fe0000] text-center font-bold'>Kho {title}</h3>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full">
                <CarouselContent>
                    {imageStock.map((item, index) => (
                        <CarouselItem key={index} className='cursor-grab' >
                            <div className="p-1">
                                <Card className='w-full'>
                                    <Image src={item.src} alt='img' className='max-h-96 min-h-96' />
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default ImageStock