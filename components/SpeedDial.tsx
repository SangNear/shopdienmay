
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
const SpeedDialComponent = () => {
  const actions = [
    { icon: <FacebookIcon />, name: "Facebook", css: "text-blue-500" },
    { icon: <YouTubeIcon />, name: "Youtube", css: "text-red-500" },
    { icon: <InstagramIcon />, name: "Instagram", css: "text-gray-500" },
    { icon: <XIcon />, name: "X", css: "text-black" },
  ];
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      className="fixed bottom-16 right-5  "
      icon={
        <SpeedDialIcon className="w-full h-full bg-[#fe0000] rounded-3xl text-center flex items-center justify-center" />
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          className={`${action.css}`}
        />
      ))}
    </SpeedDial>
  );
};

export default SpeedDialComponent;
