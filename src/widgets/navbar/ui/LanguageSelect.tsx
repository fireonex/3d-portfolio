import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: any) => {
    navigate(`/${lng}` + window.location.pathname.replace(`/${i18n.language}`, ""));
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>En</button>
      <button onClick={() => changeLanguage("ru")}>Ru</button>
    </div>
  );
};
