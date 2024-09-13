"use client";
import { Separator } from "@/components/ui/separator";
import React, { useContext, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { CartContext } from "@/lib/context/cartContext/ContextProvider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Import RadioGroup components
import Loading from "../custom ui/Loading";

// Extend form schema to include paymentMethod
const formSchema = z.object({
    customerName: z.string().min(2).max(50),
    addr: z.string().min(2).max(100),
    phone: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    paymentMethod: z.enum(["cod"]), // Added a paymentMethod field
});

const CartForm = () => {
    const { products } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            customerName: "",
            addr: "",
            phone: "",
            email: "",
            paymentMethod: "cod" // Default value for payment method
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        const totalPrice = products.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        const orderData = {
            ...values,
            products,
            totalPrice,
        };
        console.log("client order:", orderData);


        try {
            if (products.length < 1) {
                return alert("Không có sản phẩm nào trong giỏ hàng")
            }

            // API call to create order
            const response = await fetch("http://localhost:1999/api/v1/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Order created:", data);
                Cookies.set('isPaymentComplete', 'true');
                setLoading(false)
                router.push("/checkout"); // Example redirect after successful order
            } else {
                const errorData = await response.json();
                console.error("Error creating order:", errorData);
                setLoading(false)
                alert("Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("API call error:", error);
            alert("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="lg:px-10 py-5">

            <div className="flex justify-between items-center">
                <h2 className="lg:text-xl text-base leading-[100%] font-bold text-[#fe0000] uppercase">Thông tin thanh toán</h2>
            </div>
            <Separator className="my-4" />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="customerName"
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
                        name="addr"
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

                    {/* Payment Method Field */}
                    <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phương thức thanh toán</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <FormItem className="flex items-center space-x-3">
                                            <RadioGroupItem value="cod" id="cod" checked />
                                            <FormLabel htmlFor="cod">Thanh toán khi nhận hàng</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit">Xác nhận</Button>
                    {loading ? <Loading /> : ""}
                </form>
            </Form>
        </div>
    );
};

export default CartForm;
