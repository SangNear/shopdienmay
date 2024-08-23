import Link from 'next/link'
import React from 'react'

const Menu = () => {
    return (
        <div className='w-full h-auto flex flex-col items-start'>
            <div className='px-2 py-4 border shadow-lg w-full'>
                <Link href="/tv">Tv</Link>
            </div>
            <div className='px-2 py-4 border shadow-lg w-full'>
                <Link href="/tu-lanh">Tủ lạnh</Link>
            </div>
            <div className='px-2 py-4 border shadow-lg w-full'>
                <Link href="/may-giat">Máy giặt</Link>
            </div>
            <div className='px-2 py-4 border shadow-lg w-full'>
                <Link href="/may-lanh">Máy lạnh</Link>
            </div>
        </div>
    )
}

export default Menu