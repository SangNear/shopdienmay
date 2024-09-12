import Link from "next/link";
import React from "react";

const MenuFooter2 = () => {
  return (
    <div className="w-full flex  justify-between items-center px-10 pt-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold uppercase mb-2">thông tin công ty</h3>
        <div className="flex flex-col gap-2">
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Giới thiệu công ty
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Tin tức
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Thông tin liên hệ
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Nội quy shop
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold uppercase mb-2">Hỗ trợ khách hàng</h3>
        <div className="flex flex-col gap-2">
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Hướng dẫn mua hàng online
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Giới thiệu công ty
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Chính sách trả góp
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Yêu cầu báo giá
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold uppercase mb-2">Chính sách chung</h3>
        <div className="flex flex-col gap-2">
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Chính sách bảo hành
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Chính sách vận chuyển
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Chính sách đổi trả
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Chính sách bảo mật thông tin
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold uppercase mb-2">Thông tin khác</h3>
        <div className="flex flex-col gap-2">
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Tổng đài hỗ trợ miễn phí
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
          ................................
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Email: ................................
          </Link>
          <Link href="#" className="text-sm text-gray-500 hover:text-[#fe0000]">
            Gọi mua bảo hành
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuFooter2;
