import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const points = [
  "Дипломированный Психолог",
  "Целитель (носитель родового Дара Қасиет), Медиум",
  "Мастер проработок и трансформации сознания",
  "Мастер PWS, Мастер НЛП и эмоционального интеллекта",
  "Автор медитативных аудио-проработок",
  "Автор инновационной методики проработок Sense Out Pro (SOP)",
];

export default function AuthorSection() {
  return (
    <Section className="bg-white " id="author">
      <SectionHeader
        title="Автор и ведущая курса - Маржан Жунусбек"
        description={
          <>
            <Highlight className="text-3xl font-thin bg-transparent text-primary  font-caveat">
              @marzhan_junusbek
            </Highlight>
          </>
        }
      />

      <div className="flex flex-col-reverse items-center gap-8 mx-auto md:flex-row md:max-w-5xl">
        <div className="w-full space-y-4 md:w-2/3">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-3 ">
              <IoCheckmarkCircleOutline
                className=" text-secondary shrink-0"
                size={30}
              />
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
