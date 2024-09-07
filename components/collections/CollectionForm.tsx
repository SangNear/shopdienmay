"use client";
import { Separator } from "@/components/ui/separator";

import React, { useState } from "react";
import { any, array, string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(2).max(50),
});

const CollectionForm = () => {
  // const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  // console.log("image preview: ", imagePreviews);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      const res = await fetch("https://shopdienmay-api.vercel.app/api/v1/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add Content-Type header
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setLoading(true);
        toast.success("Thêm danh mục mới thành công!");
        router.push("/quantri/danhmuc");
      } else {
        setLoading(true);
        toast.error("Thêm danh mục thất bại! Thử lại");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   if (e.target.files) {
  //     const filesArray = Array.from(e.target.files);
  //     form.setValue("image", filesArray); // Cập nhật giá trị form với các file đã chọn

  //     // Tạo URL tạm thời để hiển thị preview của các ảnh
  //     const previewUrls = filesArray.map((file) => URL.createObjectURL(file));
  //     setImagePreviews(previewUrls); // Cập nhật state với URL tạm thời
  //   }
  // }

  return (
    <div className="px-10 py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl leading-[100%] font-bold">Thêm danh mục</h2>
      </div>
      <Separator className=" my-4" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên danh mục</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập tên danh mục muốn tạo vd: tủ lạnh,máy giặt,..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Hình ảnh</FormLabel>
                <FormControl>
                  <Input type="file" multiple onChange={handleFileChange} />
                </FormControl>
                <FormDescription>
                  Bạn có thể tải lên nhiều hình ảnh.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Hiển thị preview của các ảnh đã chọn */}
          {/* <div className="grid grid-cols-3 gap-4 mt-4">
            {imagePreviews.map((url, index) => (
              <div key={index} className="border p-2">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div> */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CollectionForm;
