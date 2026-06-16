// src/components/Footer.jsx
import "../style/Footer.css"; // Removed 'import React' to fix ESLint warnings

// Added curly braces here to correctly pull out your modal function!
function Footer({ onPrivacyClick, onTermsClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Brand Information */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Webnaid<span className="logo-dot">.</span>
          </a>
          <p className="footer-tagline">
            Building high-performance digital assets for local businesses. 
            No technical fluff, just business results.
          </p>
        </div>

        {/* Action & Trust Column */}
        <div className="footer-contact">
          <h4>Start Your Project</h4>
          <p>We are currently accepting new local clients. Let's talk about growing your revenue.</p>
          <a href="mailto:webnaidstudio@gmail.com" className="footer-email">webnaidstudio@gmail.com</a>
        </div>

        {/* Social Accounts Area */}
        <div className="footer-social-block">
          <h4>Follow Our Journey</h4>
          <p>See our latest live builds, case studies, and business growth tips.</p>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom Legal Sub-bar */}
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {currentYear} Webnaid. All rights reserved.</p>
          <div className="footer-legal">
            <button 
              onClick={onPrivacyClick} 
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
            >
              Privacy Policy
            </button>
            
            {/* 2. Change the anchor tag into a button linking to onTermsClick */}
            <button 
              onClick={onTermsClick} 
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit' }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;