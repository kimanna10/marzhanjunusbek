import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import { FaCheck } from "react-icons/fa";

const points = [
  "Психолог, дипломированный мастер проработок",
  "Автор методики Sense Out Pro (SOP)",
  "Мастер НЛП и эмоционального интеллекта",
  "Автор медитативных аудио-проработок",
  "Мастер PWS",
  "Наставник и автор трансформационных марафонов",
];

export default function AuthorSection() {
  return (
    <Section className="bg-white" id="author">
      <SectionHeader
        title="Автор и ведущая курса - Маржан Жунусбек"
        description={
          <>
            <Highlight className="text-3xl font-thin bg-transparent font-caveat">
              @marzhan_junusbek
            </Highlight>
          </>
        }
      />

      <div className="flex flex-col-reverse items-center gap-8 mx-auto md:flex-row md:max-w-5xl">
        <div className="w-full space-y-4 md:w-2/3">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3 ">
              <FaCheck className="mt-1 text-accent shrink-0" />
              <p className="leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="flex-shrink-0 w-full overflow-hidden shadow-lg rounded-xl md:w-1/3">
          <img
            src="/author.jpg"
            alt="Автор курса"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
}
