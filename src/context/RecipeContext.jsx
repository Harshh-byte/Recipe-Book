import { createContext, useEffect, useState } from "react";
import mealDbApi from "@/utils/axios";

export const RecipeContext = createContext(null);

const USER_RECIPES_KEY = "userRecipes";

const readUserRecipes = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(USER_RECIPES_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const mapMealToRecipe = (meal) => {
  const ingredients = [];

  for (let i = 1; i <= 20; i += 1) {
    const ingredient = meal[`strIngredient${i}`]?.trim();
    const measure = meal[`strMeasure${i}`]?.trim();

    if (ingredient) {
      ingredients.push(
        measure ? `${measure} ${ingredient}`.trim() : ingredient,
      );
    }
  }

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    cuisine: meal.strArea || "Global",
    description: meal.strTags
      ? `Tags: ${meal.strTags}`
      : `A ${meal.strArea || "global"} ${meal.strCategory?.toLowerCase() || "recipe"}.`,
    ingredients,
    preparation: meal.strInstructions || "",
    image: meal.strMealThumb,
  };
};

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadRecipes = async () => {
      setIsLoading(true);
      setError("");

      const userRecipes = readUserRecipes();

      try {
        const response = await mealDbApi.get("/search.php?s=");
        const apiRecipes = Array.isArray(response?.data?.meals)
          ? response.data.meals.map(mapMealToRecipe)
          : [];

        setRecipes([...apiRecipes, ...userRecipes]);
      } catch {
        setError("Could not load recipes from TheMealDB.");
        setRecipes(userRecipes);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecipes();
  }, []);

  const addRecipe = (newRecipe) => {
    const updatedUserRecipes = [...readUserRecipes(), newRecipe];
    localStorage.setItem(USER_RECIPES_KEY, JSON.stringify(updatedUserRecipes));
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, addRecipe, isLoading, error }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
