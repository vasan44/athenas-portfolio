import { ArrowUpRight, Phone } from 'lucide-react';
import { CONTACTS } from '../data/siteData';
import { formatPhone } from '../utils/formatPhone';

export function ContactSection({ onCallNow, onStamp }) {
  return (
    <section className="section on-parchment contact-section" id="contact">
      <div className="wrap">
        <div className="contact-doc reveal">
          <div className="contact-top">
            <div>
              <span className="eyebrow on-parchment">Contact Us</span>
              <h3>Bring your HR, payroll and compliance under one roof.</h3>
              <p className="contact-intro">
                Reach out to our team today. We'll understand your needs and build a compliance-first HR solution tailored to your business.
              </p>
            </div>
            <div className="contact-image">
              <img src="/images/about-office.webp" alt="Business team" loading="lazy" />
            </div>
          </div>
          <div className="contact-cards">
            {CONTACTS.map((contact) => (
              <a className="contact-card" href={`tel:+91${contact.number}`} key={contact.role} onClick={onStamp}>
                <div className="contact-icon"><Phone size={18} /></div>
                <div>
                  <div className="contact-card-role">{contact.role}</div>
                  <div className="contact-card-num">+91 {formatPhone(contact.number)}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="sign-line">
            <span>Your trusted partner for HR, payroll, and compliance management.</span>
            <button className="btn btn-primary" onClick={onCallNow}>
              Call Now <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
