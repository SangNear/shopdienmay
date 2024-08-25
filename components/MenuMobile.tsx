"use client";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { menuNavLinks } from "@/constants";
import Link from "next/link";
import { Separator } from "./ui/separator";
const MenuMobile = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <div className="flex fixed bottom-0 w-full  py-1 items-center justify-evenly lg:hidden border-t shadow-2xl z-10 bg-white">
      <div className="flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white  cursor-pointer rounded-t-xl">
        <MenuIcon
          className="text-sm "
          onClick={() => setOpenMenuMobile(true)}
        />
        <span className="whitespace-nowrap text-sm ">Danh mục</span>
        <Drawer open={openMenuMobile} onClose={() => setOpenMenuMobile(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenuMobile(false)}
          >
            <h2 className="p-4 text-xl whitespace-nowrap font-semibold">
              Danh mục sản phẩm
            </h2>
            <Separator />
            <List>
              {menuNavLinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <IconComponent />
                      </ListItemIcon>
                      <Link href={`${item.name}`} className="">
                        <ListItemText>{item.name}</ListItemText>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </div>
      <div className="flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white  cursor-pointer rounded-t-xl ">
        <AddShoppingCartIcon className="text-sm" />
        <span className="whitespace-nowrap text-sm">Giỏ hàng</span>
      </div>
      <div className="flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white  cursor-pointer rounded-t-xl">
        <ScreenSearchDesktopIcon className="text-sm" />
        <span className="whitespace-nowrap text-sm">Tra cứu</span>
      </div>
      <div className="flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white cursor-pointer rounded-t-xl">
        <AccountCircleIcon className="text-sm" />
        <span className="whitespace-nowrap text-sm">Tài khoản</span>
      </div>
    </div>
  );
};
export default MenuMobile;
