import HeroSection from '../components/HeroSection';
import Projects from '../pages/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;
