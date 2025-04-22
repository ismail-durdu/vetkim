import { useNavigate } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";

type BlogProps = {
  id: string; 
  image: string;
  category: string;
  title: string;
  description: string;
  fullTextFirstPart: string; 
  fullTextSecondPart: string;
};

function SmallBlog({ id, image, category, title, description, fullTextFirstPart, fullTextSecondPart }: BlogProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`, {
      state: { image, category, title, description, fullTextFirstPart, fullTextSecondPart },
    });
  };

  return (
    <div
    className="smallblog py-8 px-5 cursor-pointer hover:shadow-lg hover:scale-105 transform transition duration-300"
    onClick={handleClick}
    >
      <div>
        <img className="w-full" src={image} alt={title} />
      </div>
      <div>
        <h3 className="mt-5 text-purple-600">{category}</h3>
        <div className="flex flex-row justify-between items-center">
          <h1 className="my-3 text-2xl">{title}</h1>
          <LuArrowUpRight />
        </div>
        <p className="opacity-60">{description}</p>
      </div>
    </div>
  );
}

export default SmallBlog;
