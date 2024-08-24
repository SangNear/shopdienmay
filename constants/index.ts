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

export interface MenuNavLink {
  name: string;
  route: string;
  icon: any; // Type for icon property
  subMenu?: Array<{
    subMenuTitle: string; // Use 'string' (lowercase) for primitive type
    subMenuRoute: string[]; // Use 'string[]' to denote an array of strings
  }>;
}

export const menuNavLinks: MenuNavLink[] = [
  {
    name: "TV",
    route: "/tv",
    icon: TvIcon, // Use the component reference directly
    subMenu: [
      {
        subMenuTitle: "Thương hiệu",
        subMenuRoute: ["Samsung", "Sony", "LG", "TCL", "TOSHIBA", "Casper"],
      },
      {
        subMenuTitle: "Màn hình",
        subMenuRoute: ["14in", "15in", "17in", "24in", "27in", "34in"],
      },
    ],
  },
  {
    name: "Loa",
    route: "/loa",
    icon: SpeakerIcon,
    subMenu: [
      {
        subMenuTitle: "Loa - Âm Thanh",
        subMenuRoute: [
          "Loa",
          "Micro",
          "Amly",
          "Dàn âm Thanh",
          "TOSHIBA",
          "Casper",
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
    route: "/dan-karaoke",
    icon: SettingsVoiceIcon,
  },
  {
    name: "Tủ lạnh",
    route: "/tu-lanh",
    icon: KitchenIcon,
  },
  {
    name: "Tủ đông",
    route: "/tu-dong",
    icon: KitchenOutlinedIcon,
  },
  {
    name: "Tủ mát",
    route: "/tu-mat",
    icon: KitchenOutlinedIcon,
  },
  {
    name: "Máy giặt",
    route: "/may-giat",
    icon: LocalLaundryServiceOutlinedIcon,
  },
  {
    name: "Máy quạt",
    route: "/may-quat",
    icon: WindPowerIcon,
  },
  {
    name: "Máy lạnh",
    route: "/may-lanh",
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

export const productSlider = [
  
]
