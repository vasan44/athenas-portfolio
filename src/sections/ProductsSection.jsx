import { useState } from 'react';
import { PRODUCTS } from '../data/siteData';

function ProductImage({ product }) {
  const gold = product.id !== 'ergon';

  return (
    <div className="prod-image-panel">
      <div className={`prod-image-frame ${gold ? 'prod-glow-ai' : 'prod-glow-ergon'}`}>
        <img src={product.image} alt={`${product.name} product preview`} loading="lazy" />
        <div className={gold ? 'prod-image-overlay-ai' : 'prod-image-overlay-ergon'} />
      </div>
      <div className="prod-stat-float">
        {product.stats.map((stat, index) => (
          <div className="prod-stat-group" key={stat.label}>
            {index > 0 && <div className="prod-stat-sep" />}
            <div className="prod-stat-item">
              <div className={`prod-stat-val ${gold ? 'prod-stat-val-gold' : 'prod-stat-val-teal'}`}>{stat.value}</div>
              <div className="prod-stat-lbl">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="prod-web-badge">
        <a href="https://www.athenas.co.in" target="_blank" rel="noreferrer">🌐 www.athenas.co.in</a>
      </div>
    </div>
  );
}

function ErgonContent({ product }) {
  return (
    <>
      <div className="prod-motto">
        <p>MANAGE <span>BETTER.</span></p>
        <p className="prod-motto-accent">WORK SMARTER.</p>
      </div>
      <div className="prod-feat-grid">
        {product.features.map((feature) => (
          <div className="prod-feat prod-feat-ergon" key={feature.label}>
            <div className="prod-feat-icon">{feature.icon}</div>
            <div>
              <div className="prod-feat-label">{feature.label}</div>
              <div className="prod-feat-desc">{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="prod-highlights">
        {product.highlights.map((highlight) => (
          <div className="prod-highlight" key={highlight.title}>
            <div className="prod-highlight-icon">{highlight.icon}</div>
            <div>
              <div className="prod-highlight-title">{highlight.title}</div>
              <div className="prod-highlight-desc">{highlight.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function AiContent({ product }) {
  return (
    <>
      <div className="prod-ai-features">
        {product.features.map((feature) => (
          <div className="prod-ai-feat" key={feature.label}>
            <div className="prod-ai-feat-icon">{feature.icon}</div>
            <div>
              <div className="prod-ai-feat-label">{feature.label}</div>
              <div className="prod-ai-feat-desc">{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="prod-pillars">
        {product.pillars.map((pillar) => (
          <div className="prod-pillar" key={pillar.label}>
            <div className="prod-pillar-icon">{pillar.icon}</div>
            <div className="prod-pillar-label">{pillar.label}</div>
            <div className="prod-pillar-desc">{pillar.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function PlatformContent({ product }) {
  return (
    <div className="prod-platform-modules">
      {product.modules.map((module, index) => (
        <div
          className="prod-module"
          key={module.label}
          style={{ animationDuration: `${3 + (index % 4) * 0.5}s`, animationDelay: `${index * 0.2}s` }}
        >
          <div className="prod-module-icon">{module.icon}</div>
          <div className="prod-module-label">{module.label}</div>
          <div className="prod-module-desc">{module.desc}</div>
        </div>
      ))}
    </div>
  );
}

export function ProductsSection() {
  const [activeProductId, setActiveProductId] = useState(PRODUCTS[0].id);
  const product = PRODUCTS.find(({ id }) => id === activeProductId) ?? PRODUCTS[0];

  return (
    <section className="products-section" id="products">
      <div className="wrap">
        <div className="section-head reveal products-heading">
          <span className="eyebrow">Our Products</span>
          <h2>Built by Athena</h2>
          <p>Beyond HR consulting, we build software products that put your workforce data to work, 24/7.</p>
          <div className="head-rule reveal-rule d2" />
        </div>

        <div className="prod-tabs-wrap reveal d2">
          <div className="prod-tabs" role="tablist" aria-label="Athena products">
            {PRODUCTS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeProductId === item.id}
                aria-controls="active-product-panel"
                className={`prod-tab${activeProductId === item.id ? ` active-${item.id}` : ''}`}
                onClick={() => setActiveProductId(item.id)}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="prod-card" id="active-product-panel" role="tabpanel" key={product.id}>
          <div className="prod-card-inner">
            <div>
              <div className={`prod-badge prod-badge-${product.id}`}>
                {product.id === 'ergon' ? '●' : product.id === 'aiagent' ? '✦' : '◈'} {product.badge}
              </div>
              <h2 className={`prod-name prod-name-${product.id}`}>{product.name}</h2>
              <p className="prod-tagline">{product.tagline}</p>
              <p className="prod-desc">{product.desc}</p>
              {product.id === 'ergon' && <ErgonContent product={product} />}
              {product.id === 'aiagent' && <AiContent product={product} />}
              {product.id === 'platform' && <PlatformContent product={product} />}
            </div>
            <ProductImage product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
