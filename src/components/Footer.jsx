import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <p>&copy; {currentYear} Honorable Concejo Deliberante de Juan Bautista Alberdi. Todos los derechos reservados.</p>
        <p className="footer-meta">Portal Oficial Legislativo</p>
      </div>
    </footer>
  );
};

export default Footer;
