import React from "react";

import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

import tv2 from "../../public/assets/products/tv2.jpg";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";

const ProductCart = ({ name, slug, image, price }: ProductCartProps) => {
  return (
    // Smart-Tivi-Samsung-4K-Crystal-UHD-70-inch-UA70DU7000
    <Link
      href={`/san-pham/${slug ? slug : "Smart-Tivi-Samsung-4K-Crystal-UHD-70-inch-UA70DU7000"}`}
      className="w-[165px] lg:w-[220px] h-[315px] rounded-xl shadow-xl bg-white flex flex-col justify-between relative">
      <span className="text-[#fe0000] absolute text-xs top-1 right-1 px-1 rounded-xl border border-[#fe0000] w-fit  ">trả góp 0% </span>
      <div className="p-2 w-full mt-7 ">
        <Image
          src={image ? `http://api.dienmaygiatotsaigon.vn/images/${image}` : tv2}
          priority
          width={9000}
          height={50}
          alt="card"
          className="w-[100%] object-contain h-40 transform transition-transform duration-300 hover:-translate-y-2"

        />
      </div>
      <div className="p-2 w-full">
        <h4 className="text-sm text-black">

          {name ? name : "Smart Tivi QLED Cong Samsung 4K 55 Inch 55Q8CNA"}
        </h4>
      </div>
      <div className="flex-col gap-2 p-2">
        <span className=" w-full text-[#fe0000]">{price ? formatCurrency(price) : "13,990,000đ"} </span>
        <div className="flex gap-2 ">
          <CheckIcon className="text-xs text-[#78c63b]" />
          <span className="text-xs text-[#78c63b]">Còn hàng</span>
        </div>
      </div>
    </Link>
    
  );
};

export default ProductCart;
