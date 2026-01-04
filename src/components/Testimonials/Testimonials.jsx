import React from 'react';
import './Testimonials.css';

// --- Sample Data ---
const testimonialsData = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Computer Engineering Student",
    college: "MIT WPU, Pune",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    text: "The Resume Building workshop was a game changer for me. I learned exactly what recruiters look for and landed an internship a month later!",
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    role: "Final Year Student",
    college: "COEP",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    text: "I attended the AI & ML seminar. The speakers were industry experts who explained complex topics simply. Highly recommended for any tech enthusiast.",
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    role: "Full Stack Developer",
    college: "Freelancer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "The networking opportunities at these events are unmatched. I met my co-founder at the Startup Pitch Day last year.",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial-section-wrapper">
      
      <div className="testimonial-header">
        <h2 className="testimonial-title">What Students Say</h2>
        <div className="testimonial-underline"></div>
        <p className="testimonial-subtitle">
          Hear from students who have transformed their careers through our workshops.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonialsData.map((item) => (
          <div key={item.id} className="testimonial-card">
            {/* Quote Icon */}
            <div className="testimonial-quote-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 7.55228 5.01697 7V3H10.017C11.6738 3 13.017 4.34315 13.017 6V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
              </svg>
            </div>

            <p className="testimonial-text">"{item.text}"</p>

            <div className="testimonial-profile">
              <img src={item.image} alt={item.name} className="testimonial-avatar" />
              <div className="testimonial-info">
                <h4 className="testimonial-name">{item.name}</h4>
                <span className="testimonial-role">{item.role}</span>
                <span className="testimonial-college">{item.college}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;