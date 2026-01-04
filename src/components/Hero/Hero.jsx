import "./Hero.css";
import heroImg from "../../assets/images/Your Image 1.png";
import student1 from "../../assets/images/stu1.png";
import student2 from "../../assets/images/stu2.png";
import student3 from "../../assets/images/stu3.png";
import student4 from "../../assets/images/stu4.png";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <h1 
            className="hero-title" 
            data-aos="fade-up" 
            data-aos-delay="0"
          >
            I’m Syed Mustakim <br />
            <span className="highlight">Soft-Skill</span> Trainer
          </h1>

          <p 
            className="hero-sub bold-text" 
            data-aos="fade-up" 
            data-aos-delay="150"
          >
            Driving Employability & Workforce Readiness Across Institutions and Corporates
          </p>

          <p 
            className="hero-desc" 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            Founder Of Infinova Global | Empowering 15,000+ Learners With Transformative Soft Skills
          </p>

          {/* Student count */}
          <div 
            className="hero-students"
            data-aos="zoom-in"
            data-aos-delay="450"
          >
            <div className="avatars">
              <img src={student1} alt="student" />
              <img src={student2} alt="student" />
              <img src={student3} alt="student" />
              <img src={student4} alt="student" />
            </div>
            <div className="student-count">
              <h3>15k+</h3>
              <p>Happy Students</p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <button 
            className="hero-btn"
            data-aos="fade-up"
            data-aos-delay="550"
          >
            Explore My Work →
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div 
          className="hero-right"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img src={heroImg} alt="Syed Mustakim" />
        </div>

      </div>

    </section>
  );
};

export default Hero;
