import book from "@/animations/book.json";
import pencil from "@/animations/pencil.json";
import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import LottieAnimation from "@/components/ui/LottieAnimation";
// import dynamic from "next/dynamic";
import { IoCalendar, IoLocationSharp } from "react-icons/io5";

// const LottieAnimation = dynamic(
//   () => import("@/components/ui/LottieAnimation"),
//   {
//     ssr: false,
//   }
// );

export default function ProgramSection() {
  return (
    <Section className="bg-primary text-background" id="program">
      <SectionHeader
        title="Как проходит обучение"
        description={
          <>
            Комбинация <Highlight>теории, практики и поддержки</Highlight> —
            чтобы результат был не временным, а стабильным.
          </>
        }
      />
      <div className="flex flex-col gap-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col items-center text-center gap-6">
            <LottieAnimation item={book} className="w-1/3" />
            <h3 className="text-lg font-bold">Теоретическая часть</h3>
            <p>
              Вы узнаете, как устроена психика человека, что такое детские
              травмы и механизмы их проработки, как восстанавливается
              целостность, и какие подводные камни существуют в терапии.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-6">
            <LottieAnimation item={pencil} className="w-1/3" />
            <h3 className="text-lg font-bold">Практическая часть</h3>
            <p>
              Показательные проработки в реальном времени помогут вам глубже
              понять процесс, а работа в парах отточит навыки и уверенность в
              себе.
            </p>
          </div>
        </div>

        <div className="text-primary max-w-4xl mx-auto space-y-10">
          <div className="bg-background py-5 md:px-20 px-6 rounded-xl ">
            <p className="font-bold sm:text-lg text-center ">
              🔥 В течении терапевтической курса вы получаете x3 СРАЗУ:
              авторскую методику проработок SOP + практику + решение своих
              запросов.
            </p>
          </div>
          <div className="bg-background py-5 md:px-20 px-6 rounded-xl">
            <p className="font-bold sm:text-lg text-center">
              🌀 А самое главное,{" "}
              <span className="uppercase">вы получаете проводника</span>, и не
              тратите свое время, чтобы во всем самим разбираться.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-5">
            <IoCalendar size={26} />
            {/* <p className="text-lg">
              Старт: <span className="font-bold">7 сентрября</span>
            </p> */}
            <p className="text-lg sm:text-xl">
              <Highlight className=" sm:px-2 px-1.5  sm:py-2 py-1 ">
                🚀Старт близко — присоединяйся!
              </Highlight>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <IoLocationSharp size={26} />
            <p className="text-lg">
              Формат: <span className="font-bold">онлайн</span>
            </p>
          </div>
        </div>
        <div className="flex sm:gap-5 gap-1.5 items-center justify-center">
          <img src="/img/kaspired.png" alt="" className="sm:w-28 w-20" />
          <p className="sm:text-lg font-bold">
            Есть возможность оплаты в рассрочку через Kaspi Red
          </p>
        </div>
      </div>
    </Section>
  );
}
