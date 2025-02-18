"use client";
import React, { useEffect } from 'react';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import confetti from "canvas-confetti"; // Import confetti for fireworks effect

const Checkout = () => {
  const router = useRouter();
  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }
  // Trigger fireworks effect
  const launchFireworks = () => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  useEffect(() => {
    launchFireworks(); // Launch fireworks when component is mounted
  }, []);

  const handleContinueShopping = () => {
    Cookies.remove('isPaymentComplete'); // Clear the cookie after checkout
    router.push('/');
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Thank You Message */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Thanh toán thành công!
          </h1>
          <p className="text-gray-500 mb-6">
            Cảm ơn quý khách đã đặt hàng. Chúng tôi sẽ liên hệ với quý khách sớm nhất để xác nhận đơn hàng.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Thông tin đơn hàng:
          </h2>
          <ul className="text-gray-600">
            <li>
              <span className="font-bold">Tên khách hàng:</span> Nguyễn Văn A
            </li>
            <li>
              <span className="font-bold">Số lượng sản phẩm:</span> 3
            </li>
            <li>
              <span className="font-bold">Tổng tiền:</span> 1.200.000 VNĐ
            </li>
            <li>
              <span className="font-bold">Phương thức thanh toán:</span> Thanh toán khi nhận hàng
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleContinueShopping}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
