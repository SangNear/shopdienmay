import TvIcon from "@mui/icons-material/Tv";
import SpeakerIcon from "@mui/icons-material/Speaker";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import KitchenIcon from "@mui/icons-material/Kitchen";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import WindPowerIcon from "@mui/icons-material/WindPower";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Tv from "@mui/icons-material/Tv";

import banner1 from "../public/assets/banner/banner4.jpeg";
import banner2 from "../public/assets/banner/banner2.jpg";
import banner3 from "../public/assets/banner/banner3.jpeg";

import maygiat from "../public/assets/stock/maygiat1.jpg";
import maygiat2 from "../public/assets/stock/maygiat2.jpg";
import maygiat3 from "../public/assets/stock/maygiat3.jpg";
import maygiat4 from "../public/assets/stock/maygiat4.jpg";
import maylanh from "../public/assets/stock/maylanh1.jpg";
import maylanh2 from "../public/assets/stock/maylanh2.jpg";
import maylanh3 from "../public/assets/stock/maylanh3.jpg";
import tv from "../public/assets/stock/tv1.jpg";
import tv2 from "../public/assets/stock/tv2.jpg";
import tv3 from "../public/assets/stock/tv3.jpg";
import tulanh from "../public/assets/stock/tulanh1.jpg";
import tulanh2 from "../public/assets/stock/tulanh2.webp";
import { StaticImageData } from "next/image";
export interface MenuNavLink {
  name: string;
  route: string;
  icon: any; // Type for icon property
  subMenu?: Array<{
    subMenuTitle: string; // Use 'string' (lowercase) for primitive type
    subMenuRoute: string[]; // Use 'string[]' to denote an array of strings
  }>;
}

export interface ImagesStock {
  name: String;
  src: StaticImageData;
}

export const menuBrandFilter = [
  "Tivi Samsung",
  "Tivi Sony",
  "Tivi LG",
  "Tivi TCL",
  "Tivi Toshiba",
  "Tivi Casper",
];

export const menuNavLinks: MenuNavLink[] = [
  {
    name: "TiVi",
    route: "tivi",
    icon: TvIcon, // Use the component reference directly
    subMenu: [
      {
        subMenuTitle: "Thương hiệu",
        subMenuRoute: [
          "Tivi Samsung",
          "Tivi Sony",
          "Tivi LG",
          "Tivi TCL",
          "Tivi Toshiba",
          "Tivi Casper",
        ],
      },
      {
        subMenuTitle: "Màn hình",
        subMenuRoute: [
          "Tivi 14in",
          "Tivi 15in",
          "Tivi 17in",
          "Tivi 24in",
          "Tivi 27in",
          "Tivi 34in",
        ],
      },
    ],
  },
  {
    name: "Loa",
    route: "loa",
    icon: SpeakerIcon,
    subMenu: [
      {
        subMenuTitle: "Loa - Âm Thanh",
        subMenuRoute: [
          "Loa",
          "Micro",
          "Amly",
          "Dàn âm Thanh",
          "Loa thanh",
          "Loa kéo",
          "Loa blutooth",
        ],
      },
      {
        subMenuTitle: "Màn hình",
        subMenuRoute: ["14in", "15in", "17in", "24in", "27in", "34in"],
      },
    ],
  },
  {
    name: "Dàn karaoke",
    route: "dan-karaoke",
    icon: SettingsVoiceIcon,
  },
  {
    name: "Tủ lạnh",
    route: "tu-lanh",
    icon: KitchenIcon,
    subMenu: [
      {
        subMenuTitle: "Thương hiệu",
        subMenuRoute: [
          "Tủ lạnh Samsung",
          "Tủ lạnh Panasonic",
          "Tủ lạnh Aqua",
          "Tủ lạnh Toshiba",
          "Tủ lạnh LG",
          "Tủ lạnh Hitachi",
          "Tủ lạnh Mitsubishi",
        ],
      },
      {
        subMenuTitle: "Loại Tủ lạnh",
        subMenuRoute: ["14in", "15in", "17in", "24in", "27in", "34in"],
      },
    ],
  },
  {
    name: "Tủ đông",
    route: "tu-dong",
    icon: KitchenOutlinedIcon,
  },
  {
    name: "Tủ mát",
    route: "tu-mat",
    icon: KitchenOutlinedIcon,
  },
  {
    name: "Máy giặt",
    route: "may-giat",
    icon: LocalLaundryServiceOutlinedIcon,
  },
  {
    name: "Máy quạt",
    route: "may-quat",
    icon: WindPowerIcon,
  },
  {
    name: "Máy lạnh",
    route: "may-lanh",
    icon: AcUnitIcon,
  },
];

export const imagesCarousel = [
  {
    name: "banner 1",
    src: banner1,
  },
  {
    name: "banner 2",
    src: banner2,
  },
  {
    name: "banner 3",
    src: banner3,
  },
];

export const maygiatImageStock = [
  {
    name: "maygiat",
    src: maygiat,
  },
  {
    name: "maygiat2",
    src: maygiat2,
  },
  {
    name: "maygiat3",
    src: maygiat3,
  },
  {
    name: "maygiat4",
    src: maygiat4,
  },
];
export const maylanhImageStock = [
  {
    name: "maylanh",
    src: maylanh,
  },
  {
    name: "maylanh2",
    src: maylanh2,
  },
  {
    name: "maylanh3",
    src: maylanh3,
  },
];
export const tulanhImageStock = [
  {
    name: "tulanh",
    src: tulanh,
  },
  {
    name: "tulanh2",
    src: tulanh2,
  },
];
export const tiviImageStock = [
  {
    name: "tivi",
    src: tv,
  },
  {
    name: "tivi2",
    src: tv2,
  },
  {
    name: "tivi3",
    src: tv3,
  },
];
