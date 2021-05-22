import React, { useState } from 'react';
import InnerToDoList from './InnerToDoList';

const Inner = ({
  toDos,
  addToDo,
  deleteToDo,
  checkChange,
  multiDeleteToDo,
  doneChange,
}) => {
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
            onClick={multiDeleteToDo}
          />
        </form>
      </div>
      <div className="toDo_list">
        {toDos.map((toDo) => (
          <InnerToDoList
            key={toDo.id}
            toDo={toDo}
            deleteToDo={deleteToDo}
            checkChange={checkChange}
            doneChange={doneChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Inner;
