import React from "react";
import ImageStock from "./ImageStock";
import { maygiatImageStock, maylanhImageStock, tiviImageStock, tulanhImageStock } from "@/constants";

const SystemStock = () => {
  return (
    <div className="w-full h-auto">
      <h2 className="text-2xl font-bold uppercase text-white text-center mt-2 p-2 bg-[#fe0000]">
        Hệ thống kho hàng
      </h2>
      <div className="w-full grid grid-cols-2 max-sm:grid-cols-1 justify-items-center m-auto">
        <ImageStock title="tủ lạnh" imageStock={tulanhImageStock} />
        <ImageStock title="máy lạnh" imageStock={maylanhImageStock} />
        <ImageStock title="máy giặt" imageStock={maygiatImageStock} />
        <ImageStock title="ti vi" imageStock={tiviImageStock} />
      </div>
    </div>
  );
};

export default SystemStock;
