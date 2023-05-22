import React from 'react';
import './Header.css';
import logo from '../../imgs/dates-365-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="section-left">
      <a href="/"><img className='logo' alt='logo dates365' src={logo} /></a>
      </div>
      <div className="section-center">
      </div>
      <div className="section-right">
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
        <a href="/services">Servicios</a>
        <a href="/contact">Contacto</a>
      </div>
    </header>
  );
}

export default Header;