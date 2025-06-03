import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
            <NavLink className={({ isActive }) => isActive ? "text-red-300" : ""} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-300" : ""} to="/recipes">Recipes</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-red-300" : ""} to="/about">About</NavLink>
            <NavLink className={({ isActive }) =>
                `rounded py-2 px-4 ${isActive ? "bg-[#3ABAB4] text-gray-900 font-semibold" : "bg-gray-900 text-gray-200"
                }`
            } to="/create-recipe">Create Recipes</NavLink>
        </div>
    )
}
export default Navbar