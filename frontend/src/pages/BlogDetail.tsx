import { useLocation, useParams } from "react-router-dom";
import Footer from "../components/footer";

function BlogDetail() {
  useParams();
  const location = useLocation();
  const {
    image,
    category,
    title,
    description,
    fullTextFirstPart,
    fullTextSecondPart,
  } = location.state || {};

  return (
    <div className="px-6 md:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-10 mb-10">
        <div className="lg:w-1/3">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="lg:w-2/3">
          <h3 className="text-purple-500 font-medium">{category}</h3>
          <h1 className="text-4xl font-bold mt-2 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-4">{description}</p>
          <p className="text-base text-gray-800 text-l text-[#4B5563] text-justify">
            {fullTextFirstPart}
          </p>
        </div>
      </div>

      <div className="max-w-20xl whitespace-pre-line text-left mb-30">
        <p className="text-base text-gray-800 text-l text-[#4B5563] text-justify">
          {fullTextSecondPart}
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetail;
