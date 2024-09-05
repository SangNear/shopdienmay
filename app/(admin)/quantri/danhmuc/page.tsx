import { Separator } from '@/components/ui/separator'
import Button from '@mui/material/Button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="px-10 py-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl leading-[100%] font-bold">Danh mục</h2>
        <Button className="bg-[#fe0000] text-white hover:bg-white hover:text-[#fe0000]">
          <Link href="/quantri/danhmuc/themdanhmuc" className='font-bold text-base'>+ Thêm Danh mục mới</Link>
        </Button>
      </div>
      <Separator className="bg-grey-1 my-4" />

      <div>table</div>
    </div>
  )
}

export default page