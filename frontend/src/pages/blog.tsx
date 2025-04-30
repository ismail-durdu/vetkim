import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import SmallBlog from "../components/smallblog";
import { FaArrowDown } from "react-icons/fa6";
import Footer from "../components/footer";

interface Blog {
  blog_id: number;
  blog_name: string;
  blog_text: string;
}

function pethealth() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (bottom) {
        setVisibleCount((prev) => prev + 5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogs = blogs.filter((blog) =>
    blog.blog_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleBlogs = filteredBlogs.slice(0, visibleCount);

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
      <div className="flex justify-center mt-4 w-full">
        <div className="flex flex-row items-center w-3/6 gap-2 border border-gray-300 rounded-2xl px-4 py-2">
          <GoSearch />
          <input
            type="text"
            placeholder="Search for many animal related articles"
            className="outline-none w-full "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:px-20 py-10 gap-5">
        {visibleBlogs.map((blog: Blog) => (
          <SmallBlog key={blog.blog_id} blog={blog} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default pethealth;
