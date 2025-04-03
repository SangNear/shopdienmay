"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          credentials: "include"
        }
      );
      const data = await res.json();
      if (res.ok) {
        console.log("data login", data);
        setLoading(false);
        router.push("/quantri/sanpham")
      } else {
        setErrorMessage(
          data.message || "Đăng nhập thất bại! Vui lòng thử lại."
        );
      }
    } catch (error) {
      setErrorMessage("Lỗi kết nối máy chủ, vui lòng thử lại sau!");
      console.error("API call error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen  bg-gradient-to-b from-[rgb(100,217,224)] to-[rgb(81,124,211)] flex items-center justify-center">
      <div className="flex flex-col gap-4 bg-black p-10 rounded-2xl">
        <h1 className="text-2xl text-white mb-10">
          Đăng nhập hệ thống quản trị
        </h1>
        {errorMessage && ( // Hiển thị thông báo lỗi nếu có
          <div className="text-red-500  ">
            {errorMessage}
          </div>
        )}
        <div className="flex flex-col">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="py-4 bg-transparent text-white border-blue-500 h-12 outline-none focus:outline-none focus:ring-0 focus:border-transparent"
                        placeholder="Tên đăng nhập..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="py-4 bg-transparent text-white border-blue-500 h-12"
                        placeholder="Mật khẩu..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Đăng nhập</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
