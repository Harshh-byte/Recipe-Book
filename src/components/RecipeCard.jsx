import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="block w-full sm:w-[48%] md:w-[23%] rounded-lg overflow-hidden shadow-md transform transition duration-200 hover:scale-105 group"
    >
      <div className="relative w-full h-48 md:h-60 lg:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:brightness-90 transition duration-200"
        />
      </div>
      <div className="bg-white text-black text-center px-3 py-2 font-semibold text-sm md:text-base truncate">
        {title}
      </div>
    </Link>
  );
};

export default RecipeCard;