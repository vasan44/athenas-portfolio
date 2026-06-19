import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export function TestimonialsSection({ activeTestimonial, setActiveTestimonial }) {
  const testimonial = TESTIMONIALS[activeTestimonial];

  return (
    <div className="testimonials-wrap">
      <div className="wrap">
        <div className="section-head reveal testimonial-heading">
          <span className="eyebrow centered-eyebrow">Client Stories</span>
          <h2 className="font-display testimonial-title">Trusted by businesses</h2>
        </div>
        <div className="testimonial-slider reveal d2">
          <div className="testimonial-card" key={activeTestimonial}>
            <div className="testimonial-stars">
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <span className="testimonial-name">{testimonial.name}</span>
              <span className="testimonial-company">{testimonial.company}</span>
            </div>
          </div>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`t-dot${index === activeTestimonial ? ' active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
