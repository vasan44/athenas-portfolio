import { StatCard } from '../components/StatCard';
import { STATS } from '../data/siteData';

export function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
