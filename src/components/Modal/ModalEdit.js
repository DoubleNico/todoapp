import React, { useState } from 'react';
import Modal from './Modal';
import TodoForm from '../Todo/TodoForm';

function ModalEdit({ edit, submitUpdate, on }) {
  const [showModal, setShowModal] = useState(on);

  const handleCloseModal = () => {
    setShowModal(false);
    submitUpdate({ id: null, value: '' });
    edit = { id: null, value: '' };
  };

  return (
    <div>
      <Modal showModal={showModal} onClose={handleCloseModal}>
        <h1>Editați todo-ul `{edit.value}`</h1>
        <TodoForm edit={edit} onSubmit={submitUpdate} onClose={handleCloseModal}/>
      </Modal>
    </div>
  );
}

export default ModalEdit;
