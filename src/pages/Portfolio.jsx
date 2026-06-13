import "../style/Portfolio.css";

function Portfolio() {
  const projects = [
    {
      badge: "Gym & Fitness",
      title: "IronPulse Fitness Hub",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000", // Replace with your screenshot
      problem: "The gym relied on chaotic Instagram DMs for class bookings, losing track of leads and frustrating potential members.",
      solution: "Built a high-performance web platform complete with prominent class schedules, mobile-optimized registration, and direct payment pathways.",
      result: "Engineered to capture automated member signups 24/7 without manual admin tracking required.",
      demoColor: "#EF4444",
      link: "#"
    },
    {
      badge: "Restaurant & Dining",
      title: "The Olive Bistro",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000", // Replace with your screenshot
      problem: "An outdated PDF menu forced users to download files onto their phones, hiding reservation options and driving customers away.",
      solution: "Developed a modern, lightning-fast digital interactive menu layout paired with a simple automated table reservation flow.",
      result: "Optimized to dramatically reduce bounce rates and maximize weekend dinner table bookings.",
      demoColor: "#10B981",
      link: "#"
    },
    {
      badge: "Real Estate Agency",
      title: "Vanguard Realty Group",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000", // Replace with your screenshot
      problem: "Unoptimized property galleries made searching for listings on phones painful, losing buyers to third-party aggregate platforms.",
      solution: "Designed a clean, ultra-responsive property portfolio filtering system emphasizing direct agent capture forms.",
      result: "Created explicitly to secure high-intent buyer inquiries and schedule instant property tours.",
      demoColor: "#F59E0B",
      link: "#"
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <h2 className="section-title">Our Work & Case Studies</h2>
        <p className="section-subtitle">
          We don't just build websites; we design platforms that solve real operational bottlenecks.
        </p>

        <div className="portfolio-stack">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              
              {/* Visual Side with Image and Hover Button */}
              <div className="portfolio-visual">
                <div className="project-window">
                  <div className="project-window-header">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-screenshot" />
                    <div className="project-overlay">
                      <a href={project.link} className="btn-primary">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="portfolio-details">
                <span className="portfolio-badge" style={{ color: project.demoColor }}>{project.badge}</span>
                <h3>{project.title}</h3>
                <div className="case-study-metric">
                  <p><strong>The Challenge:</strong> {project.problem}</p>
                </div>
                <div className="case-study-metric">
                  <p><strong>The Solution:</strong> {project.solution}</p>
                </div>
                <div className="case-study-metric outcome">
                  <p><strong>Expected Results:</strong> <span className="highlight-text">{project.result}</span></p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;