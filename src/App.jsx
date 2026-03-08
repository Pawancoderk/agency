import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  useEffect(() => {
    // Global ScrollTrigger setup or SmoothScroller can be initialized here
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
      {/* Global CSS noise overlay */}
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />
        <OurWork />
        <Services />
        <HowWeWork />
        <Philosophy />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
