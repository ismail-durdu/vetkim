import React from "react";
import photo from "../assets/vetkim1.jpg";
import Clinic from "../components/clinic";
import { IoSearchOutline } from "react-icons/io5";
import Footer from "../components/footer";

function clinicsPage() {
  return (
    <div className=" px-5 lg:p-20 ">
      <div>
        <img className=" w-30 lg:w-60 mx-auto" src={photo} alt="" />
      </div>
      <div className="mt-3  w-4/5 lg:w-3/5 m-auto flex flex-row gap-2 px-3 py-1 items-center bg-gray-100 rounded">
        <IoSearchOutline />
        <input
          className="w-full"
          type="text"
          placeholder="Search veterinary clinic"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
        <Clinic />
      </div>
      <Footer />
    </div>
  );
}

export default clinicsPage;