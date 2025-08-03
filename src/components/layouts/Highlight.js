export default function Highlight({ children, className = "" }) {
  return <span className={`font-bold bg-accent ${className}`}>{children}</span>;
}
