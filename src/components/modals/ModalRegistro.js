import React from 'react';
import Modal from 'react-modal';

import Registro from '../users/registro/Registro';

const ModalRegistro = ({ isOpen, handleCloseModal }) => {


    return (
        <Modal className="modal" isOpen={isOpen}
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
        >
            <h2>Formulario de registro</h2>
            <Registro handleCloseModal={handleCloseModal} />
        </Modal>
    );
}

export default ModalRegistro;
