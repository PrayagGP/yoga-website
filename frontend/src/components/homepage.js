import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div>
      </div>

      {/* Event Categories */}
      <section className="events">
        <div className="events-cards">
          <Link to="/eventslist?type=current" className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551907234-07643e5bcb97')" }}>
            <h3>Ongoing Events</h3>
          </Link>
          <Link to="/eventslist?type=upcoming" className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613914-85f342c1d4ef')" }}>
            <h3>Upcoming Events</h3>
          </Link>
          <Link to="/eventslist?type=past" className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
            <h3>Past Events</h3>
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <h2>About Us</h2>
        <div className="about-container">
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597"
            alt="Yoga"
          />
          <p>
            The Yoga Club at NITK is a vibrant community dedicated to promoting physical well-being,
            mental clarity, and spiritual growth among students and faculty. We organize various yoga sessions,
            mindfulness workshops, and events to support holistic development. Whether you're a beginner or an
            experienced practitioner, join this journey of self-discovery and inner peace.
          </p>
        </div>
      </section>

      {/* Webinars */}
      <section className="webinars">
        <h2>Webinars</h2>
        <div className="webinar-cards">
          <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599447421416-3414500d18a5')" }}>
            <h3>First</h3>
          </div>
          <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-129418cb2dfe')" }}>
            <h3>Second</h3>
          </div>
          <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c')" }}>
            <h3>Third</h3>
          </div>
        </div>
        <Link to="/webinars" className="see-more">See More</Link>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet our Team</h2>
        <Link to="/teamcatog" className="team-image">
          <div className="hero-overlay">
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Homepage;