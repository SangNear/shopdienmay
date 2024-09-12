import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import Link from "next/link";

const MenuFooter = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span className="text-lg font-bold">Thông tin công ty</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-2">
          <Link href="#">Giới thiệu công ty</Link>
          <Link href="#">Tin tức</Link>
          <Link href="#">Thông tin liên hệ</Link>
          <Link href="#">Nội quy shop</Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <span className="text-lg font-bold">Hỗ trợ khách hàng</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-2">
          <Link href="#">Hướng dẫn mua hàng online</Link>
          <Link href="#">Chính sách trả góp</Link>
          <Link href="#">Yêu cầu báo giá</Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <span className="text-lg font-bold">Chính sách chung</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-2">
          <Link href="#">Chính sách bảo hành</Link>
          <Link href="#">Chính sách đổi trả</Link>
          <Link href="#">Chính sách vận chuyển</Link>
          <Link href="#">Chính sách bảo mật thông tin</Link>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <span className="text-lg font-bold">Thông tin khác</span>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-2">
          <Link href="#">Tổng đài hỗ trợ miễn phí</Link>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuFooter;
