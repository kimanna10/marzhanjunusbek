import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function AboutSection() {
  return (
    <Section className="bg-white" id="about">
      <SectionHeader
        title="О курсе"
        description={
          <>
            Немного о том, как курс поможет двигаться к{" "}
            <Highlight>новым результатам.</Highlight>
          </>
        }
      />
      {/* <Script src="https://www.youtube.com/iframe_api" strategy="lazyOnload" /> */}
      <div className="w-full h-0 pb-[56.25%] relative border-0">
        <iframe
          src="https://www.youtube.com/embed/1grapopgwrg?si=a-p3dfIUZ0HxTGZO&rel=0&modestbranding=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
    </Section>
  );
}
