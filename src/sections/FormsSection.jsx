import { ShieldCheck } from 'lucide-react';
import { FORMS } from '../data/siteData';

export function FormsSection({ activeForm, setActiveForm }) {
  const form = FORMS[activeForm];

  return (
    <section className="section on-parchment" id="forms">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow on-parchment">Statutory Compliance</span>
          <h2 className="font-display">Registers & Forms</h2>
          <p>Twelve statutory registers, maintained exactly as labour law requires — open any tab to see what it holds.</p>
          <div className="head-rule reveal-rule d2 form-head-rule" />
        </div>
        <div className="forms-shell reveal d2">
          <div className="forms-tabs">
            {FORMS.map((item, index) => (
              <button
                key={item.code}
                className={`form-tab${activeForm === index ? ' active' : ''}`}
                onClick={() => setActiveForm(index)}
                aria-selected={activeForm === index}
              >
                <span className="form-tab-code font-mono">Form {item.code}</span>
                <span className="form-tab-name">{item.name}</span>
              </button>
            ))}
          </div>
          <div className="forms-panel">
            <div className="form-panel-content" key={activeForm}>
              <span className="form-code-big font-mono">Form {form.code}</span>
              <h3 className="form-name-big">{form.name}</h3>
              <p className="form-desc">{form.desc}</p>
              <div className="form-foot">
                <div className="seal-ring">
                  <ShieldCheck size={20} color="var(--brass-dark)" />
                </div>
                <p>Maintained and kept current as part of Athena's statutory register & compliance management service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
