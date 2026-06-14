// src/components/Services.jsx
import "../style/Services.css";

function Services() {
  const serviceList = [
    {
      title: "Business Websites",
      description:
        "Complete, custom-built websites designed specifically for your local business. Fully optimized to rank on Google map packs and convert local search traffic.",
      // Clean modern globe/network vector grid
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.738.09-1.454.257-2.138" />
        </svg>
      ),
    },
    {
      title: "Landing Pages",
      description:
        "High-converting, single-page funnels built for targeted ad campaigns (Google/Facebook). Perfect for capturing instant phone calls, bookings, or quote forms.",
      // High-performance growth rocket vector outline
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.841m0 0a15.661 15.661 0 0 1-5.841-2.58m5.841 2.58 3.36 3.36m-3.36-3.36-3.36-3.36m3.36 3.36-.003.004ZM13.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      ),
    },
    {
      title: "Website Redesigns",
      description:
        "Turn your outdated, slow website into a modern asset. We rebuild your existing presence to dramatically improve load times, mobile layouts, and modern aesthetics.",
      // Clean, dynamic structural replacement loops
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      title: "Website Maintenance",
      description:
        "Leave the updates, hosting, security patches, and backups to us. We keep your platform fast and secure every single month so you can focus on running your business.",
      // Core premium structural protection shield
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
        </svg>
      ),
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