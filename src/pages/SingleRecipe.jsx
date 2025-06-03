import { RecipeContext } from "@/context/RecipeContext";
import { useContext } from "react";
import { useParams } from "react-router-dom"

const SingleRecipe = () => {
    const { data } = useContext(RecipeContext);
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);

    const ingredients = Array.isArray(recipe?.ingredients)
        ? recipe.ingredients
        : recipe?.ingredients
            ? recipe.ingredients.split('\n').filter(line => line.trim() !== "")
            : [];

    const preparation = Array.isArray(recipe?.preparation)
        ? recipe.preparation
        : recipe?.preparation
            ? recipe.preparation.split('\n').filter(line => line.trim() !== "")
            : [];

    return recipe ? (
        <div className="w-full px-2 md:px-0">
            <h1 className="font-black text-2xl md:text-3xl text-center md:text-left md:ml-[27%]">{recipe.title}</h1>
            <h4 className="bg-black w-fit px-6 py-2 mt-5 mx-auto md:ml-[42%] text-lg md:text-xl rounded">
                {recipe.cuisine ? recipe.cuisine.toUpperCase() : ""}
            </h4>
            <div className="flex justify-center">
                <img
                    className="h-[200px] md:h-[320px] object-cover w-full max-w-[540px] mt-5 shadow-2xl rounded-lg"
                    src={recipe.image}
                    alt={recipe.title}
                />
            </div>
            <p className="px-2 md:px-35 text-center mt-6 font-semibold font-sans">{recipe.description}</p>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-5">
                <div className="w-full md:w-[22em] text-white p-4 rounded overflow-hidden bg-gray-900/60">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-black bg-white rounded opacity-[0.5] text-center p-2">Ingredients</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                        {ingredients.length > 0
                            ? ingredients.map((item, index) => <li key={index}>{item}</li>)
                            : <p>No ingredients provided.</p>}
                    </ul>
                    <hr className="border-t-2 border-gray-300 my-6" />
                </div>
                <div className="w-full md:w-[40em] text-white p-4 rounded overflow-hidden bg-gray-900/60">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-black bg-white rounded opacity-[0.5] text-center p-2">Preparation</h2>
                    <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
                        {preparation.length > 0
                            ? preparation.map((step, index) => <li key={index}>{step}</li>)
                            : <p>No preparation steps provided.</p>}
                    </ol>
                    <hr className="border-t-2 border-gray-300 my-6" />
                </div>
            </div>
        </div>
    ) : "Loading...";
}

export default SingleRecipe