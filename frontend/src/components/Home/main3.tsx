import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import photo from "../../assets/vetkimphoto.jpg";
import "../../css/main3.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import dot2 from "../../assets/dot2.svg";
import "../../css/secondary-button.css";

function main3() {
  return (
    <div className="relative main3 py-10">
      <div className=" flex flex-col lg:flex-row px-5 gap-10 lg:gap-25 lg:px-20  py-15  items-center justify-between">
        <div className="content flex flex-col gap-3 lg:w-6/12">
          <h1 className="text-2xl lg:text-4xl leading-tight">
            Pet Owners Trust Us to
          </h1>
          <h1 className="text-2xl lg:text-4xl leading-normal font-bold">
            Simplify Veterinary Care!
          </h1>
          <p className="text-lg lg:text-xl opacity-60 mb-5 leading-normal">
            Our platform doesn’t just connect you with clinics—it enhances your
            entire pet care journey. From finding trusted veterinarians to
            managing appointments, we ensure a smooth and stress-free experience
            for you and your pet.
          </p>
          <div className="flex flex-row items-center text-purple-800 gap-2">
            <Link
              className="btn flex flex-row gap-2 items-center"
              to={"/notFound"}
            >
              See more Informations <FaArrowRight />
            </Link>
          </div>
        </div>

        <img className="lg:w-6/12" src={photo} alt="" />
      </div>
      <div className="px-5 lg:my-20 lg:px-20">
        <div className="main3_bottom">
          <h1 className="text-xl lg:text-3xl">Meet the Experts Caring</h1>
          <h1 className="text-xl font-bold lg:text-3xl mt-2">for Your Pets</h1>
        </div>
        <div className="hidden md:flex flex-row absolute right-20 gap-4 bottom-20 text-4xl text-purple-500">
          <IoArrowBackCircleOutline />
          <IoArrowForwardCircleOutline />
        </div>
        <div>
          <img className="dot2 w-8 lg:w-15" src={dot2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default main3;
