import RecipeCard from "@/components/RecipeCard";
import { useContext } from "react";
import { RecipeContext } from "@/context/RecipeContext";

const Recipes = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <section className="route-enter space-y-6 pb-8">
      <div className="surface-panel rounded-[2rem] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b2724f]">
          Recipe Library
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-[#562e1d]">
          All Recipes
        </h2>
        <p className="mt-3 max-w-2xl text-[#7b5342]">
          Explore every dish in your collection and jump into the details to
          prep faster. You currently have {recipes.length} recipes saved.
        </p>
      </div>

      {recipes.length === 0 ? (
        <div className="surface-panel rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-[#5d3423]">
            No recipes yet
          </h3>
          <p className="mt-2 text-[#8a5c48]">
            Start by adding your first recipe and build your cookbook.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Recipes;
