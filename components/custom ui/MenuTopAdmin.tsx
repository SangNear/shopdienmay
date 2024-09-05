"use client"
import { menuLinksAdmin } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { Separator } from "../ui/separator";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
const MenuTopAdmin = () => {
    const pathName = usePathname()
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    return (
        <div className="w-full sticky z-20 top-0 px-8 py-4  flex justify-between items-center gap-12 shadow-xl lg:hidden bg-blue-2">
            <h1 className='text-xl uppercase font-bold text-[#fe0000]'>Shop dien may</h1>
            <div className="flex justify-center items-center gap-8 max-md:hidden">
                {menuLinksAdmin.map((item, index) => {
                    return (
                        <Link
                            href={item.route}
                            key={index}
                            className={`flex gap-4 text-body-medium hover:text-[#fe0000] text-gray-500 ${pathName === item.route ? "text-[#fe0000]" : ""}`}
                        >
                            <p>{item.name}</p>
                        </Link>
                    );
                })}
            </div>
            <div className="flex gap-4 items-center md:hidden">

                <MenuOutlinedIcon
                    className="text-xl cursor-pointer "
                    onClick={() => setOpenMenuMobile(true)}
                />

                <Drawer anchor="right" open={openMenuMobile} onClose={() => setOpenMenuMobile(false)}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setOpenMenuMobile(false)}
                    >
                        <h2 className="p-4 text-xl whitespace-nowrap font-semibold">
                            Danh mục sản phẩm
                        </h2>
                        <Separator />
                        <List className="flex flex-col gap-5">
                            {menuLinksAdmin.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <ListItem className="hover:bg-[#fe0000] hover:text-white transition-all" key={index} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon className="hover:text-white">
                                                <IconComponent />
                                            </ListItemIcon>
                                            <Link href={item.route} className="">
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

        </div>
    );
};

export default MenuTopAdmin;
