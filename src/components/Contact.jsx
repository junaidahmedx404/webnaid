// src/components/Contact.jsx
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // 1. Imported the Browser SDK
import "../style/Contact.css";

function Contact() {
  const formRef = useRef(); // 2. Reference link to capture form DOM parameters
  const [isSending, setIsSending] = useState(false); // UI state tracking for submission action

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    industry: '',
    currentWebsite: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // 3. Executing the EmailJS delivery transmission request
    emailjs.sendForm(
      'service_0m8ouwt',  // Service ID
      'template_mqt0wc5', // Template ID
      formRef.current,    // Target references the real inputs bound inside <form>
      'KHCfk4VnULEPqO6EO' // Public Key
    )
    .then(() => {
      // Success Response Handler
      alert("Thanks for reaching out! We'll audit your online presence and email you back within 24 hours.");
      
      // Clear values safely inside tracking states
      setFormData({ 
        businessName: '', 
        contactName: '', 
        email: '', 
        industry: '', 
        currentWebsite: '', 
        message: '' 
      });
    })
    .catch((error) => {
      console.error("Webnaid Lead Capture Delivery Error:", error);
      alert("Oops! Something went wrong while passing your message along. Please email us directly at hello@webnaid.com");
    })
    .finally(() => {
      setIsSending(false); // Unlock submission state engine
    });
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container contact-grid">
        
        {/* Left Side: Direct Closing Value Pitch */}
        <div className="contact-info-panel">
          <span className="contact-badge">Get in Touch</span>
          <h2>Let’s Build a Website That Actually Drives Growth</h2>
          <p className="contact-lead-text">
            Ready to fix your outdated website, build a landing page for your ad campaigns, or launch a modern digital space? 
          </p>
          
          <div className="value-bullets">
            <div className="value-bullet">
              <span className="bullet-check">✓</span>
              <div>
                <strong>Free Initial Audit</strong>
                <p>We'll analyze your current setup or look at your top 3 local competitors for free.</p>
              </div>
            </div>
            <div className="value-bullet">
              <span className="bullet-check">✓</span>
              <div>
                <strong>Transparent Pricing Models</strong>
                <p>Clear, upfront contracts between 150 to 300 dollars per project with zero hidden fees.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Lean Lead-Capture Form */}
        <div className="contact-form-wrapper">
          {/* Linked form reference parameter stack */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input 
                  type="text" id="businessName" name="businessName" required 
                  value={formData.businessName} onChange={handleChange} placeholder="e.g. IronPulse Gym" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactName">Your Name</label>
                <input 
                  type="text" id="contactName" name="contactName" required 
                  value={formData.contactName} onChange={handleChange} placeholder="John Doe" 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" id="email" name="email" required 
                value={formData.email} onChange={handleChange} placeholder="john@company.com" 
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <input 
                  type="text" id="industry" name="industry" 
                  value={formData.industry} onChange={handleChange} placeholder="e.g. Restaurant, Real Estate" 
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentWebsite">Current Website (If any)</label>
                <input 
                  type="text" id="currentWebsite" name="currentWebsite" 
                  value={formData.currentWebsite} onChange={handleChange} placeholder="www.mybusiness.com" 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help you grow?</label>
              <textarea 
                id="message" name="message" rows="4" 
                value={formData.message} onChange={handleChange} placeholder="Tell us about your project or what features you want..."
              ></textarea>
            </div>

            {/* Submit button displays user operational states dynamically while interacting */}
            <button type="submit" disabled={isSending} className="btn-primary form-submit-btn">
              {isSending ? "Sending Request..." : "Request Project Proposal"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;