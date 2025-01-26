import React from "react";
import FirstImg from "../../asest/BIke-Evolution-3011.png"
import Secondimg from "../../asest/Rectangle 4.png"
import Thirdimg from "../../asest/Mask group (1).png"
import Container from '@mui/material/Container'

const BESpectralite = () => {
  return (
    <Container maxWidth="" className="bg-black">
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-3 gap-3 items-center ">
      <div className="lg:col-span-2">
        <img src={FirstImg} className="object-cover lg:h-screen  w-full" alt="" />
      </div>
      <div className="lg:col-span-1 grid lg:grid-cols-1 max-sm:flex gap-3 items-center ">
        <div className="bg-cyan-500 lg:h-72 flex items-center md:h-52 max-sm:h-32 max-sm:px-4 justify-center ">
        
        <h1 className="lg:!text-4xl text-white">SPECTRALITE</h1>
        </div>
        <div >
        <img src={Thirdimg} className="!w-full !h-full" style={{height:"300px"}}  alt=""  />
        </div>
      </div>
    </div>
    
    </Container>
  );
};

export default BESpectralite;
