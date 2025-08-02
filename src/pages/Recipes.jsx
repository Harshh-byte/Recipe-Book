import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Replace this with your actual recipe-fetching logic or local storage
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#3ABAB4]">All Recipes</h1>

      {recipes.length === 0 ? (
        <p className="text-gray-400 text-lg">No recipes found. Try adding some!</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;