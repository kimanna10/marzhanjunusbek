"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const navItems = [
    { label: "О курсе", href: "#about" }, //  Метод + Для кого#for-whom + Результаты#benefits + Программа#program
    { label: "Автор", href: "#author" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="container flex items-center justify-end px-4 py-4 mx-auto md:justify-center md:py-2">
        {/* Десктоп навигация */}
        <ul className="hidden gap-8 text-lg font-medium md:flex">
          {navItems.map((item) => (
            <li key={item.href} className="block">
              <Link
                href={item.href}
                className={`inline-block py-4 text-center relative transition after:absolute after:bottom-2 after:left-0 
             after:h-0.5 after:w-0 after:bg-primary 
             after:transition-all after:duration-300 
             hover:after:w-full   `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Кнопка бургер */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[100] inset-0 flex items-center justify-center w-8 h-8 cursor-pointer md:hidden "
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-0.5 bg-primary transition-transform duration-300 ease-in-out
      ${menuOpen ? "rotate-45 top-2.5" : "top-1"}
    `}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-primary transition-opacity duration-300 ease-in-out
      top-2.5 ${menuOpen ? "opacity-0" : "opacity-100"}
    `}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-primary transition-transform duration-300 ease-in-out
      ${menuOpen ? "-rotate-45 top-2.5" : "top-4"}
    `}
            />
          </div>
        </button>
      </nav>

      {/* Мобильное меню поверх */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="menu"
            aria-modal="true"
            id="mobileMenu"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center h-screen space-y-6 text-xl font-medium md:hidden bg-background focus-visible:text-accent"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
