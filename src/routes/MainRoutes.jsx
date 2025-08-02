import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Recipes from "@/pages/Recipes";
import Create from "@/pages/Create";
import SingleRecipe from "@/pages/SingleRecipe";
import PageNotFound from "@/pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;