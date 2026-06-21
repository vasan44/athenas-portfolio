import { useEffect, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export function StatCard({ stat, index }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCounter(stat.value, 1800, inView);
  const Icon = stat.icon;

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.35 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stat-card reveal"
      style={{ '--stat-delay': `${index * 90}ms` }}
    >
      <div className="stat-icon-wrap">
        <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <div className="stat-value" aria-label={stat.value}>{count}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}
