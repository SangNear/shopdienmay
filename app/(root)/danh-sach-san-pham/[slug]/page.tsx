import ImageStock from "@/components/custom ui/ImageStock";
import ProductCart from "@/components/custom ui/ProductCart";
import SystemStock from "@/components/custom ui/SystemStock";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup } from "@/components/ui/toggle-group";
import {
  maygiatImageStock,
  maylanhImageStock,
  menuBrandFilter,
  menuNavLinks,
  tiviImageStock,
  tulanhImageStock,
} from "@/constants";
import { getAllProductBySlug } from "@/lib/actions/actions";
import { convertSlugToString, toslug } from "@/lib/utils";
import { ToggleGroupItem } from "@radix-ui/react-toggle-group";
import Link from "next/link";

import React from "react";
import { UrlObject } from "url";

const DanhSachSanPham = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const menuTitle = convertSlugToString(slug);

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
        {Array.from({ length: 30 }).map(() => (
          <ProductCart />
        ))}
      </div>
      <SystemStock />
    </div>
  );
};

export default DanhSachSanPham;
