"use client";
import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/products/ProductColumn";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getProducts = async (page = 1) => {
    try {
      const res = await fetch(
        `http://api.dienmaygiatotsaigon.vn/api/v1/product?page=${page}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      const { products: newProducts, totalPages, currentPage } = data;

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setTotalPages(totalPages);
      setCurrentPage(currentPage);
      setLoading(false);
      setIsLoadingMore(false);
    } catch (error) {
      setLoading(false);
      setIsLoadingMore(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setIsLoadingMore(true);
      getProducts(currentPage + 1);
    }
  };

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
        {loading && <p>Loading products...</p>}
      </div>

      {!loading && currentPage < totalPages && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="bg-[#fe0000] text-white hover:bg-white hover:text-[#fe0000]"
          >
            {isLoadingMore ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
