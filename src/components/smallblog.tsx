import React from "react";
import pet1 from "../assets/Image.jpg";
import { LuArrowUpRight } from "react-icons/lu";
import "../css/smallblog.css";

function smallblog() {
  return (
    <div className="smallblog py-8 px-5">
      <div>
        <img className="w-full" src={pet1} alt="" />
      </div>
      <div>
        <h3 className="mt-5 text-purple-600">Puppy Care</h3>
        <div className="flex flex-row justify-between items-center">
          <h1 className="my-3 text-2xl">New Kitten Checklist</h1>
          <LuArrowUpRight />
        </div>
        <p className="opacity-60">
          Bringing home a kitten? Here’s a simple, vet-approved checklist of
          everything your new feline friend will need—from the right litter box
          to the best kitten food. Preparation makes all the difference.
        </p>
      </div>
    </div>
  );
}

export default smallblog;
