import React from "react";
import { GoSearch } from "react-icons/go";
import SmallBlog from "../components/smallblog";
import { FaArrowDown } from "react-icons/fa6";
import Footer from "../components/footer";

function pethealth() {
  return (
    <div>
      <div className="text-center">
        <h3 className="inline-block mt-8 bg-purple-200 py-1 px-4 text-purple-700 rounded-3xl">
          Pet Blog
        </h3>
        <h1 className="my-5 text-3xl lg:text-5xl text-purple-900">
          Resources and insights
        </h1>
        <h3 className="text-lg lg:text-xl text-purple-500 mb-5 ">
          The latest industry news, interviews, technologies, and resources.
        </h3>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex flex-row items-center gap-2 border border-gray-300 rounded-2xl px-4 py-2">
          <GoSearch />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 py-10">
        <SmallBlog />
      </div>
      <div className="flex justify-center bg-purple-200 text-purple-500 w-35 mx-auto py-2 mb-7 rounded-lg">
        <div className="flex flex-row gap-2 items-center">
          <FaArrowDown />
          Load More
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default pethealth;
