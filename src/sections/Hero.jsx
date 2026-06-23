import { ArrowUpRight, Phone } from 'lucide-react';

export function Hero({ onContactClick, onServicesClick }) {
  return (
    <header className="hero on-ink" id="home">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="wrap hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          HR&nbsp;•&nbsp;Payroll&nbsp;•&nbsp;Compliance&nbsp;•&nbsp;Business Technology
        </div>

        <h1 className="hero-title" aria-label="Complete Business Support for Smarter Growth">
          <span className="hero-title-line1">Complete Business</span>
          <span className="hero-title-line1">Support For</span>
          <span className="hero-title-accent">smarter growth</span>
        </h1>

        <p className="hero-sub">
          Athena Solutions helps businesses manage workforce operations, payroll, statutory compliance, accounting and digital solutions through one reliable service partner.
        </p>

        <div className="hero-ctas">
          <button className="btn btn-primary" onClick={onServicesClick}>
            Explore Our Services <ArrowUpRight size={14} />
          </button>
          <button className="btn btn-outline" onClick={onContactClick}>
            <Phone size={13} /> Talk to Our Experts
          </button>
        </div>

        <p className="hero-sub2">
          Simplifying operations.&nbsp;&nbsp;Ensuring compliance.&nbsp;&nbsp;Supporting business growth.
        </p>
      </div>
    </header>
  );
}
