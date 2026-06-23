import { ArrowUp, ArrowUpRight, Phone } from 'lucide-react';
import { AthenaLogo } from '../components/AthenaLogo';
import { CONTACTS, NAV_LINKS } from '../data/siteData';
import { formatPhone } from '../utils/formatPhone';

const FOOTER_SERVICES = [
  { label: 'Custom Software', index: 0 },
  { label: 'Liaison Services', index: 1 },
  { label: 'Accounting Services', index: 2 },
  { label: 'Payroll Services', index: 3 },
  { label: 'Labour Law Compliance', index: 4 },
  { label: 'Statutory Compliance', index: 5 },
  { label: 'Factory Compliance', index: 6 },
];

export function Footer({ onNavClick, onServiceClick }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <section className="footer-brand-col">
            <div className="footer-brand-lockup">
              <a href="#home" onClick={(event) => onNavClick(event, 'home')} aria-label="Athena Solutions home">
                <AthenaLogo className="athena-logo-footer" />
              </a>
            </div>
            <p className="footer-tag">"Order, kept on every page."</p>
            <div className="footer-office-title">Our Office</div>
            <address className="footer-address">
              Plot No. 81, Poriyalar Nagar,<br />
              Natham Flyover, Thiruppalai,<br />
              Madurai, Tamil Nadu – 625014
            </address>
          </section>

          <nav className="footer-col footer-nav-col" aria-label="Footer navigation">
            <h2 className="footer-col-title">Navigation</h2>
            <div className="footer-link-list">
              {NAV_LINKS.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={(event) => onNavClick(event, link.id)}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <section className="footer-col footer-services-col">
            <h2 className="footer-col-title">Services</h2>
            <div className="footer-service-list">
              {FOOTER_SERVICES.map((service) => (
                <a
                  key={service.label}
                  href={`#service-${service.index + 1}`}
                  onClick={(event) => onServiceClick(event, service.index)}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </section>

          <section className="footer-col footer-contact-col">
            <h2 className="footer-col-title">Get In Touch</h2>
            <div className="footer-contact-cards">
              {CONTACTS.map((contact) => (
                <a className="footer-contact-card" key={contact.role} href={`tel:+91${contact.number}`}>
                  <span className="footer-phone-icon"><Phone size={16} /></span>
                  <span className="footer-contact-copy">
                    <small>{contact.role}</small>
                    <strong>+91 {formatPhone(contact.number)}</strong>
                  </span>
                  <span className="footer-status-dot" aria-label="Available" />
                </a>
              ))}
            </div>
            <div className="footer-cta">
              <p>Ready to streamline your HR operations?</p>
              <a href="#contact" onClick={(event) => onNavClick(event, 'contact')}>
                Contact Us <ArrowUpRight size={13} />
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Athena Solutions — All Rights Reserved</p>
          <div className="footer-compliance">
            <span>EPFO Compliant</span>
            <span>ESIC Registered</span>
          </div>
          <p className="footer-location">Madurai, Tamil Nadu · India</p>
          <button type="button" className="footer-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
