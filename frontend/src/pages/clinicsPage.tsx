import React, { useEffect, useState } from "react";
import photo from "../assets/vetkim1.jpg";
import Clinic from "../components/clinic";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import Footer from "../components/footer";
import AppointmentForm from "../components/appointmentForm";

interface IClinic {
  clinic_id: number;
  clinic_name: string;
  province: string;
}

function ClinicsPage() {
  const [clinics, setClinics] = useState<IClinic[]>([]);
  const [originalClinics, setOriginalClinics] = useState<IClinic[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("clinic_name");
  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/clinics");
        if (!response.ok) {
          throw new Error("API'den veri alınamadı!");
        }
        const data = await response.json();
        setClinics(data);
        setOriginalClinics(data);
      } catch (error) {
        console.error("Klinik verisi alınırken hata oluştu:", error);
        setClinics([]);
      }
    };

    fetchClinics();
  }, []);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const response = await fetch(
        `http://localhost:8000/api/search?q=${query}&type=${searchType}`
      );
      const data = await response.json();

      if (searchType === "province") {
        setClinics(data);
      } else {
        setClinics(data);
      }
    } else {
      setClinics(originalClinics);
    }
  };

  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterChange = (type: string) => {
    setSearchType(type);
    setSearchTerm("");
    setClinics(originalClinics);
    setFilterOpen(false);
  };

  return (
    <div className="px-5 lg:px-20">
      <div className="w-full text-center mt-5">
        <img className="w-30 lg:w-60 mx-auto" src={photo} alt="VetKim Logo" />
      </div>

      <div className="mt-3 w-4/5 lg:w-3/5 mx-auto flex flex-row justify-between px-3 py-1 items-center bg-gray-100 rounded relative">
        <IoSearchOutline />
        <input
          className="w-full"
          type="text"
          placeholder={
            searchType === "clinic_name"
              ? "Klinik adına göre ara..."
              : "Şehre göre ara..."
          }
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="relative">
          <IoFilter
            className="text-gray-500 cursor-pointer"
            size={22}
            onClick={toggleFilterMenu}
          />

          {filterOpen && (
            <div className="absolute top-full right-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50">
              <button
                className="w-full px-4 py-2 text-right hover:bg-gray-100"
                onClick={() => handleFilterChange("clinic_name")}
              >
                Klinik Adına Göre Ara
              </button>
              <button
                className="w-full px-4 py-2 text-right hover:bg-gray-100"
                onClick={() => handleFilterChange("province")}
              >
                Şehre Göre Ara
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 mt-16 w-full md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
        {clinics.length > 0 ? (
          clinics.map((clinic) => (
            <Clinic clinic={clinic} key={clinic.clinic_id} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Arama sonuçları bulunamadı.
          </p>
        )}
      </div>
      {isAppointmentOpen &&
        clinics &&
        clinics.map((clinic) => (
          <AppointmentForm
            clinicId={clinic.clinic_id}
            onClose={() => setIsAppointmentOpen(false)}
          />
        ))}

      <Footer />
    </div>
  );
}

export default ClinicsPage;
