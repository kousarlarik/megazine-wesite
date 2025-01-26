import React from "react";
import logo from "../../asest/Bike_Evolution_Logo_schwarz 1.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="bg-white py-2  px-4 flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="w-48 flex items-center justify-between">
        <button className="font-medium md:flex lg:flex hidden">Join Us</button>
        <button>
        <FacebookOutlinedIcon/>
        </button>
        <button>
        <InstagramIcon/>
        </button>
        <button>
        <YouTubeIcon/>
        </button>
      </div>
    </div>
  );
};

export default Footer;
