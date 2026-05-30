import Image from 'next/image';

interface LogoProps {
  /** 'dark' = schwarzes Logo auf hellem Hintergrund (Standard)
   *  'light' = invertiert via CSS-Filter fuer dunkle/tuerkise Hintergründe */
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Image
      src="/buttje_logo_schwarz.png"
      alt="buttje Gebäudereinigung Wien"
      width={108}
      height={40}
      className={`h-9 w-auto object-contain${variant === 'light' ? ' brightness-0 invert' : ''}${className ? ` ${className}` : ''}`}
      priority
    />
  );
}
