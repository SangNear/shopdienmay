"use client";
import React, { useState } from "react";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import TextField from "./TextField";
const Cusregis = () => {
  const [value, setvalue] = useState("");
  return (
    <div className="w-[95%] lg:w-[85%] h-auto flex flex-col lg:flex-row lg:justify-between m-auto items-center py-3 gap-3  ">
      <div className="flex gap-3 items-center ">
        <div>
          <CardGiftcardOutlinedIcon className="text-5xl text-white" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-white whitespace-nowrap">Nhận tin khuyến mãi</h3>
          <span className="text-sm text-white italic">
            Bạn vui lòng để lại Email để nhận thông tin khuyến mãi từ shop
          </span>
        </div>
      </div>
      <div className="w-full">
        <TextField
          label={"Nhập email đăng ký"}
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Cusregis;
