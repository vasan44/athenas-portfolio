import { Menu, X } from 'lucide-react';
import { AthenaLogo } from '../components/AthenaLogo';
import { NAV_LINKS } from '../data/siteData';

export function Header({ menuOpen, scrolled, onCloseMenu, onNavClick, onOpenMenu, onPrimaryClick }) {
  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={(event) => onNavClick(event, 'home')}>
            <AthenaLogo />
            <span className="brand-word">
              <b>Athena Solutions</b>
              <span>HR · PAYROLL · COMPLIANCE</span>
            </span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={(event) => onNavClick(event, link.id)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-cta-wrap">
            <button className="nav-primary" onClick={onPrimaryClick}>
              Let's Talk
            </button>
            <button className="nav-burger" onClick={onOpenMenu} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <a href="#home" className="brand" onClick={(event) => onNavClick(event, 'home')}>
              <AthenaLogo className="athena-logo-mobile" />
              <b className="font-display mobile-brand-name">Athena Solutions</b>
            </a>
            <button onClick={onCloseMenu} aria-label="Close" className="mobile-close">
              <X size={26} />
            </button>
          </div>
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(event) => onNavClick(event, link.id)}>
              {link.label}
            </a>
          ))}
          <button
            className="mobile-menu-cta"
            onClick={(event) => {
              onCloseMenu();
              onPrimaryClick(event);
            }}
          >
            Start a Conversation
          </button>
        </div>
      )}
    </>
  );
}
