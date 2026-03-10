import './StayTypes.css';

const TYPES = [
  {
    emoji: '🏖️',
    title: 'Vacation Stays',
    desc: 'Weekend escapes, family holidays, honeymoons. Book by the night with flexible arrivals.',
    tags: ['Short-term', 'Flexible dates', 'Any budget'],
    color: '#4facfe',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    emoji: '💻',
    title: 'Nomad-Friendly',
    desc: 'Fast WiFi, dedicated desks, co-working access. Filter by internet speed and work setup.',
    tags: ['High-speed WiFi', 'Monthly rates', 'Co-working nearby'],
    color: '#667eea',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    emoji: '🌱',
    title: 'Work Exchanges',
    desc: 'Like Workaway or HelpX — contribute a few hours daily in exchange for accommodation and meals. Perfect for budget travelers who want real local experiences.',
    tags: ['Skill exchange', 'Free/reduced stay', 'Community living'],
    color: '#11998e',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    featured: true,
  },
  {
    emoji: '🏡',
    title: 'Monthly Rentals',
    desc: 'Stay 28+ days at reduced monthly rates. No lease, no broker fees — just move in and live.',
    tags: ['28+ nights', 'Bills included', 'Furnished'],
    color: '#f4a261',
    gradient: 'linear-gradient(135deg, #f4a261 0%, #e76f51 100%)',
  },
  {
    emoji: '🤝',
    title: 'Coliving Spaces',
    desc: 'Private room in a shared house with a built-in community of like-minded travelers and remote workers.',
    tags: ['All-inclusive', 'Social events', 'Flexible terms'],
    color: '#fd746c',
    gradient: 'linear-gradient(135deg, #fd746c 0%, #ff9068 100%)',
  },
  {
    emoji: '🧘',
    title: 'Retreat Stays',
    desc: 'Wellness retreats, surf camps, yoga residencies — immersive programs with accommodation bundled in.',
    tags: ['Program included', 'Community', 'Transformative'],
    color: '#a8edea',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  },
];

export default function StayTypes() {
  return (
    <section className="stay-types">
      <div className="container">
        <div className="stay-types__header">
          <span className="section-label">Flexible Living Options</span>
          <h2 className="section-title">One platform,<br />every way to live</h2>
          <p className="section-subtitle">
            Haven isn't just vacation rentals. We're building the platform for
            every kind of flexible stay — from a 2-night getaway to a 6-month
            work exchange that changes your life.
          </p>
        </div>

        <div className="stay-types__grid">
          {TYPES.map((type, i) => (
            <div className={`stay-type-card ${type.featured ? 'stay-type-card--featured' : ''}`} key={i}>
              {type.featured && (
                <div className="stay-type-card__ribbon">Most Unique</div>
              )}
              <div className="stay-type-card__icon-wrap" style={{ background: type.gradient }}>
                <span className="stay-type-card__emoji">{type.emoji}</span>
              </div>
              <div className="stay-type-card__body">
                <h3 className="stay-type-card__title">{type.title}</h3>
                <p className="stay-type-card__desc">{type.desc}</p>
                <div className="stay-type-card__tags">
                  {type.tags.map((tag, j) => (
                    <span key={j} className="stay-type-card__tag">{tag}</span>
                  ))}
                </div>
                <a href="#listings" className="stay-type-card__link">
                  Browse {type.title} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="stay-types__callout">
          <div className="stay-types__callout-icon">🧭</div>
          <div>
            <h3>Not sure what type of stay fits your life?</h3>
            <p>
              Answer 3 quick questions and Haven will match you with the stay type
              — and specific listings — that fit your budget, timeline, and goals.
            </p>
          </div>
          <a href="#" className="btn-primary">Take the Quiz</a>
        </div>
      </div>
    </section>
  );
}
