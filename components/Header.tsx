"use client"
import React, { useState } from 'react'
import TextField from './TextField'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Header = () => {
  const [value, setValue] = useState('')
  return (
    <div className='max-md:px-8 lg:px-20 py-6 px-2 w-full bg-[#fe0000] flex justify-between max-md:flex-col gap-4'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-bold text-white text-3xl max-sm:text-2xl '>Shop dien may</h1>
        <div className='w-[40%] relative flex items-center max-lg:w-[50%]'>
          <TextField
            label='Bạn cần tìm gì?'
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <SearchIcon className='absolute text-gray-500 top-3 right-3 text-3xl cursor-pointer hover:text-[#fe0000] transition-all' />
        </div>
        <div className='flex items-center gap-4 max-lg:hidden'>
          <div className='flex  text-white'>
            <AddShoppingCartIcon />
            <span className='whitespace-nowrap' >Giỏ hàng</span>
          </div>
          <div className='flex  text-white'>
            <AddShoppingCartIcon />
            <span className='whitespace-nowrap' >Tra cứu đơn hàng</span>
          </div>
          <div className='flex  text-white'>
            <AddShoppingCartIcon />
            <span className='whitespace-nowrap' >Tài khoản</span>
          </div>
        </div>
      </div>
      {/* <div className=' relative flex items-center md:hidden w-full'>
        <TextField
          label='Bạn cần tìm gì?'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <SearchIcon className='absolute text-gray-500 top-3 right-3 text-3xl cursor-pointer hover:text-[#fe0000] transition-all' />
      </div> */}


    </div>
  )
}

export default Header
