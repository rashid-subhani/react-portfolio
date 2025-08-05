import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;