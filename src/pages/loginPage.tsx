import React from "react";
import vetkim from "../assets/vetkim1.jpg";
import logo from "../assets/vetkim-logo.jpg";
import "../css/loginpage.css";

function loginPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5 pb-10">
      <div className="w-8/12 lg:w-4/12">
        <img className="" src={vetkim} alt="" />
        <p className="text-3xl lg:text-5xl">
          A Great <span className="a">way</span> to
        </p>
        <p className="text-3xl font-bold lg:text-5xl">
          find a veterinary clinic for your <span className="b">friends</span>
        </p>
      </div>
      <div className="border-2 border-black px-5 py-10 w-8/12 md:5/12 lg:w-4/12 ">
        <div className="flex flex-row justify-center">
          <img className="mr-2" src={logo} alt="" />{" "}
          <p className="font-semibold">VETKİM</p>
        </div>
        <div className="flex flex-col justify-between gap-6 my-5">
          <input
            className="bg-gray-100 px-2 py-1 rounded"
            type="text"
            placeholder="Username, phone or email"
          />
          <input
            className="bg-gray-100 px-2 py-1 rounded"
            type="text"
            placeholder="password"
          />
          <button className=" bg-purple-400 py-1.5 rounded-xl cursor-pointer">
            log in
          </button>
        </div>
        <div>
          <p className="or">or</p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <p className="text-center opacity-50">Forgot password?</p>
          <p className="text-center opacity-50">
            Don't have an account? Sing up
          </p>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
