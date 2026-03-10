import './HowItWorks.css';

const STEPS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    step: '01',
    title: 'Search Your Destination',
    desc: 'Browse thousands of verified stays in 120+ countries. Filter by dates, budget, and stay type — whether it\'s a weekend getaway or a 3-month work trip.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
      </svg>
    ),
    step: '02',
    title: 'Book Flexibly',
    desc: 'No rigid check-in times. Pick your ideal dates with our FlexDates™ tool and only pay for the nights you stay. Free cancellation on most properties.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    step: '03',
    title: 'Settle In & Stay',
    desc: 'Arrive to a fully equipped space — from keyless entry to concierge support. Your host is always a message away, and your profile carries across web and app.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Book a stay in<br />three simple steps</h2>
          <p className="section-subtitle">
            Haven makes flexible travel effortless. Create one account, and your
            bookings, reviews, and profile sync across web and mobile.
          </p>
        </div>

        <div className="how-it-works__grid">
          {STEPS.map((s, i) => (
            <div className="how-step" key={i}>
              <div className="how-step__number">{s.step}</div>
              <div className="how-step__icon">{s.icon}</div>
              <h3 className="how-step__title">{s.title}</h3>
              <p className="how-step__desc">{s.desc}</p>
              {i < STEPS.length - 1 && <div className="how-step__connector" />}
            </div>
          ))}
        </div>

        <div className="how-it-works__cta">
          <a href="#listings" className="btn-primary">Start Exploring</a>
          <a href="#" className="btn-outline">Watch a Demo</a>
        </div>
      </div>
    </section>
  );
}
