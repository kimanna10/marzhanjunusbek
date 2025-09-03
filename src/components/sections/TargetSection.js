import family from "@/animations/family.json";
import finance from "@/animations/finance.json";
import healing from "@/animations/healing.json";
import search from "@/animations/search.json";
import teamwork from "@/animations/teamwork.json";
import time from "@/animations/time.json";
import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import LottieAnimation from "@/components/ui/LottieAnimation";

const features = [
  {
    img: time,
    title: "Освободиться от груза прошлого",
    description:
      "Пройти комплексное исцеление не только психологическое, но и энергетическое.",
  },
  {
    img: teamwork,
    title: "Повысить уровень энергии",
    description: "Понять, в чём Ваше призвание, и начать помогать другим.",
  },
  {
    img: search,
    title: "Выявить и преодолеть страхи",
    description:
      "Осознать, что Вас останавливает, и перестать бояться двигаться вперёд.",
  },
  {
    img: family,
    title: "Наладить отношения",
    description: "Принять родителей, партнёра, близких — и построить гармонию.",
  },
  {
    img: finance,
    title: "Выйти на новый финансовый уровень",
    description:
      "Проработать страхи и блоки на деньги, открыть новые возможности.",
  },
  {
    img: healing,
    title: "Исцелить тело",
    description: "Найти психоэмоциональные причины заболеваний и устранить их.",
  },
];

export default function TargetSection() {
  return (
    <Section className="bg-white" id="for-whom">
      <SectionHeader
        title="Для кого"
        description={
          <>
            Этот курс для Вас, <Highlight>если Вы хотите:</Highlight>
          </>
        }
      />

      <div className="flex flex-col md:gap-1 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            }
          `}
          >
            <LottieAnimation
              item={feature.img}
              className="w-60 h-auto lg:w-80"
            />
            <div
              className={`${
                index % 2 === 0 ? "" : "md:text-right"
              } text-center md:text-left`}
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
