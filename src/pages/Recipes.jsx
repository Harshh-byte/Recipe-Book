import RecipeCard from "@/components/RecipeCard";
import { useContext, useEffect, useState, useMemo } from "react";
import { RecipeContext } from "@/context/RecipeContext";
import SEO from "@/components/SEO";
import {
  fetchMealByName,
  fetchAllAreas,
  fetchMealsByArea,
} from "@/utils/axios";

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

const RECIPES_PER_PAGE = 12;

const Recipes = () => {
  const { recipes, isLoading, error } = useContext(RecipeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadAreas = async () => {
      const areasData = await fetchAllAreas();
      setAreas(areasData.map((a) => a.strArea).sort());
    };

    loadAreas();
  }, []);

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length === 0 && selectedArea === "") {
      setIsSearchActive(false);
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    let meals = [];

    if (query.trim().length > 0) {
      const nameResults = await fetchMealByName(query.trim());
      meals = nameResults;
    }

    if (selectedArea) {
      const areaResults = await fetchMealsByArea(selectedArea);
      if (query.trim().length > 0) {
        meals = meals.filter((meal) => meal.strArea === selectedArea);
      } else {
        meals = areaResults;
      }
    }

    const mapped = meals.map(mapMealToRecipe);
    setSearchResults(mapped);
    setIsSearchActive(true);
    setSearchLoading(false);
  };

  const handleAreaFilter = async (e) => {
    const area = e.target.value;
    setSelectedArea(area);

    if (area === "" && searchQuery.trim().length === 0) {
      setIsSearchActive(false);
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    let meals = [];

    if (area) {
      const areaResults = await fetchMealsByArea(area);
      meals = areaResults;

      if (searchQuery.trim().length > 0) {
        meals = meals.filter((meal) =>
          meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      }
    } else if (searchQuery.trim().length > 0) {
      meals = await fetchMealByName(searchQuery.trim());
    }

    const mapped = meals.map(mapMealToRecipe);
    setSearchResults(mapped);
    setIsSearchActive(area !== "" || searchQuery.trim().length > 0);
    setSearchLoading(false);
  };

  const allRecipes = isSearchActive ? searchResults : recipes;
  const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
  const displayedRecipes = allRecipes.slice(0, startIndex + RECIPES_PER_PAGE);
  const hasMore = allRecipes.length > startIndex + RECIPES_PER_PAGE;

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: displayedRecipes.map((recipe, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${window.location.origin}/recipe/${recipe.id}`,
      name: recipe.title,
      image: recipe.image,
    })),
  };

  return (
    <section className="route-enter space-y-6 pb-8">
      <SEO
        title="Explore Recipes"
        description="Browse our extensive collection of recipes from around the world. Search by name, filter by area, and find your next favorite meal."
        keywords="browse recipes, meal search, cuisine filter, global food"
        schema={itemListSchema}
      />
      <div className="surface-panel rounded-4xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b2724f]">
          Recipe Library
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-[#562e1d]">
          All Recipes
        </h2>
        <p className="mt-3 max-w-2xl text-[#7b5342]">
          Explore every dish in your collection and jump into the details to
          prep faster. Showing {displayedRecipes.length} of {allRecipes.length}{" "}
          recipes
          {isSearchActive && " matching your search"}.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1 block text-sm font-medium text-[#7b4f3d]">
              Search by meal name
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="e.g., Pasta, Salad, Pizza..."
              className="w-full rounded-2xl border border-[#e6c8b3] bg-white/85 px-4 py-3 text-sm text-[#4a2d21] outline-none focus:border-[#ca7c58] focus:ring-2 focus:ring-[#f2cbb3]"
            />
          </label>
          <label>
            <span className="mb-1 block text-sm font-medium text-[#7b4f3d]">
              Filter by area
            </span>
            <select
              value={selectedArea}
              onChange={handleAreaFilter}
              className="w-full rounded-2xl border border-[#e6c8b3] bg-white/85 px-4 py-3 text-sm text-[#4a2d21] outline-none focus:border-[#ca7c58] focus:ring-2 focus:ring-[#f2cbb3]"
            >
              <option value="">All Areas</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {isLoading ? (
        <div className="surface-panel rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-[#5d3423]">
            Loading recipes...
          </h3>
          <p className="mt-2 text-[#8a5c48]">Fetching meals from TheMealDB.</p>
        </div>
      ) : error && !isSearchActive ? (
        <div className="surface-panel rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-[#5d3423]">
            Could not load online recipes
          </h3>
          <p className="mt-2 text-[#8a5c48]">{error}</p>
        </div>
      ) : searchLoading ? (
        <div className="surface-panel rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-[#5d3423]">
            Searching...
          </h3>
          <p className="mt-2 text-[#8a5c48]">
            Finding meals matching your criteria.
          </p>
        </div>
      ) : displayedRecipes.length === 0 ? (
        <div className="surface-panel rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-semibold text-[#5d3423]">
            {isSearchActive ? "No recipes found" : "No recipes yet"}
          </h3>
          <p className="mt-2 text-[#8a5c48]">
            {isSearchActive
              ? "Try adjusting your search or filter criteria."
              : "Start by adding your first recipe and build your cookbook."}
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {hasMore && (
            <div className="flex justify-center pt-4">
              <button
                onClick={handleLoadMore}
                className="rounded-full bg-[#c96843] px-8 py-3 text-sm font-semibold text-white hover:bg-[#a65335]"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Recipes;
