import { FAQS, SERVICE_COVERAGE, WORKFLOW_STEPS } from '../data/siteData';

export function WorkflowSection() {
  return (
    <section className="section on-ink workflow-section" id="workflow">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Delivery Model</span>
          <h2 className="font-display">Structured operations. Clear monthly control.</h2>
          <p>Athena follows a practical operating rhythm so HR, payroll, attendance, compliance, and documentation stay aligned every month.</p>
          <div className="head-rule reveal-rule d2" />
        </div>

        <div className="workflow-grid">
          {WORKFLOW_STEPS.map((step, index) => (
            <article className="workflow-card reveal" style={{ transitionDelay: `${index * 0.06}s` }} key={step.num}>
              <span className="workflow-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="section-head reveal workflow-subhead">
          <span className="eyebrow">Coverage</span>
          <h2 className="font-display">More support inside the same system</h2>
          <p>Each service area connects into a single operating desk, reducing follow-up gaps and improving monthly visibility.</p>
        </div>

        <div className="coverage-grid">
          {SERVICE_COVERAGE.map((item, index) => (
            <article className="coverage-card reveal" style={{ transitionDelay: `${index * 0.05}s` }} key={item.title}>
              <div className="coverage-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="section-head reveal workflow-subhead">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display">Common questions, clear answers</h2>
        </div>

        <div className="faq-grid">
          {FAQS.map((item, index) => (
            <article className="faq-card reveal" style={{ transitionDelay: `${index * 0.05}s` }} key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
