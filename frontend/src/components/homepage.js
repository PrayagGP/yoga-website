<<<<<<< HEAD
import React from "react";
import "./HomePage.css";

const Homepage = () => {
=======
import React from 'react';
import './HomePage.css';

function Homepage() {
>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
<<<<<<< HEAD
        <div className="hero-overlay">
          {/* <h1>Yoga Club</h1> */}
          {/* <p>Explore mindfulness and holistic well-being</p> */}
        </div>
      </div>

      {/* Event Categories */}
      <div className="events">
        <h1>Events</h1>
        <div className="events-cards">
          <div className="events-card events-1"></div>
          <div className="events-card events-2"></div>
          <div className="events-card events-3"></div>
        </div>
      </div>


      {/* About Us Section */}
      <div className="about-us">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            The Yoga Club at NITK is a vibrant community dedicated to promoting
            physical well-being, mental clarity, and spiritual growth among
            students and faculty. Rooted in the ancient traditions of yoga, the
            club provides a serene space for individuals to explore the art of
            mindfulness and holistic living amidst the dynamic campus life.
            Whether you’re a beginner or an experienced practitioner, the Yoga
            Club welcomes everyone to join this journey of self-discovery and
            inner peace.
          </p>
        </div>
        <div className="about-image"></div>
      </div>

      {/* Webinars Section */}
      <div className="webinars">
        <h1>Webinars</h1>
        <div className="webinar-cards">
          <div className="webinar-card webinar-1"></div>
          <div className="webinar-card webinar-2"></div>
          <div className="webinar-card webinar-3"></div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-overlay">
          <h1>Meet our Team</h1>
          {/* <p>Explore mindfulness and holistic well-being</p> */}
        </div>
      </div>
    </div>
  );
};
=======
        <div className="hero-overlay"></div>
      </div>

      {/* Event Categories */}
      <section className="events">
        <div className="events-cards">
          <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551907234-07643e5bcb97')" }}>
            <h3>Ongoing Events</h3>
          </div>
          <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613914-85f342c1d4ef')" }}>
            <h3>Upcoming Events</h3>
          </div>
          <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
            <h3>Past Events</h3>
          </div>
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
        <button className="see-more">See More</button>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet our Team</h2>
        <div className="team-image"></div>
      </section>
    </div>
  );
}
>>>>>>> 2013c7f895fbeb786f63f9a81d3c67a6cf249f89

export default Homepage;
