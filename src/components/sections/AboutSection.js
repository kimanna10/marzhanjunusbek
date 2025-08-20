import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function AboutSection() {
  return (
    <Section className="bg-white" id="about">
      <SectionHeader
        title="О методе Sense Out Pro (SOP)"
        description={
          <>
            С помощью данной авторской методики можно на корне{" "}
            <Highlight>решить любой запрос</Highlight>, так как в процессе
            проработки происходит <Highlight>высвобождение</Highlight> тех
            заблокированных чувств, формирующих негативную программу.
          </>
        }
      />
      <div className="flex gap-7 items-center lg:flex-row flex-col">
        <div className="flex-1/2">
          <img src="/img/scientists.png" alt="" className="w-[480px]" />
        </div>
        <div className="flex-1/2 space-y-8">
          <div className="flex  gap-8 items-center">
            <div className="w-1 h-36 rounded-full bg-secondary shrink-0"></div>
            <p className="py-8">
              Методика SOP позволяет высвободить блоки и трансформировать
              деструктивные программы в новое поведение и это приводит к
              потрясающим результатам!
            </p>
          </div>
          <div className="flex  gap-8 items-center">
            <div className="w-1 h-36  rounded-full bg-blue shrink-0"></div>
            <p className="py-8">
              Методика основана на учениях{" "}
              <span className="italic font-bold">
                Карла Юнга, Альфреда Адлера, Зигмунда Фрейда
              </span>
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <div className="w-1 h-36  rounded-full bg-pink shrink-0"></div>
            <p className="py-8 italic">
              Чудо не в методике, а в вас! Данный инструмент помогает раскрыть
              весь ваш скрытый потенциал
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// import Highlight from "@/components/layouts/Highlight";
// import Section from "@/components/layouts/Section";
// export default function AboutSection() {
//   return (
//     <Section className="" id="about">
//       <div className="space-y-5 text-center md:mx-32">
//         <h2 className="text-3xl font-bold">О методе Sense Out Pro (SOP)</h2>
//         <p className="text-lg leading-relaxed md:text-xl">
//           С помощью данной авторской методики можно на корне{" "}
//           <Highlight>решить любой запрос</Highlight>, так как в процессе
//           проработки происходит <Highlight>высвобождение</Highlight> тех
//           заблокированных чувств, формирующих негативную программу.
//         </p>
//       </div>
//     </Section>
//   );
// }
