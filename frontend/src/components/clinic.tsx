import React, { useState, useCallback } from "react";
import { FaEye, FaArrowRight } from "react-icons/fa6";
import logo1 from "../../public/clinic/1.svg";
import ClinicBox from "./ClinicBox";
import AppointmentBox from "./AppointmentBox";
import "../css/secondary-button.css";

interface IClinic {
  clinic_id?: number;
  clinic_name?: string;
  province?: string;
  clinic_image?: string;
}

const defaultClinic: IClinic = {
  clinic_id: 0,
  clinic_name: "Unknown Clinic",
  province: "Unknown Province",
};

const Clinic: React.FC<{ clinic?: IClinic }> = ({ clinic }) => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openBox = useCallback(() => setIsBoxOpen(true), []);
  const closeBox = useCallback(() => setIsBoxOpen(false), []);
  const openAppointment = useCallback(() => setIsAppointmentOpen(true), []);
  const closeAppointment = useCallback(() => setIsAppointmentOpen(false), []);

  const clinicData = clinic || defaultClinic;

  return (
    <div className="flex flex-col gap-4 bg-gray-100 px-5 lg:px-10 pb-10 pt-4 relative rounded-lg shadow-md">
      <div className="w-full">
        <img
          className="w-2/3 mx-auto"
          src={`/clinic/${clinicData.clinic_image}`}
          alt="Clinic Logo"
        />
      </div>

      <div className="self-center text-center">
        <h1 className="text-2xl font-bold">{clinicData.clinic_name}</h1>
        <p className="text-gray-600">{clinicData.province}</p>
      </div>

      {clinicData.clinic_id && clinicData.clinic_name && (
        <div className="flex flex-row justify-between mt-5">
          <button
            className=" flex flex-row items-center gap-2 btn xl:w-5/12 justify-center"
            onClick={openBox}
          >
            See More <FaEye />
          </button>

          <button
            className="flex flex-row items-center gap-2 btn  justify-center"
            onClick={openAppointment}
          >
            Take Appointment <FaArrowRight />
          </button>
        </div>
      )}

      {isBoxOpen && clinicData?.clinic_id && (
        <ClinicBox clinicId={clinicData.clinic_id} onClose={closeBox} />
      )}

      {isAppointmentOpen && clinicData?.clinic_id && (
        <AppointmentBox
          appointmentId={clinicData.clinic_id}
          onClose={closeAppointment}
          clinicName={""}
        />
      )}
    </div>
  );
};

export default Clinic;
