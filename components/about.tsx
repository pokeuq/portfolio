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
      <SectionHeading>About me</SectionHeading>

      <p className="mb-5 max-[640px]:text-justify">
        I am a student. I have a <span className="font-medium">passion</span>{" "}
        for programming. I signed up for a basic programming course and studied{" "}
        <span className="font-medium">web development</span> on my own. My
        favorite part of programming is the{" "}
        <span className="italic">problem-solving</span> aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . Im also have a good knowledge about TypeScript and Vue. Always looking to learn
        new technologies. Currently want to find a{" "}
        <span className="font-medium">full-time job</span> as a frontend
        developer.
      </p>

      <p className="max-[640px]:text-justify">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading manga. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">psychology as well as drawing</span>. Also
        learning how to to assemble a rubik's cube.
      </p>
    </motion.section>
  );
}
