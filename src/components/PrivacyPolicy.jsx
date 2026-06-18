// src/components/PrivacyPolicy.jsx
import "../style/PrivacyPolicy.css";

function PrivacyPolicy({ isOpen, onClose }) {
  // If the footer link hasn't been clicked, don't show anything
  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-header">
          <h3>Comprehensive Privacy and Data Governance Policy</h3>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close Privacy Policy"
          >
            &times;
          </button>
        </div>

        <div className="privacy-body">
          <p className="privacy-date">
            Date of Effective Regulation: June 15, 2026
          </p>

          <p>
            At **Webnaid Studio** ("Webnaid," "Agency," "we," "us," or "our"),
            we approach the sanctity of operational privacy with absolute
            seriousness. This comprehensive Privacy and Data Governance Policy
            ("Policy") defines the rigid framework, protocols, and architectural
            standards we utilize to collect, govern, process, secure, and
            utilize "Information" shared within the Webnaid ecosystem. By
            utilizing our portfolio platform and dynamic communication
            infrastructure, you affirm your complete and voluntary acceptance of
            the data principles outlined herein.
          </p>

          <h4>1. Dynamic Definition of "Information We Collect"</h4>
          <p>
            Our data collection framework is strictly maximized for operational
            efficiency and project scope qualification. "Information" is defined
            as any quantifiable data point transmitted through our portfolio
            site or associated communication channels.
          </p>
          <p>
            <strong>1.1 Personally Identifiable Information (PII):</strong> We
            securely process "Personally Identifiable Information" that you
            explicitly and voluntarily provide through our project engagement
            contact matrix, dynamic forms, or during strategic discovery
            sessions. This robust set includes:
          </p>
          <ul>
            <li>Full Legal or Trade Name</li>
            <li>Verified Business Email Coordinates</li>
            <li>Validated Phone Numbers or VoIP handles</li>
            <li>Operational Business/Website Titles</li>
            <li>
              Dynamic Project Specifications, Architectural Proposals, and
              technical requirements messages you submit
            </li>
            <li>
              Physical business addresses or regional demographics when relevant
              to localization scoping
            </li>
          </ul>

          <p>
            <strong>1.2 Automated Non-PII & Structural Data:</strong> When
            navigating our optimized structural framework, our infrastructure
            automatically captures passive, non-PII data to measure macro
            engineering performance and localized interaction. This structural
            metadata set may include:
          </p>
          <ul>
            <li>
              Localized IP (Internet Protocol) addresses and geolocation markers
            </li>
            <li>
              Browser type, technical resolution, and operating system
              architectural environment
            </li>
            <li>
              Referral URLs, navigation path vectors, and form click-through
              efficiency metrics
            </li>
            <li>
              Macro-statistic visitor count, session duration, and overall
              interface responsiveness metrics
            </li>
          </ul>

          <h4>2. Strict Purposes of Information Utilization</h4>
          <p>
            The utilization of collected Information is meticulously executed
            strictly to fulfill operational, communicative, and contractual
            requirements. Your data **SHALL NEVER** be sold, rented, leased,
            licensed, distributed, or monetized through third-party advertising
            networks or data broker aggregators.
          </p>
          <p>
            We deploy PII and passive data specifically for these high-value
            operational objectives:
          </p>
          <ul>
            <li>
              **Scoping and Proposal Engineering:** Evaluating your dynamic
              project requirements, mapping technological bottlenecks, and
              delivering a transparent technological proposal/blueprint.
            </li>
            <li>
              **Operational Communication:** Facilitating direct, high-speed
              interaction regarding production status, design assets, database
              schemas, technical updates, and infrastructure deployment
              coordination.
            </li>
            <li>
              **Performance Metrics:** Analyzing macro structural navigation
              data to optimize the global performance and responsive efficacy of
              our portfolio framework.
            </li>
            <li>
              **Case Study and Proof:** We may utilize anonymized structural
              data (such as localized revenue metrics if scoped or traffic
              volume) to build high-value case studies and Proof of Work assets,
              ensuring identities remain protected under strict NDA clauses when
              applicable.
            </li>
            <li>
              **Contractual Compliance:** Enforcing our robust Terms of Service
              and satisfying standard business accounting, legal, and
              operational compliance audit requirements.
            </li>
          </ul>

          <h4>3. Third-Party Frameworks, Plugins, and CDNs</h4>
          <p>
            Our exceptionally stable digital ecosystem utilizes standardized,
            third-party technological frameworks, lightweight plugins, and
            world-class Content Delivery Networks (CDNs) to enhance global
            responsiveness and operational stability.
          </p>
          <p>
            While we manage our internal data pipelines rigorously, these
            external providers have separate, dynamic privacy frameworks. These
            may include globally recognized analytics tools (which measure
            aggregate navigation, not browser habits) and infrastructure scaling
            assets. While these tools do not deploy intrusive tracking cookies,
            you acknowledge that Webnaid Studio **does not maintain control**
            over the independent privacy policies or data handling practices
            utilized by these external network operators or globally distributed
            CDNs.
          </p>

          <h4>4. Deep Data Security & Breach Waiver</h4>
          <p>
            Your form messages are securely routed directly to our secure agency
            email servers via industry-standard encryption protocols and highly
            defended channels. We utilize world-class infrastructure and
            modernized technical defenses designed to maximize protection
            against unauthorized access, disclosure, and data manipulation.
          </p>
          <p>
            **DATA BREACH DISCLAIMER AND WAIVER:** While our security matrix is
            exceptionally robust, you acknowledge and agree that **no data
            transmission method over the internet, or method of electronic
            storage, is completely bulletproof**. Therefore, by using our
            platform, you explicitly and irrevocably release Webnaid Studio, its
            employees, contractors, and partners from any and all liability
            related to, and waive all rights to pursue claims for, data
            breaches, information theft, operational outages, third-party plugin
            vulnerabilities, or unauthorized access resulting in PII exposure.
            In the event of a verified breach, we will immediately execute
            standardized mitigation protocols.
          </p>

          <h4>5. Data Aggregation and Anonymization Clause</h4>
          <p>
            You grant Webnaid Studio the absolute right to anonymize, compile,
            aggregate, and analyze all Information collected from your
            interaction and development cycle. Anonymized data is defined as
            data stripped of all PII so that identity cannot be
            reverse-engineered. Anonymized aggregate data may be used and
            distributed by Webnaid for research, case studies, marketing
            analysis, structural efficiency mapping, or any other professional
            business purpose, and this clause survives the termination of any
            service agreement.
          </p>

          <h4>6. Continuous Consent and Jurisdictional Regulation</h4>
          <p>
            By continuing to utilize our portfolio framework, requesting
            strategic technical audits, or authorizing development production,
            you provide explicit, continuous, and voluntary consent to this
            dynamic Privacy Policy.
          </p>
          <p>
            Any future updates to this regulatory document will be published
            immediately on this page with an updated modification date. It is
            your sole operational responsibility to periodically review this
            page to monitor adjustments. This Data Governance Policy is governed
            by standard business and data regulations within the operational
            jurisdiction of Webnaid Studio, Sindh, Pakistan, and any disputes
            will be governed by the legal framework defined within our Master
            Services & Business Terms.
          </p>

          <h4>7. Operational Data Governance Inquiries</h4>
          <p>
            If you have precise, specialized questions regarding this rigorous
            privacy matrix, want to clarify our approach to international data
            protection standards (such as GDPR, though not explicitly required
            within this operational scope), or require a structural audit record
            of your submitted PII data history, please submit a formal request
            to our Data Governance mailbox at:
            <a
              href="mailto:webnaidstudio@gmail.com"
              className="privacy-email-link"
            >
              {" "}
              webnaidstudio@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
