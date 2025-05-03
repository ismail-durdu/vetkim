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
      <div className="footer  ">
        <div>
          <Link to={"/"}>
            <div className="flex flex-row items-center mb-4">
              <img className="mr-1 " src={logo} alt="" />
              <p className="font-semibold">VETKİM</p>
            </div>
          </Link>
          <div>
            <p className="opacity-60 leading-loose">
              The health and happiness of our furry friends mean the world to
              us. Our goal is to help pet owners easily track their pets’ health
              records, vaccinations, and upcoming appointments—all in one place.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-2">Links</h1>
          <div className="flex flex-col gap-3 opacity-60">
            <Link to={"/"}>Home</Link>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"/features"}>Features</Link>
            <Link to={"/clinics"}>Veterinary Clinics</Link>
            <Link to={"/blog"}>Blog</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">Contact Us</h1>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            voluptatibus saepe ad dolor. Odio ratione alias ullam harum animi
            rerum!
          </p>
          <p className="opacity-60">+923183561921</p>
        </div>
        <div className="z-30 flex flex-row gap-2 items-end">
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
      <div className="info ">
        <p className="text-sm opacity-50 text-center my-6">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default footer;
