import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import CloudsCanvas from "./components/canvas/Clouds";

const App = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <BrowserRouter>
      <div className={`relative z-0 transition-colors duration-1000 ${isNight ? 'bg-[#0a0a1a]' : 'bg-[#1a1a2e]'}`}>
        <div className={`${isNight ? 'mc-night-bg' : 'mc-grid-bg'} transition-all duration-1000`}>
          <Navbar isNight={isNight} setIsNight={setIsNight} />
          <Hero isNight={isNight} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {isNight ? <StarsCanvas /> : <CloudsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
