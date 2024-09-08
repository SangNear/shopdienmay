"use client";
import ImageStock from "@/components/custom ui/ImageStock";
import ProductCart from "@/components/custom ui/ProductCart";
import SystemStock from "@/components/custom ui/SystemStock";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { menuBrandFilter } from "@/constants";

import { convertSlugToString, toslug } from "@/lib/utils";

import Link from "next/link";

import React, { useState } from "react";
import { UrlObject } from "url";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const DanhSachSanPham = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const menuTitle = convertSlugToString(slug);
  const [selectedValue, setSelectedValue] = useState("default");
  console.log("value radio", selectedValue);
  const [page, setPage] = useState(1);
  const totalPage = 4;
  // const listProduct = await getAllProductBySlug(slug)
  return (
    <div className="lg:px-20 max-md:px-2 w-full">
      {/* top */}
      <div className="flex flex-col w-full gap-5">
        <div className="h-auto w-full bg-white p-4 my-5 rounded-xl">
          <h2 className="text-[#3f3f3f] font-bold uppercase">
            Top 10 {menuTitle} được yêu thích nhất
          </h2>

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

      {/* mid */}
      {slug.includes("tivi") || slug.includes("tv") ? (
        <div className="flex flex-col gap-2 bg-white w-full shadow-xl rounded-xl p-4 max-sm:p-2">
          <div className="flex gap-3">
            <span className="font-bold">Xếp theo:</span>
            <RadioGroup
              className="flex gap-4"
              value={selectedValue}
              onValueChange={setSelectedValue}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="default"
                  id="r1"
                  className="text-[#fe0000]"
                />
                <Label className="text-md" htmlFor="r1">
                  Mới nhất
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="comfortable"
                  id="r2"
                  className="text-[#fe0000]"
                />
                <Label className="text-md" htmlFor="r2">
                  Giá từ thấp đến cao
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="compact"
                  id="r3"
                  className="text-[#fe0000]"
                />
                <Label className="text-md" htmlFor="r3">
                  Giá từ cao đến thấp
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <span className="font-bold">Thương hiệu: </span>

            {menuBrandFilter.map((item) => {
              const route = toslug(item);
              const active = route === slug;
              return (
                <Link
                  href={`/danh-sach-san-pham/${route as unknown as UrlObject}`}
                  key={item}
                  className={`py-2 px-4 border rounded-lg max-sm:text-sm ${
                    active ? "bg-[#fe0000] text-white" : ""
                  } `}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* list */}

      <div className="w-full h-auto flex flex-wrap justify-between gap-2 my-5 rounded-xl bg-white py-4 max-sm:justify-evenly ">
        {Array.from({ length: 30 }).map((i, inde) => (
          <Link
            href="/san-pham/Smart-Tivi-Samsung-4K-Crystal-UHD-70-inch-UA70DU7000"
            key={inde}
          >
            <ProductCart />
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-end items-baseline w-full">
        <p>Trang hiện tại {page}</p>
        <Pagination>
          <PaginationContent>
            <PaginationItem
              className="cursor-pointer"
              onClick={() => setPage(page - 1)}
            >
              <PaginationPrevious />
            </PaginationItem>
            {Array.from({ length: totalPage }).map((_, index) => (
              <PaginationItem
                key={index}
                onClick={() => setPage(index + 1)}
                className="py-1 px-3 rounded-xl cursor-pointer shadow-xl text-center flex items-center border"
              >
                {index + 1}
              </PaginationItem>
            ))}
            <PaginationItem
              className="cursor-pointer"
              onClick={() => setPage(page + 1)}
            >
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <SystemStock />
    </div>
  );
};

export default DanhSachSanPham;
