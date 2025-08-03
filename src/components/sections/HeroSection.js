import Highlight from "@/components//layouts/Highlight";
import Container from "@/components/layouts/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex items-center bg-transparent text-background h-lvh">
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl gap-5 sm:gap-10">
          <h1 className="text-2xl font-bold sm:text-4xl">
            Трансформационный курс Поток5.0 от Marzhan Junusbek
          </h1>
          <p className="text-lg sm:text-xl text-primary">
            <Highlight>Даты проведения: 14-16 Июня</Highlight>
          </p>
          <p>
            по авторской методике SOP (Sense Out Pro) - мощный инструмент для
            раскрытия потенциала и активации энергии
          </p>
          <div className="flex flex-col items-start gap-5 sm:flex-row">
            <Button variant="primary" size="lg" href="#pricing">
              Зарегистироваться
            </Button>
            <Button variant="secondary" size="lg" href="#for-whom">
              Подробнее
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
