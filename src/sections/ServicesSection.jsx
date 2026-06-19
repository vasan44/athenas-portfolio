import { ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/siteData';

export function ServicesSection({ openService, setOpenService }) {
  return (
    <section className="section on-ink" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Our Services</span>
          <h2 className="font-display">Seven entries. One complete ledger.</h2>
          <p>From the first attendance scan to the final settlement, every service is logged, processed and reported the way statutory record-keeping demands.</p>
          <div className="head-rule reveal-rule d2" />
        </div>
        <div className="service-list reveal d2">
          {SERVICES.map((service, index) => {
            const isOpen = openService === index;

            return (
              <div
                className={`service-item${isOpen ? ' open' : ''}`}
                id={`service-${index + 1}`}
                key={service.num}
              >
                <button
                  type="button"
                  className="service-head"
                  onClick={() => setOpenService(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${index + 1}`}
                >
                  <span className="service-num font-mono">{service.num}</span>
                  <span className="service-emoji">{service.icon}</span>
                  <span className="service-title">{service.title}</span>
                  <ChevronDown className="service-chevron" size={20} />
                </button>
                <div className="acc-body" id={`service-panel-${index + 1}`}>
                  <div className="acc-inner">
                    <div className="acc-pad">
                      <div className="acc-content">
                        <div>
                          {service.items && (
                            <ul className="item-list">
                              {service.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                          )}
                          {service.groups && (
                            <div className="service-groups">
                              {service.groups.map((group) => (
                                <div key={group.label}>
                                  <h4>{group.label}</h4>
                                  <ul className="item-list">
                                    {group.items.map((item) => <li key={item}>{item}</li>)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        {service.image && (
                          <div className="acc-image">
                            <img src={service.image} alt={service.title} loading="lazy" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
