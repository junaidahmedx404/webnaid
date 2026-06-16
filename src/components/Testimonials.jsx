// src/components/Testimonials.jsx
import "../style/Testimonials.css";

function Testimonials() {
  const testimonialsList = [
    {
      quote:
        "Webnaid Studio built an offline HMS for our clinic that solved our internet dependency issues and improved data security. The software is fast, simple to use, and has streamlined our daily operations. Very satisfied with the result.",
      clientName: "Dr. Mujeeb ur Rahman Abro",
      role: "Consultant Diabetologist, MRA Clinic",
      // If you don't have their photo yet, you can leave an Unsplash placeholder or business logo
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      platform: "Local Clinic Testimonial",
      projectUrl: "https://example.com/live-site-1", // Swap with your actual client project link
      profileUrl: "https://linkedin.com/in/username", // Swap with their LinkedIn or profile link
    },
    {
      quote:
        "I needed a portfolio website for my university work and future career opportunities. Junaid delivered a clean and professional website that matched my requirements perfectly. The process was smooth, and the final result exceeded my expectations. I highly recommend Webnaid Studio for anyone looking for a reliable and skilled web developer.",
      clientName: "David Miller",
      role: "BBA Student, University of Larkano",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      platform: "University Student Testimonial",
      projectUrl: "https://example.com/live-site-2",
      profileUrl: "https://linkedin.com/in/username",
    },
    {
      quote:
        "I needed a portfolio website for my university work and future career opportunities. Junaid delivered a clean and professional website that matched my requirements perfectly. The process was smooth, and the final result exceeded my expectations. I highly recommend Webnaid Studio for anyone looking for a reliable and skilled web developer.",
      clientName: "David Miller",
      role: "BBA Student, University of Larkano",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      platform: "University Student Testimonial",
      projectUrl: "https://example.com/live-site-2",
      profileUrl: "https://linkedin.com/in/username",
    },
    {
      quote:
        "I needed a portfolio website for my university work and future career opportunities. Junaid delivered a clean and professional website that matched my requirements perfectly. The process was smooth, and the final result exceeded my expectations. I highly recommend Webnaid Studio for anyone looking for a reliable and skilled web developer.",
      clientName: "David Miller",
      role: "BBA Student, University of Larkano",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      platform: "University Student Testimonial",
      projectUrl: "https://example.com/live-site-2",
      profileUrl: "https://linkedin.com/in/username",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <span className="testimonials-badge">Proof In Production</span>
        <h2 className="section-title">Validated By Real Business Owners</h2>
        <p className="section-subtitle">
          Don't take our word for it. Here is how our high-performance digital
          assets have helped independent brands eliminate technical fluff and
          drive direct revenue.
        </p>

        <div className="testimonials-grid">
          {testimonialsList.map((item, index) => (
            <div key={index} className="testimonial-card">
              {/* Card Header: Verification Badge & 5 Stars */}
              <div className="card-meta-row">
                <span className="verification-tag">
                  <svg
                    className="tag-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.2c-.4-.4-1-.4-1.4 0l-1.4 1.4-2-.3c-.6-.1-1.1.3-1.2.9l-.3 2-2 .3c-.5.1-.9.7-.8 1.2l.3 2-1.4 1.4c-.4.4-.4 1 0 1.4l1.4 1.4.3 2c.1.6.5 1 1.1 1.1l2 .3.3 2c.1.5.7.9 1.2.8l2-.3 1.4 1.4c.4.4 1.4.4 1.8 0l1.4-1.4 2 .3c.6.1 1.1-.3 1.2-.9l.3-2 2-.3c.5-.1.9-.7.8-1.2l-.3-2 1.4-1.4c.4-.4.4-1 0-1.4l-1.4-1.4-.3-2c-.1-.6-.5-1-1.1-1.1l-2-.3-.3-2c-.1-.5-.7-.9-1.2-.8l-2 .3-1.4-1.4zm-1.7 11.3l-2.5-2.5 1.4-1.4 1.1 1.1 3.5-3.5 1.4 1.4-4.9 4.9z" />
                  </svg>
                  {item.platform}
                </span>

                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="star-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* The Testimonial Quote Text */}
              <p className="testimonial-quote">"{item.quote}"</p>

              {/* Card Footer: Client Info Profile & Live External Links */}
              <div className="testimonial-footer">
                <div className="client-profile">
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    className="client-avatar"
                  />
                  <div className="client-details">
                    <h3>{item.clientName}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>

                <div className="proof-actions">
                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-link"
                    title="Verify Identity"
                  >
                    <svg
                      className="action-icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-proof-action"
                    title="View Live Website"
                  >
                    View Asset
                    <svg
                      className="arrow-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
