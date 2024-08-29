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
import ImageStock from "@/components/ImageStock";
import { maygiatImageStock, maylanhImageStock, tiviImageStock, tulanhImageStock } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col lg:px-20">
      <div className="flex rounded-2xl">
        <Banner />
      </div>

      <div className="flex flex-col justify-between   ">
        <h2 className="text-2xl font-bold uppercase text-white text-center mt-2 p-2 bg-[#fe0000]">
          top sản phẩm nổi bật
        </h2>
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
          <h2 className="text-2xl uppercase font-bold text-white text-center mt-2 ">
            Ưu đãi dành cho bạn
          </h2>
          <Separator />
          <div className="mt-2 flex flex-wrap justify-evenly gap-2 m-auto items-center  pb-5 ">
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
        <div className="w-full h-auto">
          <h2 className="text-2xl font-bold uppercase text-white text-center mt-2 p-2 bg-[#fe0000]">
            Hệ thống kho hàng
          </h2>
          <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 justify-items-center m-auto">
            <ImageStock title="tủ lạnh" imageStock={tulanhImageStock} />
            <ImageStock title="máy lạnh" imageStock={maylanhImageStock} />
            <ImageStock title="máy giặt" imageStock={maygiatImageStock} />
            <ImageStock title="ti vi" imageStock={tiviImageStock} />
          </div>
        </div>
      </div>
      <SpeedDialComponent />
    </div>
  );
}
