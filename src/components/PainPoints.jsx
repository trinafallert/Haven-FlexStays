import './PainPoints.css';

const PROBLEMS = [
  {
    pain: 'Hidden fees that double your price at checkout',
    fix: 'Haven shows the total price upfront — cleaning fees, service fees, taxes — before you even hit "Book".',
    icon: '💸',
  },
  {
    pain: "Arriving at noon but can't check in until 3pm",
    fix: 'Flexible arrival windows and real-time host chat so you can coordinate a check-in that actually works for you.',
    icon: '⏰',
  },
  {
    pain: 'Photos look nothing like the actual place',
    fix: 'Every listing requires verified photos with a quality checklist. Hosts who mislead guests are removed, period.',
    icon: '📸',
  },
  {
    pain: 'Getting sick and losing your whole booking',
    fix: 'Free cancellation on most stays up to 72 hours before arrival. FlexDates™ lets you shift dates without penalty.',
    icon: '🤒',
  },
  {
    pain: 'Hosts who ignore messages for days',
    fix: 'Response time is tracked and shown on every listing. Slow hosts are ranked lower. Fast hosts get highlighted.',
    icon: '📵',
  },
  {
    pain: "Fake reviews you can't trust",
    fix: 'Only verified guests who completed a stay can leave a review. No fake reviews, no host retaliation allowed.',
    icon: '⭐',
  },
];

export default function PainPoints() {
  return (
    <section className="pain-points">
      <div className="container">
        <div className="pain-points__header">
          <span className="section-label">Why We Exist</span>
          <h2 className="section-title">We fixed the stuff that<br />drives travelers insane</h2>
          <p className="section-subtitle">
            Every feature in Haven was built because someone had a genuinely terrible
            experience with another platform. Here's what we solved.
          </p>
        </div>

        <div className="pain-points__grid">
          {PROBLEMS.map((p, i) => (
            <div className="pain-card" key={i}>
              <div className="pain-card__icon">{p.icon}</div>
              <div className="pain-card__content">
                <div className="pain-card__problem">
                  <span className="pain-card__x">✕</span>
                  <p>{p.pain}</p>
                </div>
                <div className="pain-card__solution">
                  <span className="pain-card__check">✓</span>
                  <p>{p.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
