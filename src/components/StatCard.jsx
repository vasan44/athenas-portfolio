import { useEffect, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

export function StatCard({ stat, index }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCounter(stat.value, 1800, inView);
  const Icon = stat.icon;

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stat-card reveal"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="stat-icon-wrap">
        <Icon size={22} />
      </div>
      <div className="stat-value">{count}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}
