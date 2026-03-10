import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StayTypes from './components/StayTypes';
import HowItWorks from './components/HowItWorks';
import Listings from './components/Listings';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import HostCTA from './components/HostCTA';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StayTypes />
        <HowItWorks />
        <Listings />
        <PainPoints />
        <Features />
        <Testimonials />
        <HostCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
