import { useEffect, useState } from 'react';

export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const num = parseInt(String(target).replace(/[^0-9]/g, ''), 10);
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  const isPercent = String(target).includes('%');
  const isPlus = String(target).includes('+');
  return `${count}${isPercent ? '%' : ''}${isPlus ? '+' : ''}`;
}
