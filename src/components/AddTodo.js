import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'store/actions';

function AddTodo() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const updateInput = (input) => {
    setInput(input);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
