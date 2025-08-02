import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/recipes", label: "Recipes" },
  { path: "/about", label: "About" },
  { path: "/create-recipe", label: "Create Recipe" },
];

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-medium mb-10">
      {links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            path === "/create-recipe"
              ? `rounded px-4 py-2 transition ${
                  isActive
                    ? "bg-[#3ABAB4] text-gray-900 font-semibold"
                    : "bg-gray-900 text-gray-200"
                }`
              : isActive
              ? "text-[#3ABAB4]"
              : "text-gray-300 hover:text-[#3ABAB4] transition"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;