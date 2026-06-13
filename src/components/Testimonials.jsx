// src/components/Testimonials.jsx
import "../style/Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      quote: "Webnaid rebuilt our booking structure from scratch. Our load time dropped to under 1.5 seconds, and we saw a direct spike in local phone leads within the first week.",
      author: "Marcus Vance",
      company: "Vance Automotive",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      quote: "The pricing structure was completely transparent. No hidden platform overhead or maintenance fees. Straightforward, professional, and incredibly fast turnaround.",
      author: "Sarah Jenkins",
      company: "Apex Fitness Studio",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <section id="reviews" className="reviews-section section">
      <div className="container">
        <div className="reviews-header">
          <span className="reviews-badge">Client Trust</span>
          <h2>What Local Businesses Say About Webnaid</h2>
        </div>
        
        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="review-card">
              <div className="review-stars">{rev.rating}</div>
              <p className="review-quote">"{rev.quote}"</p>
              <div className="review-meta">
                <strong>{rev.author}</strong>
                <span>{rev.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;