import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function ReviewSection() {
  return (
    <Section className="" id="reviews">
      <SectionHeader
        title="Что говорят участники"
        description={
          <>
            ОТЗЫВЫ С ПРОШЛЫХ ПОТОКОВ СМОТРИТЕ В ИНСТАГРАМЕ{" "}
            <Highlight>@marzhan_junusbek</Highlight>
          </>
        }
      />
    </Section>
  );
}
