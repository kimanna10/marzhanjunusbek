import Highlight from "@/components/layouts/Highlight";
import ReviewSlider from "@/components/layouts/ReviewSlider";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function ReviewSection() {
  return (
    <Section className="bg-white" id="reviews">
      <SectionHeader
        title="Что говорят участники"
        description={
          <>
            ОТЗЫВЫ С ПРОШЛЫХ ПОТОКОВ СМОТРИТЕ В ИНСТАГРАМЕ{" "}
            <Highlight>@marzhan_junusbek</Highlight>
          </>
        }
      />

      <ReviewSlider />
    </Section>
  );
}
