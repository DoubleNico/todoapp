import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import ModalCreate from '../Modal/ModalCreate';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    if (todo.description || /^\s*$/.test(todo.description)) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    const updatedTodos = todos.map(item => (item.id === todoId ? newValue : item));
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(removedArr));
    setTodos(removedArr);
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
  
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  

  return (
    <>
      <h1 className='todo-header'>Aplicație Todo</h1>
      <ModalCreate addTodo={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
