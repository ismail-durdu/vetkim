import React, { useState } from "react";
import { IoMdClose, IoMdCash } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import logo1 from "../assets/logos/logo5.svg";

const AppointmentBox: React.FC<{ appointmentId: number; clinicName: string; onClose: () => void }> = ({ appointmentId, clinicName, onClose }) => {
  const defaultDate = "2025-05-10";
  const defaultTime = "14:30";

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [selectedTime, setSelectedTime] = useState(defaultTime);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const appointmentCost = "10";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleConfirm = async () => {
    setLoading(true);
    setError("");
    setSuccessMessage("");

    const requestData = {
      appointment_date: selectedDate,
      appointment_time: selectedTime,
      appointment_cost: appointmentCost,
    };

    console.log("📌 Gönderilen Veri:", requestData);

    try {
      const response = await fetch("http://localhost:8000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Randevu kaydedilemedi, tekrar deneyin!");
      }

      console.log("✅ Randevu başarıyla kaydedildi:", data);
      
      setSuccessMessage("✅ Randevunuz başarılı bir şekilde kaydedildi!");

      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (err) {
      console.error("❌ Randevu kaydetme hatası:", err);
      setError("Randevu kaydedilemedi, tekrar deneyin!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded-xl w-3/5 h-auto max-w-2xl shadow-xl relative flex flex-col items-center overflow-auto max-h-[70vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-500">
          <IoMdClose size={32} />
        </button>

        <div className="flex justify-center mb-4">
          <img src={logo1} alt="Appointment Logo" className="w-32 h-32 object-contain" />
        </div>

        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-purple-700">{clinicName}</h1>
          <h2 className="text-xl font-bold text-gray-600">Welcome</h2>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">Appointment Details</h2>
        </div>

        <div className="flex flex-col items-center mt-4 px-4 space-y-4">
          <div className="bg-gray-200 p-3 rounded-lg shadow-md flex flex-col items-center gap-2 w-64">
            <p className="text-gray-700 text-md font-semibold">Tarihi değiştir</p>
            <button
              className="flex flex-row items-center gap-2 text-gray-700 text-md font-semibold"
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              {selectedDate} <FaCaretDown className="text-gray-700 text-xl" />
            </button>
            {showDatePicker && (
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setShowDatePicker(false);
                }}
                className="p-2 border rounded-md mt-2"
              />
            )}
          </div>

          <div className="bg-purple-200 p-3 rounded-lg shadow-md flex flex-col items-center gap-2 w-64">
            <p className="text-purple-700 text-md font-semibold">Saati değiştir</p>
            <button
              className="flex flex-row items-center gap-2 text-purple-700 text-md font-semibold"
              onClick={() => setShowTimePicker(!showTimePicker)}
            >
              {selectedTime} <FaCaretDown className="text-purple-700 text-xl" />
            </button>
            {showTimePicker && (
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => {
                  setSelectedTime(e.target.value);
                  setShowTimePicker(false);
                }}
                className="p-2 border rounded-md mt-2"
              />
            )}
          </div>

          <div className="bg-orange-200 p-3 rounded-lg shadow-md flex items-center gap-2 w-64 justify-center">
            <IoMdCash className="text-orange-700 text-xl" />
            <p className="text-gray-800 text-md font-semibold">{appointmentCost} USD</p>
          </div>
        </div>

        {successMessage && <p className="text-green-500 text-xl font-bold mt-4 text-center">{successMessage}</p>}

        <button onClick={handleConfirm} className="mt-4 bg-green-500 text-white w-4/5 py-3 rounded-lg text-xl font-bold hover:bg-green-700 transition-all">
          {loading ? "Processing..." : "✅ Onayla"}
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AppointmentBox;

