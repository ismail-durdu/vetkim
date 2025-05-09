import React from "react";
import SoftwareTeam from "../assets/robots.png";

const AboutContent: React.FC = () => {
  return (
    <div className="relative overflow-hidden">

      <div className="flex flex-col lg:flex-row items-start gap-10 mb-24 mt-12">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-6 text-[#4B5563]">
            <span className="text-purple-300">Who</span> We Are
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            The health and happiness of our furry friends mean the world to us.
            That’s why we created a platform that connects veterinary clinics
            with pet owners in a simple, secure, and efficient way.
          </p>
          <p className="text-xl text-gray-700 mb-4">
            Our goal is to help pet owners easily track their pets’ health
            records, vaccinations, and upcoming appointments—all in one place.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6 text-xl">
            <li>Easily find and book appointments with veterinary clinics,</li>
            <li>View available time slots and reserve instantly,</li>
            <li>Keep all your pet’s health information organized,</li>
            <li>
              Get reminders for vaccinations and check-ups—never miss a thing.
            </li>
          </ul>

          <p className="text-xl text-gray-700 mb-12">
            We bring technology to the service of animals—because every pet
            deserves a healthier, happier life.
          </p>
        </div>

        <div className="lg:w-1/3 hidden lg:block w-[200px] h-[100px] object-contain">
          <img
            src={SoftwareTeam}
            alt="Software Team Illustration"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;