import { Sheet, SheetTitle, SheetHeader, SheetContent, SheetTrigger } from "@/shared/components";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/shared";
import { LanguageSelect } from "./LanguageSelect";
import { getNavItems } from "../constants";
import { useTranslation } from "react-i18next";

export const MobileNav = ({ langPrefix }: { langPrefix: string }) => {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  return (
    <Sheet>
      <SheetTrigger className="p-2 rounded-lg bg-white shadow-md">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px]">
        <SheetHeader>
          <SheetTitle className="subhead-text mb-3">{t("navbar.menu")}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col text-lg gap-7 font-medium ml-auto">
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
      </SheetContent>
    </Sheet>
  );
};
