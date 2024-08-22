import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { PiMedal } from "react-icons/pi";
import { LuAward } from "react-icons/lu";
import reactPizza from "@/public/react-pizza.jpg";
import vueSneakers from "@/public/vue-sneakers.png";
import game from "@/public/2048.jpg";
import weather from "@/public/weather.jpg";
import todo from "@/public/todo.jpg";
import auth from '@/public/auth.jpg'
import projects from '@/public/projects.jpg'
import breadit from '@/public/breadit.png'

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
    title: "Student-pass",
    location: "Уфа",
    description:
      'Система Повышения Вовлеченности "Student-pass" это веб-портал, на котором собраны все студенты вуза (на ранних этапах одного из факультетов вуза) в целях получения отличительных знаков и соревнования между собой',
    icon: React.createElement(LuGraduationCap),
    date: "2021 Май",
  },
  {
    title: "Оконченный курс",
    location: "Москва",
    description:
      "Я закончил учебу после 6 месяцев изучения основ программирования. Получил базовые знания в области программирования, которые необходимы для дальнейшего обучения и развития в этой области.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Июнь",
  },
  {
    title: "IT-CODE",
    location: "Уфа",
    description:
      "Во время работы я приобрел ценный опыт в разработке frontend, узнал о новых технологиях и подходах и расширил свой нетворкинг.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 Сентябрь - Март 2023",
  },
  {
    title: "UfaHack2023",
    location: "Уфа",
    description:
      "Заняли 3-е место с новой командой на хакатоне по разработке веб-приложения, соревновнуясь за победу со старшеклассниками нашего университета. Организаторы и партнеры: UUST, Tinkoff Education, 418team.",
    icon: React.createElement(LuAward),
    date: "2023 Ноябрь",
  },
   {
    title: "Ozon",
    location: "Москва",
    description:
      "Улучшил производительность веб-приложений, освоил новые инструменты и оптимизировал пользовательский опыт.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 Март - Август 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Breadit",
    description: "Клон Reddit. Создавайте сообщества и подписывайтесь на других пользователей",
    tags: ["Next.js", "Typescript", "PostgreSQL", "TailwindCSS"],
    imageUrl: breadit,
    link: 'https://breadit-three-self.vercel.app/',
  },
  {
    title: "React Pizza",
    description: "Вы можете выбрать желаемую пиццу и даже добавить ее в корзину",
    tags: ["React", "Typescript", "SCSS", "Redux Toolkit"],
    imageUrl: reactPizza,
    link: 'https://pokeuq-react-pizza.netlify.app/',
  },
  {
    title: "Vue Sneakers",
    description: "Реализован фукнционал закладок и покупки с корзины",
    tags: ["Vue", "TailwindCSS"],
    imageUrl: vueSneakers,
    link: "https://vue-sneakers-seven-sable.vercel.app/",
  },
  {
    title: "MERN Auth",
    description: "Позволяет пользователям регистрироваться, входить в систему и выходить из системы, а также предоставляет доступ к защищенным маршрутам.",
    tags: ["React", "MongoDB", "Node.js", "Express", "TailwindCSS", "Redux Toolkit"],
    imageUrl: auth,
    link: 'https://auth-4dqf.onrender.com',
  },
  {
    title: "Todo",
    description: "To-do на чистом Javascript (CRUD)",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: todo,
    link: 'https://pokeuq.github.io/todo/',
  },
  {
    title: "Weather",
    description: "Показывает погоду в указанном городе",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: weather,
    link: 'https://pokeuq.github.io/weather/',
  },
  {
    title: "2048",
    description:
      "2048 игра  (*доступно только на компьютере)",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: game,
    link: 'https://pokeuq.github.io/2048/',
  },
  {
    title: "Остальные проекты",
    description:
      "Остальные мои проекты, в основном, основаные на анимации",
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
  "Vue",
  "React",
  "Next.js",
  "Node.js",
  "Jest.js",
  "Git",
  "TailwindCSS",
  "MongoDB",
  "PostgreSQL",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
] as const;
