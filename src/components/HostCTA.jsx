import './HostCTA.css';

export default function HostCTA() {
  return (
    <section id="host" className="host-cta">
      <div className="container">
        <div className="host-cta__grid">
          <div className="host-cta__content">
            <span className="section-label">For Hosts</span>
            <h2 className="section-title">Your space deserves<br />better guests</h2>
            <p className="section-subtitle">
              Haven hosts earn more per booking because we don't nickel-and-dime
              guests to death. Happy guests = better reviews = more bookings.
            </p>

            <ul className="host-cta__perks">
              <li>
                <span className="host-cta__perk-icon">✓</span>
                <div>
                  <strong>Smart pricing suggestions</strong>
                  <p>AI-powered price recommendations based on season, local events, and demand — so you never leave money on the table.</p>
                </div>
              </li>
              <li>
                <span className="host-cta__perk-icon">✓</span>
                <div>
                  <strong>Verified guest profiles</strong>
                  <p>Every guest is identity-verified before booking. You can see reviews they've received from other hosts before accepting.</p>
                </div>
              </li>
              <li>
                <span className="host-cta__perk-icon">✓</span>
                <div>
                  <strong>Payout in 24 hours</strong>
                  <p>No 7-day holds. Haven releases your payment within 24 hours of guest check-in, direct to your bank or PayPal.</p>
                </div>
              </li>
              <li>
                <span className="host-cta__perk-icon">✓</span>
                <div>
                  <strong>Lower host fees than competitors</strong>
                  <p>We charge hosts 8% — not 14–16%. Your listing, your income. Manage everything from web or our upcoming mobile app.</p>
                </div>
              </li>
            </ul>

            <div className="host-cta__actions">
              <a href="#" className="btn-primary">List Your Space</a>
              <a href="#" className="host-cta__learn">Learn about hosting →</a>
            </div>
          </div>

          <div className="host-cta__visual">
            <div className="host-earnings-card">
              <div className="host-earnings-card__header">
                <div className="host-earnings-card__avatar">🏡</div>
                <div>
                  <strong>Your 2BR in Lisbon</strong>
                  <p>Active · 14 bookings this month</p>
                </div>
              </div>

              <div className="host-earnings-card__stat-row">
                <div className="host-earnings-card__stat">
                  <span>Monthly Earnings</span>
                  <strong>$4,280</strong>
                </div>
                <div className="host-earnings-card__stat">
                  <span>Avg per night</span>
                  <strong>$149</strong>
                </div>
              </div>

              <div className="host-earnings-card__bar-label">
                <span>Occupancy Rate</span>
                <strong>87%</strong>
              </div>
              <div className="host-earnings-card__bar">
                <div className="host-earnings-card__bar-fill" style={{ width: '87%' }} />
              </div>

              <div className="host-earnings-card__reviews">
                <span>⭐ 4.96 · 54 reviews · </span>
                <span className="host-earnings-card__superhost">Superhost</span>
              </div>

              <div className="host-earnings-card__fee-compare">
                <div className="host-earnings-card__fee host-earnings-card__fee--them">
                  <span>Other platforms: ~15% fee</span>
                  <strong>–$642/mo</strong>
                </div>
                <div className="host-earnings-card__fee host-earnings-card__fee--us">
                  <span>Haven: 8% fee</span>
                  <strong>–$342/mo</strong>
                </div>
                <div className="host-earnings-card__fee-saving">
                  You keep $300 more every month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
