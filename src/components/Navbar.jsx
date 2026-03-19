import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/recipes", label: "Recipes" },
  { path: "/about", label: "About" },
  { path: "/create-recipe", label: "Create Recipe" },
];

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium md:gap-3">
      {links.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `rounded-full border px-4 py-2 text-xs tracking-wide md:px-5 md:text-sm ${
              isActive
                ? "border-[#cc7b56] bg-[#cc7b56] text-white shadow-md"
                : "border-[#efcfb9] bg-white/70 text-[#7f4f3b] hover:border-[#d9916f] hover:text-[#6a3f2d]"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
