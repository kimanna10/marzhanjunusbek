import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

export default function ProgramSection() {
  return (
    <Section className="" id="program">
      <SectionHeader
        title="Как проходит обучение"
        description={
          <>
            Комбинация <Highlight>теории, практики и поддержки</Highlight> —
            чтобы результат был не временным, а стабильным.
          </>
        }
      />

      <div className="space-y-6 md:text-lg leading-relaxed text-slate-800 dark:text-white/90 max-w-3xl mx-auto">
        <p>
          <strong>📚 Теоретическая часть:</strong> вы узнаете, как устроена
          психика человека, что такое детские травмы и механизмы их проработки,
          как восстанавливается целостность, и какие подводные камни существуют
          в терапии.
        </p>

        <p>
          <strong>🧠 Практическая часть:</strong> показательные проработки в
          реальном времени помогут вам глубже понять процесс, а работа в парах
          отточит навыки и уверенность в себе.
        </p>

        <p>
          <strong>🔥 x3 Результат:</strong> вы получаете сразу три в одном:
          <Highlight>
            {" "}
            авторскую методику SOP, практику и решение своих личных запросов
          </Highlight>
          .
        </p>

        <p>
          <strong>🌀 А главное:</strong> вы становитесь{" "}
          <Highlight>проводником</Highlight>, не тратя месяцы на разбор
          самостоятельной практики — опыт приходит через действие и
          сопровождение.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-base text-slate-700 dark:text-white/80">
          <li className="flex items-center gap-2">
            <FaCalendarAlt className="text-primary" /> Даты:{" "}
            <strong>14 – 16 июня</strong>
          </li>
          <li className="flex items-center gap-2">
            <FaClock className="text-primary" /> Время:{" "}
            <strong>10:00 – 18:00</strong>
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" /> Формат:{" "}
            <strong>живой в Алматы + онлайн</strong>
          </li>
          <li className="flex items-center gap-2">
            <MdLiveTv className="text-primary" />{" "}
            <strong>2 дополнительных эфира</strong> — для тарифа "Повышение
            квалификации"
          </li>
        </ul>

        <div className="mt-6 p-4 rounded-xl border border-primary bg-primary/10 text-primary font-semibold text-center">
          Есть возможность <Highlight>оплаты в рассрочку</Highlight> через Kaspi
          Red
        </div>
      </div>
    </Section>
  );
}
