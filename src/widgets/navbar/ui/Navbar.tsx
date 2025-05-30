import { NavLink } from "react-router-dom";
import { cn } from "@/shared";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const { i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;

  return (
    <header className="flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">MK</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium ml-auto">
        <LanguageSelect />
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={`${langPrefix}${path}`}
            className={({ isActive }) => cn(isActive ? "text-blue-500" : "text-black")}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
