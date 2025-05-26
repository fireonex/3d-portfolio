import { inctbc, afishus } from "../../assets/images";

export const experiences = [
  {
    icon: inctbc,
    iconBg: "#000000",
    company_name: "Inct-bc",
    title: "Next.js Developer",
    date: "September 2024 - May 2025",
    points: [
      "Developed and supported microfrontend modules using Next.js and modern frontend technologies.",
      "Built reusable UI components with React, Radix UI, and Tailwind; documented them in Storybook.",
      "Managed application state and API interactions using Redux Toolkit and RTK Query.",
      "Integrated real-time features via WebSockets and implemented GraphQL-based authentication flows.",
    ],
  },
  {
    icon: afishus,
    iconBg: "#ffffff",
    company_name: "Afishus",
    date: "April 2024 - Present",
    title: "Frontend Developer (PWA with React)",
    points: [
      "Developing a production-ready mobile-first PWA using React and SCSS for aggregating event and project-related content.",
      "Implementing efficient data fetching and caching with TanStack Query (formerly React Query).",
      "Collaborating with designers and backend developers to deliver a seamless and responsive user experience.",
      "Writing clean, maintainable frontend code and contributing to feature development across the entire application lifecycle.",
    ],
  },
];
