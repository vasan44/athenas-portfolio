import { StatCard } from '../components/StatCard';
import { STATS } from '../data/siteData';

export function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Athena Solutions at a glance">
      <div className="wrap">
        <div className="stats-heading reveal">
          <span className="stats-kicker">Trusted operations</span>
          <p>Reliable HR and compliance support, measured in results.</p>
        </div>
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
