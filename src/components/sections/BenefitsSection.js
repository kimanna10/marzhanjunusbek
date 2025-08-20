import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
// import LottieAnimation from "@/components/ui/LottieAnimation";
import { FaCheckCircle } from "react-icons/fa";

// import dynamic from "next/dynamic";

// // const LottieAnimation = dynamic(
// //   () => import("@/components/ui/LottieAnimation"),
// //   {
// //     ssr: false,
// //   }
// // );

const benefits = [
  "Поймете, как формируются эмоциональные блоки, и как заново возродить свою энергию.",
  "Узнаете, как самостоятельно выводить себя в ресурсное состояние за 5 минут.",
  "Увидите свои вторичные выгоды и проработаете корни своих проблем, мешающие сделать скачок в жизни.",
  "Сможете исцелить свою основу — 5 базовых чувств (безопасность, свобода, любовь, ценность, защищенность).",
  "Познакомитесь с другим собой через принятие теневых частей личности, примете самые вкусные состояния.",
  "Исцелите отношения с родителями на глубинном уровне подсознания, и освободитесь от ограничивающих убеждений.",
  "Пройдете очищение от сущностей и других вампиров, ворующих вашу энергию.",
  "Проработаете отношение к деньгам, и улучшите свое финансовое благосостояние.",
  "Исцелите внутреннего ребенка и обретете желание жить, творить, любить.",
  "Соединитесь со своим Высшим Я, и восстановите свою целостность и станете источником любви.",
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
