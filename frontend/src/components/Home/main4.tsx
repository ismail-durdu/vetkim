import React from "react";
import logo1 from "../../assets/logos/logo5.svg";
import logo2 from "../../assets/logos/Logo-6.svg";
import logo3 from "../../assets/logos/Logo-7.svg";
import logo4 from "../../assets/logos/logo9.svg";

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
