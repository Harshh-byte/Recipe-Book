import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    if (storedRecipes.length === 0) {
      const defaultRecipes = [ 
        // [Keep your 10 detailed recipe objects here unchanged]
      ];

      localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
      setRecipes(defaultRecipes);
    } else {
      setRecipes(storedRecipes);
    }
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;