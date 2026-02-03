export default function PrimaryButton({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className="w-full bg-transparent border border-architectural-ink px-small py-3 text-xs uppercase tracking-[0.1em] text-architectural-ink hover:bg-architectural-ink hover:text-architectural-white transition-all duration-200 mt-small"
      >
        {children}
      </button>
    );
  }

  return (
    <a 
      href={href}
      className="inline-block bg-transparent border border-architectural-ink px-small py-3 text-xs uppercase tracking-[0.1em] text-architectural-ink hover:bg-architectural-ink hover:text-architectural-white transition-all duration-200"
    >
      {children}
    </a>
  );
}
