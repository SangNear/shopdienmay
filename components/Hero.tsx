import React from 'react'
import Menu from './Menu'
import Banner from './Banner'

const Hero = () => {
    return (
        <div className="flex w-full max-md:px-8 lg:px-20 px-2">
            <div className="w-[30%]">
                <Menu />
            </div>
            <div className="w-[70%]">
                <Banner />
            </div>


        </div>
    )
}

export default Hero