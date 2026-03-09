import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import OurWork from './components/OurWork';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Global ScrollTrigger setup or SmoothScroller can be initialized here
    if (isLoaded) {
      // Force a calculation refresh once the preloader completes and overflow is fully restored
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }, [isLoaded]);

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
      {/* Global CSS noise overlay */}
      <div className="noise-overlay" />

      {/* Unique Preloader Sequence */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <Navbar />

      <main>
        <Hero isLoaded={isLoaded} />
        <MarqueeStrip isLoaded={isLoaded} />
        <OurWork isLoaded={isLoaded} />
        <Services isLoaded={isLoaded} />
        <HowWeWork isLoaded={isLoaded} />
        <Philosophy isLoaded={isLoaded} />
        <Testimonials isLoaded={isLoaded} />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
