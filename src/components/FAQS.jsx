import { useState } from "react";
import "../style/FAQ.css"; // Make sure the path matches where you save the CSS file

const faqData = [
  {
    question: "Why does Webnaid build with React instead of WordPress?",
    answer:
      "WordPress sites rely on bloated plugins, heavy databases, and are highly vulnerable to security hacks. We engineer raw React applications deployed on global CDNs. This means your website loads instantly (under 1 second), has military-grade security, and provides an ultra-smooth user experience that turns traffic into actual revenue.",
  },
  {
    question: "How long does a premium deployment take?",
    answer:
      "A standard high-converting landing page or business website typically takes 7 to 14 days from conceptual design to live production deployment. Complex custom applications with advanced dynamic integrations may take 3 to 4 weeks depending on the architecture scope.",
  },
  {
    question: "Who provides the text content and branding assets?",
    answer:
      "We handle the core layout design and performance optimization. You provide your business logo, high-res images, and basic text information. However, we don't just paste raw text—we polish and optimize your copy to ensure it aligns with high-converting B2B copywriting standards.",
  },
  {
    question: "Are there any hidden monthly or annual maintenance fees?",
    answer:
      "No. Unlike traditional agencies that trap you in monthly maintenance retainers, our serverless React architecture allows us to host your platform on premium global CDNs (like Vercel) completely free for standard business traffic. Once we deploy it, you own it 100% with zero forced monthly overhead.",
  },
  {
    question: "What is your payment structure for projects?",
    answer:
      "We operate on a standard 50/50 payment split to protect both parties. A 50% upfront deposit is required to kick off development and secure your slot in our production pipeline. The remaining 50% is only cleared once the final build is complete, approved by you, and ready to be pointed to your live domain.",
  },
  {
    question: "Will my website be completely responsive on mobile phones?",
    answer:
      "Absolutely. Over 80% of your web traffic will come from mobile devices. We use a mobile-first engineering approach, meaning every layout, navigation menu, image element, and text structure is meticulously tested and optimized to look stunning on all smartphone and tablet screens before launch.",
  },
  {
    question: "How do you handle revisions if I want to make changes?",
    answer:
      "We include up to 3 comprehensive rounds of revisions during the development phase. We show you the dynamic interface builds in progress so you can request changes to layout structures or media assets before the absolute final deployment.",
  },
  {
    question: "Do I fully own the code and assets after completion?",
    answer:
      "Yes. Once the final payment is settled, 100% full ownership of the clean source code, graphic assets, and deployed ecosystem accounts belongs to you. We do not hold your digital assets hostage or charge licensing fees to keep your platform running.",
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>
            Frequently Asked <span className="faq-highlight">Questions</span>
          </h2>
          <p>
            Everything you need to know about our engineering process and
            deployment pipeline.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-arrow ${isOpen ? "open" : ""}`}>↓</span>
                </button>

                <div className={`faq-content-wrapper ${isOpen ? "open" : ""}`}>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
