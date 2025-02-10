interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="1" y="1" width="12" height="12" rx="0" stroke="currentColor" strokeWidth="0.7"/>
      <rect x="15" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="0.7"/>
      <rect x="5" y="15" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="0.7"/> 
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="0.7"/>
    </svg>
  );
} 