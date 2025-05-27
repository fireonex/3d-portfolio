import { snake, wizard, todoApp, snapgram } from "@/assets/icons";

export const projects = [
  {
    iconUrl: wizard,
    theme: "btn-back-pink",
    name: "Meme Wizard Bot",
    link: "https://github.com/fireonex/telegram-memes-generator-bot",
    description:
      "A Telegram bot that generates custom memes with text using image templates. Built with Node.js and Telegram Bot API.",
  },
  {
    iconUrl: todoApp,
    name: "Todo List App",
    theme: "btn-back-blue",
    link: "https://github.com/fireonex/TodoList-main",
    description:
      "A task tracker with authentication, validation, and error handling. Features a clean UI and solid state management.",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    link: "https://github.com/BiteCreators",
    name: "Social Media Platform (Internship)",
    description:
      "A full-featured social network built in a team. Includes a public app, admin panel, messenger, and a custom Radix UI-based component library.",
  },
  {
    iconUrl: snake,
    theme: "btn-back-green",
    name: "Snake Game Component",
    link: "https://github.com/fireonex/snake-game-component",
    description:
      "A responsive Snake game built as a React component. Mobile-friendly and embeddable as a loader or mini-game.",
  },
];
