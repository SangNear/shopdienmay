import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const MenuMobile = () => {
    return (
        <div className='flex fixed bottom-0 w-full  h-14 items-center justify-evenly lg:hidden border-t shadow-2xl'>
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