import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function PriceSection() {
  return (
    <Section className="bg-white" id="pricing">
      <SectionHeader
        title="Тарифы"
        description={
          <>
            Выберите <Highlight>удобный тариф</Highlight> обучения:
          </>
        }
      />
    </Section>
  );
}
