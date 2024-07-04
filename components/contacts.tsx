"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Свяжитесь со мной</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Пожалуйста, свяжитесь со мной напрямую по адресу{" "}
        <a className="font-bold" href="mailto:beerubk74@gmail.com">
          beerubk74@gmail.com
        </a>{" "}
        или через эту форму
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const  {data, error} = await sendEmail(formData);

          if (error) {
            toast.error(error)
            return
          }

          toast.success("Электронное письмо успешно отправлено")
        }}
      >
        <input
          className="h-14 p-4 rounded-lg borderBlack  outline-none dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Почта"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4  outline-none dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all d"
          placeholder="Сообщение"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
