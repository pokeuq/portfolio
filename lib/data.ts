import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { LuAward } from "react-icons/lu";
import reactPizza from "@/public/react-pizza.jpg";
import game from "@/public/2048.jpg";
import weather from "@/public/weather.jpg";
import todo from "@/public/todo.jpg";
import auth from '@/public/auth.jpg'
import projects from '@/public/projects.jpg'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated course",
    location: "Moscow, RU",
    description:
      "I graduated after 6 months of studying the base of programming. Gained the foundational knowledge in programming that is essential for further learning and development in this field.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 June",
  },
  {
    title: "Internship",
    location: "Ufa, RU",
    description:
      "During my frontend internship, I gained valuable experience in frontend development, learned about new technologies and approaches, and expanded my network.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 May",
  },
  {
    title: "UfaHack2023",
    location: "Ufa, RU",
    description:
      "Took 3rd place with a new team at the hackaton for the development of a web application. We competed for the victory with the seniors of our university. Organizers and partners: UUST, Tinkoff Education, 418team.",
    icon: React.createElement(LuAward),
    date: "2023 November",
  },
  {
    title: "Frontend Developer",
    location: "Ufa, RU",
    description:
      "I'm now a frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "React Pizza",
    description: "You can choose the desired pizza and even add it to the cart",
    tags: ["React", "Typescript", "SCSS", "Redux Toolkit"],
    imageUrl: reactPizza,
    link: 'https://pokeuq-react-pizza.netlify.app/',
  },
  {
    title: "MERN Auth",
    description: "Allow users to sign up, log in, and log out, and provides access to protected routes. ( turn ON VPN if not availiable or try againnot availiable)",
    tags: ["React", "MongoDB", "Node.js", "Express", "TailwindCSS", "Redux Toolkit"],
    imageUrl: auth,
    link: 'https://auth-4dqf.onrender.com',
  },
  {
    title: "Todo",
    description: "To-do with pure Javascript / CRUD",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: todo,
    link: 'https://pokeuq.github.io/todo/',
  },
  {
    title: "Weather",
    description: "Show the weather in the specified city",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: weather,
    link: 'https://pokeuq.github.io/weather/',
  },
  {
    title: "2048",
    description:
      "2048 game with a ton of logic.. 🤕 (*only available on PC)",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: game,
    link: 'https://pokeuq.github.io/2048/',
  },
  {
    title: "Other projects",
    description:
      "The rest of my projects, mostly based on animations",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: projects,
    link: 'https://pokeuq.github.io/projects/',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Jest.js",
  "Git",
  "TailwindCSS",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
] as const;
