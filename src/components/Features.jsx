import './Features.css';

const FEATURES = [
  {
    icon: '📱',
    title: 'One Account, Web & Mobile',
    desc: 'Sign up once. Your bookings, saved listings, messages, and member profile sync seamlessly between the Haven website and our upcoming mobile app.',
  },
  {
    icon: '🗓️',
    title: 'FlexDates™ Booking',
    desc: 'Not sure of exact dates? Lock in a property now and adjust your check-in window up to 72 hours before arrival — at no extra cost.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    desc: 'All transactions are encrypted and held in escrow until 24 hours after check-in. Dispute resolution is handled by our in-house trust team.',
  },
  {
    icon: '💬',
    title: 'Real-Time Messaging',
    desc: 'Chat directly with hosts before, during, and after your stay. Instant notifications on both web and the upcoming Haven mobile app.',
  },
  {
    icon: '⭐',
    title: 'Verified Reviews',
    desc: 'Only guests who completed a stay can leave reviews. Ratings are tamper-proof and recalculated after every new verified stay.',
  },
  {
    icon: '🌍',
    title: 'Global Coverage',
    desc: 'Find stays in over 120 countries. Our local host network provides regional insights, emergency contacts, and 24/7 support in your timezone.',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <span className="section-label">Why Haven</span>
          <h2 className="section-title">Everything you need<br />for stress-free stays</h2>
          <p className="section-subtitle">
            Built for modern travelers — whether you're booking from a browser or
            our mobile app, Haven keeps your journey seamless.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="features__app-banner">
          <div className="features__app-content">
            <div className="features__app-tag">Coming Soon</div>
            <h3 className="features__app-title">Haven Mobile App</h3>
            <p className="features__app-desc">
              Your web account will sync automatically. Browse listings, manage bookings,
              and message hosts — all from your phone. iOS & Android, launching soon.
            </p>
            <div className="features__app-stores">
              <button className="features__store-btn" disabled>
                <span className="features__store-icon">🍎</span>
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="features__store-btn" disabled>
                <span className="features__store-icon">▶</span>
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
          </div>
          <div className="features__app-visual">
            <div className="features__phone">
              <div className="features__phone-screen">
                <div className="features__phone-header">
                  <div className="features__phone-dot" />
                  <span>Haven</span>
                </div>
                <div className="features__phone-card" style={{background: 'linear-gradient(135deg, #11998e, #38ef7d)'}}>
                  <span>🌿</span>
                  <p>Bali Retreat</p>
                  <small>$185/night</small>
                </div>
                <div className="features__phone-card" style={{background: 'linear-gradient(135deg, #667eea, #764ba2)'}}>
                  <span>🏛️</span>
                  <p>Santorini Villa</p>
                  <small>$320/night</small>
                </div>
                <div className="features__phone-nav">
                  <span>🏠</span><span>🔍</span><span>💬</span><span>👤</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
