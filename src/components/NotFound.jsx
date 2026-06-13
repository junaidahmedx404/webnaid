// src/components/NotFound.jsx
import React from 'react';
import "../style/NotFound.css";

function NotFound() {
  return (
    <section className="error-page">
      <div className="error-content">
        <span className="error-code">404</span>
        <h2>This Route Doesn't Exist</h2>
        <p>The page you are looking for has been moved, renamed, or never existed in our architecture layout.</p>
        <a href="/" className="btn-primary">Return To Safety</a>
      </div>
    </section>
  );
}

export default NotFound;