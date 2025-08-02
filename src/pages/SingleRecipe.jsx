import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";

const SingleRecipe = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="text-center mt-20 text-xl text-gray-600">
        Recipe not found.
        <div className="mt-4">
          <Link to="/recipes" className="text-blue-500 underline">
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />
      <div className="mb-4">
        <p className="text-gray-600">
          <strong>Chef:</strong> {recipe.chef}
        </p>
        <p className="text-gray-600">
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
      </div>
      <p className="text-gray-700 mb-6">{recipe.description}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Preparation</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          {recipe.preparation.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="mt-8">
        <Link
          to="/recipes"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Recipes
        </Link>
      </div>
    </div>
  );
};

export default SingleRecipe;