import React from "react";
import { Link } from "react-router-dom";
import dec from "../../assets/decoration.svg";
import "../../css/main6.css";

function main6() {
  return (
    <div className="main6 w-9/12 mx-auto my-15 rounded-2xl">
      <div className="flex flex-col gap-5 py-10  items-center justify-between lg:flex-row w-10/12 lg:w-9/12 mx-auto lg:gap-20 ">
        <div>
          <p className="text-2xl lg:text-3xl font-bold text-center lg:w-8/12 lg:text-start">
            Easily Book & Track Your Pet’s Veterinary Care!
          </p>
        </div>
        <div className="relative lg:mr-10 ">
          <Link
            className="decmid  text-center main6btn h-10 w-50 pt-1.5 "
            to={"/signup"}
          >
            Sign up now!
          </Link>
          <img className="h-40" src={dec} alt="" />
        </div>
      </div>
    </div>
  );
}

export default main6;
