import CartForm from '@/components/carts/CartForm';
import { formatCurrency } from '@/lib/utils';
import React from 'react';

const Giohang = () => {
  // Example list of products in the cart
  const cartItems = [
    { name: 'Google Tivi Sony HD 32 inch KD-32W830K', price: 7490000 },

  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='lg:px-20 max-md:px-2 w-full my-5 flex justify-between'>
      <div className='w-full'>
        <CartForm />
      </div>

      <div className='border-4 border-[#fe0000] w-full p-5'>
        <h2 className='text-xl leading-[100%] font-bold text-green-400 uppercase'>Thông tin đơn hàng</h2>
        <table className='w-full mt-4'>
          <thead>
            <tr>
              <th className='text-left border-b border-gray-300 py-2'>Tên sản phẩm</th>
              <th className='text-right border-b border-gray-300 py-2'>Tạm tính</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className='py-2'>{item.name}</td>
                <td className='text-right py-2'>{formatCurrency(item.price)}</td>
              </tr>
            ))}
            <tr>
              <td className='font-bold py-2'>Tổng cộng</td>
              <td className='text-right font-bold py-2'>{totalPrice.toLocaleString('vi-VN')}₫</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Giohang;
