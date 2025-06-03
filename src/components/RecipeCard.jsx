import { Link } from "react-router-dom";

const RecipeCard = (props) => {
    const { id, image, title } = props.recipe;
    return (
        <Link
            to={`/recipes/details/${id}`}
            className="block w-full sm:w-[48%] md:w-[23vw] mr-0 md:mr-3 rounded duration-150 hover:scale-101 mb-6"
        >
            <img
                className="object-cover w-full h-48 md:h-[400px] rounded-lg"
                src={image}
                alt={title}
            />
            <h1 className="text-center text-black font-bold mt-2 bg-white rounded opacity-[0.8] px-2 py-1 text-base md:text-lg truncate">
                {title}
            </h1>
        </Link>
    );
};

export default RecipeCard;