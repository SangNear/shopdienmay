// components/ProductDetailClient.tsx
"use client";
import { useEffect, useState, Key, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { CartContext } from "@/lib/context/cartContext/ContextProvider";
import { calculateIncreasedValue, formatCurrency } from "@/lib/utils";
import { ShoppingCart, Receipt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@mui/material/Rating";

// Define Product Type
// interface ProductTypes {
//   name: string;
//   price: number;
//   brands: string;
//   original: string;
//   description: string;
//   images: string[];
// }

const ProductDetailClient = ({ productSlug }: { productSlug: string }) => {
  const { dispatch } = useContext(CartContext);
  const [product, setProduct] = useState<ProductTypes | null>(null);
  const [imageSlider, setImageSlider] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const getDetailProduct = async () => {
    try {
      const res = await fetch(
        `http://api.dienmaygiatotsaigon.vn/api/v1/product/detail/${productSlug}`,
        { method: "GET" }
      );
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Failed to load product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailProduct();
  }, [productSlug]);

  if (loading) {
    return <Skeleton className="w-full h-[400px]" />;
  }

  return (
    <div className="lg:px-20 max-md:px-2 my-5">
      <div className="flex justify-between h-full max-md:flex-col gap-5 bg-white">
        <div className="w-full">
          {product && (
            <>
              <Image
                id="image-show"
                src={`${process.env.NEXT_PUBLIC_URL_PRODUCTION}${product?.images[imageSlider]}`}
                alt="product image"
                width={700}
                height={100}
                className="h-[400px] max-md:h-[200px] object-contain mb-5"
              />
              <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                  {product.images.map((image: any, index: any) => (
                    <CarouselItem
                      key={index}
                      className="max-sm:basis-1/2 max-md:basis-1/3 max-lg:basis-1/4 lg:basis-1/3 flex justify-around"
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL_PRODUCTION}${image}`}
                        alt="product carousel image"
                        width={100}
                        height={50}
                        className={`cursor-pointer object-contain ${index === imageSlider ? "" : "opacity-45"
                          }`}
                        onClick={() => setImageSlider(index)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </div>
        <div className="w-full flex flex-col gap-4 items-start justify-start h-full mt-12">
          {product && (
            <>
              <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
              <div className="py-3 w-full flex items-center gap-2">
                <p>Đánh giá: </p>
                <Rating name="no-value" value={null} />
              </div>
              <p>
                Thương hiệu: <span className="text-[#fe0000]">{product.brands}</span>
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
              <div className="flex items-center gap-4 w-full">
                <Button
                  className="bg-[#fe0000] text-white flex gap-3 items-center"
                  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
                >
                  <ShoppingCart /> Thêm vào giỏ hàng
                </Button>
                <Link href="/giohang">
                  <Button className="w-full bg-[#fe0000] text-white flex gap-3 items-center">
                    <Receipt /> Mua ngay
                  </Button>
                </Link>
              </div>
            </>
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

export default ProductDetailClient;
