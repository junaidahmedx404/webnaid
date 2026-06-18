// src/components/TermsOfService.jsx
import "../style/PrivacyPolicy.css"; // Reusing the premium modal styling

function TermsOfService({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-header">
          <h3>Master Services & Business Terms Agreement</h3>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close Terms of Service"
          >
            &times;
          </button>
        </div>

        <div className="privacy-body">
          <p className="privacy-date">Last Explicit Revision: June 15, 2026</p>

          <p>
            Please review this comprehensive Master Services Agreement ("Agreement") 
            with diligent care. This Agreement constitutes a legally binding contract 
            between **Webnaid Studio** ("Agency," "we," "us," or "our") and the individual 
            or entity ("Client," "you," or "your") accessing our website or engaging 
            our specialized digital engineering, design, and deployment services. By 
            accessing the platform, requesting a proposal, or authorizing production, 
            you affirm that you have read, understood, and irrevocably accept the terms 
            outlined herein. If you do not agree, you must cease engagement immediately.
          </p>

          <h4>1. Acceptance, Applicability, and Modification</h4>
          <p>
            Your continued utilization of the Webnaid digital portfolio framework or standard 
            communication channels, and specifically your authorization to commence any 
            development milestone, constitutes an unconditional and irrevocable acceptance 
            of this Agreement. Webnaid reserves the explicit unilateral right to revise, 
            amend, modify, or update any section, clause, or definition within this 
            Agreement at any moment and without prior notifications. Any such modifications 
            become immediately effective upon publication. It is your sole responsibility 
            to monitor this page for adjustments.
          </p>

          <h4>2. Strict Non-Refundable Deposit Framework</h4>
          <p>
            To facilitate operational resource allocation, maintain engineering priority pipelines, 
            and cover fixed infrastructural costs, Webnaid adheres to a rigorous financial 
            protocol. Production strictly requires a non-negotiable **upfront authorization 
            deposit equivalent to fifty percent (50%) of the total projected value** derived 
            from the signed scope or initial invoice.
          </p>
          <p className="alert-text">
            <strong>CRITICAL FINANCIAL PROVISO:</strong> Under no circumstances—including but 
            not limited to project cancellation, timeline dissatisfaction, scope compression, 
            client delay, or arbitrary changes in business objectives—shall this initial 
            deposit be deemed refundable, transferable, or applicable to future milestones. 
            By authorizing the deposit, you waive all rights to pursue financial chargebacks 
            or refunds, acknowledging that resources have been immediately vested to your project.
          </p>

          <h4>3. Final Balancing and Code Lock Protocol</h4>
          <p>
            The remaining **fifty percent (50%) balancing payment** is due and must be fully 
            settled immediately upon "Structural Approval" of the functional asset. Structural 
            Approval is defined as the successful manifestation of core scoped framework 
            on a private staging environment.
          </p>
          <p>
            You acknowledge and agree that **Webnaid will not**, under any circumstances, 
            hand over code keys, transfer direct code architecture ownership, pointing custom 
            domain servers, or deploy the platform to live globally distributed production delivery 
            networks (CDNs) until the final balance payment is settled in full and funds 
            have cleared. We reserve the absolute right to maintain a "Code Lock" on all assets 
            pending financial clearance. Delayed final payments beyond three (3) business days 
            will result in an automated hold on production and may incur additional mobilization 
            fees.
          </p>

          <h4>4. Comprehensive Liability Waiver and Indemnification</h4>
          <p>
            Webnaid constructs exceptionally robust, validated digital platforms using 
            world-class engineering standards. However, the software environment is 
            dynamically complex.
          </p>
          <p>
            **4.1 Total No-Liability Clause:** You explicitly acknowledge that Webnaid, its 
            employees, contractors, and partners **SHALL NOT BE HELD LIABLE** for any direct, 
            indirect, incidental, punitive, special, consequential, or exemplary damages or 
            losses. This irrevocable waiver includes, but is not limited to: loss of profits, 
            revenue fluctuations, data corruption, database breaches, third-party hosting 
            CDN outages, domain name expiration or loss, browser compatibility errors emerging 
            post-launch, localized ISP routing issues, hardware failure, or any negative impact 
            on your business operations, revenue, or reputation that may arise from the use, 
            inability to use, or performance of the engineered asset. We make no guarantees 
            regarding traffic, sales, search engine rankings, or business success.
          </p>
          <p>
            **4.2 Post-Launch Maintenance:** Following formal structural approval and asset 
            hand-off, any subsequent code adjustments, bug fixes, third-party API update 
            integrations, plugin updates, or feature additions are outside the initial scope 
            and require a new, separate engagement contract and quote. Webnaid has no ongoing 
            obligation to maintain the platform unless explicitly stated in a signed monthly 
            Technical Support Agreement.
          </p>
          <p>
            **4.3 Client Indemnification:** You agree to fully indemnify, defend, and hold 
            harmless Webnaid Studio and all associated parties from any and all claims, 
            demands, damages, legal costs, obligations, or liabilities (including attorney 
            fees) arising out of or related to: your use of the website or services; your violation 
            of any third-party right, including copyright or trademark; or any claim that 
            content you provided caused damage to a third party.
          </p>

          <h4>5. Rigid Project Timelines and Client Delay Provisions</h4>
          <p>
            While Webnaid endeavors to deliver milestones by projected deadlines, all proposed 
            timelines are highly dependent on Client responsibilities. Production pipelines 
            are extremely streamlined.
          </p>
          <p>
            You are entirely responsible for providing all essential text copy, business 
            logos, high-resolution media, access credentials (like domain registrars or third-party 
            APIs), and critical structural feedback. Any delay exceeding forty-eight (48) 
            hours in providing these requested components or approvals will result in an 
            automated hold on your project. If client-side delay exceeds five (5) business days, 
            the project may be categorized as "Dormant." Reactivating a Dormant project will 
            require a formal request, prioritization reassessment, and a mandatory Mobilization Fee 
            equivalent to ten percent (10%) of the remaining project balance.
          </p>

          <h4>6. Scope Creep and Structural Modifications</h4>
          <p>
            All production deployments are executed based exclusively on the formalized, 
            mutually agreed scope detailed on the initiating invoice or proposal document. 
            Any requested alterations, feature additions, layout overhauls, database structure 
            modifications, or integrations requested **after** production has commenced or 
            outside the bounds of the original scope document will be categorized as "Scope Creep."
          </p>
          <p>
            Webnaid will evaluate such requests and provide a separate, independent project 
            scope and technical proposal. Scope Creep requests will naturally impact the initial 
            project timeline and are subject to immediate scoping fees. By requesting alterations, 
            you acknowledge and agree to accept the additional financial adjustments to the base 
            contract value.
          </p>

          <h4>7. Intellectual Property Ownership and Usage Rights</h4>
          <p>
            Ownership structure is precisely managed to protect our proprietary operational 
            components while ensuring full utility for the client.
          </p>
          <p>
            **7.1 Client Content:** You retain full ownership of all logos, text, data, trademarks, 
            or media assets provided to Webnaid for inclusion.
          </p>
          <p>
            **7.2 Webnaid Intellectual Assets:** All custom engineering code, visual designs, 
            software architecture diagrams, database schemas, and infrastructural deployment settings 
            remains the proprietary intellectual property of Webnaid Studio during the development 
            process.
          </p>
          <p>
            **7.3 Asset Transfer:** Complete ownership and intellectual property rights of the final, 
            hand-coded digital asset framework transfer exclusively to you **only after final milestone 
            payment settlement is cleared**. Webnaid retains the irrevocable right to use screenshots, 
            design elements, or live deployments of the completed build in our design portfolios, 
            operational case studies, and marketing assets for proof of expertise and market showcase.
          </p>

          <h4>8. Termination and Operational Exit Strategy</h4>
          <p>
            Webnaid may suspend or terminate this Agreement at any moment, at our sole discretion, 
            without prior notice or dynamic explanation, including but not limited to cases of 
            project dormancy, client harassment, scope abandonment, non-payment, or a fundamental 
            breach of any term in this Agreement.
          </p>
          <p>
            Upon termination by either party, any development deposit paid to Webnaid Studio 
            is **forfeited and non-refundable**, reflecting resources vested and loss of opportunity 
            cost. If terminated before completion but after code lock handover (post-Structural Approval), 
            the remaining balance is immediately due in full. If Webnaid terminates the project 
            unilaterally due to operational shift (unrelated to client breach), a partial prorated 
            refund *may* be considered at our absolute discretion, minus scoped resources utilized.
          </p>

          <h4>9. Governing Law, Jurisdiction, and Dispute Settlement</h4>
          <p>
            These Business Terms are governed exclusively by the applicable laws of the operational 
            jurisdiction of Webnaid Studio, Sindh, Pakistan. You irrevocably consent to the 
            exclusive jurisdiction of the courts located therein. Any disputes, claims, or operational 
            grievances must be submitted to Webnaid directly via written communication. Both 
            parties agree to engage in a formal mandatory sixty (60) day period of friendly, 
            mutual communication and negotiation before seeking binding local corporate arbitration 
            or specialized commercial litigation in the aforementioned jurisdiction. By accepting 
            these terms, you waive all rights to pursue class action litigation or multi-party settlement.
          </p>

          <h4>10. Contacting Operational Legal Audit</h4>
          <p>
            If you require deep clarification on any precise clause within these rigorous business 
            and development terms, or have questions regarding our compliance with international 
            commercial regulations, please feel free to drop a formal request to our operational 
            audit mailbox at:
            <a
              href="mailto:webnaidstudio@gmail.com"
              className="privacy-email-link"
            >
              {" "}
              webnaidstudio@gmail.com
            </a>
            . Our audit team will address your inquiry within standard business workflows.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;