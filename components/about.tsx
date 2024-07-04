"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Обо мне</SectionHeading>

      <p className="mb-5 max-[640px]:text-justify">
      Студент. У меня есть <span className="font-medium">страсть</span> к программированию. Я записался на базовый курс программирования и самостоятельно изучал <span className="font-medium">веб-разработку</span>. Мне особенно нравится аспект <span className="italic">решения проблем</span>. Нравится ощущение, когда наконец-то удается найти решение проблемы. Мой основной стек технологий включает в себя <span className="font-medium">React, Next.js, Node.js и MongoDB</span>. Я также хорошо разбираюсь в TypeScript и Vue. Всегда стремлюсь узнавать новые технологии. В настоящее время я хочу найти <span className="font-medium">полноразмерную работу</span> в качестве frontend-разработчика.
</p>


      <p className="max-[640px]:text-justify">
  <span className="italic">Когда я не программироваю</span>, я люблю играть в видеоигры, смотреть фильмы и читать мангу. Я также увлекаюсь <span className="font-medium">изучением новых штук</span>. В данный момент я изучаю <span className="font-medium">психологию, а также рисование</span>.
</p>

    </motion.section>
  );
}
