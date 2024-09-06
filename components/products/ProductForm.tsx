// "use client";
// import { Separator } from "@/components/ui/separator";

// import React, { useState } from "react";
// import { any, array, string, z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { Textarea } from "../ui/textarea";
// const formSchema = z.object({
//   name: z.string().min(2).max(50),
//   //   original: z.string().min(2).max(50),
//   //   brands: z.string().min(2).max(50),
//   //   size: z.string().min(2).max(20),
//   //   color: z.string().min(2).max(20),
//   //   guarantee: z.string().min(2).max(20),
//   price: z.coerce.number().min(0.1),
//   description: z.string().min(2).max(50),
//   //   categories: string().min(2).max(20),
//   images: z.array(z.any()).optional(),
//   quantity: z.coerce.number().min(1),
//   //   salePrice: z.coerce.number().min(0.1),
// });

// const ProductForm = () => {
//   const [imagePreviews, setImagePreviews] = useState<string[]>([]);

//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",

//       price: 0.1,
//       description: "",
//       images: [],
//       quantity: 1,
//       //   categories: "",
//       //   original: "",
//       //   brands: "",
//       //   size: "",
//       //   color: "",
//       //   guarantee: "",
//       //   salePrice: 0.1,
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     console.log("data", values);
    
//     try {
//       const res = await fetch("http://localhost:1999/api/v1/product", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Add Content-Type header
//         },
//         body: JSON.stringify(values),
//       });
//       if (res.ok) {
//         setLoading(true);
//         toast.success("Thêm sản phẩm mới thành công!");
//         router.push("/quantri/sanpham");
//       } else {
//         setLoading(true);
//         toast.error("Thêm sản phẩm thất bại! Thử lại");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
//     if (e.target.files) {
//       const filesArray = Array.from(e.target.files);
//       form.setValue("images", filesArray);
//       const previewUrls = filesArray.map((file) => URL.createObjectURL(file));
//       setImagePreviews(previewUrls);
//     }
//   }

//   return (
//     <div className="px-10 py-5">
//       <div className="flex justify-between items-center">
//         <h2 className="text-3xl leading-[100%] font-bold">Thêm danh mục</h2>
//       </div>
//       <Separator className=" my-4" />

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Tên danh mục</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="Nhập tên danh mục muốn tạo vd: tủ lạnh,máy giặt,..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Mô tả sản phẩm</FormLabel>
//                 <FormControl>
//                   <Textarea placeholder="Mô tả..." {...field} rows={5} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="images"
//             render={() => (
//               <FormItem>
//                 <FormLabel>Hình ảnh</FormLabel>
//                 <FormControl>
//                   <Input type="file" multiple onChange={handleFileChange} />
//                 </FormControl>
//                 <FormDescription>
//                   Bạn có thể tải lên nhiều hình ảnh.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <div className="grid grid-cols-3 gap-4 mt-4">
//             {imagePreviews.map((url, index) => (
//               <div key={index} className="border p-2">
//                 <img
//                   src={url}
//                   alt={`Preview ${index + 1}`}
//                   className="w-full h-auto"
//                 />
//               </div>
//             ))}
//           </div>

//           <FormField
//             control={form.control}
//             name="quantity"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Số lượng</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Nhập vào số lượng sản phẩm." {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="price"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Giá cả</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Nhập vào giá sản phẩm." {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   This is your public display name.
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default ProductForm;
