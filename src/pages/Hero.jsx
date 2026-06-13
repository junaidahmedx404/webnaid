// src/components/Hero.jsx
import "../style/Hero.css";
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="badge">Based in Your Area</div>
          <h1>
            We Build Websites That Turn Local Visitors Into Paying Customers
          </h1>
          <p>
            Stop losing leads to competitors with better platforms. Webnaid
            designs high-performing websites, landing pages, and redesigns built
            explicitly to grow your local business.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get a Website
            </a>
            <a href="#portfolio" className="btn-secondary">
              See Our Work
            </a>
          </div>
        </div>
        <div className="hero-visual">
          {/* This represents your structural mockup UI card frame */}
          <div className="mockup-window">
            <div className="mockup-header">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="mockup-body">
              <div className="mockup-hero-demo">
                <h3>Your Buiness Website</h3>
                <div className="mockup-line-large"></div>
                <div className="mockup-line-small"></div>
                <div className="mockup-btn-demo">Book a Class</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
