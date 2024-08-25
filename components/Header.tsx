"use client";
import React, { useState } from "react";
import TextField from "./TextField";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MenuIcon } from "lucide-react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { menuNavLinks } from "@/constants";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import ListItemText from "@mui/material/ListItemText";

const Header = () => {
  const [value, setValue] = useState("");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <div className="max-md:px-2 lg:px-10 py-6 px-2 w-full  flex justify-between max-md:flex-col gap-4 max-lg:bg-[#fe0000]">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold max-lg:text-white text-[#fe0000] text-2xl max-sm:text-xl  ">
          Shop dien may
        </h1>
        <div className="md:hidden">
          <MenuIcon
            className="text-sm "
            onClick={() => setOpenMenuMobile(true)}
          />
          <Drawer
            anchor="right"
            open={openMenuMobile}
            onClose={() => setOpenMenuMobile(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenuMobile(false)}
            >
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
        <div className="w-[40%] relative flex items-center max-lg:w-[50%] max-md:hidden">
          <TextField
            label="Bạn cần tìm gì?"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <SearchIcon className="absolute text-gray-500 top-2  right-3 text-xl cursor-pointer hover:text-[#fe0000] transition-all" />
        </div>
        <div className="flex items-center gap-4 max-lg:hidden">
          <div className="flex  text-white">
            <AddShoppingCartIcon className="text-[#fe0000]" />
            <span className="whitespace-nowrap text-black">Giỏ hàng</span>
          </div>
          <div className="flex  text-white">
            <AddShoppingCartIcon className="text-[#fe0000]" />
            <span className="whitespace-nowrap text-black">
              Tra cứu đơn hàng
            </span>
          </div>
          <div className="flex  text-white">
            <AddShoppingCartIcon className="text-[#fe0000]" />
            <span className="whitespace-nowrap text-black">Tài khoản</span>
          </div>
        </div>
      </div>
      <div className=" relative flex items-center md:hidden w-full">
        <TextField
          label="Bạn cần tìm gì?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <SearchIcon className="absolute text-gray-500 top-3 max-md:top-2 right-3 text-2xl cursor-pointer  transition-all" />
      </div>
    </div>
  );
};

export default Header;
