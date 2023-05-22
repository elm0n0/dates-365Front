import React from 'react';
import '../../styles.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section-border">
            <h3>Contacto</h3>
            <div className="contacts">
            <ul>
              <li><i class="fa-solid fa-envelope"></i>
              <p>juanjo.perez.plaza@gmail.com</p></li>
              <li><i class="fa-solid fa-phone"></i>
              <p>606828688</p></li>
            </ul>
            </div>
          </div>
          <div className="footer-section-center">
            <h3>Enlaces</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="/services">Servicios</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section-border">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/juan-jos%C3%A9-p%C3%A9rez-plaza-13216056/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://twitter.com/elmono_orihuela" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/elm0n02/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Dates-365. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
