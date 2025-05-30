import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@/shared/utils";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  const { i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;

  const isLargeScreen = useMediaQuery("(min-width: 640px)");

  return (
    <header className="flex justify-between items-center sm:px-16 px-5 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">MK</p>
      </NavLink>

      {isLargeScreen ? (
        <DesktopNav langPrefix={langPrefix} />
      ) : (
        <MobileNav langPrefix={langPrefix} />
      )}
    </header>
  );
};
