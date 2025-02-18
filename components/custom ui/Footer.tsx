import React from "react";
import Service from "./Service";
import Cusregis from "./Cusregis";
import MenuFooter from "./MenuFooter";
import MenuFooter2 from "./MenuFooter2";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import cerr from "../../public/assets/certifacation.jpg";
const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col pb-16">
      <div className="w-full">
        <Service />
      </div>
      <div className="w-full bg-[#fe0000]">
        <Cusregis />
      </div>
      <div className="w-full h-auto lg:hidden">
        <MenuFooter />
      </div>
      <div className="w-full h-auto max-lg:hidden">
        <MenuFooter2 />
      </div>
      <div className="w-full flex flex-col gap-2 lg:px-10 mt-3 max-md:px-2">
        <h3 className="text-2xl text-[#fe0000] font-semibold">Cửa hàng</h3>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31349.539781250696!2d106.63224879808536!3d10.834829753280001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529aa0f7513ed%3A0xd054812703654f77!2zS0RDIENpdHlsYW5kIFBhcmsgSGlsbHMsIHBoxrDhu51uZyAxMCwgR8OyIFbhuqVwLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1739877330962!5m2!1svi!2s"
          height="450"
          loading="lazy"
          className="rounded-lg w-full "
        ></iframe>
        <span className="text-sm text-gray-500">
          {" "}
          Coppyright © 2024 bản quyền thuộc shop điện máy 
        </span>
         {/* <span className="capitalize text-sm text-gray-500">
          {" "}
          địa chỉ: 72 - 74 phổ quang tân bình, Tp Hồ Chí Minh
        </span> */}
        <span className="capitalize text-sm text-gray-500">
          {" "}
          thời gian phục vụ: 8:00 - 18:00 (từ Thứ 2 đến Chủ Nhật)
        </span>
        <div className="flex gap-5 items-center max-md:justify-between">
          <div className="flex gap-5">
            <FacebookIcon className="text-4xl text-blue-500" />
            <YouTubeIcon className="text-4xl text-[#fe0000]" />
            <InstagramIcon className="text-4xl" />
          </div>
          <Image src={cerr} alt="cerr" className="w-40 h-14" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
