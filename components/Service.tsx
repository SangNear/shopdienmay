import React from "react";
import FireTruckOutlinedIcon from "@mui/icons-material/FireTruckOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
const Service = () => {
  return (
    <div className="w-full h-auto bg-white py-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
          <FireTruckOutlinedIcon className="text-5xl text-[#fe0000]" />
          <div className="flex flex-col text-center">
            <h3 className="text-sm font-semibold">Giao hàng toàn quốc</h3>
            <span className="text-xs">Giao hàng trước, trả tiền sau</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
          <WorkOutlineOutlinedIcon className="text-5xl text-[#fe0000]" />
          <div className="flex flex-col text-center">
            <h3 className="text-sm font-semibold">Đổi trả dễ dàng</h3>
            <span className="text-xs">Đổi mới trong 15 ngày đầu</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
          <PaidOutlinedIcon className="text-5xl text-[#fe0000]" />
          <div className="flex flex-col text-center">
            <h3 className="text-sm font-semibold">Thanh toán tiện lợi</h3>
            <span className="text-xs">
              Trả tiền mặt, chuyển khoản, trả góp 0%
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
          <SupportAgentOutlinedIcon className="text-5xl text-[#fe0000]" />
          <div className="flex flex-col text-center">
            <h3 className="text-sm font-semibold">Hỗ trợ nhiệt tình</h3>
            <span className="text-xs">Tư vấn tổng đài miễn phí 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
