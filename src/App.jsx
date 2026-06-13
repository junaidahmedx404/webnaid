import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import SpeedCalculator from "./components/SpeedCalculator";
import Testimonials from "./components/Testimonials";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <SpeedCalculator />
      <Pricing />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />

      <Footer
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onTermsClick={() => setIsTermsOpen(true)}
      />

      <PrivacyPolicy
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* 4. Render the Terms Modal */}
      <TermsOfService
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </>
  );
}

export default App;
