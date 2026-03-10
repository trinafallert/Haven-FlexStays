import { useState } from 'react';
import './Hero.css';

const DESTINATIONS = [
  'Bali, Indonesia',
  'Santorini, Greece',
  'Kyoto, Japan',
  'Barcelona, Spain',
  'Cape Town, South Africa',
];

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1 Guest');

  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__shapes">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
        </div>
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Over 50,000 flexible stays worldwide
        </div>

        <h1 className="hero__title">
          Find Your Perfect<br />
          <span className="hero__title-accent">Haven</span> — Anywhere
        </h1>

        <p className="hero__subtitle">
          Short stays, extended escapes, or month-long adventures. Haven FlexStays
          adapts to your schedule so you never have to compromise.
        </p>

        <div className="hero__search">
          <div className="hero__search-field">
            <label>Where</label>
            <input
              list="destinations"
              type="text"
              placeholder="Search destinations..."
              value={destination}
              onChange={e => setDestination(e.target.value)}
            />
            <datalist id="destinations">
              {DESTINATIONS.map(d => <option key={d} value={d} />)}
            </datalist>
          </div>

          <div className="hero__search-divider" />

          <div className="hero__search-field">
            <label>Check In</label>
            <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
          </div>

          <div className="hero__search-divider" />

          <div className="hero__search-field">
            <label>Check Out</label>
            <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
          </div>

          <div className="hero__search-divider" />

          <div className="hero__search-field">
            <label>Guests</label>
            <select value={guests} onChange={e => setGuests(e.target.value)}>
              {['1 Guest','2 Guests','3 Guests','4 Guests','5+ Guests'].map(g => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>

          <button className="hero__search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>50K+</strong>
            <span>Properties</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <strong>120+</strong>
            <span>Countries</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <strong>4.9★</strong>
            <span>Avg Rating</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <strong>2M+</strong>
            <span>Happy Guests</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
