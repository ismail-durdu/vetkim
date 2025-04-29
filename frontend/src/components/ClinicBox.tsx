import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdMail, IoMdCall, IoMdPin, IoMdTime, IoMdPerson, IoMdChatbubbles, IoMdStar } from "react-icons/io";
import logo1 from "../assets/logos/logo5.svg";

const ClinicBox: React.FC<{ clinicId: number; onClose: () => void }> = ({ clinicId, onClose }) => {
  const [clinic, setClinic] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/clinic/${clinicId}`)
      .then((res) => res.json())
      .then((data) => setClinic(data))
      .catch((err) => console.error("Klinik verisi çekme hatası:", err));

    fetch(`http://localhost:8000/api/comments/${clinicId}?limit=4`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Yorum verisi çekme hatası:", err));
  }, [clinicId]);

  if (!clinic) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 overflow-auto">
      <div className="bg-white p-6 rounded-xl w-3/5 h-auto max-w-2xl shadow-xl relative flex flex-col overflow-auto max-h-[70vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-500">
          <IoMdClose size={32} />
        </button>

        <div className="flex justify-center mb-6">
          <img src={logo1} alt="Clinic Logo" className="w-32 h-32 object-contain" />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">{clinic.clinic_name}</h2>
          <p className="text-lg text-gray-700 mt-1">{clinic.province}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 px-4">
          <div className="bg-gray-200 p-2 rounded-lg shadow-md flex items-center gap-2">
            <IoMdMail className="text-gray-700 text-lg" />
            <p className="text-gray-800 text-sm">{clinic.clinic_email}</p>
          </div>
          <div className="bg-purple-200 p-2 rounded-lg shadow-md flex items-center gap-2">
            <IoMdCall className="text-purple-700 text-lg" />
            <p className="text-gray-800 text-sm">{clinic.clinic_phone}</p>
          </div>
          <div className="bg-orange-200 p-2 rounded-lg shadow-md flex items-center gap-2">
            <IoMdPin className="text-orange-700 text-lg" />
            <p className="text-gray-800 text-sm">{clinic.clinic_adress}</p>
          </div>
          <div className="bg-teal-200 p-2 rounded-lg shadow-md flex items-center gap-2">
            <IoMdTime className="text-teal-700 text-lg" />
            <p className="text-gray-800 text-sm">{clinic.start_time} - {clinic.end_time}</p>
          </div>
        </div>

        {/* Yorumlar - Ayrı Kutular & İkonlar */}
        <div className="mt-6 px-4 w-full">
          <h3 className="text-lg font-bold text-gray-700 uppercase">COMMENTS</h3>
          <div className="space-y-6 mt-3">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="bg-gray-300 p-4 rounded-lg shadow-md border border-gray-400">
                  <div className="flex items-center gap-2">
                    <IoMdPerson className="text-gray-800 text-lg" />
                    <p className="text-md font-semibold text-gray-800">{comment.user_name} {comment.user_lastname}</p> 
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <IoMdChatbubbles className="text-gray-700 text-lg" />
                    <p className="text-gray-700">"{comment.remark}"</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <IoMdStar className="text-yellow-600 text-lg" />
                    <p className="text-yellow-600">{comment.rate}/5</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Henüz yorum yapılmamış.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicBox;




