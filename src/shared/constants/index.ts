import { afishus, inctbc } from "../../assets/images";
import {
    contact,
    css,
    radixUI,
    storybook,
    styledComponents,
    snake,
    express,
    github,
    html,
    javascript,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    typescript, telegram, wizard, todoApp
} from "../../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux, RTK, RTK Query",
        type: "State Management",
    },
    {
        imageUrl: radixUI,
        name: "Radix UI",
        type: "Frontend",
    },
    {
        imageUrl: styledComponents,
        name: "Styled Components",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: storybook,
        name: "Storybook",
        type: "Testing / UI Development",
    },
];


export const experiences = [
    {
        title: "Next.js Developer",
        company_name: "Inct-bc",
        icon: inctbc,
        iconBg: "#000000",
        date: "September 2024 - May 2024",
        points: [
            "Developed and supported microfrontend modules using Next.js and modern frontend technologies.",
            "Built reusable UI components with React, Radix UI, and Tailwind; documented them in Storybook.",
            "Managed application state and API interactions using Redux Toolkit and RTK Query.",
            "Integrated real-time features via WebSockets and implemented GraphQL-based authentication flows.",
        ]

    },
    {
        title: "Frontend Developer (PWA with React)",
        company_name: "Afishus",
        icon: afishus,
        iconBg: "#ffffff",
        date: "April 2024 - Present",
        points: [
            "Developing a production-ready mobile-first PWA using React and SCSS for aggregating event and project-related content.",
            "Implementing efficient data fetching and caching with TanStack Query (formerly React Query).",
            "Collaborating with designers and backend developers to deliver a seamless and responsive user experience.",
            "Writing clean, maintainable frontend code and contributing to feature development across the entire application lifecycle."
        ],

    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/fireonex',
    },
    {
        name: 'Telegram',
        iconUrl: telegram,
        link: 'https://t.me/empireladysith',
    }
];

export const projects = [
    {
        iconUrl: wizard,
        theme: 'btn-back-pink',
        name: 'Meme Wizard Bot',
        description: 'A Telegram bot that generates custom memes with text using image templates. Built with Node.js and Telegram Bot API.',
        link: 'https://github.com/fireonex/telegram-memes-generator-bot',
    },
    {
        iconUrl: todoApp,
        theme: 'btn-back-blue',
        name: 'Todo List App',
        description: 'A task tracker with authentication, validation, and error handling. Features a clean UI and solid state management.',
        link: 'https://github.com/fireonex/TodoList-main',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-black',
        name: 'Social Media Platform (Internship)',
        description: 'A full-featured social network built in a team. Includes a public app, admin panel, messenger, and a custom Radix UI-based component library.',
        link: 'https://github.com/BiteCreators',
    },
    {
        iconUrl: snake,
        theme: 'btn-back-green',
        name: 'Snake Game Component',
        description: 'A responsive Snake game built as a React component. Mobile-friendly and embeddable as a loader or mini-game.',
        link: 'https://github.com/fireonex/snake-game-component',
    }
];
