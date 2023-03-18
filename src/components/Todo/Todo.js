import React, { useState } from 'react';
import ModalDelete from '../Modal/ModalDelete';
import ModalEdit from '../Modal/ModalEdit';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ModalEdit edit={edit} submitUpdate={submitUpdate} on='true'/>;
  }

  return todos.map((todo, index) => (
    <div
      className='todo-row'
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className={todo.isComplete ? 'complete' : ''}>
        {todo.text} 
      </div>
      <div className='buttons'>
        <ModalDelete removeTodo={removeTodo} todo={todo} />
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })} className='buttons-text'
        >
        Editați
        </button>
      </div>
    </div>
  ));
};

export default Todo;
