// src/components/Pricing.jsx
import "../style/Pricing.css";

function Pricing() {
  const tiers = [
    {
      name: "Conversion Assets",
      price: "Launch Floor",
      period: "project-based",
      desc: "Engineered single-page landing systems built to run high-intent ad traffic, capture localized search queries, and maximize immediate lead generation.",
      features: [
        "Fully Bespoke Conversion Architecture",
        "100% Mobile Fluidity & Semantic Layouts",
        "Deep-Layer Lead Form Routing",
        "Sub 1.5-Second Core Web Vitals Optimization",
        "Global Edge CDN Network Deployment",
      ],
      isPopular: false,
      ctaText: "Request Scope Proposal",
    },
    {
      name: "Market Domination Platforms",
      price: "Enterprise Growth",
      period: "project-based",
      desc: "Custom multi-page ecosystems optimized for established businesses aiming to capture regional traffic, outpace competitors, and automate customer inquiries.",
      features: [
        "Advanced Multi-Tier Operational Architecture",
        "Hyper-Targeted Local SEO Infrastructure",
        "Interactive Native UI Blocks (e.g., Calculators)",
        "Automated Form Routing & CRM Webhooks",
        "Full Component Hand-off & System Briefing",
      ],
      isPopular: true,
      ctaText: "Schedule Discovery Call",
    },
    {
      name: "Custom Software Deployments",
      price: "Custom Scope",
      period: "milestone-based",
      desc: "Bespoke internal systems, private clinic databases, offline-capable applications, or complex multi-user portals mapped to your exact organizational workflow.",
      features: [
        "Unlimited Purpose-Built Framework Pages",
        "Secure Database Pipelines & External API Hubs",
        "Custom Automated User/Booking Portals",
        "Isolated Offline-First Failure Safety Nets",
        "Dedicated Systems Scaling & Architectural Support",
      ],
      isPopular: false,
      ctaText: "Initialize Technical Audit",
    },
  ];

  return (
    <section id="pricing" className="pricing-section section">
      <div className="container">
        {/* Header Block */}
        <div className="pricing-header">
          <span className="pricing-badge">Strategic Engagement</span>
          <h2>Tailored Project Scoping Frameworks</h2>
          <p className="pricing-lead">
            We don't build standard website packages. We engineer custom digital 
            assets mapped to your business objectives under a structured 50/50 
            milestone delivery model.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`pricing-card ${tier.isPopular ? "popular-card" : ""}`}
            >
              {tier.isPopular && (
                <div className="popular-ribbon">Highly Recommended</div>
              )}

              <div className="card-top">
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price-row">
                  <span className="price-amount" style={{ fontSize: "2.2rem", letterSpacing: "0" }}>
                    {tier.price}
                  </span>
                  <span className="price-period">/ {tier.period}</span>
                </div>
                <p className="tier-desc">{tier.desc}</p>
              </div>

              <div className="card-divider"></div>

              {/* Functional Attributes List */}
              <ul className="tier-features">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="feature-check">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <div className="card-bottom">
                <a
                  href="#contact"
                  className={`btn-pricing ${tier.isPopular ? "btn-primary-card" : "btn-secondary-card"}`}
                >
                  {tier.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;