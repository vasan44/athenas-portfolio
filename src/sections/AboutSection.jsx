import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="section on-parchment ruled-onparchment" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-text reveal-left">
            <span className="eyebrow on-parchment">About Us</span>
            <h2 className="font-display about-title">Order, kept on every page.</h2>
            <p>Athena Solutions provides comprehensive HR, payroll, attendance management, and statutory compliance services to organizations across various industries.</p>
            <p>Our goal is to streamline workforce management, ensure statutory compliance, and support efficient business operations — so every register stays accurate, every filing stays on time, and every employee record stays in order.</p>
            <div className="head-rule" />

            <div className="about-panel reveal d3 about-panel-offset">
              <h3 className="font-display">What we keep in order</h3>
              <ul className="about-list">
                <li><b>HR</b> Records, leave, attendance & lifecycle</li>
                <li><b>PAY</b> Monthly processing & full-and-final settlement</li>
                <li><b>EPF</b> UAN, ECR filing & PF compliance</li>
                <li><b>ESI</b> Registration & contribution filing</li>
                <li><b>DOC</b> Statutory registers, Forms A–VI</li>
              </ul>
            </div>
          </div>

          <div className="about-image-wrap reveal-right d2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
              alt="Professional HR team at work"
              loading="lazy"
            />
            <div className="about-image-overlay" />
            <div className="about-image-badge">
              <CheckCircle2 size={24} className="badge-icon" />
              <div className="badge-text">
                <strong>100% Compliance Rate</strong>
                Zero statutory penalties across all client accounts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
