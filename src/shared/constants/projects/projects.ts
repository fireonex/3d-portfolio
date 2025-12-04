import { snake, wizard, todoApp, snapgram } from "@/assets/icons";
import { TFunction } from "i18next";

export const getProjects = (t: TFunction) => [
  {
    iconUrl: wizard,
    theme: "btn-back-pink",
    name: "Meme Wizard Bot",
    link: "https://github.com/fireonex/telegram-memes-generator-bot",
    description: t("projectsExperience.projects.wizard.description"),
  },
  {
    iconUrl: todoApp,
    name: "Todo List App",
    theme: "btn-back-blue",
    link: "https://github.com/fireonex/TodoList-main",
    description: t("projectsExperience.projects.todoApp.description"),
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    link: "https://github.com/BiteCreators",
    name: "Social Media Platform (Internship)",
    description: t("projectsExperience.projects.snapgram.description"),
  },
  {
    iconUrl: snake,
    name: "Afishus",
    theme: "btn-back-yellow",
    link: "https://test.afishus.ru/",
    description: t("projectsExperience.projects.afishus.description"),
  },
];
