import Button from "@/components/ui/Button";
export default function PriceCard({
  title = "",
  img = "",
  period = "",
  items = [],
  oldPrice = "",
  newPrice = "",
  type = "",
}) {
  let typeClass = "";
  let typeDots = "";
  if (type === "base") {
    typeClass = "bg-white/50 background-blur-sm text-primary";
    typeDots = "border-secondary border";
  }
  if (type === "pro") {
    typeClass = "bg-white border-secondary border-3 text-primary ";
    typeDots = "bg-secondary";
  }
  if (type === "expert") {
    typeClass = "bg-primary text-background ";
    typeDots = "bg-background";
  }
  const finalClass = `lg:px-5 sm:px-10 px-5 py-12 rounded-2xl shadow-[5px_10px_20px_0_rgba(0,0,0,0.25)] flex flex-col justify-between gap-20 ${typeClass}`;
  const finalDots = `w-2.5 h-2.5 rounded-full shrink-0 ${typeDots}`;
  return (
    <article className={finalClass}>
      <div className="flex flex-col justify-between gap-20 ">
        <div className="flex flex-col items-center justify-between gap-2 text-center min-h-80">
          <h3 className="text-2xl font-bold">«{title}»</h3>
          <img
            src={img}
            alt={`Изображение тарифа ${title}`}
            className="w-52 h-auto"
          />
          <div className="bg-secondary rounded-xl text-white py-1.5 px-10 text-sm font-bold">
            Длительность - {period}
          </div>
        </div>
        <ul className="space-y-3.5">
          {items.map((item, index) => (
            <li className="flex items-center gap-2.5" key={index}>
              <div className={finalDots}></div>
              <p className="leading-snug">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-12 items-center">
        <div className="flex items-center gap-2.5">
          <span className="relative text-red text-2xl font-bold">
            {oldPrice} ₸
            <span className="absolute left-0 top-1/2 w-full h-[1px] bg-red rounded-full -translate-y-1/2"></span>
          </span>

          <span className="text-2xl font-bold text-secondary">
            {newPrice} ₸
          </span>
        </div>
        <Button
          variant="secondary"
          size="lg"
          href={`https://wa.me/77750581415?text=Хочу%20записаться%20на%20курс%20по%20тарифу: ${title}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Купить тариф ${title} через WhatsApp`}
        >
          Купить
        </Button>
      </div>
    </article>
  );
}
