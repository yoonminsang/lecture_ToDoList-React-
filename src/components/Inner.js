import React, { useState } from 'react';
import Inner_ToDoList from './Inner_ToDoList';

const Inner = ({ toDos, addToDo }) => {
  const [input, setInput] = useState('');
  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(input);
    setInput('');
  };
  return (
    <div className="content_inner">
      <div className="contnet_menu">
        <form onSubmit={onSubmit}>
          <input
            className="toDo_input"
            type="text"
            placeholder="write to do list"
            value={input}
            onChange={inputChange}
          />
          <input className="toDo_add btn" type="submit" value="add" />
          <input
            className="toDo_multi_delete btn"
            type="button"
            value="delete"
          />
        </form>
      </div>
      <div className="toDo_list">
        {toDos.map((toDo) => (
          <Inner_ToDoList key={toDo.id} toDo={toDo} />
        ))}
      </div>
    </div>
  );
};

export default Inner;
