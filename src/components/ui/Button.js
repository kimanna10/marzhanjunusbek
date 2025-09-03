import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
  href = "",
  target = "",
}) {
  const isIconOnly = !children && icon;

  let variantClass = "";
  if (variant === "primary")
    variantClass = "bg-primary text-background rounded-xl";
  if (variant === "secondary")
    variantClass = "bg-secondary text-white rounded-xl w-full ";

  if (variant === "outlined")
    variantClass =
      "bg-transparent text-primary outline-2 outline-primary rounded-xl outline-offset-[-2px] hover:shadow-[0_0_8px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm";

  if (variant === "icon")
    variantClass =
      "bg-primary rounded-full text-background hover:text-yellow text-lg";

  let sizeClass = "";

  if (size === "lg") sizeClass = "px-8 py-4 text-base";

  const disabledClass =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";
  const iconOnlyClass = isIconOnly ? "p-2" : "";
  const gapClass = icon && children ? "gap-2" : "";

  const finalClass = `inline-flex items-center justify-center font-semibold transition-all cursor-pointer duration-200  hover:shadow-[0_0_8px_4px_rgba(0,0,0,0.2)]  ${variantClass} ${sizeClass} ${disabledClass} ${iconOnlyClass} ${gapClass} ${className}`;

  return (
    <Link href={href} target={target}>
      <button
        className={finalClass}
        onClick={onClick}
        type={type}
        disabled={disabled || loading}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent" />
        ) : (
          <>
            {icon && iconPosition === "left" && <span>{icon}</span>}
            {children && <>{children}</>}
            {icon && iconPosition === "right" && <span>{icon}</span>}
          </>
        )}
      </button>
    </Link>
  );
}
