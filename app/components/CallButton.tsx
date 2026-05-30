'use client';

import PhoneIcon from './PhoneIcon';
import { PhoneLink } from './ObfuscatedContact';

interface CallButtonProps {
  variant?: 'primary' | 'secondary';
  location: string;
  label?: string;
  className?: string;
}

export default function CallButton({
  variant = 'primary',
  location,
  label = 'Jetzt anrufen',
  className = '',
}: CallButtonProps) {
  return (
    <PhoneLink
      variant="mobile"
      location={location}
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`}
    >
      <PhoneIcon className="w-5 h-5" />
      {label}
    </PhoneLink>
  );
}
