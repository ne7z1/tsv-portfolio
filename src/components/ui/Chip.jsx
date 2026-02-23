export default function Chip({ children, className = "" }) {
  return (
    <span 
      className={`
        flex grow inline-flex items-center justify-center 
        px-s py-xs
        border border-[#CBD5E1] rounded-lg 
        text-body text-text-main 
        ${className}
      `}
    >
      {children}
    </span>
  );
}