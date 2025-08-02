import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Create = () => {
  const { data, setdata } = useContext(RecipeContext);
  const [form, setForm] = useState({
    title: "",
    chef: "",
    cuisine: "",
    description: "",
    ingredients: "",
    preparation: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      ...form,
      id: uuidv4(),
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
      preparation: form.preparation.split(".").filter(Boolean).map((s) => s.trim() + "."),
    };

    const updatedData = [...data, newRecipe];
    setdata(updatedData);
    localStorage.setItem("recipes", JSON.stringify(updatedData));
    navigate("/recipes");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#3ABAB4]">Create New Recipe</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {[
          { label: "Title", name: "title" },
          { label: "Chef Name", name: "chef" },
          { label: "Cuisine", name: "cuisine" },
          { label: "Description", name: "description" },
          { label: "Ingredients (comma separated)", name: "ingredients" },
          { label: "Preparation Steps (end each with a period)", name: "preparation" },
          { label: "Image URL", name: "image" },
        ].map(({ label, name }) => (
          <div key={name}>
            <label className="block font-medium text-gray-300 mb-1">{label}</label>
            <input
              type="text"
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full p-2 rounded bg-white text-black border focus:outline-none focus:ring-2 focus:ring-[#3ABAB4]"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#3ABAB4] text-black font-semibold py-2 px-4 rounded hover:bg-[#319e9a] transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;