import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Gallery.css';
import EventCard from './Eventcard';

import AOS from "aos";
import "aos/dist/aos.css";

// --- IMPORT IMAGES ---
import workshopImg1 from "../../assets/Images/Gallery/img1.png";
import workshopImg2 from "../../assets/Images/Gallery/img2.png";
import workshopImg3 from "../../assets/Images/Gallery/img3.png";
import heroBackground from "../../assets/Images/Gallery/heroBackground.png";

const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80";

// --- DATA ---
const MASTER_DATA = [
  { id: 1, title: "Resume Building Workshop", location: "MIT College CSN", image: workshopImg1 || PLACEHOLDER_IMG },
  { id: 2, title: "AI & ML Seminar", location: "COEP Pune", image: workshopImg2 || PLACEHOLDER_IMG },
  { id: 3, title: "Web Dev Bootcamp", location: "Online", image: workshopImg3 || PLACEHOLDER_IMG },
  { id: 4, title: "Cyber Security Talk", location: "MIT College CSN", image: workshopImg1 || PLACEHOLDER_IMG },
  { id: 5, title: "Resume Building Workshop", location: "MIT College CSN", image: workshopImg2 || PLACEHOLDER_IMG },
  { id: 6, title: "Cloud Computing Fair", location: "Mumbai University", image: workshopImg3 || PLACEHOLDER_IMG },
  { id: 7, title: "React JS Deep Dive", location: "Bhau Institute", image: workshopImg1 || PLACEHOLDER_IMG },
  { id: 8, title: "Startup Pitch Day", location: "Bangalore", image: workshopImg2 || PLACEHOLDER_IMG },
  { id: 9, title: "Blockchain Basics", location: "MIT College CSN", image: workshopImg3 || PLACEHOLDER_IMG },
  { id: 10, title: "Ethical Hacking", location: "Pune", image: workshopImg1 || PLACEHOLDER_IMG },
  { id: 11, title: "IoT Workshop", location: "Nashik", image: workshopImg2 || PLACEHOLDER_IMG },
  { id: 12, title: "Future of Tech", location: "Delhi", image: workshopImg3 || PLACEHOLDER_IMG },
];

const GalleryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const INITIAL_VISIBLE_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  // 🔥 AOS INITIALIZATION
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  // Filtering
  const filteredEvents = MASTER_DATA.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleEvents = filteredEvents.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount(prev => prev + 3);
  const handleViewLess = () => setVisibleCount(INITIAL_VISIBLE_COUNT);

  return (
    <main className="gallery-page-wrapper">
      
      {/* HEADER */}
      <header
        className="gallery-hero-section"
        data-aos="fade-down"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.5)), url(${heroBackground})`
        }}
      >
        <h1 className="gallery-hero-title" data-aos="fade-up">Gallery of Workshops & Events</h1>

        <div className="gallery-search-box" data-aos="zoom-in">
          <input
            type="text"
            placeholder="Search Event or College..."
            className="gallery-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="gallery-search-btn" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* GRID */}
      <section className="gallery-grid">
        {visibleEvents.length > 0 ? (
          visibleEvents.map((event, index) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <EventCard
                title={event.title}
                location={event.location}
                image={event.image}
                onClick={() => console.log(`Clicked on ${event.title}`)}
              />
            </div>
          ))
        ) : (
          <div className="no-results" style={{ gridColumn: "1/-1", textAlign: "center" }} data-aos="fade">
            No events found matching "{searchTerm}"
          </div>
        )}
      </section>

      {/* BUTTONS */}
      <div className="gallery-pagination" data-aos="fade-up">
        {visibleCount < filteredEvents.length && (
          <button className="gallery-load-more-btn" onClick={handleLoadMore}>View More</button>
        )}

        {visibleCount > INITIAL_VISIBLE_COUNT && (
          <button className="gallery-view-less-btn" onClick={handleViewLess}>View Less</button>
        )}
      </div>
    </main>
  );
};

export default GalleryPage;
