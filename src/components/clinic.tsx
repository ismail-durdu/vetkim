import React from "react";
import logo1 from "../assets/logos/logo5.svg";
import { IoMdStar } from "react-icons/io";
function clinic() {
  return (
    <div>
      <div>
        <img src={logo1} alt="" />
      </div>
      <div>
        <h1>Address:</h1>
        <p>123 Pet Care Avenue, Suite 5B, Greenfield, NY 10522, USA</p>
      </div>
      <div>
        <div>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}

export default clinic;
