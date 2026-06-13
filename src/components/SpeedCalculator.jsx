// src/components/SpeedCalculator.jsx
import { useState } from "react";
import "../style/SpeedCalculator.css";

function SpeedCalculator() {
  // 1. Setup states for the three simple inputs from the business owner
  const [traffic, setTraffic] = useState(2000);
  const [value, setValue] = useState(150);
  const [loadTime, setLoadTime] = useState(5);

  // 2. Math Formula based on conversion drops (Industry standard: ~7% drop per second of delay)
  // We assume a baseline conversion rate of 3% for a perfectly fast site (1-2 seconds)
  const baselineConversion = 0.03;
  const potentialConversions = traffic * baselineConversion;

  // Calculate how much conversion rate they lose based on their slow speed
  // If speed is 2 seconds or less, loss is 0. Every second above 2 drops it by 7%
  const secondsDelayed = Math.max(0, loadTime - 2);
  const efficiencyLossPercentage = secondsDelayed * 0.07;

  // Final calculated values
  const lostConversionsYearly = Math.round(
    potentialConversions * efficiencyLossPercentage * 12,
  );
  const annualRevenueLost = lostConversionsYearly * value;

  return (
    <section id="calculator" className="calc-section section">
      <div className="container calc-container">
        {/* Left Column: Heading and Sliders */}
        <div className="calc-inputs-panel">
          <span className="calc-badge">Interactive Audit</span>
          <h2>See How Much Your Slow Website Costs You</h2>
          <p className="calc-description">
            Every second your website takes to load cuts your customer
            conversions by 7%. Plug in your business numbers below to see the
            mathematical impact on your bottom line.
          </p>

          <div className="sliders-wrapper">
            {/* Input 1: Traffic */}
            <div className="slider-group">
              <div className="slider-label-row">
                <label htmlFor="traffic">Estimated Monthly Visitors</label>
                <span className="slider-value">{traffic.toLocaleString()}</span>
              </div>
              <input
                type="range"
                id="traffic"
                min="100"
                max="20000"
                step="100"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
              />
            </div>

            {/* Input 2: Value */}
            <div className="slider-group">
              <div className="slider-label-row">
                <label htmlFor="value">Average Customer Value ($)</label>
                <span className="slider-value">${value}</span>
              </div>
              <input
                type="range"
                id="value"
                min="10"
                max="2000"
                step="10"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </div>

            {/* Input 3: Load Time */}
            <div className="slider-group">
              <div className="slider-label-row">
                <label htmlFor="loadTime">Current Website Load Time</label>
                <span
                  className={`slider-value ${loadTime > 3 ? "text-alert" : "text-success"}`}
                >
                  {loadTime} Seconds
                </span>
              </div>
              <input
                type="range"
                id="loadTime"
                min="1"
                max="10"
                step="1"
                value={loadTime}
                onChange={(e) => setLoadTime(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mathematical Output */}
        <div className="calc-results-panel">
          <div className="results-card">
            <div className="result-block block-danger">
              <span className="result-label">
                Estimated Annual Revenue Lost
              </span>
              <h3 className="result-number">
                {annualRevenueLost > 0
                  ? `$${annualRevenueLost.toLocaleString()}`
                  : "$0"}
              </h3>
              <p className="result-explanation">
                Due to a {loadTime}-second load time, an estimated{" "}
                <strong>{lostConversionsYearly} customers</strong> abandon your
                site before taking action every year.
              </p>
            </div>

            <div className="result-divider"></div>

            <div className="result-block block-success">
              <span className="result-label">Webnaid Solution</span>
              <h4>Under 2-Second Guarantee</h4>
              <p>
                We rebuild your architecture completely from scratch. By
                bringing your loading speeds down to the safe zone, we rescue
                this lost traffic and turn it back into revenue.
              </p>
              <a href="#contact" className="btn-primary calc-cta-btn">
                Fix My Bottleneck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeedCalculator;
