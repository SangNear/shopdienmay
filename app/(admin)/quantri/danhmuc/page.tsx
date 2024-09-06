"use client";
import { columns } from "@/components/collections/CollectionColumn";
import { DataTable } from "@/components/custom ui/DataTable";
import { Separator } from "@/components/ui/separator";
import Button from "@mui/material/Button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);

  const getAllCollection = async () => {
    try {
      const res = await fetch("http://localhost:1999/api/v1/category", {
        method: "GET",
      });
      const data = await res.json();
      setCollection(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getAllCollection();
  }, []);

  console.log("danh mục", collection);

  return (
    <div className="px-2 py-2 lg:px-10 lg:py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl leading-[100%] font-bold max-sm:text-lg">Danh sách danh mục</h2>
        <Button className="bg-[#fe0000] text-white hover:bg-white hover:text-[#fe0000]">
          <Link
            href="/quantri/danhmuc/themdanhmuc"
            className="font-bold text-md max-sm:text-xs flex items-center gap-2"
          >
            <Plus/>
            <span className="max-md:hidden">Thêm danh mục mới</span>
          </Link>
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />

      <div>
        <DataTable columns={columns} data={collection} searchKey="name"  />
      </div>
    </div>
  );
};

export default page;
