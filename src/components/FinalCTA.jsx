import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta__inner">
          <div className="final-cta__bg-shapes">
            <div className="final-cta__shape final-cta__shape--1" />
            <div className="final-cta__shape final-cta__shape--2" />
          </div>

          <div className="final-cta__content">
            <span className="final-cta__label">Get Started Today</span>
            <h2 className="final-cta__title">
              Your next great stay<br />is one search away
            </h2>
            <p className="final-cta__subtitle">
              Join 2 million travelers who stopped tolerating hidden fees,
              fake reviews, and rigid bookings. Haven is free to join.
              Your account works on web now, and on mobile when we launch.
            </p>

            <div className="final-cta__actions">
              <a href="#" className="btn-white">Find a Stay</a>
              <a href="#" className="btn-accent">List Your Space</a>
            </div>

            <p className="final-cta__fine">
              Free to sign up · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
