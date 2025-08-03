import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

// import { FiHeart, FiTrendingUp } from "react-icons/fi";
// import { LuBrainCircuit, LuStethoscope, LuWallet } from "react-icons/lu";
// import { RiCompassDiscoverLine } from "react-icons/ri";

const features = [
  {
    icon: "/img/meditation.svg",
    title: "Исцелить свои травмы",
    description:
      "Определить причины Ваших проблем и выйти из замкнутых циклов.",
  },
  {
    icon: "/img/rocket-boy.svg",
    title: "Повысить уровень энергии",
    description: "Понять, в чём Ваше призвание, и начать помогать другим.",
  },
  {
    icon: "/img/sad-face.svg",
    title: "Выявить и преодолеть страхи",
    description:
      "Осознать, что Вас останавливает, и перестать бояться двигаться вперёд.",
  },
  {
    icon: "/img/family.svg",
    title: "Наладить отношения",
    description: "Принять родителей, партнёра, близких — и построить гармонию.",
  },
  {
    icon: "/img/businessman.svg",
    title: "Выйти на новый финансовый уровень",
    description:
      "Проработать страхи и блоки на деньги, открыть новые возможности.",
  },
  {
    icon: "/img/coughing.svg",
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

      <div className="flex flex-col gap-1 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-1 transition  cursor-pointer  border-white/10 backdrop-blur-sm 
            ${
              index % 2 === 0
                ? "flex-col sm:flex-row"
                : "flex-col sm:flex-row-reverse"
            }
          `}
          >
            <img className="w-auto h-48 lg:h-64" src={feature.icon} />
            <div className={`  ${index % 2 === 0 ? "" : "text-right"}  `}>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
