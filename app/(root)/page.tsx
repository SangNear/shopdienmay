import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import MenuMobile from "@/components/MenuMobile";
import bannerTitle from "../../public/assets/banner/title-banner.jpg";
import Image from "next/image";
import ProductCart from "@/components/ProductCart";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex ">
        <Banner />
      </div>

      <div className="flex flex-col   ">
        <Image
          src={bannerTitle}
          className="w-full object-cover max-sm:px-2 mt-2 max-sm:rounded-t-2xl"
          alt="banner"
        />
        <div className="max-md:px-2 lg:px-10 w-full  shadow-2xl  overflow-hidden">
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
      </div>
    </div>
  );
}
