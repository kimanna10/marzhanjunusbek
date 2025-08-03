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
    <footer className="py-14 bg-primary/40 text-background md:text-center">
      <Container className="space-y-4">
        {/* Логотип или название */}
        <div className="text-xl font-bold ">
          Трансформационный курс Поток5.0 от Marzhan Junusbek
        </div>

        {/* Навигация */}
        <ul className="flex flex-col justify-start gap-2 md:justify-center md:gap-6 md:flex-row">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 transition md:py-4 hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Права */}
        <p className="text-sm text-background">
          © 2025 Marzhan Junusbek. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}
