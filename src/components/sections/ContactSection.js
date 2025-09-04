import instagram from "@/animations/instagram.json";
import whatsapp from "@/animations/whatsapp.json";
import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import LottieAnimation from "@/components/ui/LottieAnimation";
import Link from "next/link";
import { IoCall, IoMail } from "react-icons/io5";

export default function ContactSection() {
  return (
    <Section className="bg-primary text-background" id="contact">
      <SectionHeader
        title="Контакты"
        description={
          <>
            Остались вопросы? Напишите нам — мы с радостью{" "}
            <Highlight>подскажем и поможем.</Highlight>
          </>
        }
      />

      {/* Контактная информация */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-5">
          <IoMail size={26} aria-hidden="true" />

          <Link
            href="mailto:umaradilet552@gmail.com"
            className="underline underline-offset-2 text-lg"
          >
            umaradilet552@gmail.com
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <IoCall size={26} aria-hidden="true" />
          <Link href="tel:+77750581415" className="text-lg">
            +7 747 556 56 81
          </Link>
        </div>

        <div className="flex gap-4 mt-1">
          <Link
            href="https://www.instagram.com/marzhan_junusbek/"
            target="_blank"
            aria-label="Instagram Маржан Жунусбек"
          >
            <LottieAnimation item={instagram} className="w-18" />
          </Link>
          <Link
            href="https://wa.me/77750581415?text=Здравствуйте%20пишу%20с%20сайта"
            target="_blank"
            aria-label="Написать на WhatsApp"
          >
            <LottieAnimation item={whatsapp} className="w-18" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
