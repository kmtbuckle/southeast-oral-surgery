'use client';

import { Button } from '@/components/ui/button';

interface CTAButtonProps {
  text: string;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export default function CTAButton({ text, variant = 'default', size = 'lg', className = '' }: CTAButtonProps) {
  const scrollToConsultation = () => {
    if (typeof window !== 'undefined') {
      window?.location?.assign('/#consultation-form');
    }
  };

  return (
    <Button
      onClick={scrollToConsultation}
      variant={variant}
      size={size}
      className={className}
    >
      {text}
    </Button>
  );
}
