// src/components/Contact.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser"; 
import "../style/Contact.css";

function Contact() {
  const formRef = useRef(); 
  const [isSending, setIsSending] = useState(false); 
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State to monitor checkbox status

  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    industry: "",
    projectScope: "", 
    currentWebsite: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if the client has bypassed the agreement block
    if (!agreedToTerms) {
      alert("Please review and accept our Terms of Service and Privacy Policy to submit your request.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_0m8ouwt", 
        "template_mqt0wc5", 
        formRef.current, 
        "KHCfk4VnULEPqO6EO", 
      )
      .then(() => {
        alert(
          "Thanks for reaching out! We'll audit your online presence and email you back within 24 hours.",
        );

        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          industry: "",
          projectScope: "",
          currentWebsite: "",
          message: "",
        });
        setAgreedToTerms(false); // Reset confirmation state
      })
      .catch((error) => {
        console.error("Webnaid Lead Capture Delivery Error:", error);
        alert(
          "Oops! Something went wrong while passing your message along. Please email us directly at hello@webnaid.com",
        );
      })
      .finally(() => {
        setIsSending(false); 
      });
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container contact-grid">
        {/* Left Side: Direct Closing Value Pitch */}
        <div className="contact-info-panel">
          <span className="contact-badge">Get in Touch</span>
          <h2>Let’s Build a Digital Asset That Drives Revenue</h2>
          <p className="contact-lead-text">
            Ready to fix manual structural operational gaps, swap slow templates
            for a high-performance framework, or scale your regional lead
            capture engine?
          </p>

          <div className="value-bullets">
            <div className="value-bullet">
              <span className="bullet-check">✓</span>
              <div>
                <strong>Free Initial Architecture Audit</strong>
                <p>
                  We analyze your target workflow bottlenecks or run an audit of
                  your top 3 local marketplace competitors for free.
                </p>
              </div>
            </div>
            <div className="value-bullet">
              <span className="bullet-check">✓</span>
              <div>
                <strong>Custom Scoping Proposals</strong>
                <p>
                  No flat-rate packages or hidden ongoing maintenance fees.
                  Transparent contracts built precisely around your operational
                  scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Lean Lead-Capture Form */}
        <div className="contact-form-wrapper">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. IronPulse Gym"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactName">Your Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g. Healthcare, Solar"
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentWebsite">Current Website (If any)</label>
                <input
                  type="text"
                  id="currentWebsite"
                  name="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  placeholder="www.mybusiness.com"
                />
              </div>
            </div>

            {/* Premium Strategic Selector Dropdown */}
            <div className="form-group">
              <label htmlFor="projectScope">Project Scope Target</label>
              <select
                id="projectScope"
                name="projectScope"
                required
                value={formData.projectScope}
                onChange={handleChange}
                className="form-select"
              >
                <option value="" disabled>
                  Select project framework tier...
                </option>
                <option value="Conversion Asset">
                  Conversion Asset (High-Intent Landing Page Build)
                </option>
                <option value="Market Domination Platform">
                  Market Domination Platform (Full Business Website Ecosystem)
                </option>
                <option value="Custom Software Deployment">
                  Custom Software Deployment (Portals, Secure Offline Systems)
                </option>
                <option value="Other Specialized ">
                  Other Specialized Infrastructure Audit & Custom Engineering
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                How can we help your operations grow?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe specific project requirements, integration needs, or target goals..."
              ></textarea>
            </div>

            {/* ADDED: Premium Consent Checkbox Block */}
            <div className="form-checkbox-group">
              <input
                type="checkbox"
                id="termsAgreement"
                name="termsAgreement"
                required
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="form-checkbox"
              />
              <label htmlFor="termsAgreement" className="checkbox-label">
                I agree to the Webnaid Studio{" "}
                <span className="legal-link-highlight">Terms of Service</span> and{" "}
                <span className="legal-link-highlight">Privacy Policy</span>.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="btn-primary form-submit-btn"
            >
              {isSending
                ? "Transmitting Proposal..."
                : "Submit Proposal Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;