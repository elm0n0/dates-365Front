import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../../components/users/cuenta/Cuenta';
import { Cuenta } from '../../components/users/cuenta/Cuenta';

import '../../styles.css';
import './HomePage.css';

import ModalRegistro from '../../components/modals/ModalRegistro';
import ModalEntrar from '../../components/modals/ModalEntrar';

import conexionesSignificativas from '../../imgs/conexionesSignificativas.png';
import heartForSelect from '../../imgs/heart-for-select.png';
import justChat from '../../imgs/just-chat.png';

const HomePage = () => {

  const [modalRegistroIsOpen, setModalRegistroIsOpen] = useState(false);
  const [modalEntrarIsOpen, setModalEntrarIsOpen] = useState(false);

  const handleModalRegistroOpen = () => {
    setModalRegistroIsOpen(true);
  };

  const handleModalRegistroClose = () => {
    setModalRegistroIsOpen(false);
  };

  const handleModalEntrarOpen = () => {
    setModalEntrarIsOpen(true);
  };

  const handleModalEntrarClose = () => {
    setModalEntrarIsOpen(false);
  };

  return (
    <Cuenta>
      <div className="home-page">
        <header>
          <nav>
            <ul>
              <li><button className="cta-button" onClick={handleModalEntrarOpen}>Inicia sesión</button></li>
            </ul>
          </nav>
        </header>
        <ModalRegistro isOpen={modalRegistroIsOpen} handleCloseModal={handleModalRegistroClose} />
        <ModalEntrar isOpen={modalEntrarIsOpen} handleCloseModal={handleModalEntrarClose} />
        <main>
          <section className="hero">
            <h1>Encuentra tu pareja ideal</h1>
            <button className="cta-button-reg" onClick={handleModalRegistroOpen}>Regístrate</button>
          </section>
          <section className="features">
            <div className="feature">
              <img src={conexionesSignificativas} alt="Conexiones significativas Encuentra a alguien especial con intereses similares" />
              <h2>Conexiones significativas</h2>
              <p>Encuentra a alguien especial con intereses similares</p>
            </div>
            <div className="feature">
              <img src={heartForSelect} alt="Corazón para elegir" />
              <h2>Corazón para elegir</h2>
              <p>Explora perfiles y pulsa en el Corazón para mostrar interés</p>
            </div>
            <div className="feature">
              <img src={justChat} alt="chatea para conocer mejor a la persona con la que compartes interess" />
              <h2>Conversa y conoce</h2>
              <p>Inicia conversaciones y conoce mejor a tus coincidencias</p>
            </div>
          </section>
        </main>
        <footer>
          <p>© 2023 Edates App. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Cuenta>
  );
}

export default HomePage;