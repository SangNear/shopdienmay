import Banner from "@/components/Banner";
import bannerTitle from "../../public/assets/banner/title-banner.jpg";
import Image from "next/image";
import ProductCart from "@/components/ProductCart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import SpeedDialComponent from "@/components/SpeedDial";
import ListProducts from "@/components/ListProducts";

export default function Home() {
  return (
    <div className="flex flex-col lg:px-10  lg:p-10">
      <div className="flex rounded-2xl">
        <Banner />
      </div>

      <div className="flex flex-col justify-between   ">
        <Image
          src={bannerTitle}
          className="w-full object-cover  mt-2 max-sm:rounded-t-2xl"
          alt="banner"
        />
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className=" max-sm:rounded-2xl bg-[#fe0000] max-md mt-2 rounded-2xl mb-4">
          <h2 className="text-3xl font-bold text-white text-center mt-2">
            Ưu đãi dành cho bạn
          </h2>
          <Separator />
          <div className="mt-2 flex flex-wrap justify-center gap-2 m-auto items-center  pb-5 ">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
        <div className="w-full h-auto bg-transparent max-md:px-2 mb-3">
          <ListProducts title="tủ lạnh" />
        </div>
        <div className="w-full h-auto bg-transparent max-md:px-2 mb-3">
          <ListProducts title="máy giặt" />
        </div>
        <div className="w-full h-auto bg-transparent max-md:px-2 mb-3">
          <ListProducts title="máy lạnh" />
        </div>
      </div>
      <SpeedDialComponent />
    </div>
  );
}
