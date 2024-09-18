import React from "react";
import Logos from "../assets/blogger.svg";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center font-bold text-zinc-700 ">
      <img className="w-10 rounded-[100%] text-black" src={Logos} alt="" />
      <span className="text-[]">Blogger</span>
    </div>
  );
};

export default Logo;
