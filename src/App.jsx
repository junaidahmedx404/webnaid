// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import FAQ from "./components/FAQS";
import NotFound from "./components/NotFound";

// FIX: Moved HomePage outside of App so it doesn't recreate during render
const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <SpeedCalculator />
    <Pricing />
    <Portfolio />
    <About />
    <Testimonials />
    <FAQ />
    <Contact />
  </>
);

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Main Base Website Pipeline */}
        <Route path="/" element={<HomePage />} />

        {/* Catch-all Wildcard Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global Modals & Footers remain active across all view layers */}
      <Footer
        onPrivacyClick={() => setIsPrivacyOpen(true)}
        onTermsClick={() => setIsTermsOpen(true)}
      />

      <PrivacyPolicy
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TermsOfService
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
    </Router>
  );
}

export default App;
