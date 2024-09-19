"use client";
import { Separator } from "@/components/ui/separator";

import React, { useEffect, useState } from "react";
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
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tiptap from "../custom ui/Tiptap";
import { Switch } from "../ui/switch";
const formSchema = z.object({
  name: z.string().min(2).max(50),
  original: z.string(),
  brands: z.string(),
  //   size: z.string().min(2).max(20),
  //   color: z.string().min(2).max(20),
  //   guarantee: z.string().min(2).max(20),
  price: z.coerce.number().min(0.1),
  description: z.string().min(2),
  categories: string(),
  images: z.array(z.any()).optional(),
  quantity: z.coerce.number().min(1),
  specials: z.boolean()
  //   salePrice: z.coerce.number().min(0.1),
});

const ProductForm = () => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [collection, setCollection] = useState<CollectionsTypes[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",

      price: 0.1,
      description: "",
      images: [],
      quantity: 1,
      categories: "",
      original: "",
      brands: "",
      specials: false
      //   size: "",
      //   color: "",
      //   guarantee: "",
      //   salePrice: 0.1,
    },
  });

  const getCollection = async () => {
    try {
      const res = await fetch(
        "http://api.dienmaygiatotsaigon.vn/api/v1/category",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setCollection(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCollection();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("data form:", values);

    const formData = new FormData();

    console.log("form datra", formData);


    // Append text fields to the FormData
    formData.append("name", values.name);
    formData.append("original", values.original);
    formData.append("description", values.description);
    formData.append("price", values.price.toString());
    formData.append("categories", values.categories);
    formData.append("quantity", values.quantity.toString());
    formData.append("specials", values.specials.toString());
    // Append each image file to FormData as files
    if (values.images && values.images.length > 0) {
      values.images.forEach((file) => {
        formData.append("images", file); // No need for base64, just send files
      });
    }

    try {
      const res = await fetch("http://api.dienmaygiatotsaigon.vn/api/v1/product", {
        method: "POST",
        body: formData, // Send FormData with files and metadata
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        router.push("/quantri/sanpham");
      } else {
        toast.error("Failed to add product. Try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      form.setValue("images", filesArray); // Save files in form state
      const previewUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImagePreviews(previewUrls); // Set previews for UI
    }
  }

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
                <FormLabel>Tên sản phẩm</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập tên sản phẩm! Tên sản phẩm là độc nhất không trùng nhau"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại sản phẩm</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)} // Handle category selection
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chọn 1 trong các danh mục sau..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {collection.map((item) => {
                          return (
                            <SelectItem value={item._id} key={item._id}>
                              {item.name}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
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
          <div className="grid grid-cols-3 gap-4 mt-4">
            {imagePreviews.map((url, index) => (
              <div key={index} className="border p-2">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center max-md: flex-wrap w-full">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số lượng</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nhập vào số lượng sản phẩm."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Giá cả</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập vào giá sản phẩm." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="original"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nguồn gốc</FormLabel>
                  <FormControl>
                    <Input placeholder="Nguồn gốc sản phẩm..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brands"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thương hiệu</FormLabel>
                  <FormControl>
                    <Input placeholder="Thương hiệu sản phẩm..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specials"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center">
                  <FormLabel>Đặc biệt</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả sản phẩm</FormLabel>
                <FormControl>
                  <Tiptap value={field.value} onChange={field.onChange} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center"></div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
