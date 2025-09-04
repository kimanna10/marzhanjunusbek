"use client";
import Container from "@/components/layouts/Container";
import Highlight from "@/components/layouts/Highlight";
import SectionHeader from "@/components/layouts/SectionHeader";
import Button from "@/components/ui/Button";

export default function CTASection({
  title = "Готовы сделать первый шаг к гармонии?",
  description = "Присоединяйтесь к курсу сейчас",
  buttonText = "Зарегистрироваться",
  variant = "primary",
}) {
  return (
    <section className={`py-15`}>
      <Container>
        <div className="flex flex-col gap-5">
          <SectionHeader
            title={title}
            description={
              <>
                <Highlight>{description}</Highlight>
              </>
            }
          />
          <div className="mx-auto">
            <Button
              href="https://wa.me/77760581415?text=Хочу%20записаться%20на%20курс"
              target="_blank"
              variant={variant}
              size="lg"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
