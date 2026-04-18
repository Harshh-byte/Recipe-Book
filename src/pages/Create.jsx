import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SEO from "@/components/SEO";

const Create = () => {
  const { addRecipe } = useContext(RecipeContext);
  const [form, setForm] = useState({
    title: "",
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
      ingredients: form.ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      preparation: form.preparation
        .split(/[.\n]/)
        .map((s) => s.trim())
        .filter(Boolean),
    };

    addRecipe(newRecipe);
    navigate("/recipes");
  };

  const fields = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Spicy Garlic Noodles",
    },
    { label: "Cuisine", name: "cuisine", type: "text", placeholder: "Asian" },
    {
      label: "Image URL",
      name: "image",
      type: "url",
      placeholder: "https://images.unsplash.com/...",
    },
  ];

  return (
    <section className="route-enter pb-8">
      <SEO
        title="Create Recipe"
        description="Share your culinary genius. Create and save your own custom recipes to your personal cookbook."
        keywords="create recipe, add recipe, cooking, personal cookbook"
      />
      <div className="surface-panel rounded-4xl p-6 md:p-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b1704e]">
            Add Recipe
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-[#552d1c]">
            Create New Recipe
          </h2>
          <p className="mt-2 max-w-2xl text-[#795241]">
            Fill in the details below to save your dish to the cookbook.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map(({ label, name, type, placeholder }) => (
              <label key={name} className="block">
                <span className="mb-1 block text-sm font-medium text-[#7b4f3d]">
                  {label}
                </span>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full rounded-2xl border border-[#e6c8b3] bg-white/85 px-4 py-3 text-sm text-[#4a2d21] outline-none focus:border-[#ca7c58] focus:ring-2 focus:ring-[#f2cbb3]"
                  required
                />
              </label>
            ))}
          </div>

          <label>
            <span className="mb-1 block text-sm font-medium text-[#7b4f3d]">
              Description
            </span>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="A quick summary of this recipe..."
              className="w-full rounded-2xl border border-[#e6c8b3] bg-white/85 px-4 py-3 text-sm text-[#4a2d21] outline-none focus:border-[#ca7c58] focus:ring-2 focus:ring-[#f2cbb3] resize-none overflow-y-auto custom-scrollbar"
              required
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-medium text-[#7b4f3d]">
              Ingredients (comma separated)
            </span>
            <input
              type="text"
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
              placeholder="Flour, Sugar, Eggs, Cinnamon"
              className="w-full rounded-2xl border border-[#e6c8b3] bg-white/85 px-4 py-3 text-sm text-[#4a2d21] outline-none focus:border-[#ca7c58] focus:ring-2 focus:ring-[#f2cbb3]"
              required
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-medium text-[#7b4f3d]">
              Preparation Steps (periods or new lines)
            </span>
            <textarea
              name="preparation"
              value={form.preparation}
              onChange={handleChange}
              rows={5}
              placeholder="Boil pasta. Prepare sauce. Mix and serve."
              className="w-full rounded-2xl border border-[#e6c8b3] bg-white/85 px-4 py-3 text-sm text-[#4a2d21] outline-none focus:border-[#ca7c58] focus:ring-2 focus:ring-[#f2cbb3] resize-none overflow-y-auto custom-scrollbar"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[#c96843] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a65335] md:w-fit"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Create;
