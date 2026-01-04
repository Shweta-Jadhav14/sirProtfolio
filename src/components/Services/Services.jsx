import "./Services.css";
import mockIcon from "../../assets/Images/mock.png";
import resumeIcon from "../../assets/Images/resume.png";
import interviewIcon from "../../assets/Images/interviews.png";
import drivingIcon from "../../assets/Images/driving.png";
import evIcon from "../../assets/Images/EV.png";
import appIcon from "../../assets/Images/App.png";

const Services = () => {
  const servicesData = [
    {
      icon: mockIcon,
      title: "Mock Interviews",
      desc: "Practice real interview scenarios with personalized feedback to improve confidence and communication.",
    },
    {
      icon: resumeIcon,
      title: "Resume Building",
      desc: "Create a professional, job-ready resume tailored specifically for better hiring outcomes.",
    },
    {
      icon: interviewIcon,
      title: "Interview Prep",
      desc: "Master HR rounds, technical questions, and soft skills with structured, results-driven training.",
    },
    {
      icon: drivingIcon,
      title: "Driving Instructor",
      desc: "Professional driving training focused on safety, real-road awareness, and confident driving.",
    },
    {
      icon: evIcon,
      title: "EV Design",
      desc: "Learn the fundamentals of EV system design, battery integration, and electric mobility.",
    },
    {
      icon: appIcon,
      title: "App Design",
      desc: "Master the art of UI/UX design to create intuitive, user-friendly mobile applications.",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-container">

        <h2 
          className="services-title"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          My Services
        </h2>

        <p 
          className="services-sub"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Delivering practical skills and training that transforms learners into confident professionals.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 120}   // stagger delay
            >
              <div className="icon-box" data-aos="zoom-in" data-aos-delay={250 + index * 120}>
                <img src={service.icon} alt={service.title} />
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
