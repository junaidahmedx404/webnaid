// src/components/Services.jsx
import "../style/Services.css";

function Services() {
  const serviceList = [
    {
      icon: "🌐",
      title: "Business Websites",
      description:
        "Complete, custom-built websites designed specifically for your local business. Fully optimized to rank on Google map packs and convert local search traffic.",
    },
    {
      icon: "🚀",
      title: "Landing Pages",
      description:
        "High-converting, single-page funnels built for targeted ad campaigns (Google/Facebook). Perfect for capturing instant phone calls, bookings, or quote forms.",
    },
    {
      icon: "🔄",
      title: "Website Redesigns",
      description:
        "Turn your outdated, slow website into a modern asset. We rebuild your existing presence to dramatically improve load times, mobile layouts, and modern aesthetics.",
    },
    {
      icon: "🛡️",
      title: "Website Maintenance",
      description:
        "Leave the updates, hosting, security patches, and backups to us. We keep your platform fast and secure every single month so you can focus on running your business.",
    },
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We keep it simple. We build high-performing digital assets designed to
          solve real business problems—getting you more phone calls, leads, and
          paying customers.
        </p>

        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
