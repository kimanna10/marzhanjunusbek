export default function Highlight({ children, className = "" }) {
  return <span className={`font-bold bg-yellow ${className}`}>{children}</span>;
}
