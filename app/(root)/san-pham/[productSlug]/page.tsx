"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  calculateIncreasedValue,
  convertSlugToString,
  formatCurrency,
} from "@/lib/utils";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Receipt, ShoppingCart } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Key, useEffect, useState } from "react";
// Import Skeleton from Shadcn

const ChiTietSanPham = () => {
  const [product, setProduct] = useState<ProductTypes | null>(null);
  const [imageSlider, setImageSlider] = useState<Key | null | undefined>(0);
  const pathName = usePathname();
  const slug = pathName.split("/").filter(Boolean).pop();

  const getDetailProduct = async () => {
    try {
      const res = await fetch(
        "https://shopdienmay-api.vercel.app/api/v1/product/detail/google-tivi-mini-led-sony-4k-85-inch-k-85xr90",
        {
          method: "GET",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      }
    } catch (error) { }
  };

  useEffect(() => {
    getDetailProduct();
  }, []);

  return (

    <div className="lg:px-20 max-md:px-2  my-5">
      <div className=" flex justify-between h-full max-md:flex-col gap-5 bg-white">
        <div className="">
          {product ? (
            <>
              <Image
                id="image-show"
                src={`${process.env.NEXT_PUBLIC_URL_LOCAL || process.env.NEXT_PUBLIC_URL_PRODUCTION}${product?.images[imageSlider]}`}
                // src={process.env.NEXT_PUBLIC_URL_LOCAL + `/` +product?.images[imageSlider]}
                alt="image-show"
                width={900}
                height={400}
                className="w-full h-[400px] object-contain"
              />
              <Carousel
                opts={{
                  align: "start",
                }}
                className=""
              >
                <CarouselContent>
                  {product.images.map(
                    (image: string | StaticImport, index: React.Key | null | undefined) => (
                      <CarouselItem
                        key={index}
                        className="max-sm:basis-1/2 max-md:basis-1/3 max-lg:basis-1/4 lg:basis-1/3 flex justify-around"
                      >
                        <Image
                          key={index}
                          src={`${process.env.NEXT_PUBLIC_URL_LOCAL || process.env.NEXT_PUBLIC_URL_PRODUCTION}${image}`} // Concatenate NEXT_PUBLIC_URL_LOCAL with image filename
                          alt="images"
                          width={100}
                          height={50}
                          className={`cursor-pointer object-contain ${index === imageSlider ? "" : "opacity-45"
                            }`}
                          onClick={() => setImageSlider(index)}
                        />
                      </CarouselItem>
                    )
                  )}
                </CarouselContent>
              </Carousel>
              <div className="flex gap-2 items-center justify-center"></div>
            </>
          ) : (
            <Skeleton className="w-full h-[400px]" />
          )}
        </div>
        <div className="w-full flex flex-col gap-4 items-start justify-start h-full mt-12">
          {product ? (
            <>
              <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
              <div className="py-3  w-full flex items-center gap-2">
                <p>Đánh giá: </p>
                <Rating name="no-value" value={null} />
              </div>

              <p>
                Thương hiệu:{" "}
                <span className="text-[#fe0000]">{product.brands}</span>
              </p>
              <p>
                Xuất xứ: <span className="font-bold">{product.original}</span>
              </p>
              <p>
                Giá của hãng:{" "}
                <span className="text-[#fe0000] font-semibold">
                  {calculateIncreasedValue(product.price)}
                </span>
              </p>
              <p>
                Giá:{" "}
                <span className="text-[#fe0000] font-semibold">
                  {formatCurrency(product.price)}
                </span>
              </p>
              <p className="border p-1 border-[#fe0000] text-sm text-[#fe0000] rounded-md">
                Trả góp 0%
              </p>
              <p>
                Tình trạng sản phẩm:{" "}
                <span className="font-bold text-green-600">Còn hàng</span>
              </p>
              <div className="flex items-center gap-4 w-full">
                <Button className=" bg-[#fe0000] text-white flex gap-3 items-center">
                  <ShoppingCart />
                  Thêm vào giỏ hàng
                </Button>
                <Link href="/giohang" className="">
                  <Button className="w-full bg-[#fe0000] text-white flex gap-3 items-center">
                    <Receipt /> Mua ngay
                  </Button>
                </Link>

              </div>
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <Skeleton className="w-full h-[30px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-full h-[20px]" />
              <Skeleton className="w-full h-[50px]" />
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-auto mt-6">
        <div className="h-[50px] w-full bg-[#fe0000] text-white flex justify-center items-center text-3xl font-bold">
          Mô tả sản phẩm
        </div>
        {product ? (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: product.description.replace(
                /<img /g,
                '<img class="mx-auto" '
              ),
            }}
          />
        ) : (
          <Skeleton className="w-full h-[200px]" />
        )}
      </div>
    </div>
  );
};

export default ChiTietSanPham;
