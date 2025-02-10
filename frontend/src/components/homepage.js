import React from "react";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
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

export default Homepage;
