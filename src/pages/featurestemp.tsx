import FeatureSection from "../components/Home/FeatureSection";
import FeatureList from "../components/Home/FeatureList";
import Footer from "../components/footer";
import BritishCat from "../assets/cat.png";
import VectorBlob from "../assets/Vector1.png";

function Features_temp() {
  return (
    <div className="px-6 md:px-16 py-10 bg-white relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#4B5563]">
        Features
      </h1>

      <FeatureSection />


      <img
        src={VectorBlob}
        alt="Background blob"
        className="absolute top-[80%] right-[5%] "
      />


      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20 relative z-10">
        <div className="w-full lg:w-2/3">
          <FeatureList />
        </div>

        <div className="hidden lg:flex justify-center w-full lg:w-1/3">
          <img
            src={BritishCat}
            alt="British Shorthair Cat"
            className="w-[500px] object-contain"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Features_temp;
