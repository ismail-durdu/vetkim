const faqData = [
  {
    title: "How can I create an account?",
    description:
      "Click on the “Sign Up” button and enter your email address and a password to register quickly and securely.",
  },
  {
    title: "Can I add my pet through the app?",
    description:
      "Yes, you can. Simply go to the “Profile” page and click on “Add New Pet” to register details such as species, gender, and age of your pet.",
  },
  {
    title: "How can I search for veterinary clinics?",
    description:
      "After registering, go to the “Veterinary Clinics” section where you can filter clinics by name or city to find the right one for you.",
  },
  {
    title: " How can I book an appointment?",
    description:
      "Find your preferred clinic under the “Veterinary Clinics” section, then click “Take Appointment” to choose an available date and time.",
  },
];

const FaqSection = () => {
  return (
    <div className="bg-white py-12 mt-4">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl text-center font-bold text-[#4B5563] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-10">
          {faqData.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-l text-slate-700 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
