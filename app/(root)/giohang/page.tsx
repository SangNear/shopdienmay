"use client";
import CartForm from "@/components/carts/CartForm";
import { CartContext } from "@/lib/context/cartContext/ContextProvider";
import { formatCurrency } from "@/lib/utils";
import React, { useContext } from "react";



// Giohang component
const Giohang = () => {
  // Access the cart and dispatch from CartContext using the correct type
  const { products } = useContext(CartContext);

  // Calculate total price
  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="lg:px-20 max-lg:px-2 w-full my-5 flex justify-between max-lg:flex-col gap-3">
      <div className="border-4 border-[#fe0000] w-full lg:p-5 max-lg:border-none">
        <h2 className="lg:text-xl text-base leading-[100%] font-bold text-green-400 uppercase">
          Thông tin đơn hàng
        </h2>
        {products && products.length > 0 ? (
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="text-left border-b border-gray-300 py-2">
                  Tên sản phẩm
                </th>
                <th className="text-right border-b border-gray-300 py-2">
                  Tạm tính
                </th>
                <th className="text-right border-b border-gray-300 py-2">
                  Số lượng
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 text-xs">{item.name}</td>
                  <td className="text-right py-2 text-sm">
                    {formatCurrency(item.price * item.quantity)}
                  </td>
                  <td className="py-2 text-xs text-right">{item.quantity}</td>
                </tr>
              ))}
              <tr>
                <td className="font-bold py-2">Tổng cộng</td>
                <td className="text-right font-bold py-2 text-sm">
                  {totalPrice.toLocaleString("vi-VN")}₫
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h2>Chưa có sản phẩm nào trong giỏ hàng</h2>
        )}
      </div>
      <div className="w-full">
        <CartForm />
      </div>
    </div>
  );
};

export default Giohang;
