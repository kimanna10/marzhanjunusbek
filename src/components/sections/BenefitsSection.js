import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  <>
    Поймете, как формируются эмоциональные блоки, и как{" "}
    <span className="font-bold">заново возродить свою энергию.</span>
  </>,
  <>
    Узнаете, как самостоятельно выводить себя в{" "}
    <span className="font-bold">ресурсное состояние за 5 минут.</span>
  </>,
  <>
    Увидите свои вторичные выгоды и проработаете корни своих проблем, мешающие{" "}
    <span className="font-bold">сделать скачок в жизни.</span>
  </>,
  <>
    Сможете <span className="font-bold">исцелить свою основу</span> — 5 базовых
    чувств(безопасность, свобода, любовь, ценность, защищенность).
  </>,
  <>
    Познакомитесь с другим собой через{" "}
    <span className="font-bold">принятие теневых частей</span> личности, примете
    самые <span className="font-bold">вкусные состояния.</span>
  </>,
  <>
    Исцелите <span className="font-bold">отношения с родителями</span> на
    глубинном уровне подсознания, и{" "}
    <span className="font-bold">освободитесь от ограничивающих убеждений</span>.
  </>,
  <>
    Пройдете <span className="font-bold">очищение от сущностей</span> и других
    вампиров ворующих вашу энергию.
  </>,
  <>
    Проработаете <span className="font-bold">отношение к деньгам</span>, и
    улучшите свое финансовое благосостояние.
  </>,
  <>
    Исцелите <span className="font-bold">внутреннего ребенка</span> и обретете
    желание жить, творить, любить.
  </>,
  <>
    Соединитесь со своим Высшим Я, и{" "}
    <span className="font-bold">восстановите свою целостность</span>, станете
    источником любви.
  </>,
];

export default function BenefitsSection() {
  return (
    <Section className="" id="benefits">
      <SectionHeader
        title="Раскрытие через опыт"
        description={
          <>
            На <Highlight>терапевтическом курсе</Highlight> курсе Вы:
          </>
        }
      />

      <div className="flex flex-col justify-center">
        {/* <LottieAnimation /> */}
        <img className="w-auto h-48 lg:h-96" src="/img/edu-concept.svg" />

        <div className="md:grid md:grid-cols-2 flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-4 p-3 md:p-6  bg-white/40 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-primary backdrop-blur-sm "
            >
              <div className="text-2xl md:text-3xl">
                <FaCheckCircle className="text-accent" />
              </div>

              <p className="leading-snug">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
