import React from 'react';
import Modal from 'react-modal';

import Entrar from '../users/entrar/Entrar';

const ModalEntrar = ({ isOpen, handleCloseModal }) => {


    return (
        <Modal className="modal" isOpen={isOpen}
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
        >
            <h2>Formulario de registro</h2>
            <Entrar handleCloseModal={handleCloseModal} />
        </Modal>
    );
}

export default ModalEntrar;
