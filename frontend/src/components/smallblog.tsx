import React, { useState } from "react";

import { LuArrowUpRight } from "react-icons/lu";
import "../css/smallblog.css";

interface Blog {
  blog_name: string;
  blog_text: string;
  blog_image: string;
}

function SmallBlog({ blog }: { blog: Blog }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="smallblog pt-8 pb-8 px-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out rounded"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-center">
          <img className="w-5/6" src={`/blog/${blog.blog_image}`} alt="" />
        </div>
        <div>
          <div className="flex flex-row justify-between items-center">
            <h1 className="my-3 text-2xl font-medium">{blog.blog_name}</h1>
            <LuArrowUpRight />
          </div>

          <div className="relative max-h-40 overflow-hidden">
            <p className="opacity-60">{blog.blog_text}</p>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-xl p-6 w-[90%] max-w-xl sm:max-w-lg transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/blog/${blog.blog_image}`}
              alt="Blog"
              className="w-4/6 mx-auto  object-cover rounded-lg mb-4 shadow-md"
            />

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {blog.blog_name}
            </h2>

            <p className="text-gray-800 leading-relaxed">{blog.blog_text}</p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 -right-10 text-gray-400 hover:text-gray-800 text-2xl font-semibold transition-colors duration-500"
              aria-label="Close"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SmallBlog;
