import React, { useEffect, useState } from "react";
import Main1 from "../components/Home/main1";
import Main2 from "../components/Home/main2";
import Main3 from "../components/Home/main3";
import Main4 from "../components/Home/main4";
import Main6 from "../components/Home/main6";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
import "../css/main_dashboard.css";
import dogImg from "../assets/cat.png";
import blogImg from "../assets/dashboard/blog.png";
import calendarImg from "../assets/dashboard/calendar.png";
import { Link } from "react-router-dom";

interface User {
  user_email: string;
  user_name: string;
  user_lastname: string;
  user_old: number;
  user_phone: string;
  user_gender: string;
  user_country: string;
  location_id: number;
  user_province: string;
  province: string;
}
interface Pet {
  pet_id: number;
  pet_name: string;
  type: string;
  species: string;
  pet_old: number;
  pet_gender: string;
}

function Home() {
  const login = useSelector((state: any) => state.app.login);
  const [userData, setUserData] = useState<User | null>(null);
  const [petData, setPetData] = useState<Pet[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("❌ Token eksik, giriş yapmalısın.");
      return;
    }

    const fetchData = async () => {
      try {
        // Profil API çağrısı
        const profileResponse = await fetch(
          "http://localhost:8000/api/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!profileResponse.ok) {
          throw new Error(
            `Profil verisi alınamadı, HTTP Hata Kodu: ${profileResponse.status}`
          );
        }

        const profileData = await profileResponse.json();
        setUserData(profileData.user);

        // Kullanıcının pet bilgilerini çekme
        const petResponse = await fetch("http://localhost:8000/api/pets", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!petResponse.ok) {
          throw new Error(
            `Pet verisi alınamadı, HTTP Hata Kodu: ${petResponse.status}`
          );
        }

        const petData = await petResponse.json();
        setPetData(petData);

        console.log("✅ Kullanıcı ve pet verisi başarıyla çekildi:", {
          profileData,
          petData,
        });
      } catch (err) {
        console.error("❌ Veri çekme hatası oluştu:", err);
      }
    };

    fetchData();
  }, []);

  if (!userData || petData.length === 0) {
    return <p>Loading...</p>;
  }

  const firstPet = petData[0];

  return (
    <>
      {login ? (
        <div className="dashboard">
          <h2 className="welcome">Welcome {userData.user_name}!</h2>

          {/* Pet Info Section */}
          <div className="notes-section">
            <div className="notes-box">
              <h3 className="gradient-title">🐾 Pet Information</h3>
              <p>
                <strong>Pet Name:</strong> {firstPet.pet_name}
              </p>
              <p>
                <strong>Pet Type:</strong> {firstPet.type}
              </p>
              <p>
                <strong>Old:</strong> {firstPet.pet_old} years old
              </p>
              <p>
                <strong>Breed:</strong> {firstPet.species}
              </p>
              <p>
                <strong>Gender:</strong> {firstPet.pet_gender}
              </p>
            </div>

            {/* Motivational Text */}
            <div className="middle-text">
              <p>
                Keep your <span className="gradient-text">furry friend</span>{" "}
                happy and healthy by tracking important{" "}
                <span className="gradient-text">
                  health events and treatments
                </span>
                .
              </p>
            </div>

            <img src={dogImg} alt="Pet" className="dog-img" />
          </div>

          {/* Calendar Section */}
          <div className="info-section">
            <div className="text">
              <Link to="/calendar" className="info-button">
                Check Your Calendar
              </Link>
              <p>
                Stay on top of your pet’s medical schedule with timely reminders
                for vaccinations, treatments, and vet appointments.
              </p>
            </div>
            <Link to="/calendar">
              <img
                src={calendarImg}
                alt="Calendar"
                className="info-img hoverable"
              />
            </Link>
          </div>

          {/* Blog Section */}
          <div className="info-section">
            <div className="text">
              <Link to="/blog" className="info-button">
                Check Blogs
              </Link>
              <p>
                Explore trusted veterinary insights, helpful wellness tips, and
                personalized advice to ensure your pet lives a long, healthy,
                and joyful life.
              </p>
            </div>
            <Link to="/blog">
              <img src={blogImg} alt="Blog" className="info-img hoverable" />
            </Link>
          </div>

          {/* Decorative Background Bottom */}
          <div className="section-bg-bottom"></div>
          <Footer />
        </div>
      ) : (
        <div>
          <Main1 />
          <Main2 />
          <Main3 />
          <Main4 />
          <Main6 />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
