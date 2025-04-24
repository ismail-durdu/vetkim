import React, { useEffect, useState } from "react";
import photo from "../assets/vetkim1.jpg";
import Clinic from "../components/clinic"; 
import { IoSearchOutline } from "react-icons/io5";
import Footer from "../components/footer";
interface IClinic {
  clinic_name: string;
  province: string;
  location_id: number;
}

function ClinicsPage() {  
  const [clinics, setClinics] = useState<IClinic[]>([]);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/clinics"); 
        const data = await response.json();
        console.log("📌 Gelen Klinik Verileri:", data);
        setClinics(data);
      } catch (error) {
        console.error("Klinik verisi alınırken hata oluştu:", error);
      }
    };

    fetchClinics();
  }, []);

  return (
    <div className="px-5 lg:px-20">
      <div>
        <img className="w-30 lg:w-60 mx-auto" src={photo} alt="VetKim Logo" />
      </div>
      <div className="mt-3 w-4/5 lg:w-3/5 mx-auto flex flex-row gap-2 px-3 py-1 items-center bg-gray-100 rounded">
        <IoSearchOutline />
        <input className="w-full" type="text" placeholder="Search veterinary clinic" />
      </div>
      
      {/* Klinikler */}
      <div className="grid grid-cols-1 mt-15 w-full md:grid-cols-2 xl:grid-cols-3 gap-8">
        {clinics.map((clinic) => (
          <Clinic clinic={clinic} key={clinic.location_id} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default ClinicsPage;
