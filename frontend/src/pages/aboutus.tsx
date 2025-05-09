import React from "react";
import Footer from "../components/footer";
import TeamSection from "../components/TeamSection";
import AboutContent from "../components/AboutContent";
import FaqSection  from "../components/FaqSection";

const AboutUs: React.FC = () => {
  return (
    <div className="px-5 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto px-4">
          <AboutContent />
          <TeamSection />   
          <FaqSection />
          <Footer />
      </div> 
    </div>
  );
};

export default AboutUs;
