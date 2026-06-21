import { ArrowUpRight } from 'lucide-react';

export function Hero({ onContactClick, onServicesClick }) {
  return (
    <header className="hero on-ink" id="home">
      <div className="hero-glow" />

      <div className="wrap hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          HR · Payroll · Compliance Experts
        </div>
        <h1 className="hero-title" aria-label="Athena Solutions — HR, Payroll and Statutory Compliance">
          Complete workforce support,
          <span className="hero-brand-line">
            built for <em className="hero-brand-stylized">business growth</em>
          </span>
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
      </div>
    </header>
  );
}
