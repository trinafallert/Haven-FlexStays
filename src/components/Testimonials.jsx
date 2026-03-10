import { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Priya S.',
    location: 'Toronto, Canada',
    avatar: 'PS',
    rating: 5,
    text: "I've been burned by hidden fees so many times. Haven showed me the exact total before I booked — $0 surprises at checkout. Refreshing doesn't even cover it.",
    stay: 'Bali Jungle Retreat, 2 weeks',
    color: '#11998e',
  },
  {
    name: 'Marcus T.',
    location: 'Berlin, Germany',
    avatar: 'MT',
    rating: 5,
    text: "I'm a digital nomad and needed a 6-week stay in Lisbon. Every other platform had 7-night maximums. Haven had 40+ options for long-term flexible stays. Game changer.",
    stay: 'Lisbon City Apartment, 6 weeks',
    color: '#667eea',
  },
  {
    name: 'Aiko W.',
    location: 'Sydney, Australia',
    avatar: 'AW',
    rating: 5,
    text: "My flight got delayed 12 hours. I messaged the host on Haven, they responded in 8 minutes and arranged a late check-in. On other apps, I'd have just lost the booking.",
    stay: 'Kyoto Traditional House, 5 nights',
    color: '#fd746c',
  },
  {
    name: 'Jordan L.',
    location: 'New York, USA',
    avatar: 'JL',
    rating: 5,
    text: "The photos were EXACTLY what I got. No fisheye lens tricks, no selective angles. The verified photo system actually works. I've already booked three more times.",
    stay: 'Santorini Cliffside Villa, 4 nights',
    color: '#764ba2',
  },
  {
    name: 'Fatima O.',
    location: 'Lagos, Nigeria',
    avatar: 'FO',
    rating: 5,
    text: "FlexDates is the feature I didn't know I needed. Shifted my checkout by two days when my meetings ran long — no extra fees, no stress. The future of travel booking.",
    stay: 'Cape Town Ocean View, 10 days',
    color: '#f4a261',
  },
  {
    name: 'Chen H.',
    location: 'Shanghai, China',
    avatar: 'CH',
    rating: 5,
    text: "Finally a platform where I can trust the reviews. On Haven I can see the reviewer's booking history. You know instantly who is a real traveler and who isn't.",
    stay: 'Barcelona Gothic Quarter Loft, 1 week',
    color: '#f093fb',
  },
];

function Stars({ count }) {
  return (
    <div className="testimonial__stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F4A261">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Real Reviews</span>
          <h2 className="section-title">What travelers actually say</h2>
          <p className="section-subtitle">
            Every review is from a verified guest who completed a real stay.
            No incentivized reviews, no editing by hosts.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              className={`testimonial-card ${active === i ? 'testimonial-card--active' : ''}`}
              key={i}
              onClick={() => setActive(i)}
            >
              <Stars count={t.rating} />
              <p className="testimonial__text">"{t.text}"</p>
              <div className="testimonial__meta">
                <div
                  className="testimonial__avatar"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <strong className="testimonial__name">{t.name}</strong>
                  <p className="testimonial__location">{t.location}</p>
                  <p className="testimonial__stay">{t.stay}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__trust">
          <div className="testimonials__trust-item">
            <strong>4.93</strong>
            <span>Average guest rating</span>
          </div>
          <div className="testimonials__trust-sep" />
          <div className="testimonials__trust-item">
            <strong>98%</strong>
            <span>Would book again</span>
          </div>
          <div className="testimonials__trust-sep" />
          <div className="testimonials__trust-item">
            <strong>2M+</strong>
            <span>Verified reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
