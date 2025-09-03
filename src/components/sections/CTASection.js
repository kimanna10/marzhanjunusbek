"use client";
import Container from "@/components/layouts/Container";
import Highlight from "@/components/layouts/Highlight";
import SectionHeader from "@/components/layouts/SectionHeader";
import Button from "@/components/ui/Button";

export default function CTASection({
  className,
  title = "Готовы сделать первый шаг к гармонии?",
  description = "Присоединяйтесь к курсу сейчас",
  buttonText = "Зарегистрироваться",
  variant = "primary",
}) {
  return (
    <section className={`py-15  ${className}`}>
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
            <Button href="#" target="_blank" variant={variant} size="lg">
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
