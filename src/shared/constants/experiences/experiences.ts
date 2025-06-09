import { inctbc, afishus } from "@/assets/images";
import { TFunction } from "i18next";

export const getExperiences = (t: TFunction) => [
  {
    icon: afishus,
    iconBg: "#ffffff",
    date: t("workExperience.experiences.afishus.date"),
    title: t("workExperience.experiences.afishus.title"),
    company_name: t("workExperience.experiences.afishus.company_name"),
    points: [
      t("workExperience.experiences.afishus.points.0"),
      t("workExperience.experiences.afishus.points.1"),
      t("workExperience.experiences.afishus.points.2"),
      t("workExperience.experiences.afishus.points.3"),
    ],
  },
  {
    icon: inctbc,
    iconBg: "#000000",
    date: t("workExperience.experiences.inctbc.date"),
    title: t("workExperience.experiences.inctbc.title"),
    company_name: t("workExperience.experiences.inctbc.company_name"),
    points: [
      t("workExperience.experiences.inctbc.points.0"),
      t("workExperience.experiences.inctbc.points.1"),
      t("workExperience.experiences.inctbc.points.2"),
      t("workExperience.experiences.inctbc.points.3"),
    ],
  },
];
