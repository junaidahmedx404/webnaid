// src/components/About.jsx
import "../style/About.css";
import F_Developer from "../assets/frontend_developer.jpeg";
import SEO_Expert from "../assets/growth_stratgist.jpeg"
function About() {
  const principles = [
    {
      title: "No Technical Fluff",
      desc: "We don't talk about complex frameworks or databases. We talk about how to get your phone ringing and get more customers into your shop.",
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees, no complicated surprises. We work with simple, straightforward contracts and clear 50/50 payment frameworks.",
    },
    {
      title: "Strict Milestones",
      desc: "From initial design layout to final deployment, our structured workflow keeps your launch on time without cutting corners.",
    },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        {/* UPPER BLOCK: Original Pitch & Pillars */}
        <div className="about-grid">
          {/* Left Side: Agency Mission Pitch */}
          <div className="about-content">
            <span className="about-badge">Our Mission</span>
            <h2>We Help Local Businesses Dominate Their Market</h2>
            <p className="about-text-lead">
              Webnaid was founded with a single goal: to help brick-and-mortar
              businesses, service providers, and local brands build a modern
              online presence that produces real revenue.
            </p>
            <p className="about-text-body">
              Too many local businesses are losing valuable leads to competitors
              simply because their platforms look like they were built in 2012.
              We cut through the noise, skip the bloated agency overhead, and
              build fast, secure assets designed to convert search traffic into
              direct revenue.
            </p>
            <div className="about-cta-wrapper">
              <a href="#contact" className="btn-primary">
                Let's Build Together
              </a>
            </div>
          </div>

          {/* Right Side: Core Operational Pillars */}
          <div className="about-pillars">
            <div className="pillars-wrapper">
              {principles.map((pill, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-index">0{idx + 1}</div>
                  <div className="pillar-info">
                    <h3>{pill.title}</h3>
                    <p>{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER BLOCK: The Transparent Team / Network Collective */}
        <div className="team-divider"></div>

        <div className="about-intro">
          <span className="about-badge">How We Execute</span>
          <h2>Big Agency Results. Lean Local Operation.</h2>
          <p className="about-lead-text">
            We don't bury you under sales reps or account assistants. You work
            directly with the creators. For complex integration milestones, we
            deploy a vetted collective of specialized local engineering
            partners.
          </p>
        </div>

        <div className="team-grid">
          {/* Card 1: Core Architect (You) */}
          <div className="team-card core-member">
            <div className="member-image-wrapper">
              <img
                src={F_Developer}
                alt="Lead Architect"
              />
              <span className="card-badge">Core Partner</span>
            </div>
            <div className="member-info">
              <h3>Junaid Ahmed</h3>
              <p className="member-role">
                Lead System Architect & Frontend Developer
              </p>
              <p className="member-desc">
                Your primary point of contact. Handles lightning-fast React
                interfaces, intuitive user setups, and translating business
                goals into clean code.
              </p>
            </div>
          </div>

          {/* Card 2: Backend Network */}
          <div className="team-card network-member">
            <div className="member-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Backend Specialist"
              />
              <span className="card-badge">Vetted Network</span>
            </div>
            <div className="member-info">
              <h3>Database Specialist</h3>
              <p className="member-role">Infrastructure & API Engineer</p>
              <p className="member-desc">
                Our go-to expert for complex storage systems, secure data
                pipelines, system configurations, and back-end integration
                modules.
              </p>
            </div>
          </div>

          {/* Card 3: SEO Network */}
          <div className="team-card network-member">
            <div className="member-image-wrapper">
              <img
                src={SEO_Expert}
                alt="SEO Specialist"
              />
              <span className="card-badge">Vetted Network</span>
            </div>
            <div className="member-info">
              <h3>Mohsin Ali</h3>
              <p className="member-role">Local SEO & Maps Expert</p>
              <p className="member-desc">
                Optimizes maps profiles, search listing metadata, and discovery
                keywords to ensure local search visibility targets turn into
                phone calls.
              </p>
            </div>
          </div>
        </div>

        {/* Our Structural Communication Rule */}
        <div className="communication-promise">
          <h4>💬 Direct Connection Guarantee</h4>
          <p>
            You will never deal with complex automated ticket logs or support
            queues. When you have a question, you reach your core builder
            directly for rapid responses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
