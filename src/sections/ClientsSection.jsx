import { CLIENT_LOGOS, INDUSTRY_SOLUTIONS } from '../data/siteData';

export function ClientsSection() {
  return (
    <section className="section on-ink clients-section" id="clients">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Clients & Partners</span>
          <h2 className="font-display">Built for teams that run daily operations.</h2>
          <p>Athena supports workforce-heavy businesses where attendance, payroll, compliance, and documentation must stay accurate every month.</p>
          <div className="head-rule reveal-rule d2" />
        </div>

        <div className="client-logo-strip reveal d2" aria-label="Industries served by Athena">
          {CLIENT_LOGOS.map((client, index) => (
            <div className="client-logo-tile" style={{ '--logo-delay': `${index * 0.08}s` }} key={client.name}>
              <span>{client.mark}</span>
              <small>{client.name}</small>
            </div>
          ))}
        </div>

        <div className="industry-grid">
          {INDUSTRY_SOLUTIONS.map((item, index) => (
            <article className="industry-card reveal" style={{ transitionDelay: `${index * 0.06}s` }} key={item.title}>
              <div className="industry-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
