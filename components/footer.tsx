import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs block'>
            &copy; 2024 Bezhan. Все права защищены.
        </small>
        <p className='text-xs '>
    <span className='font-semibold'>О сайте:</span> создан с использованием React & Next.js (App Router & Server Actions), Tailwind CSS, Framer Motion, React Email & Resend, хостинг на Vercel.
        </p>

    </footer>
  )
}
