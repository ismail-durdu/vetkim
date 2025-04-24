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
    <div className="mx-auto">
      <div key={clinic.location_id} className="bg-gray-100 px-10 py-10 rounded-lg shadow-lg flex flex-col items-center w-full h-[550px]">
        
        

        {/* Klinik Görseli */}
        <div className="w-full h-[250px] flex items-center justify-center">
          <img className="w-4/5 h-full object-cover rounded-lg" src={logo1} alt="Clinic Logo" />
        </div>

        {/* Klinik Adı ve Şehir */}
        <div className="text-center mt-4">
          <h1 className="text-3xl font-bold">{clinic.clinic_name}</h1>
          <p className="text-lg text-gray-600">{clinic.province}</p>
        </div>

        {/* Yıldız Derecelendirmesi */}
        <div className="text-amber-400 flex flex-row justify-center gap-3 mt-3">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>

        {/* Butonlar */}
        <div className="flex flex-row justify-center gap-8 mt-6">
          <button className="flex flex-row items-center gap-2 text-purple-700 px-6 py-3 rounded border border-purple-700">
            See More <FaEye />
          </button>
          <button className="flex flex-row items-center gap-2 text-purple-700 px-6 py-3 rounded border border-purple-700">
            Take Appointment <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clinic;
