import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import { FaCheckCircle } from "react-icons/fa";

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
    <Section className="bg-transparent" id="benefits">
      <SectionHeader
        title="Раскрытие через опыт"
        description={
          <>
            На{" "}
            <Highlight className="text-primary">
              терапевтическом курсе
            </Highlight>
            курсе Вы:
          </>
        }
        className="text-background"
      />

      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-primary/5 rounded-xl border border-background/10 text-background backdrop-blur-sm flex md:flex-row flex-col gap-1 cursor-pointer"
          >
            <div className="text-2xl md:text-3xl">
              <FaCheckCircle className="text-accent" />
            </div>

            <p className="leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
