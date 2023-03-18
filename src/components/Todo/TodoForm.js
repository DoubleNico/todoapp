import React, { useState, useEffect, useRef } from 'react';
import { v4 as UUID } from 'uuid';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: UUID(),
      text: input,
    });
    setInput('');
    props.onClose();
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Actualizați todo-ul'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Actualizați
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Adaugați un todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Adaugați
          </button>

        </>
      )}
    </form>
  );
}

export default TodoForm;
