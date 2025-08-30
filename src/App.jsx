import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
  return (
    <>
      <header className="nav">
        <div className="container">
          <Navbar/>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>

      <footer className="container">
        <Footer/>
      </footer>
    </>
  );
}
