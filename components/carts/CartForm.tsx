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
    address: z.string().min(2).max(100),
    phone: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
});
const cartItems = [
    { name: 'Google Tivi Sony HD 32 inch KD-32W830K', price: 7490000 },

];

const CartForm = () => {
    // const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    // console.log("image preview: ", imagePreviews);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            address: "",
            phone: "",
            email: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log({
            ...values,
            cartItems
        });
        // 
    };


    return (
        <div className="lg:px-10 py-5">
            <div className="flex justify-between items-center">
                <h2 className="lg:text-xl text-base leading-[100%] font-bold text-[#fe0000] uppercase">Thông tin thanh toán</h2>
            </div>
            <Separator className=" my-4" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Họ và tên</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Họ và tên"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Địa chỉ</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Địa chỉ"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Số điện thoại</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Số điện thoại"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Địa chỉ email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Địa chỉ email"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Xác nhận</Button>
                </form>
            </Form>
        </div>
    );
};

export default CartForm;
