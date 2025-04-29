import avatar from "../assets/avatar.png";
import { FaPlus } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import "../css/profile.css";
import { MdCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FaCheck } from "react-icons/fa6";
import { closeTheEditMode, openTheEditMode } from "../store/appSlice";
import Myvet from "../components/myvet";

function Profile() {
  const navigate = useNavigate();
  const editMode = useSelector((state: RootState) => state.app.edit);
  const dispatch = useDispatch();
  const openEditMode = () => {
    dispatch(openTheEditMode());
  };
  const closeEditMode = () => {
    dispatch(closeTheEditMode());
  };

  return (
    <div className="px-5 lg:px-20">
      <div className="profile"></div>

      <div className="mb-5 mt-2 flex flex-row justify-between items-center">
        <div className="w-1/2 flex flex-row items-center gap-3">
          <img className="w-1/3 lg:w-2/5 xl:w-1/4" src={avatar} alt="" />
          <div>
            <h1>Alexa Rawles</h1>
            <p className="opacity-60">alexarawles@gmail.com</p>
          </div>
        </div>
        {editMode ? (
          <div
            onClick={closeEditMode}
            className="flex flex-row items-center px-4 py-1 bg-green-400 rounded-lg text-white"
          >
            <FaCheck /> Apply
          </div>
        ) : (
          <div
            onClick={openEditMode}
            className="flex flex-row items-center px-4 py-1 bg-blue-400 rounded-lg text-white"
          >
            <MdEdit /> Edit
          </div>
        )}
      </div>
      {editMode ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <p>Full Name</p>
            <input
              className="bg-gray-100 rounded w-full px-2 py-2"
              type="text"
              placeholder="Name Surname"
            />
          </div>
          <div>
            <p>Nick Name</p>
            <input
              className="bg-gray-100 rounded w-full px-2 py-2"
              type="text"
              placeholder="Nick Name"
            />
          </div>
          <div>
            <p>Gender</p>
            <input
              className="bg-gray-100 rounded w-full px-2 py-2"
              type="text"
              placeholder="Gender"
            />
          </div>
          <div>
            <p>Country</p>
            <input
              className="bg-gray-100 rounded w-full px-2 py-2"
              type="text"
              placeholder="Country"
            />
          </div>
          <div>
            <p>Language</p>
            <input
              className="bg-gray-100 rounded w-full px-2 py-2"
              type="text"
              placeholder="Language"
            />
          </div>
          <div>
            <p>Time Zone</p>
            <input
              className="bg-gray-100 rounded w-full px-2 py-2"
              type="text"
              placeholder="Time Zone"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <p>Full Name</p>
            <p className="bg-gray-100 rounded w-full px-2 py-2">Emre</p>
          </div>
          <div>
            <p>Nick Name</p>
            <p className="bg-gray-100 rounded w-full px-2 py-2">Şahin</p>
          </div>
          <div>
            <p>Gender</p>
            <p className="bg-gray-100 rounded w-full px-2 py-2">Male</p>
          </div>
          <div>
            <p>Country</p>
            <p className="bg-gray-100 rounded w-full px-2 py-2">Turkey</p>
          </div>
          <div>
            <p>Language</p>
            <p className="bg-gray-100 rounded w-full px-2 py-2">Türkçe</p>
          </div>
          <div>
            <p>Time Zone</p>
            <p className="bg-gray-100 rounded w-full px-2 py-2">????</p>
          </div>
        </div>
      )}

      <div className="flex flex-col mt-10 pet relative">
        <div className="grid grid-cols-4 gradientblue justify-between items-center py-3">
          <h1 className="text-center">Pet Name</h1>
          <h1 className="text-center">Pet Type</h1>
          <h1 className="text-center">Breed</h1>
          <h1 className="text-center">Gender</h1>
        </div>

        <Myvet />
      </div>

      <button className="flex flex-row items-center px-4 py-1 my-5 gap-2 bg-blue-100 text-blue-500 rounded-lg ">
        <FaPlus /> Add New Pet
      </button>

      <div>
        <h1 className="font-bold ">My E-mail Address</h1>
        <div className="flex flex-row items-center gap-2 my-3">
          <div className="bg-blue-100 p-1.5 rounded-full text-blue-500">
            <IoIosMail />
          </div>
          <p className="opacity-70">alexarawles@gmail.com</p>
        </div>

        <button className="flex flex-row items-center px-4 py-1 my-5 gap-2 bg-blue-100 text-blue-500 rounded-lg ">
          <FaPlus /> Add E-mail Address
        </button>
      </div>

      <div>
        <h1 className="font-bold ">My Phone Number</h1>
        <div className="flex flex-row items-center gap-2 my-3">
          <div className="bg-blue-100 p-1.5 rounded-full text-blue-500">
            <MdCall />
          </div>
          <p className="opacity-70">0512 513 5411</p>
        </div>

        <button className="flex flex-row items-center px-4 py-1 my-5 gap-2 bg-blue-100 text-blue-500 rounded-lg  ">
          <FaPlus /> Add Phone Number
        </button>
      </div>

      {/* ✅ Yönlendirme butonu: Go to Calendar */}
      <button
        onClick={() => navigate("/calendar")}
        className="flex flex-row items-center px-4 py-2 my-5 gap-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        📅 Go to Calendar
      </button>
    </div>
  );
}

export default Profile;
