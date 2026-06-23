import { useState, useEffect } from 'react';
import { CLIENT_LOGOS } from '../data/siteData';

function ClientLogoMark({ client }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  useEffect(() => {
    setImageAvailable(true);
  }, [client.logo]);

  if (client.logo && imageAvailable) {
    return (
      <span className="client-logo-mark client-logo-mark-image">
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          onError={() => setImageAvailable(false)}
        />
      </span>
    );
  }

  return (
    <span className="client-logo-mark client-logo-mark-text">
      <span>{client.mark || client.name}</span>
    </span>
  );
}

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

        <div className="client-logo-strip" aria-label="Industries served by Athena">
          {CLIENT_LOGOS.map((client, index) => (
            <div
              className="client-logo-tile reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
              key={client.name}
            >
              <ClientLogoMark client={client} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
