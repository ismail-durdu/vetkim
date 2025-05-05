import React from "react";

interface AppointmentModalProps {
  appointmentId: number;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ appointmentId, onClose }) => {
  const appointment = {
    clinic_name: "VetCare Animal Clinic",
    appointment_date: "2025-05-10",
    appointment_time: "14:30",
    appointment_cost: "50",
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-3/5 h-3/5 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-center">Appointment Details</h2>
          <p className="text-lg text-center mt-2"><strong>Clinic:</strong> {appointment.clinic_name}</p>
          <p className="text-lg text-center mt-2"><strong>Date:</strong> {appointment.appointment_date}</p>
          <p className="text-lg text-center mt-2"><strong>Time:</strong> {appointment.appointment_time}</p>
          <p className="text-lg text-center mt-2"><strong>Cost:</strong> {appointment.appointment_cost} USD</p>
          <p className="text-md text-gray-600 mt-4 px-6">
            Your appointment has been successfully scheduled. Please arrive on time.
          </p>
        </div>

        <button 
          onClick={onClose} 
          className="mt-6 bg-red-500 text-white px-6 py-3 rounded w-full text-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default AppointmentModal;



