import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Select, SelectItem, SelectValue, SelectContent, SelectTrigger } from "@/shared/components";
import { cn } from "@/shared";
import { useMediaQuery } from "@/shared/utils";

type Language = "en" | "ru";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: Language) => {
    const newPath = window.location.pathname.replace(/^\/(en|ru)/, `/${lng}`);
    navigate(newPath);
  };

  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <Select
      value={i18n.language as Language}
      onValueChange={(lng: Language) => changeLanguage(lng)}
    >
      <SelectTrigger
        className={cn(
          "w-[70px] text-lg font-medium text-black",
          isSmallScreen && "border-none outline-none shadow-none pl-0 pt-0 focus:ring-white",
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en" className="text-base font-medium text-black">
          En
        </SelectItem>
        <SelectItem value="ru" className="text-base font-medium text-black">
          Ru
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
