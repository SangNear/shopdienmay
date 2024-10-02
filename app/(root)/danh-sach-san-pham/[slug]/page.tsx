"use client";
import ImageStock from "@/components/custom ui/ImageStock";
import ProductCart from "@/components/custom ui/ProductCart";
import SystemStock from "@/components/custom ui/SystemStock";
import { Button } from "@/components/ui/button";

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
import React, { useEffect, useState } from "react";
import { UrlObject } from "url";


const DanhSachSanPham = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const menuTitle = convertSlugToString(slug);
  const [selectedValue, setSelectedValue] = useState("default");
  const [page, setPage] = useState(1);  // Track the current page
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true); // Track visibility of the "Xem Thêm" button
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const getAllProductBySlug = async (page = 1) => {
    try {
      const res = await fetch(
        `http://api.dienmaygiatotsaigon.vn/api/v1/product/${slug}?page=${page}`,
        { method: "GET" }
      );
      if (res.ok) {
        const data = await res.json();
        // If there are no more products to load, hide the "Xem Thêm" button
        const { products: newProducts, totalPages, currentPage } = data;
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setTotalPages(totalPages);
        setCurrentPage(currentPage);
        setLoading(false);
        setIsLoadingMore(false);
      }
    } catch (error) {
      console.error("Failed to load product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductBySlug();
  }, []); // Fetch products when the page changes

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setIsLoadingMore(true);
      getAllProductBySlug(currentPage + 1);
    }
  };

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
                  className={`py-2 px-4 border rounded-lg max-sm:text-sm ${active ? "bg-[#fe0000] text-white" : ""
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
        {products.map((item, index) => (
          <div key={index}>
            <ProductCart name={item.name} slug={item.slug} image={item.images[0]} price={item.price} />
          </div>
        ))}
      </div>

      {/* "Xem Thêm" Button */}
      {!loading && currentPage < totalPages && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="bg-[#fe0000] text-white hover:bg-white hover:border hover:border-red-500 hover:text-[#fe0000]"
          >
            {isLoadingMore ? "Đang tải..." : "Xem thêm "}
          </Button>
        </div>
      )}

      <SystemStock />
    </div>
  );
};

export default DanhSachSanPham;
