import React from "react";
import vetkim from "../../assets/vetkim1.jpg";
import { Link } from "react-router-dom";
import dot from "../../assets/dot.svg";
import "../../css/header.css";
import "../../css/main6.css";
import "../../css/secondary-button.css";

function main1() {
  return (
    <div className="main-1 relative flex flex-col md:flex-row items-center py-4 px-5 lg:px-20 ">
      <div className="mb-4">
        <div className="">
          <div>
            <p className="text-3xl lg:text-5xl">
              A Great <span className="a">way</span> to
            </p>
            <p className="text-3xl font-bold lg:text-5xl">
              find a veterinary clinic for your{" "}
              <span className="b">friends</span>
            </p>
          </div>
          <div className="w-5/6">
            <p className="text-xl mt-6 mb-10 2xl:text-2xl">
              We help you find a veterinary clinic and track your pet’s health
              and care needs, making it easier than ever to take care of them.
            </p>
          </div>

          <Link
            className="btn flex flex-row gap-2 items-center w-40"
            to={"/signup"}
          >
            Let's get started!
          </Link>
        </div>
      </div>
      <div className="lg:w-8/12 xl:w-8/12 2xl:w-5/12">
        <img src={vetkim} alt="" />
      </div>
      <img className="dot z-10 w-8 lg:w-15" src={dot} alt="" />
    </div>
  );
}

export default main1;
