import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/aboutsirImage.png";

import { 
  HiOutlineUserGroup, 
  HiOutlineOfficeBuilding, 
  HiOutlineAcademicCap, 
  HiOutlinePresentationChartLine 
} from "react-icons/hi";

const About = () => {

  const stats = [
    {
      id: 1,
      number: "15k+",
      title: "Candidates Trained",
      desc: "Boosted skills and confidence for career success.",
      icon: <HiOutlineUserGroup />,
      theme: "teal"
    },
    {
      id: 2,
      number: "50+",
      title: "Corporate Partners",
      desc: "Delivered impactful training collaborations.",
      icon: <HiOutlineOfficeBuilding />,
      theme: "yellow"
    },
    {
      id: 3,
      number: "5+",
      title: "Years Experience",
      desc: "Refined practical, results-driven training methods.",
      icon: <HiOutlineAcademicCap />,
      theme: "blue"
    },
    {
      id: 4,
      number: "100+",
      title: "Workshops Led",
      desc: "Led engaging, growth-focused learning sessions.",
      icon: <HiOutlinePresentationChartLine />,
      theme: "orange"
    },
  ];

  return (
    <section className="about" id="about">

      {/* background elements */}
      <div className="bg-blur blur-blue"></div>
      <div className="bg-blur blur-purple"></div>

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left" data-aos="fade-right">
          <div className="image-wrapper" data-aos="zoom-in" data-aos-delay="200">
            <img src={aboutImg} alt="Syed Mustakim" className="profile-img" />

            <div className="floating-badge" data-aos="zoom-in" data-aos-delay="350">
              <span>🚀</span> Trainer
            </div>

            <div className="pattern-dots" data-aos="zoom-in" data-aos-delay="450"></div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="about-right">
          <h4 
            className="subtitle"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            About Me
          </h4>

          <h2 
            className="about-title"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Transforming Careers Through <br />
            <span className="highlight-text">Communication & Leadership</span>
          </h2>

          <p 
            className="about-desc"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            My mission is to help individuals unlock their full potential. 
            Whether you are a student or a corporate professional, I provide 
            the tools to communicate with confidence and lead with impact.
          </p>

          <div 
            className="cta-wrapper"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <button className="btn-primary">Contact Me</button>
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="stats-wrapper">
        <div className="stats-grid">

          {stats.map((item, index) => (
            <div 
              className={`stat-card-outer theme-${item.theme}`} 
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 150}    // stagger animation
            >
              <div className="stat-card-inner">
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="stat-number">{item.number}</h3>
                <h4 className="stat-title">{item.title}</h4>
                <p className="stat-desc">{item.desc}</p>
              </div>

              {/* Connector */}
              {index !== stats.length - 1 && (
                <div className="connector-line"></div>
              )}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default About;
