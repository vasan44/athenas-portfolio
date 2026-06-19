import { WHY_US } from '../data/siteData';

export function WhySection() {
  return (
    <section className="section on-ink" id="why">
      <div className="wrap">
        <div className="section-head reveal why-heading">
          <span className="eyebrow">Why Athena</span>
          <h2 className="font-display">Why choose Athena Solutions</h2>
          <p>Built from the ground up for compliance-first HR management — not retrofitted, not generic.</p>
          <div className="head-rule reveal-rule d2" />
        </div>
        <div className="why-grid reveal d2">
          {WHY_US.map((item, index) => (
            <div className="why-cell" key={item.title} style={{ transitionDelay: `${index * 0.07}s` }}>
              <div className="why-icon">{item.icon}</div>
              <div className="why-title">{item.title}</div>
              <div className="why-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
