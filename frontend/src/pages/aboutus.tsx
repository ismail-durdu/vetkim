import Footer from "../components/footer";
import SoftwareTeam from "../assets/robots.png";
import VectorBlob from "../assets/circle1.png"; // Blob arka plan

function AboutUs() {
  return (
    <div className="px-5 lg:px-20 py-10 relative overflow-hidden">
      <img
        src={VectorBlob}
        alt="Background Blob"
        className="absolute top-[70%] right-[5%]"
      />

      <img
        src={VectorBlob}
        alt="Background Blob Left"
        className="absolute top-[10%] left-0"
      />

      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* SOL METİN ALANI */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-6 text-3xl text-[#4B5563]">
            <span className="text-purple-300">Who</span> We Are
          </h1>
          <p className="text-lg text-gray-700 mb-4 text-xl">
            The health and happiness of our furry friends mean the world to us.
            That’s why we created a platform that connects veterinary clinics
            with pet owners in a simple, secure, and efficient way.
          </p>
          <p className="text-lg text-gray-700 mb-4 text-xl">
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

          <p className="text-xl text-gray-700 mb-52">
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

      <Footer />
    </div>
  );
}

export default AboutUs;
