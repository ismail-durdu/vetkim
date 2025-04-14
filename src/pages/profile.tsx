import React from "react";
import avatar from "../assets/avatar.png";
import { FaPlus } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { MdEdit } from "react-icons/md";
import "../css/profile.css";
import { MdCall } from "react-icons/md";

function profile() {
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
        <div className="flex flex-row items-center px-4 py-1 bg-blue-400 rounded-lg text-white">
          <MdEdit /> Edit
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2">
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

      <div className="mt-10 pet relative">
        <div className="flex flex-row justify-between mx-3 py-3">
          <h1>Pet Name</h1>
          <h1>Pet Type</h1>
          <h1>Breed</h1>
          <h1>Gender</h1>
        </div>
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
    </div>
  );
}

export default profile;
