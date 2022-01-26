import React from 'react';
import Todo from './Todo';

export default function TodoList({ todoArray, toggleTodo }) {
  return (
      todoArray.map(todo => {
        return <Todo key={todo.id}toggleTodo={toggleTodo} todo = {todo} />
      })
    )
}
