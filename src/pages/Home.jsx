import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Events from "../components/Events/Events";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Trending from "../components/Trending/Trending";
// import FAQ from "../components/FAQ/FAQ";
// import ContactForm from "../components/ContactForm/ContactForm";
// import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
      <About />
      <Services />
      <Events />
      <Gallery />
      <Testimonials />
      <Trending />
      {/*<FAQ />
      <ContactForm />
      <Footer />  */}
    </>
  );
}
