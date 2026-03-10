import './Footer.css';

const FOOTER_LINKS = {
  'Explore': ['Search Stays', 'Work Exchanges', 'Monthly Rentals', 'Coliving', 'Nomad-Friendly', 'Retreats'],
  'Hosting': ['List a Space', 'Host Dashboard', 'Pricing Guide', 'Host Community', 'Superhost Program'],
  'Company': ['About Haven', 'Careers', 'Press', 'Blog', 'Investor Relations'],
  'Support': ['Help Center', 'Trust & Safety', 'Cancellation Policy', 'Dispute Resolution', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="10" fill="#2D6A4F"/>
                <path d="M7 18L16 9L25 18V26H20V21H12V26H7V18Z" fill="white"/>
                <circle cx="16" cy="14" r="2" fill="#F4A261"/>
              </svg>
              <span>Haven<span>FlexStays</span></span>
            </a>
            <p className="footer__tagline">
              Every kind of stay. No hidden fees. <br />Your account, web and mobile.
            </p>
            <div className="footer__social">
              {['Twitter', 'Instagram', 'LinkedIn', 'TikTok'].map(s => (
                <a key={s} href="#" className="footer__social-link" aria-label={s}>
                  {s === 'Twitter' && '𝕏'}
                  {s === 'Instagram' && '📷'}
                  {s === 'LinkedIn' && 'in'}
                  {s === 'TikTok' && '♪'}
                </a>
              ))}
            </div>
            <div className="footer__app-note">
              <span className="footer__app-dot" />
              Mobile app coming soon — your account will sync automatically
            </div>
          </div>

          <div className="footer__links">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div className="footer__col" key={heading}>
                <h4 className="footer__col-heading">{heading}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Haven FlexStays, Inc. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
