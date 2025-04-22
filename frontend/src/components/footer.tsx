import React from "react";
import logo from "../assets/vetkim-logo.jpg";
import { Link } from "react-router-dom";
import "../css/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function footer() {
  return (
    <div>
      <div className="footer   ">
        <div>
          <Link to={"/"}>
            <div className="flex flex-row items-center mb-4">
              <img className="mr-1 " src={logo} alt="" />
              <p className="font-semibold">VETKİM</p>
            </div>
          </Link>
          <div>
            <p className="opacity-60 leading-loose text-sm md:text-md lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              molestias, distinctio dolor, minus perspiciatis vitae ad quam
              officiis eveniet adipisci illum enim amet reiciendis. Hic
              perferendis debitis dolor asperiores modi earum ad esse,
              praesentium ab maiores assumenda nemo laborum ipsam maxime atque
              ex tempora quae cum. Provident non quo quisquam?
            </p>
          </div>
        </div>
        <div className="text-sm md:text-md lg:text-lg">
          <h1 className="text-2xl mb-2 text-md md:text-lg ">Links</h1>
          <div className="flex flex-col gap-3 opacity-60">
            <Link to={"/"}>Home</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"/features"}>Features</Link>
            <Link to={"/clinics"}>Veterinary Clinics</Link>
            <Link to={"/blog"}>Blog</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm md:text-md lg:text-lg">
          <h1 className="text-2xl text-md md:text-lg">Contact Us</h1>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            voluptatibus saepe ad dolor. Odio ratione alias ullam harum animi
            rerum!
          </p>
          <p className="opacity-60">+923183561921</p>
        </div>
        <div className="flex flex-row gap-2 items-end">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="info text-sm md:text-md lg:text-lg ">
        <p className="text-sm opacity-50 text-center my-6">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default footer;
