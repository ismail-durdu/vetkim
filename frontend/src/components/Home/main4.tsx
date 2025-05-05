import React from "react";
import logo1 from "../../../public/clinic/1.svg";
import logo2 from "../../../public/clinic/2.svg";
import logo3 from "../../../public/clinic/3.svg";
import logo4 from "../../../public/clinic/4.svg";

function main4() {
  return (
    <div className="flex flex-row bg-gray-100 justify-between py-5 px-5">
      <img className="w-1/4" src={logo1} alt="" />
      <img className="w-1/4" src={logo2} alt="" />
      <img className="w-1/4" src={logo3} alt="" />
      <img className="w-1/4" src={logo4} alt="" />
    </div>
  );
}

export default main4;
