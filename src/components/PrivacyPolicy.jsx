// src/components/PrivacyPolicy.jsx
import "../style/PrivacyPolicy.css";

function PrivacyPolicy({ isOpen, onClose }) {
  // If the footer link hasn't been clicked, don't show anything
  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-header">
          <h3>Privacy Policy</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close Privacy Policy">
            &times;
          </button>
        </div>
        
        <div className="privacy-body">
          <p className="privacy-date">Last Updated: June 2026</p>
          
          <p>
            At <strong>Webnaid</strong>, we respect your privacy and are committed to protecting any personal information you share with us through our website. This policy explains what information we collect, how we use it, and how we protect it.
          </p>

          <h4>1. Information We Collect</h4>
          <p>
            We only collect information that you voluntarily provide to us when filling out our project contact form. This includes:
          </p>
          <ul>
            <li>Your Name</li>
            <li>Your Business Email Address</li>
            <li>Your Business or Website Name</li>
            <li>Any project details or messages you submit</li>
          </ul>

          <h4>2. How We Use Your Information</h4>
          <p>
            The information you submit is used strictly to evaluate your project scope, provide you with a transparent development proposal, and communicate directly with you about your website needs. We <strong>never</strong> sell, rent, lease, or distribute your email address or business data to third-party marketing networks or advertisers.
          </p>

          <h4>3. Analytics and Tracking</h4>
          <p>
            We optimize our portfolio using privacy-friendly, lightweight performance analytics. These tools measure macro statistics like overall visitor count and form click-through rates. They do not track your personal browser habits across other websites or deploy tracking cookies.
          </p>

          <h4>4. Data Security</h4>
          <p>
            Your form messages are securely routed directly to our secure agency email servers via industry-standard encrypted channels. While no data transmission over the internet is completely bulletproof, we follow modern development practices to ensure your shared data is highly defended against unauthorized access.
          </p>

          <h4>5. Consent & Changes</h4>
          <p>
            By using our portfolio site and submitting our contact form, you consent to this privacy policy. Any future updates to this document will be reflected directly on this page with an updated modification date.
          </p>

          <h4>6. Contact Us</h4>
          <p>
            If you have any questions regarding this privacy policy or want us to delete your submitted contact records from our database email logs, please contact us directly at: 
            <a href="mailto:hello@webnaid.com" className="privacy-email-link"> hello@webnaid.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;