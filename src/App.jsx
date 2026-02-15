import { useRef } from 'react';
import useCanvasCursor from './hook/useCanvasCursor';
import ParticlesBackground from './component/ParticlesBackground';
import Header from './component/Header';
import Intro from './component/intro';
import AboutMe from './component/AboutMe';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Chatbot from './component/Chatbot';

function App() {
  // Create a ref for the canvas
  const canvasRef = useRef(null);
  
  // Use the cursor hook
  useCanvasCursor();

  return (
    <div className="relative">
      {/* Background Particles - stays at the bottom */}
      <ParticlesBackground />
      
      {/* Canvas for the cursor effect - between background and content */}
      <canvas
        id="canvas" // important - the hook looks for this ID
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* Content - above the canvas */}
      <div className="relative z-10">
        <Header />
        <section id="intro" className="section min-h-screen">
          <Intro />
        </section>
        <section id="about" className="section min-h-screen">
          <AboutMe />
        </section>
        <section id="projects" className="section min-h-screen">
          <Projects/>
        </section>
        <section id="subscription" className="section min-h-screen">
          <Contact/>
        </section>
      </div>
      <Chatbot />
    </div>
  );
}

export default App;