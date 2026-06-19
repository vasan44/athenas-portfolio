import { useEffect, useRef, useState } from 'react';
import { CONTACTS, TESTIMONIALS } from './data/siteData';
import { useReveal } from './hooks/useReveal';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { FormsSection } from './sections/FormsSection';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { ProductsSection } from './sections/ProductsSection';
import { ServicesSection } from './sections/ServicesSection';
import { StatsStrip } from './sections/StatsStrip';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { WhySection } from './sections/WhySection';
import { scrollToId } from './utils/scrollToId';

export default function AthenaSolutions() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openService, setOpenService] = useState(0);
  const [activeForm, setActiveForm] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const stampTimeout = useRef(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => () => clearTimeout(stampTimeout.current), []);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  const handleServiceClick = (event, index) => {
    event.preventDefault();
    setMenuOpen(false);
    setOpenService(index);
    requestAnimationFrame(() => scrollToId(`service-${index + 1}`));
  };

  const handleStamp = (event) => {
    const btn = event.currentTarget;
    btn.classList.remove('stamped');
    void btn.offsetWidth;
    btn.classList.add('stamped');
    clearTimeout(stampTimeout.current);
    stampTimeout.current = setTimeout(() => btn.classList.remove('stamped'), 600);
  };

  const handleContactClick = (event) => {
    handleStamp(event);
    scrollToId('contact');
  };

  const handleCallNow = (event) => {
    handleStamp(event);
    window.location.href = `tel:+91${CONTACTS[0].number}`;
  };

  return (
    <div className="athena">
      <Header
        menuOpen={menuOpen}
        scrolled={scrolled}
        onCloseMenu={() => setMenuOpen(false)}
        onNavClick={handleNavClick}
        onOpenMenu={() => setMenuOpen(true)}
        onPrimaryClick={handleContactClick}
      />
      <Hero
        onContactClick={handleContactClick}
        onServicesClick={() => scrollToId('services')}
      />
      <StatsStrip />
      <AboutSection />
      <ServicesSection openService={openService} setOpenService={setOpenService} />
      <FormsSection activeForm={activeForm} setActiveForm={setActiveForm} />
      <WhySection />
      <ProductsSection />
      <TestimonialsSection
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <ContactSection onCallNow={handleCallNow} onStamp={handleStamp} />
      <Footer onNavClick={handleNavClick} onServiceClick={handleServiceClick} />
    </div>
  );
}
