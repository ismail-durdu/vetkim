import React from "react";
import logo1 from "../assets/logos/logo5.svg";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
function clinic() {
  return (
    <div className="flex flex-col my-5 lg:my-15 gap-4 bg-gray-100 px-5 lg:px-10 pb-6 pt-4  ">
      <div className="w-full">
        <img className="w-2/3 mx-auto" src={logo1} alt="" />
      </div>
      <div>
        <h1>Address:</h1>
        <p>123 Pet Care Avenue, Suite 5B, Greenfield, NY 10522, USA</p>
      </div>

      <div className="text-amber-400 flex flex-row gap-0.5">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>
      <div className="flex flex-row justify-between">
        <button className="flex flex-row items-center gap-1  text-purple-700 px-3 py-1 rounded">
          See More <FaEye />
        </button>
        <button className="flex flex-row items-center gap-1 text-purple-700 px-3 py-1 rounded">
          Take Appoinment <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default clinic;