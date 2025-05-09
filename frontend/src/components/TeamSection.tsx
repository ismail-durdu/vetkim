import { FaTwitter, FaLinkedin } from "react-icons/fa";

import member1 from "../assets/avatar.jpg";
import member2 from "../assets/avatar.jpg";
import member3 from "../assets/avatar.jpg";

const team = [
  { name: "Pelin Akduran", title: "Software Engineer", img: member1 },
  { name: "Emre Şahin", title: "Software Engineer", img: member2 },
  { name: "İsmail Durdu", title: "Software Engineer", img: member3 },
];

const TeamSection = () => {
  return (
    <div className="py-5 bg-white mb-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center mb-4 ">
          <h2 className="text-4xl font-bold text-[#4B5563]">Meet our team</h2>
          <p className="text-purple-300 text-sm mt-6 leading-relaxed">
            Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {team.map((member, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] bg-white"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 object-cover bg-gray-200"
              />
              <div className="p-4">
                <h4 className="text-slate-900 text-sm font-semibold">{member.name}</h4>
                <p className="text-slate-600 text-xs mt-1">{member.title}</p>
                <div className="flex space-x-3 mt-4">
                    <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                    >
                        <FaTwitter size={16} />
                        </a>
                        <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center bg-[#0077b5] text-white rounded-full hover:bg-[#005582] transition"
                        >
                        <FaLinkedin size={16} />
                        </a>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
