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
