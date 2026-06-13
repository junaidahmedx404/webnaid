// src/pages/Home.jsx
import Hero from "./Hero";
import Services from "./Services";
import SpeedCalculator from "../components/SpeedCalculator";
import Pricing from "../components/Pricing";
import Portfolio from "./Portfolio";
import About from "./About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SpeedCalculator />
      <Pricing />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;