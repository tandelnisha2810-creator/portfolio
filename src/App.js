import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 🔥 Cursor Import
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      {/* 🔥 Cursor Effect */}
      <Cursor />

      {/* Main App */}
      <div className="bg-gray-50">

        <Navbar />
        <Cursor />
        <Hero />
        <About />
        <Skills />
        <Projects />

        <Experience />
        <Education />
        <Services />

        <Contact />
        <Footer />

      </div>
    </>
  );
}

export default App;