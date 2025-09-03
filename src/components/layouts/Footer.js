import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const navItems = [
    { label: "О курсе", href: "#about" }, //  Метод + Для кого#for-whom + Результаты#benefits + Программа#program
    { label: "Автор", href: "#author" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contact" },
  ];
  return (
    <footer className="py-14 bg-light-blue/30 text-primary md:text-center">
      <Container className="space-y-4">
        {/* Логотип или название */}
        <p className="text-xl font-bold ">
          Терапевтический курс "Исцеление Души" Поток 5.0 от Маржан Жунусбек
        </p>

        {/* Навигация */}
        <ul className="flex flex-col justify-start gap-2 md:justify-center md:gap-6 md:flex-row">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 transition md:py-4 hover:text-accent focus-visible:outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Права */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marzhan Junusbek. Все права
          защищены.
        </p>
        <nav
          className="flex flex-col text-xs text-gray-600"
          aria-label="Внешние ресурсы"
        >
          <Link
            href="https://lordicon.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Icons by Lordicon.com, откроется в новой вкладке"
          >
            Icons by Lordicon.com
          </Link>
          <Link
            href="https://creattie.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Animated illustrations by Creattie.com, откроется в новой вкладке"
          >
            Animated illustrations by Creattie.com
          </Link>
          <Link
            href="https://freepik.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Illustrations & video-banner by Freepik.com, откроется в новой вкладке"
          >
            Illustrations & video-banner by Freepik.com
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
