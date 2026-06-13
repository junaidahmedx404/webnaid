// src/pages/PrivacyPolicy.jsx
import { useEffect } from "react";
import "../style/PrivacyPolicy.css";

function PrivacyPolicy() {
  // Always snap users back to the top of the screen on route transitions
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <section className="legal-page section">
      <div className="container legal-container">
        <h3>Privacy Policy</h3>
        <p className="privacy-date">Last Updated: June 2026</p>
        
        <p>At <strong>Webnaid</strong>, we respect your privacy...</p>
        {/* ... (Keep the rest of your inner text content exactly the same) ... */}
        
        <h4>1. Information We Collect</h4>
        <p>We only collect information that you voluntarily provide...</p>
      </div>
    </section>
  );
}

export default PrivacyPolicy;