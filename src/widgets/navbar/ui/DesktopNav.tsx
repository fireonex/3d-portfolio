import { NavLink } from "react-router-dom";
import { cn } from "@/shared";
import { LanguageSelect } from "./LanguageSelect";
import { getNavItems } from "../constants";
import { useTranslation } from "react-i18next";

export const DesktopNav = ({ langPrefix }: { langPrefix: string }) => {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  return (
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
};
