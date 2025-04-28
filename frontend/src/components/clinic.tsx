import React from "react";
import logo1 from "../assets/logos/logo5.svg";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

interface IClinic {
  clinic_name: string;
  province: string;
  location_id: number;
}

function Clinic({ clinic }: { clinic: IClinic }) {
  return (
    <div
      key={clinic.location_id}
      className="flex flex-col gap-4 bg-gray-100 px-5 lg:px-10 pb-10 pt-4  "
    >
      <div className="w-full">
        <img className="w-2/3 mx-auto" src={logo1} alt="" />
      </div>
      <div className="self-center">
        <h1 className="text-2xl text-bold">{clinic.clinic_name}</h1>
        <p className="text-center">{clinic.province}</p>
      </div>

      <div className="text-amber-400 flex flex-row gap-0.5 self-center">
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>
      <div className="flex flex-row justify-between mt-5">
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

export default Clinic;
