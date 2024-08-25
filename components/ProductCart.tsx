import React from "react";

import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

import tv2 from "../public/assets/products/tv2.jpg";
const ProductCart = () => {
  return (
    <div className="w-[170px] lg:w-[230px] h-[315px] rounded-xl shadow-xl bg-white flex flex-col justify-between">
      <div className="p-2 w-full ">
        <Image src={tv2} alt="card" className="w-full h-40 transform transition-transform duration-300 hover:-translate-y-2" />
      </div>
      <div className="p-2 w-full">
        <h4 className="text-sm text-black">
          Smart Tivi QLED Cong Samsung 4K 55 Inch 55Q8CNA
        </h4>
      </div>
      <div className="flex-col gap-2 p-2">
        <span className=" w-full text-[#fe0000]">13,990,000đ</span>
        <div className="flex gap-2 ">
          <CheckIcon className="text-xs text-[#78c63b]" />
          <span className="text-xs text-[#78c63b]">Còn hàng</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
