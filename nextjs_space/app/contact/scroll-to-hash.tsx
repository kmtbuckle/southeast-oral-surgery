'use client';

import { useEffect } from 'react';

export default function HashScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.location.hash !== '#consultation-form') return;

    const t = window.setTimeout(() => {
      const el = document.getElementById('consultation-form');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);

    return () => window.clearTimeout(t);
  }, []);

  return null;
}
