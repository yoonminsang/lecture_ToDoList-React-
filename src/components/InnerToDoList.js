import React from 'react';

const InnerToDoList = ({ toDo, deleteToDo, checkChange, doneChange }) => {
  const { id, value, date, done, check } = toDo;
  return (
    <div
      id={id}
      className={done ? 'toDo_list_item done' : 'toDo_list_item'}
      onClick={(e) => doneChange(e, id)}
    >
      <input type="checkbox" checked={check} onChange={() => checkChange(id)} />
      <div className="text">{value}</div>
      <div className="date">{date}</div>
      <input
        className="delete"
        type="button"
        value="❌"
        onClick={() => deleteToDo(id)}
      />
    </div>
  );
};

export default InnerToDoList;
