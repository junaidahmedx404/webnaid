// src/components/Pricing.jsx
import "../style/Pricing.css";

function Pricing() {
  const tiers = [
    {
      name: "Starter Landing",
      price: "150",
      period: "one-time",
      desc: "Perfect for single-service professionals needing a high-converting, professional landing space to run ads or capture immediate local phone calls.",
      features: [
        "1 Fully Customized Landing Page",
        "100% Secure & Mobile Optimized",
        "Integrated Lead Capture Form",
        "Under 2-Second Loading Speeds",
        "Free Global CDN Deployment Setup",
      ],
      isPopular: false,
      ctaText: "Get Started",
    },
    {
      name: "Business Growth",
      price: "300",
      period: "one-time",
      desc: "Optimized for established brick-and-mortar brands looking to thoroughly dominate their local search traffic and showcase comprehensive services.",
      features: [
        "Up to 5 High-Performance Pages",
        "Advanced Local SEO Optimization",
        "Interactive UI Blocks (e.g., Calculators)",
        "Custom Contact & Review Integrations",
        "Full Content Management Hand-off",
      ],
      isPopular: true,
      ctaText: "Most Popular Option",
    },
    {
      name: "Custom Platform",
      price: "Custom",
      period: "project-based",
      desc: "Tailored architectural solutions for organizations requiring complex multi-tiered booking frameworks, deep database pipelines, or external API hubs.",
      features: [
        "Unlimited Scoped Framework Pages",
        "Bespoke Database & API Integrations",
        "Advanced Booking/User Portals",
        "Priority Architecture Support",
        "Dedicated Structural Scaling Roadmap",
      ],
      isPopular: false,
      ctaText: "Schedule Discovery Call",
    },
  ];

  return (
    <section id="pricing" className="pricing-section section">
      <div className="container">
        {/* Header Block */}
        <div className="pricing-header">
          <span className="pricing-badge">Transparent Value</span>
          <h2>Clear, Predictable Pricing Structures</h2>
          <p className="pricing-lead">
            No recurring overhead, no surprise ongoing licensing fees. We offer
            simple 50/50 payment frameworks designed to fit lean business
            operations.
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
                  {tier.price !== "Custom" && (
                    <span className="currency">$</span>
                  )}
                  <span className="price-amount">{tier.price}</span>
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
