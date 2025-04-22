import VectorBlob from "../../assets/Vector1.png"; // doğru yol olduğuna emin ol

function FeatureList() {
  const additionalFeatures = [
    {
      title: "Nearby 🐾",
      desc: "Find clinics near you quickly. See them on the map, get directions, and book instantly.",
    },
    {
      title: "Security 🐾",
      desc: "Your data is stored safely and privately. Protecting both your and your pet’s info is our top priority.",
    },
    {
      title: "Tracking 🐾",
      desc: "Keep tabs on vaccination and care schedules automatically. Never miss an important date again.",
    },
    {
      title: "Records 🐾",
      desc: "Access your pet’s full health history anytime. Store exams, treatments, and vaccination info securely.",
    },
  ];

  return (
    <div className="relative space-y-6 max-w-3xl ml-28 mb-32">

      {/* Blob background */}
      <img
        src={VectorBlob}
        alt="Blob Background"
        className="absolute top-0 left-0 w-[600px] opacity-20 -z-10 pointer-events-none"
      />

      {/* Content */}
      {additionalFeatures.map((item, idx) => (
        <div key={idx}>
          <h3 className="text-2xl font-bold text-[#4B5563]">{item.title}</h3>
          <p className="text-gray-600 text-xl">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
