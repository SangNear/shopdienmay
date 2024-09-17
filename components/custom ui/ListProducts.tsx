"use client"
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { toslug } from "@/lib/utils";

interface ListProductProps {
  title: String;
}

const ListProducts = ({ title }: ListProductProps) => {
  const [products, setProducts] = useState<ProductTypes[]>([])
  const slug = toslug(title)


  const getListProductBySlug = async () => {
    try {
      const res = await fetch(`http://api.dienmaygiatotsaigon.vn/api/v1/product/${slug}`, {
        method: "GET"
      })
      const data = await res.json()
      console.log("data lish", data);
      
      setProducts(data.products)
    } catch (error) {

    }
  }
  useEffect(() => {
    getListProductBySlug()
  }, [])
  return (
    <div className="w-full h-auto flex flex-col gap-2 bg-transparent">
      <div className="flex justify-between items-center">
        <h2 className="bg-gradient-to-br from-[#fe0000] via-[#ee5757] to-white uppercase text-sm font-bold border rounded-2xl text-white p-2">
          {title}
        </h2>
        <Link href="#" className="uppercase text-sm text-[#fe0000]">
          xem tất cả {">"}
          {">"}
        </Link>
      </div>
      <div className="  w-full  shadow-2xl  overflow-hidden rounded-2xl ">
        <Carousel
          opts={{
            align: "start",
          }}
          className=""
        >
          <CarouselContent>
            {products.map((item, index) => (
              <CarouselItem
                key={index}
                className="max-sm:basis-1/2 max-md:basis-1/3 max-lg:basis-1/4 lg:basis-1/5 flex justify-around"
              >
                <ProductCart name={item.name} slug={item.slug} image={item.images[0]} price={item.price} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ListProducts;
