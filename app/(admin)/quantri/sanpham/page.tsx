"use client";
import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/products/ProductColumn";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://shopdienmay-api.vercel.app/api/v1/product", {
        method: "GET",
      });
      const data = await res.json();
      const { products, totalPages, currentPage, totalProducts } = data;
      setProducts(products);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log("danh mục", products);
  return (
    <div className="px-2 py-2 lg:px-10 lg:py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl leading-[100%] font-bold max-sm:text-lg">
          Danh sách sản phẩm
        </h2>
        <Button className="bg-[#fe0000] text-white hover:bg-white hover:text-[#fe0000]">
          <Link
            href="/quantri/sanpham/themsanpham"
            className="font-bold text-md max-sm:text-xs flex items-center gap-2"
          >
            <Plus />
            <span className="max-md:hidden">Thêm sản phẩm mới</span>
          </Link>
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />

      <div>
        <DataTable columns={columns} data={products} searchKey="name" />
      </div>
    </div>
  );
};

export default page;
