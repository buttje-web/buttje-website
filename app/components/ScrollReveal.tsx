'use client';

import { useEffect } from 'react';

// Aktiviert die .slide-in-left/.slide-in-right Animationen per IntersectionObserver,
// damit die Seiten Server-Komponenten bleiben koennen (und metadata exportieren).
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' },
    );
    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
