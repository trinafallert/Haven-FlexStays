import { useState } from 'react';
import './Listings.css';

const CATEGORIES = ['All', 'Beach', 'Mountain', 'City', 'Countryside', 'Lake'];

const LISTINGS = [
  {
    id: 1,
    title: 'Cliffside Villa with Infinity Pool',
    location: 'Santorini, Greece',
    type: 'Entire villa',
    rating: 4.97,
    reviews: 284,
    price: 320,
    category: 'Beach',
    superhost: true,
    badge: 'Guest Favourite',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    emoji: '🏛️',
  },
  {
    id: 2,
    title: 'Tropical Jungle Treehouse Retreat',
    location: 'Ubud, Bali',
    type: 'Private treehouse',
    rating: 4.95,
    reviews: 412,
    price: 185,
    category: 'Countryside',
    superhost: true,
    badge: 'Top Rated',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    emoji: '🌿',
  },
  {
    id: 3,
    title: 'Modern Loft in the Cultural Quarter',
    location: 'Barcelona, Spain',
    type: 'Entire apartment',
    rating: 4.88,
    reviews: 630,
    price: 140,
    category: 'City',
    superhost: false,
    badge: null,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    emoji: '🏙️',
  },
  {
    id: 4,
    title: 'Lakeside Cabin with Private Dock',
    location: 'Lake Tahoe, California',
    type: 'Entire cabin',
    rating: 4.93,
    reviews: 198,
    price: 265,
    category: 'Lake',
    superhost: true,
    badge: 'Guest Favourite',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    emoji: '🏕️',
  },
  {
    id: 5,
    title: 'Alpine Chalet Near Ski Slopes',
    location: 'Zermatt, Switzerland',
    type: 'Entire chalet',
    rating: 4.91,
    reviews: 156,
    price: 390,
    category: 'Mountain',
    superhost: true,
    badge: 'Rare Find',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    emoji: '⛷️',
  },
  {
    id: 6,
    title: 'Historic Townhouse with Garden',
    location: 'Kyoto, Japan',
    type: 'Entire house',
    rating: 4.96,
    reviews: 347,
    price: 210,
    category: 'City',
    superhost: true,
    badge: 'Top Rated',
    gradient: 'linear-gradient(135deg, #fd746c 0%, #ff9068 100%)',
    emoji: '🌸',
  },
];

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function HeartIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? '#E76F51' : 'none'} stroke={active ? '#E76F51' : 'white'} strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

export default function Listings() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [liked, setLiked] = useState({});

  const filtered = activeCategory === 'All'
    ? LISTINGS
    : LISTINGS.filter(l => l.category === activeCategory);

  const toggleLike = (id) => setLiked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="listings" className="listings">
      <div className="container">
        <div className="listings__header">
          <div>
            <span className="section-label">Featured Stays</span>
            <h2 className="section-title">Handpicked places<br />you'll love</h2>
          </div>
          <a href="#" className="btn-outline listings__view-all">View All Stays</a>
        </div>

        <div className="listings__categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`listings__cat-btn ${activeCategory === cat ? 'listings__cat-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="listings__grid">
          {filtered.map(listing => (
            <article className="listing-card" key={listing.id}>
              <div className="listing-card__img" style={{ background: listing.gradient }}>
                <span className="listing-card__emoji">{listing.emoji}</span>
                {listing.badge && (
                  <div className="listing-card__badge">{listing.badge}</div>
                )}
                {listing.superhost && (
                  <div className="listing-card__superhost">Superhost</div>
                )}
                <button
                  className="listing-card__heart"
                  onClick={() => toggleLike(listing.id)}
                  aria-label="Save to wishlist"
                >
                  <HeartIcon active={liked[listing.id]} />
                </button>
              </div>

              <div className="listing-card__body">
                <div className="listing-card__top">
                  <div>
                    <p className="listing-card__location">{listing.location}</p>
                    <h3 className="listing-card__title">{listing.title}</h3>
                    <p className="listing-card__type">{listing.type}</p>
                  </div>
                  <div className="listing-card__rating">
                    <StarIcon />
                    <span>{listing.rating}</span>
                    <span className="listing-card__reviews">({listing.reviews})</span>
                  </div>
                </div>

                <div className="listing-card__footer">
                  <div className="listing-card__price">
                    <strong>${listing.price}</strong>
                    <span> / night</span>
                  </div>
                  <a href="#" className="listing-card__btn">Book Now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
