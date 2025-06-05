import { TFunction } from "i18next";

export const getNavItems = (t: TFunction) => [
  { path: "/about", label: t("navbar.about") },
  { path: "/projects", label: t("navbar.projects") },
  { path: "/contact", label: t("navbar.contact") },
];
