import {
  Bot,
  Calculator,
  Code2,
  DatabaseZap,
  Factory,
  Handshake,
  IndianRupee,
  MessageCircle,
  Scale,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const SERVICES_DATA = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Tailor-made software solutions built to fit your exact business workflows, processes, and growth goals.',
    category: 'Software',
    image: '/images/live/custom-software.png',
    imageAlt: 'Custom software dashboard and development interface',
    points: ['Workflow-fit applications', 'Web, mobile, and cloud systems'],
  },
  {
    icon: Handshake,
    title: 'Liaison Services',
    desc: 'Expert liaison support for government approvals, regulatory filings, and inter-departmental coordination.',
    category: 'Government Coordination',
    image: '/images/live/liaison.png',
    imageAlt: 'Professional liaison and documentation support',
    points: ['Approval follow-ups', 'Department coordination'],
  },
  {
    icon: Calculator,
    title: 'Accounting Services',
    desc: 'End-to-end accounting, bookkeeping, financial reporting, and audit support for businesses of all sizes.',
    category: 'Finance',
    image: '/images/live/accounting.jpg',
    imageAlt: 'Accounting reports and business finance review',
    points: ['Bookkeeping and reporting', 'Audit-ready records'],
  },
  {
    icon: IndianRupee,
    title: 'Payroll Services',
    desc: 'Accurate, timely payroll processing with full statutory deductions, payslip generation, and compliance filings.',
    category: 'Payroll',
    image: '/images/live/payroll.jpg',
    imageAlt: 'Payroll processing and salary records',
    points: ['Salary processing', 'Payslips and deductions'],
  },
  {
    icon: Scale,
    title: 'Labour Law Compliance Services',
    desc: 'Complete management of labour law obligations including registrations, returns, inspections, and legal documentation.',
    category: 'Labour Compliance',
    image: '/images/live/labour-law.jpeg',
    imageAlt: 'Labour law compliance documents and workplace records',
    points: ['Registrations and returns', 'Inspection documentation'],
  },
  {
    icon: ShieldCheck,
    title: 'Statutory Compliance Services',
    desc: 'EPF, ESI, PT, and all statutory dues handled on time with zero penalties across your organisation.',
    category: 'Statutory',
    image: '/images/live/statutory-compliance.jpeg',
    imageAlt: 'Statutory compliance files and business approvals',
    points: ['EPF, ESI, and PT', 'Due-date tracking'],
  },
  {
    icon: Factory,
    title: 'Factory Compliance Services',
    desc: 'Factory Act registrations, renewals, inspections, and safety compliance managed end-to-end.',
    category: 'Factory Act',
    image: '/images/live/factory-compliance.jpeg',
    imageAlt: 'Factory compliance and industrial workplace safety',
    points: ['Licences and renewals', 'Safety compliance support'],
  },
  {
    icon: Bot,
    title: 'AI Automation Solutions',
    desc: 'Intelligent automation powered by AI to eliminate repetitive tasks, reduce errors, and accelerate decisions.',
    category: 'AI Automation',
    image: '/images/live/ai-automation.jpeg',
    imageAlt: 'AI automation dashboard and digital workflow',
    points: ['Task automation', 'Decision support flows'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation Solutions',
    desc: 'Automate customer communication, lead follow-ups, and notifications via WhatsApp Business API.',
    category: 'Communication',
    image: '/images/live/whatsapp-automation.jpeg',
    imageAlt: 'WhatsApp automation and business messaging workflow',
    points: ['Lead follow-ups', 'Alerts and notifications'],
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    desc: 'Streamline and automate core business processes to improve efficiency, speed, and operational accuracy.',
    category: 'Process',
    image: '/images/live/business-process.jpeg',
    imageAlt: 'Business process automation workflow screen',
    points: ['Process mapping', 'Approval automation'],
  },
  {
    icon: DatabaseZap,
    title: 'ERP & SAP Solutions',
    desc: 'Enterprise-grade ERP and SAP implementations customised for your industry and business requirements.',
    category: 'Enterprise Systems',
    image: '/images/live/athena-erp.png',
    imageAlt: 'ERP system interface for enterprise operations',
    points: ['ERP implementation', 'SAP customisation'],
  },
];

export function ServicesSection() {
  return (
    <section className="services-showcase-section on-ink" id="services" aria-labelledby="services-title">
      <div className="wrap services-showcase-wrap">
        <div className="services-showcase-head reveal">
          <span className="eyebrow">Services</span>
          <h2 className="font-display services-showcase-title" id="services-title">
            <span>Services</span>
            <em>For Business Growth</em>
          </h2>
          <p>
            From AI automation and custom software to payroll, accounting, and statutory compliance,
            Athena keeps the operational backbone of your business running cleanly.
          </p>
        </div>

        <div className="services-showcase-grid" aria-label="Athena Solutions services">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className="showcase-service-card reveal"
                id={`service-${index + 1}`}
                key={service.title}
                style={{ '--reveal-delay': `${Math.min(index * 55, 360)}ms` }}
              >
                <div className="showcase-service-media">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                  <div className="showcase-service-media-shade" aria-hidden="true" />
                  <div className="showcase-service-icon" aria-hidden="true">
                    <span>
                      <Icon size={30} strokeWidth={1.9} />
                    </span>
                  </div>
                </div>

                <div className="showcase-service-body">
                  <div className="showcase-service-meta">
                    <span>{service.category}</span>
                    <span className="showcase-service-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className="showcase-service-points" aria-label={`${service.title} focus areas`}>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
