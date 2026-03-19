import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";

const SingleRecipe = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find((r) => String(r.id) === String(id));

  if (!recipe) {
    return (
      <section className="route-enter surface-panel mx-auto mt-10 max-w-3xl rounded-3xl p-10 text-center">
        <h2 className="text-3xl font-semibold text-[#5f3524]">
          Recipe not found
        </h2>
        <p className="mt-3 text-[#8e5f49]">
          This recipe may have been removed or the link is invalid.
        </p>
        <div className="mt-6">
          <Link
            to="/recipes"
            className="rounded-full bg-[#c96843] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a55335]"
          >
            Back to Recipes
          </Link>
        </div>
      </section>
    );
  }

  const ingredientsArr = Array.isArray(recipe.ingredients)
    ? recipe.ingredients
    : String(recipe.ingredients || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

  const preparationArr = Array.isArray(recipe.preparation)
    ? recipe.preparation
    : String(recipe.preparation || "")
        .split(/[.\n]/)
        .filter(Boolean)
        .map((step) => step.trim());

  return (
    <section className="route-enter space-y-6 pb-8">
      <div className="surface-panel overflow-hidden rounded-[2rem]">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-72 w-full object-cover md:h-[24rem]"
        />
        <div className="space-y-4 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b1704e]">
            {recipe.cuisine}
          </p>
          <h2 className="text-4xl font-semibold text-[#51291a]">
            {recipe.title}
          </h2>
          <p className="text-[#7a5241]">Created by {recipe.chef}</p>
          <p className="leading-relaxed text-[#734d3c]">{recipe.description}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="surface-panel rounded-3xl p-6">
          <h3 className="mb-3 text-2xl font-semibold text-[#5c321f]">
            Ingredients
          </h3>
          <ul className="space-y-2 text-sm text-[#7c5342]">
            {ingredientsArr.length === 0 && <li>No ingredients listed.</li>}
            {ingredientsArr.map((item, index) => (
              <li
                key={index}
                className="rounded-xl border border-[#f0dac8] bg-white/70 px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="surface-panel rounded-3xl p-6">
          <h3 className="mb-3 text-2xl font-semibold text-[#5c321f]">
            Preparation
          </h3>
          <ol className="space-y-2 text-sm text-[#7c5342]">
            {preparationArr.length === 0 && (
              <li>No preparation steps listed.</li>
            )}
            {preparationArr.map((step, index) => (
              <li
                key={index}
                className="rounded-xl border border-[#f0dac8] bg-white/70 px-3 py-2"
              >
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </article>
      </div>

      <div>
        <Link
          to="/recipes"
          className="inline-block rounded-full border border-[#ddb89f] bg-white/85 px-6 py-3 text-sm font-semibold text-[#724434] hover:border-[#c98868]"
        >
          Back to Recipes
        </Link>
      </div>
    </section>
  );
};

export default SingleRecipe;
