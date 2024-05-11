import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="relative overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>      
      <div className="relative z-10">
        <div className="container mx-auto px-8">
          <Navbar />
          <HeroSection />
          <About /> 
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
};

export default App;
