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
import { useCallback, useEffect, useState } from "react";
import avatarMale from "../assets/avatars/male.png";
import avatarFemale from "../assets/avatars/female.png";

interface User {
  user_email: string;
  user_name: string;
  user_lastname: string;
  user_old: number;
  user_phone: string;
  user_gender: string;
  user_country: string;
  location_id: number;
  user_province: string;
  province: string;
}

function Profile() {
  const getAvatar = () => {
    if (userData?.user_gender === "Erkek") {
      return avatarMale;
    } else if (userData?.user_gender === "Kadin") {
      return avatarFemale;
    }
    return avatar;
  };
  const navigate = useNavigate();
  const editMode = useSelector((state: RootState) => state.app.edit);
  const dispatch = useDispatch();
  const openEditMode = useCallback(() => {
    dispatch(openTheEditMode());
  }, [dispatch]);

  const closeEditMode = useCallback(() => {
    dispatch(closeTheEditMode());
  }, [dispatch]);
  const [userData, setUserData] = useState<User>(null!);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:8000/api/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Profil verisi alınamadı");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data.user);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);

  return (
    <div className="px-5 pb-30 lg:px-20 ">
      <div className="profile"></div>

      <div className="mb-5 mt-2 flex flex-row justify-between items-center">
        <div className="w-1/2 flex flex-row items-center gap-3">
          <img
            className="w-1/3 rounded-full lg:w-1/5 xl:w-1/6"
            src={getAvatar()}
            alt=""
          />
          <div>
            <h1 className="lg:text-lg font-bold">
              {userData?.user_name} {userData?.user_lastname}
            </h1>
            <p className="opacity-60">{userData?.user_email}</p>
          </div>
        </div>
        {editMode ? (
          <div
            onClick={closeEditMode}
            className="flex flex-row cursor-pointer items-center px-4 py-1 bg-gradient-to-r from-blue-400 to-purple-300 rounded-lg text-white"
          >
            <FaCheck /> Apply
          </div>
        ) : (
          <div
            onClick={openEditMode}
            className="flex flex-row cursor-pointer items-center px-4 py-1 bg-gradient-to-r from-purple-400 to-blue-300 rounded-lg text-white"
          >
            <MdEdit /> Edit
          </div>
        )}
      </div>
      {editMode ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <p className="font-bold">First Name</p>
            <input
              className="bg-gray-100 border-2 border-blue-300 outline-none rounded w-full px-2 py-2 focus:border-blue-600"
              type="text"
              placeholder="Name Surname"
              value={userData?.user_name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, user_name: e.target.value }))
              }
            />
          </div>
          <div>
            <p className="font-bold">Last Name</p>
            <input
              className="bg-gray-100 border-2 border-blue-300 outline-none rounded w-full px-2 py-2 focus:border-blue-600"
              type="text"
              placeholder="Last Name"
              value={userData?.user_lastname}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  user_lastname: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <p className="font-bold">Gender</p>
            <input
              className="bg-gray-100 border-2 border-blue-300 outline-none rounded w-full px-2 py-2 focus:border-blue-600"
              type="text"
              placeholder="Gender"
              value={userData?.user_gender}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  user_gender: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <p className="font-bold">Country</p>
            <input
              className="bg-gray-100 border-2 border-blue-300 outline-none rounded w-full px-2 py-2 focus:border-blue-600"
              type="text"
              placeholder="Country"
              value="Turkey"
            />
          </div>
          <div>
            <p className="font-bold">Age</p>
            <input
              className="bg-gray-100 border-2 border-blue-300 outline-none rounded w-full px-2 py-2 focus:border-blue-600"
              type="text"
              placeholder="Language"
              value={userData?.user_old}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  user_old: parseInt(e.target.value),
                }))
              }
            />
          </div>
          <div>
            <p className="font-bold">Province</p>
            <input
              className="bg-gray-100 border-2 border-blue-300 outline-none rounded w-full px-2 py-2 focus:border-blue-600"
              type="text"
              placeholder="Province"
              value={userData?.province}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  location_id: parseInt(e.target.value),
                }))
              }
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div>
            <p className="font-bold">First Name</p>
            <p className="bg-gray-100 border-2 border-purple-500 rounded w-full px-2 py-2">
              {userData?.user_name}
            </p>
          </div>
          <div>
            <p className="font-bold">Last Name</p>
            <p className="bg-gray-100 border-2 border-purple-500 rounded w-full px-2 py-2">
              {userData?.user_lastname}
            </p>
          </div>
          <div>
            <p className="font-bold">Gender</p>
            <p className="bg-gray-100 border-2 border-purple-500 rounded w-full px-2 py-2">
              {userData?.user_gender}
            </p>
          </div>
          <div>
            <p className="font-bold">Country</p>
            <p className="bg-gray-100 border-2 border-purple-500 rounded w-full px-2 py-2">
              Turkey
            </p>
          </div>
          <div>
            <p className="font-bold">Age</p>
            <p className="bg-gray-100 border-2 border-purple-500  rounded w-full px-2 py-2">
              {userData?.user_old}
            </p>
          </div>
          <div>
            <p className="font-bold">Province</p>
            <p className="bg-gray-100 border-2 border-purple-500 rounded w-full px-2 py-2">
              {userData?.province}
            </p>
          </div>
        </div>
      )}

      <div className="mt-10 lg:mt-24 mb-4 text-2xl lg:text-3xl font-bold text-purple-800 font-sans tracking-wide flex items-center gap-3">
        🐾{" "}
        <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-600 bg-clip-text text-transparent">
          Pet Information
        </span>
      </div>

      <div className="flex flex-col  pet relative">
        <div className="grid grid-cols-4 gradientblue justify-between items-center py-3">
          <h1 className="text-center">Pet Name</h1>
          <h1 className="text-center">Pet Type</h1>
          <h1 className="text-center">Breed</h1>
          <h1 className="text-center">Gender</h1>
        </div>

        <Myvet />
      </div>

      <button className="flex flex-row items-center px-4 py-1 my-5 gap-2 bg-purple-300 hover:bg-purple-600 hover:scale-105 transition-all duration-200 text-white rounded-lg shadow-md">
        <FaPlus /> Add New Pet
      </button>

      <div className="mt-10 lg:mt-24 mb-4 text-2xl lg:text-3xl font-bold text-purple-800 font-sans tracking-wide flex items-center gap-3">
        <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-600 bg-clip-text text-transparent">
          Contact Information
        </span>
      </div>

      <div>
        <h1 className="font-bold ">My E-mail Address</h1>
        <div className="flex flex-row items-center gap-2 my-3">
          <div className="bg-purple-400 p-1.5 rounded-full text-white">
            <IoIosMail />
          </div>
          <p className="opacity-70">{userData?.user_email}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold ">My Phone Number</h1>
        <div className="flex flex-row items-center gap-2 my-3">
          <div className="bg-purple-400 p-1.5 rounded-full text-white">
            <MdCall />
          </div>
          <p className="opacity-70">{userData?.user_phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
