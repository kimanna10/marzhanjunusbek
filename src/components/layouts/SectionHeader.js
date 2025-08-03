export default function SectionHeader({
  title,
  description,
  align = "center",
  className = "",
}) {
  return (
    <div className={`text-${align} space-y-5 md:mx-32 mb-10 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-lg leading-relaxed md:text-xl">{description}</p>
    </div>
  );
}
