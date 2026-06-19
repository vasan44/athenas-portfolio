import { ArrowUpRight } from 'lucide-react';
import { Particles } from '../components/Particles';
import { HERO_IMAGES } from '../data/siteData';

export function Hero({ onContactClick, onServicesClick }) {
  return (
    <header className="hero on-ink" id="home">
      <Particles />
      <div className="hero-glow" />
      <div className="hero-glow-2" />
      <div className="hero-grid" />
      <svg className="hero-columns" viewBox="0 0 1200 260" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        {[80, 260, 440, 620, 800, 980, 1120].map((x, i) => (
          <g key={x} className="hero-col" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
            <rect x={x - 22} y="30" width="44" height="200" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1={x - 11} y1="30" x2={x - 11} y2="230" stroke="currentColor" strokeWidth="0.8" />
            <line x1={x} y1="30" x2={x} y2="230" stroke="currentColor" strokeWidth="0.8" />
            <line x1={x + 11} y1="30" x2={x + 11} y2="230" stroke="currentColor" strokeWidth="0.8" />
            <rect x={x - 30} y="14" width="60" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x={x - 30} y="230" width="60" height="12" fill="none" stroke="currentColor" strokeWidth="1" />
          </g>
        ))}
      </svg>

      <div className="wrap hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Est. Workforce Ledger — Madurai, TN
        </div>
        <h1 className="hero-title" aria-label="Athena Solutions — HR, Payroll and Statutory Compliance">
          <span className="hero-brand-stylized">ᗩ𝔱𝔥єղα</span>{' '}
          <em className="hero-brand-stylized">𝔖ø𝔩ʊեιΘղṩ</em>
          <span className="line2">HR · Payroll · Statutory Compliance</span>
        </h1>
        <p className="hero-sub">Your one-stop service hub for complete workforce management.</p>
        <p className="hero-sub2">Empowering businesses across India — from attendance tracking to EPF/ESI filings — handled with precision and delivered on time, every time.</p>
        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={onContactClick}>
            Get Started <ArrowUpRight size={14} />
          </button>
          <button className="btn btn-outline" onClick={onServicesClick}>
            Our Services
          </button>
        </div>

        <div className="hero-image-strip">
          {HERO_IMAGES.map((image) => (
            <div className="hero-img-card" key={image.label}>
              <img src={image.src} alt={image.label} loading="lazy" />
              <div className="card-label">{image.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
