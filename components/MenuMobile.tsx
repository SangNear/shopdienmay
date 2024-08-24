"use client"
import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import { Button, Drawer } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { menuNavLinks } from '@/constants';
import Link from 'next/link';
const MenuMobile = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    return (
        <div className='flex fixed bottom-0 w-full  h-14 items-center justify-evenly lg:hidden border-t shadow-2xl'>
            <div className='flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white  cursor-pointer rounded-t-xl' >
                <MenuIcon className='text-3xl' onClick={() => setOpenMenuMobile(true)} />
                <span className='whitespace-nowrap' >Danh mục</span>
                <Drawer open={openMenuMobile} onClose={() => setOpenMenuMobile(false)}>
                    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenuMobile(false)}>
                        <List>
                            {menuNavLinks.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <IconComponent />
                                            </ListItemIcon>
                                            <Link href={`${item.name}`} className=''>
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
            <div className='flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white  cursor-pointer rounded-t-xl '>
                <AddShoppingCartIcon />
                <span className='whitespace-nowrap' >Giỏ hàng</span>
            </div>
            <div className='flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white  cursor-pointer rounded-t-xl'>
                <AddShoppingCartIcon />
                <span className='whitespace-nowrap' >Tra cứu đơn hàng</span>
            </div>
            <div className='flex flex-1 h-full items-center justify-center max-lg:flex-col hover:bg-[#fe0000] transition-all hover:text-white cursor-pointer rounded-t-xl'>
                <AddShoppingCartIcon />
                <span className='whitespace-nowrap' >Tài khoản</span>
            </div>
        </div>
    )
}
export default MenuMobile