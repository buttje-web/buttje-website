interface LogoProps {
  className?: string;
}

// Reine Wortmarke "buttje" mit kleinem hochgestelltem ®, in Inter.
// Farbe wird ueber currentColor gesteuert (className), damit das Logo auf hellem
// wie dunklem/tuerkisem Untergrund lesbar bleibt.
export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`logo-wordmark inline-flex items-start leading-none ${className}`}>
      <span>buttje</span>
      <span className="ml-[0.08em] mt-[0.12em] text-[0.42em] font-semibold tracking-normal align-top">
        ®
      </span>
    </span>
  );
}
