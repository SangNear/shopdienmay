import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

interface DeleteProps {
  id: string;
  item: string;
}

const Delete = ({ id, item }: DeleteProps) => {
  const [loading, setLoading] = useState(false);
  const itemType = item === "products" ? "sanpham" : "danhmuc";
  const itemTypeApi = item === "products" ? "product" : "category";
  const onDelete = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://shopdienmay-api.vercel.app/api/v1/${itemTypeApi}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLoading(false);
        window.location.href = `/quantri/${itemType}`;
        toast.success(`${item} deleted`);
      }
    } catch (error) {}
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#fe0000] text-white text-base">
          <Trash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Bạn có chắc chắn muốn xóa {item === "products"? "sản phẩm" : "danh mục"} này không?</AlertDialogTitle>
          <AlertDialogDescription>
            Sau khi xóa  {item === "products"? "sản phẩm" : "danh mục"} này sẽ không thể khôi phục
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#fe0000] text-white"
            onClick={onDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
