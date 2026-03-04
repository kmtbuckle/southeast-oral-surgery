'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only run when we're on /contact
    if (pathname !== '/contact') return;

    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // Let layout paint first
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, [pathname]);

  return null;
}
