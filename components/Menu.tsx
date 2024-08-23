import Link from "next/link";
import React from "react";
import TvIcon from "@mui/icons-material/Tv";
import SpeakerIcon from '@mui/icons-material/Speaker';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import KitchenIcon from '@mui/icons-material/Kitchen';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import WindPowerIcon from '@mui/icons-material/WindPower';
import AcUnitIcon from '@mui/icons-material/AcUnit';
const Menu = () => {
  return (
    <div className="w-full bg-[red] lg:px-10
     max-lg:hidden">
      <div className="flex justify-between">
      <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <TvIcon />
          <span>Tv</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <SpeakerIcon />
          <span>loa</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <SettingsVoiceIcon />
          <span>dàn karaoke</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <KitchenOutlinedIcon />
          <span>tủ lạnh</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <KitchenIcon />
          <span>tủ đông</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <KitchenOutlinedIcon />
          <span>tủ mát</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <LocalLaundryServiceOutlinedIcon />
          <span>máy giặt</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <WindPowerIcon />
          <span>máy quạt</span>
        </Link>
        <Link href="/tv" className="flex flex-col  text-white items-center hover:bg-white hover:text-[#fe0000]  rounded-xl px-4 py-2 ">
          <AcUnitIcon />
          <span>máy lạnh</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
