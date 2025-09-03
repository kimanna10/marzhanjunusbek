import Container from "@/components/layouts/Container";
import Highlight from "@/components/layouts/Highlight";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex items-center text-primary h-lvh">
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl gap-5 sm:gap-10">
          <h1 className="text-2xl font-bold sm:text-4xl">
            Терапевтический курс "Исцеление Души" Поток 5.0 от Маржан Жунусбек
          </h1>
          {/* <p className="text-lg sm:text-xl font-bold">Старт: 7 сентября</p> */}
          <p className="text-lg sm:text-xl">
            <Highlight className=" sm:px-2 px-1.5  sm:py-2 py-1 ">
              🚀Старт близко — присоединяйся!
            </Highlight>
          </p>
          <p className="font-bold">
            по авторской методике SOP (Sense Out Pro) - мощный инструмент для
            раскрытия потенциала и активации энергии
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row">
            <Button variant="primary" size="lg" href="#pricing">
              Зарегистироваться
            </Button>
            <Button variant="outlined" size="lg" href="#for-whom">
              Подробнее
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
