import { NavLink } from "react-router-dom";
import { cn } from "@/shared";
import { LanguageSelect } from "./LanguageSelect";
import { navItems } from "../constants";

export const DesktopNav = ({ langPrefix }: { langPrefix: string }) => (
  <nav className="flex justify-center items-center text-base sm:text-lg gap-5 sm:gap-7 font-medium ml-auto">
    {navItems.map(({ path, label }) => (
      <NavLink
        key={path}
        to={`${langPrefix}${path}`}
        className={({ isActive }) => cn(isActive ? "text-blue-500" : "text-black")}
      >
        {label}
      </NavLink>
    ))}
    <LanguageSelect />
  </nav>
);
