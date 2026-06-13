// src/components/TermsOfService.jsx
import "../style/PrivacyPolicy.css"; // We reuse the premium modal styling we already built!

function TermsOfService({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-header">
          <h3>Terms of Service</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close Terms of Service">
            &times;
          </button>
        </div>
        
        <div className="privacy-body">
          <p className="privacy-date">Last Updated: June 2026</p>
          
          <p>
            Welcome to <strong>Webnaid</strong>. By accessing our website or engaging with our digital development services, you agree to comply with and be bound by the following transparent business terms.
          </p>

          <h4>1. Project Scoping & Proposals</h4>
          <p>
            All development work is executed based on an upfront, clearly defined project scope. Any features, pages, or integrations requested outside of the initial signed invoice agreement will be evaluated as a separate milestone add-on.
          </p>

          <h4>2. Simple 50/50 Payment Terms</h4>
          <p>
            To keep operations lean and fair, projects require a 50% upfront authorization deposit before production begins. The remaining 50% balance is due immediately upon structural approval of the built asset right before we hand off code keys or point live custom domain servers.
          </p>

          <h4>3. Client Content & Assets</h4>
          <p>
            You are entirely responsible for providing the text copy, business logos, high-resolution imagery, and access credentials (like domain registrars) needed to complete your build. Delays in providing these essential assets will push back the agreed completion date.
          </p>

          <h4>4. Post-Launch Code Ownership</h4>
          <p>
            Once the final project milestone payment is completely settled, full ownership of the hand-coded web architecture assets transfers entirely to you. Webnaid reserves the right to display screenshots or live versions of the completed build in our design portfolio as proof of our work.
          </p>

          <h4>5. Limitation of Liability</h4>
          <p>
            Webnaid designs exceptionally stable digital platforms deployed to world-class content delivery networks. However, we are not liable for third-party hosting outages, domain loss, or business revenue fluctuations that occur after your platform has been approved and deployed.
          </p>

          <h4>6. Governing Law</h4>
          <p>
            These terms are governed by standard business regulations. Any operational disputes will be handled directly through friendly mutual communication before seeking local corporate arbitration.
          </p>

          <h4>7. Reaching Out</h4>
          <p>
            If you need clarification on any part of our transparent development terms, feel free to drop us a note at: 
            <a href="mailto:hello@webnaid.com" className="privacy-email-link"> hello@webnaid.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;