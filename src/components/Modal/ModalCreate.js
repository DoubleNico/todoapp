import Modal from './Modal';
import TodoForm from '../Todo/TodoForm';
import { useState } from 'react';

function ModalCreate({ addTodo }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = todo => {
    addTodo(todo);
    handleCloseModal();
  }

  return (
    <div>
      <button onClick={handleOpenModal} className='create-button'>Creează un todo</button>
      <Modal showModal={showModal} onClose={handleCloseModal}>
        <h1>Scrieți un todo</h1>
        <TodoForm onSubmit={handleSubmit} onClose={handleCloseModal}/>

      </Modal>
    </div>
  );
}

export default ModalCreate;
