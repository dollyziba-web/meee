import { useEffect } from 'react';

export function useScrollReveal(trigger?: any) {
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('revealed');
      });
    };

    // If reduced motion preferred, reveal all immediately
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '120px 0px 120px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If already in viewport or within 200px below fold, reveal immediately
      if (rect.top < window.innerHeight + 200) {
        el.classList.add('revealed');
      }
      observer.observe(el);
    });

    // Failsafe safety net: reveal all after 200ms so nothing can EVER remain blank
    const timer = setTimeout(revealAll, 200);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [trigger]);
}
