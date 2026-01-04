import React from 'react';
import './Trending.css';

const TrendingVideos = () => {
  // Mock data for the left side list
  const videoList = [
    {
      id: 1,
      title: "Bridging the Gap: Campus to Corporate Readiness",
      date: "13 October 2025",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=300&h=200", // Placeholder
    },
    {
      id: 2,
      title: "Soft Skills That Employers Notice in the First 5 Minutes",
      date: "15 June, 2023",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
      id: 3,
      title: "The Power of Communication in Professional Growth",
      date: "2 February, 2024",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=200",
    },
    {
      id: 4,
      title: "Training 15,000 Minds",
      date: "2 February, 2025",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=300&h=200",
    },
  ];

  return (
    <section className="trending-section">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <h2 className="title">Trending Videos</h2>
          <p className="subtitle">
            To showcase expert insights, student success stories, and actionable
            guidance in areas like software skills, communication, and career
            development.
          </p>
        </div>

        <div className="content-grid">
          {/* Left Column: Vertical List */}
          <div className="video-list">
            {videoList.map((video) => (
              <div key={video.id} className="video-card-small">
                <div className="thumbnail-wrapper">
                  <img src={video.image} alt={video.title} />
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <span className="video-date">{video.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Featured Large Card */}
          <div className="featured-card">
            <div className="featured-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=700"
                alt="Featured Speaker"
              />
            </div>
            <div className="featured-content">
              <div className="meta-info">
                <span className="author">Syed Mustakim</span>
                <span className="divider">||</span>
                <span className="date">1 Nov, 2025</span>
              </div>
              <div className="action-row">
                <h3 className="featured-title">My Startup Journey</h3>
                <a href="#read-more" className="read-more-link">
                  Read more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingVideos;