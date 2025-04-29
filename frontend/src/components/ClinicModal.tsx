import React from "react";

interface ClinicModalProps {
  clinic: any;
  onClose: () => void;
}

const ClinicModal: React.FC<ClinicModalProps> = ({ clinic, onClose }) => {
  if (!clinic) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-3/5 h-3/5 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-center">{clinic.clinic_name}</h2>
          <p className="text-lg text-center mt-2"><strong>Province:</strong> {clinic.province}</p>
          <p className="text-md text-gray-600 mt-4 px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor sapien id sem egestas, vel malesuada arcu posuere.
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

export default ClinicModal;


