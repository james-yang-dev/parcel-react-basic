import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

import { getTodosByVisibilityFilter } from 'store/selectors';

const TodoList = () => {
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const store = useSelector((state) => state);

  const todos = getTodosByVisibilityFilter(store, visibilityFilter);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : 'No todos, yay!'}
    </ul>
  );
};

export default TodoList;
