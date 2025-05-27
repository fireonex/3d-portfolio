import { NavLink } from "react-router-dom";
import { cn } from "@/shared";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">MK</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium ml-auto">
        {navItems.map(({ path, label }) => (
          <NavLink
            to={path}
            key={path}
            className={({ isActive }) => cn(isActive ? "text-blue-500" : "text-black")}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
