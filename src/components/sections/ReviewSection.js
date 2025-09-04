import Highlight from "@/components/layouts/Highlight";
import ReviewSlider from "@/components/layouts/ReviewSlider";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import Link from "next/link";

export default function ReviewSection() {
  return (
    <Section className="bg-white" id="reviews">
      <SectionHeader
        title="Что говорят участники"
        description={
          <>
            ОТЗЫВЫ С ПРОШЛЫХ ПОТОКОВ СМОТРИТЕ В ИНСТАГРАМЕ{" "}
            <Highlight>
              <Link
                href="https://www.instagram.com/marzhan_junusbek/"
                target="_blank"
                aria-label="Instagram Маржан Жунусбек"
              >
                @marzhan_junusbek
              </Link>
            </Highlight>
          </>
        }
      />

      <ReviewSlider />
    </Section>
  );
}
