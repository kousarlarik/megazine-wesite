import React from "react";
import img1 from "../../asest/Kopie von IMG_4207 1.jpg";
import img2 from "../../asest/Kopie von IMG_4176 1.jpg";

const LastSection = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
      <img src={img1} className="h-full" alt="" />
      <img src={img2} className="h-full" alt="" />
    </div>
  );
};

export default LastSection;
