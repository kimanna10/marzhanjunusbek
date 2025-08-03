import Highlight from "@/components/layouts/Highlight";
import Section from "@/components/layouts/Section";
import SectionHeader from "@/components/layouts/SectionHeader";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

export default function ContactSection() {
  return (
    <Section className="" id="contact">
      <SectionHeader
        title="Контакты"
        description={
          <>
            Остались вопросы? Напишите нам — мы с радостью{" "}
            <Highlight>подскажем и поможем</Highlight>.
          </>
        }
      />

      {/* Контактная информация */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-5">
          <MdEmail size={26} />

          <Link
            href="mailto:marzhan.junusbek@gmail.com"
            className="font-bold underline underline-offset-2"
          >
            marzhan.junusbek@gmail.com
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <MdPhone size={26} />
          <Link href="tel:+77475565681" className="font-bold">
            +7 747 556 56 81
          </Link>
        </div>

        <div className="flex gap-4 mt-1">
          <Button
            variant="icon"
            href="https://www.instagram.com/marzhan_junusbek/"
            target="_blank"
            icon={<RiInstagramFill size={24} />}
          />

          <Button
            variant="icon"
            href="https://api.whatsapp.com/message/OPQULHZBEUNYG1"
            target="_blank"
            icon={<RiWhatsappFill size={24} />}
          />
        </div>
      </div>
    </Section>
  );
}
