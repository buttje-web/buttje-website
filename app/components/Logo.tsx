import Image from 'next/image';

interface LogoProps {
  /** 'dark' = schwarzes Logo auf hellem Hintergrund (Standard)
   *  'light' = invertiert via CSS-Filter fuer dunkle/tuerkise Hintergründe */
  variant?: 'dark' | 'light';
  /** Tailwind-Hoehenklasse, z.B. 'h-14' (Header) oder 'h-9' (Footer) */
  className?: string;
}

export default function Logo({ variant = 'dark', className = 'h-9' }: LogoProps) {
  return (
    <Image
      src="/buttje_logo_schwarz_v2.png"
      alt="buttje Gebäudereinigung Wien"
      width={112}
      height={40}
      className={`w-auto object-contain ${className}${variant === 'light' ? ' brightness-0 invert' : ''}`}
      priority
    />
  );
}
