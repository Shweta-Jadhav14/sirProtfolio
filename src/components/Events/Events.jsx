import React, { useState } from 'react';
import "./Events.css";
import img1 from "../../assets/Images/Events/m1.png";
import img2 from "../../assets/Images/Events/m2.png";
import img3 from "../../assets/Images/Events/m3.png";
import img4 from "../../assets/Images/Events/m4.png";

const Events = () => {
  const [showAll, setShowAll] = useState(false);

  const eventsData = [
    {
      id: 1,
      theme: "blue-bg",
      title: "Resume Building Webinar",
      tags: ["Career Building", "ATS Resume"],
      desc: "Learn how to create a resume that gets shortlisted 3x faster using proven industry techniques.",
      link: "#"
    },
    {
      id: 2,
      theme: "purple-bg",
      title: "Launchpad: Career Readiness Workshop",
      tags: ["Interview Skills", "Resume Building"],
      desc: "A practical 2-hour live workshop to help you build a job-winning resume and crack interviews.",
      link: "#"
    },
    {
      id: 3,
      theme: "green-bg",
      title: "Master the Art of English Communication",
      tags: ["Communication", "Professional Growth"],
      desc: "Learn practical techniques to communicate clearly, speak confidently, and boost your success.",
      link: "#"
    },
    {
      id: 4,
      theme: "orange-bg",
      title: "LaunchPad: The Perfect Placement Roadmap 🚀",
      tags: ["Placement Strategy", "7th Sept 2025"],
      desc: "A FREE step-by-step guide to crack placements. Includes Certificate, eBook, and insider strategies.",
      link: "#"
    }
  ];

  const visibleEvents = showAll ? eventsData : eventsData.slice(0, 3);

  return (
    <section className="events" id="events">

      <h2 
        className="events-title"
        data-aos="fade-up"
      >
        Latest Event
      </h2>

      {/* FILTER TABS */}
      <div 
        className="event-tabs"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <button className="active">All</button>
        <button>Communication</button>
        <button>Employability</button>
        <button>Leadership</button>
        <button>Event Hosting</button>
      </div>

      <div className="cards-container">

        {visibleEvents.map((event, index) => (
          <div
            className={`event-card ${event.theme}`}
            key={event.id}
            data-aos="fade-up"
            data-aos-delay={200 + index * 150}   // stagger
          >
            {/* Decorative Blobs */}
            <div className="blob blob-top-left"></div>
            <div className="blob blob-bottom-left"></div>

            <div className="content-wrapper">
              
              {/* LEFT TEXT */}
              <div 
                className="text-section"
                data-aos="fade-up"
                data-aos-delay={250 + index * 150}
              >
                <h3 dangerouslySetInnerHTML={{ __html: event.title.replace(":", ":<br/>") }}></h3>

                <div className="tags">
                  {event.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <p>{event.desc}</p>

                <button className="event-btn">Register For Free ↗</button>
              </div>

              {/* RIGHT IMAGES */}
              <div 
                className="visual-section"
                data-aos="zoom-in"
                data-aos-delay={300 + index * 150}
              >
                <div className="image-frame">
                  <div className="grid-item"><img src={img1} alt="Event" /></div>
                  <div className="grid-item"><img src={img2} alt="Event" /></div>
                  <div className="grid-item"><img src={img3} alt="Event" /></div>
                  <div className="grid-item"><img src={img4} alt="Event" /></div>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* VIEW MORE BUTTON */}
      {!showAll && (
        <div 
          className="view-more-wrap"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <button className="view-more-btn" onClick={() => setShowAll(true)}>
            View More
          </button>
        </div>
      )}

      {showAll && (
        <div 
          className="view-more-wrap"
          data-aos="fade-up"
        >
          <button className="view-more-btn" onClick={() => setShowAll(false)}>
            Show Less
          </button>
        </div>
      )}

    </section>
  );
};

export default Events;
