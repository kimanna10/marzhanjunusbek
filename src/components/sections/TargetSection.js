import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

import { FiHeart, FiTrendingUp } from "react-icons/fi";
import { LuBrainCircuit, LuStethoscope, LuWallet } from "react-icons/lu";
import { RiCompassDiscoverLine } from "react-icons/ri";

const features = [
  {
    icon: <LuBrainCircuit />,
    title: "Исцелить свои травмы",
    description:
      "Определить причины Ваших проблем и выйти из замкнутых циклов.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Повысить уровень энергии",
    description: "Понять, в чём Ваше призвание, и начать помогать другим.",
  },
  {
    icon: <RiCompassDiscoverLine />,
    title: "Выявить и преодолеть страхи",
    description:
      "Осознать, что Вас останавливает, и перестать бояться двигаться вперёд.",
  },
  {
    icon: <FiHeart />,
    title: "Наладить отношения",
    description: "Принять родителей, партнёра, близких — и построить гармонию.",
  },
  {
    icon: <LuWallet />,
    title: "Выйти на новый финансовый уровень",
    description:
      "Проработать страхи и блоки на деньги, открыть новые возможности.",
  },
  {
    icon: <LuStethoscope />,
    title: "Исцелить тело",
    description: "Найти психоэмоциональные причины заболеваний и устранить их.",
  },
];

export default function TargetSection() {
  return (
    <Section className="" id="for-whom">
      <SectionHeader
        title="Для кого"
        description={
          <>
            Этот курс для Вас, <Highlight>если Вы хотите:</Highlight>
          </>
        }
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-1 p-6 transition border shadow-md rounded-xl bg-background/5 backdrop-blur-sm border-background/10 hover:shadow-lg cursor-pointer hover:scale-110"
          >
            <div className="text-3xl text-accent">{feature.icon}</div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
