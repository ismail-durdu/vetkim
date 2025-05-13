function FeatureSection() {
  const featureCards = [
    {
      title: "Booking",
      desc: "Easily schedule appointments with veterinary clinics. ",
    },
    {
      title: "Connect",
      desc: "Communicate directly with your trusted veterinary clinic.",
    },
    {
      title: "Profiles",
      desc: "Manage multiple pets with individual profiles. Switch between them easily and stay organized.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-32">
      {featureCards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white hover:bg-[#E0E7F5] shadow-md rounded-md p-6 w-full max-w-sm text-center border hover:shadow-lg transition-colors duration-300"

        >
          <div className="mb-4 text-[#E0E7F10] text-2xl ">🐾</div>
          <h2 className="text-2xl font-bold mb-2 text-[#4B5563]">{card.title}</h2>
          <p className="text-gray-600 text-xl">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureSection;
