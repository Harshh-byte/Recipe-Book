import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, cuisine } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="group block overflow-hidden rounded-3xl border border-[#f2d8c3] bg-[#fff8f0] shadow-[0_20px_35px_rgba(130,83,54,0.12)] hover:-translate-y-1"
    >
      <div className="relative h-52 w-full overflow-hidden md:h-56">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#27130d]/85 to-transparent px-4 py-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#ffe0ca]">
            {cuisine || "Cuisine"}
          </p>
        </div>
      </div>

      <div className="space-y-2 px-4 py-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-[#532c1b]">
          {title}
        </h3>
        <span className="inline-block rounded-full border border-[#efd1bc] bg-white/70 px-3 py-1 text-xs font-medium text-[#8f573f]">
          View Details
        </span>
      </div>
    </Link>
  );
};

export default RecipeCard;
