import React from "react";
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

function home() {
  const login = useSelector((state: any) => state.app.login);
  return (
    <>
      {login ? (<div className="dashboard">
      <h2 className="welcome">Welcome Pelin!</h2>

      {/* Pet Info Section */}
      <div className="notes-section">
        <div className="notes-box">
          <h3 className="gradient-title">🐾 Pet Information</h3>
          <p><strong>Pet Name:</strong> Felix</p>
          <p><strong>Pet Type:</strong> Cat</p>
          <p><strong>Old:</strong> 2</p>
          <p><strong>Breed:</strong> British Shorthair</p>
          <p><strong>Gender:</strong> Female</p>
        </div>

        {/* Motivational Text */}
        <div className="middle-text">
          <p>
            Keep your <span className="gradient-text">furry friend</span> happy and healthy by tracking important{" "}
            <span className="gradient-text">health events and treatments</span>.
          </p>
        </div>

        <img src={dogImg} alt="Pet" className="dog-img" />
      </div>

      {/* Calendar Section */}
      <div className="info-section">
        <div className="text">
          <Link to="/calendar" className="info-button">Check Your Calendar</Link>
          <p>
            Stay on top of your pet’s medical schedule with timely reminders for vaccinations,
            treatments, and vet appointments.
          </p>
        </div>
        <Link to="/calendar">
          <img src={calendarImg} alt="Calendar" className="info-img hoverable" />
        </Link>
      </div>

      {/* Blog Section */}
      <div className="info-section">
        <div className="text">
          <Link to="/blog" className="info-button">Check Blogs</Link>
          <p>
            Explore trusted veterinary insights, helpful wellness tips, and personalized advice
            to ensure your pet lives a long, healthy, and joyful life.
          </p>
        </div>
        <Link to="/blog">
          <img src={blogImg} alt="Blog" className="info-img hoverable" />
        </Link>
      </div>

      {/* Decorative Background Bottom */}
      <div className="section-bg-bottom"></div>
      <Footer />
    </div>) : (
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

export default home;
