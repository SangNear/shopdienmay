import React from "react";
import Service from "./Service";
import Cusregis from "./Cusregis";
import MenuFooter from "./ui/MenuFooter";
import MenuFooter2 from "./MenuFooter2";

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
        <span className="capitalize ">
          {" "}
          địa chỉ: 72 - 74 phổ quang tân bình, Tp Hồ Chí Minh
        </span>
        <span className="capitalize ">
          {" "}
          thời gian phục vụ: 8:00 - 18:00 (từ Thứ 2 đến Chủ Nhật)
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0622825597634!2d106.66586377408785!3d10.80654185863944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529246e26aa69%3A0x7898b80235a26b4f!2zNzIgxJAuIFBo4buVIFF1YW5nLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2skr!4v1724128071784!5m2!1sen!2skr"
          height="450"
          loading="lazy"
          className="rounded-lg w-full "
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
