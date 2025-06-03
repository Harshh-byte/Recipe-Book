import About from "@/pages/About";
import Create from "@/pages/Create";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import Recipes from "@/pages/Recipes";
import SingleRecipe from "@/pages/SingleRecipe";
import { Route, Routes } from "react-router-dom"

const MainRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
}

export default MainRoutes