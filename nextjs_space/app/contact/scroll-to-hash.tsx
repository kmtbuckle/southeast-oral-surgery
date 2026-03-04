'use client';

import { useEffect } from 'react';

const TARGET_HASH = '#consultation-form';
const TARGET_ID = 'consultation-form';

function scrollWhenReady() {
  if (typeof window === 'undefined') return;
  if (window.location.hash !== TARGET_HASH) return;

  let attempts = 0;
  const maxAttempts = 20; // ~2s at 100ms

  const tryScroll = () => {
    attempts += 1;
    const el = document.getElementById(TARGET_ID);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (attempts < maxAttempts) {
      window.setTimeout(tryScroll, 100);
    }
  };

  tryScroll();
}

export default function HashScroll() {
  useEffect(() => {
    scrollWhenReady();

    const onHashChange = () => scrollWhenReady();
    window.addEventListener('hashchange', onHashChange);

    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
}
