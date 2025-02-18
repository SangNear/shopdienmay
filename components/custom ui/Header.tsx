"use client";
import React, { useContext, useState } from "react";
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
import { Separator } from "../ui/separator";
import { toslug } from "@/lib/utils";
import { UrlObject } from "url";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { CartContext } from "@/lib/context/cartContext/ContextProvider";
const Header = () => {
  const {products} = useContext(CartContext)
  const [value, setValue] = useState("");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  return (
    <header className="max-md:px-2 lg:px-20 py-6 px-2 w-full  flex justify-between max-md:flex-col gap-4 max-lg:bg-[#fe0000]">
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <h1 className="font-bold max-lg:text-white text-[#fe0000] text-2xl max-sm:text-xl  ">
            Shop dien may
          </h1>
        </Link>

        <div className="md:hidden">
          <MenuIcon
            className="text-sm text-white"
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
              <h2 className="p-4 text-xl whitespace-nowrap font-semibold">
                Danh mục sản phẩm
              </h2>
              <Separator />
              <List>
                {menuNavLinks.map((item, index) => {
                  const IconComponent = item.icon;
                  const route = toslug(item.name);
                  return (
                    <ListItem key={index} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <IconComponent />
                        </ListItemIcon>
                        <Link
                          href={`/danh-sach-san-pham/${
                            route as unknown as UrlObject
                          }`}
                          className=""
                        >
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
        <div className="flex items-center gap-5 max-lg:hidden">
          <div className="flex  text-white relative">
            <AddShoppingCartIcon className="text-[#fe0000] " />
            
            <span className="text-white bg-[#fe0000] text-xs px-1 rounded-xl absolute -right-3 -top-2">{products.length}</span>

          </div>
          <div className="flex  text-white hover:text-[#fe0000] cursor-pointer">
            <ManageSearchIcon className="text-[#fe0000]  hover:text-[#fe0000]" />
            <span className="whitespace-nowrap text-black hover:text-[#fe0000]">
              Tra cứu đơn hàng
            </span>
          </div>
          {/* <div className="flex  text-white">
            <AddShoppingCartIcon className="text-[#fe0000]" />
            <span className="whitespace-nowrap text-black">Tài khoản</span>
          </div> */}
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
    </header>
  );
};

export default Header;
