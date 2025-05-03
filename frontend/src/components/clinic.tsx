import React, { useState } from "react";
import { FaEye, FaArrowRight } from "react-icons/fa6";
import logo1 from "../assets/logos/logo5.svg";
import ClinicBox from "./ClinicBox";

interface IClinic {
  clinic_id?: number;
  clinic_name?: string;
  province: string;
}

const Clinic: React.FC<{ clinic: IClinic }> = ({ clinic }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  return (
    <div
      key={clinic.clinic_id || clinic.province}
      className="flex flex-col gap-4 bg-gray-100 px-5 lg:px-10 pb-10 pt-4 relative rounded-lg shadow-md"
    >
      <div className="w-full">
        <img className="w-2/3 mx-auto" src={logo1} alt="Clinic Logo" />
      </div>

      <div className="self-center text-center">
        {clinic.clinic_name ? (
          <>
            <h1 className="text-2xl font-bold">{clinic.clinic_name}</h1>
            <p className="text-gray-600">{clinic.province}</p>
          </>
        ) : (
          <h1 className="text-xl font-bold text-gray-700">{clinic.province}</h1>
        )}
      </div>

      {clinic.clinic_name && clinic.clinic_id && (
        <div className="flex flex-row justify-between mt-5">
          <button
            className="flex flex-row items-center gap-2 text-purple-700 px-4 py-2 border border-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition-all"
            onClick={() => setIsBoxOpen(true)}
          >
            See More <FaEye />
          </button>

          <button className="flex flex-row items-center gap-2 text-purple-700 px-4 py-2 border border-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition-all">
            Take Appointment <FaArrowRight />
          </button>
        </div>
      )}

      {isBoxOpen && clinic.clinic_name && clinic.clinic_id && (
        <ClinicBox
          clinicId={clinic.clinic_id}
          onClose={() => setIsBoxOpen(false)}
        />
      )}
    </div>
  );
};

export default Clinic;
