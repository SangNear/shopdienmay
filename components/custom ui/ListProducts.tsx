"use client";
import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { toslug } from "@/lib/utils";

interface ListProductProps {
  title: string;
}

const   ListProducts = ({ title }: ListProductProps) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const slug = toslug(title);

  const getListProductBySlug = async () => {
    try {
      setLoading(true); // Bắt đầu loading
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/product/${slug}`, {
        method: "GET",
      });
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    } finally {
      setLoading(false); // Kết thúc loading
    }
  };

  useEffect(() => {
    getListProductBySlug();
  }, []);

  return (
    <div className="w-full h-auto flex flex-col gap-2 bg-transparent relative">
      {/* Thanh loading */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-blue-600 animate-pulse transition-all duration-300" />
      )}

      <div className="flex justify-between items-center">
        <h2 className="bg-gradient-to-br from-[#fe0000] via-[#ee5757] to-white uppercase text-sm font-bold border rounded-2xl text-white p-2">
          {title}
        </h2>
        <Link href={`/danh-sach-san-pham/${slug}`} className="uppercase text-sm text-[#fe0000]">
          xem tất cả {">"}{">"}
        </Link>
      </div>

      <div className="w-full shadow-2xl overflow-hidden rounded-2xl">
        <Carousel opts={{ align: "start" }} className="py-2">
          <CarouselContent>
            {products.map((item, index) => (
              <CarouselItem key={index} className="max-sm:basis-1/2 max-md:basis-1/3 max-lg:basis-1/4 lg:basis-1/5 flex justify-around">
                <ProductCart name={item.name} slug={item.slug} image={item.images[0]} price={item.price} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[50%] left-0" />
          <CarouselNext className="absolute top-[50%] right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default ListProducts;
