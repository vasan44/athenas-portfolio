import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const selector = '.athena .reveal, .athena .reveal-rule, .athena .reveal-left, .athena .reveal-right, .athena .reveal-scale';

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(selector).forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observed = new WeakSet();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    const observeNew = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (observed.has(el) || el.classList.contains('visible')) return;
        observed.add(el);
        obs.observe(el);
      });
    };

    observeNew();

    const mutation = new MutationObserver(observeNew);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutation.disconnect();
      obs.disconnect();
    };
  }, []);
}
