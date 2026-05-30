'use client';

import PhoneIcon from './PhoneIcon';
import { PHONE_MOBILE, telHref } from '../lib/contact';
import { trackPhoneCall } from '../utils/gtag';

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
    <a
      href={telHref(PHONE_MOBILE)}
      onClick={() => trackPhoneCall(PHONE_MOBILE, location)}
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`}
    >
      <PhoneIcon className="w-5 h-5" />
      {label}
    </a>
  );
}
