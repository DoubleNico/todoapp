import React, { useState } from 'react';
import Modal from './Modal';

function ModalDelete(props) {
  const { removeTodo, todo } = props;
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
  };
  const handleClick = () => {
    removeTodo(todo.id)
    setShowModal(false);
  }
  return (
    <div>
      <button onClick={() => setShowModal(true)} className='buttons-text'>Șterge</button>
      <Modal showModal={showModal} onClose={handleCancel}>
        <h1>Vreți să ștergeți `{todo.text}` ?</h1>
        <button onClick={handleClick} onClose={handleCancel} className='delete-button'>
          Șterge
        </button>
        <button onClick={handleCancel} className='cancel-button'>Anulează</button>
      </Modal>
    </div>
  );
}

export default ModalDelete;
