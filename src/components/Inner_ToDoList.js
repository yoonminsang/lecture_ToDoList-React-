import React from 'react';

const Inner_ToDoList = ({ toDo }) => {
  const { id, value, date, done, check } = toDo;
  return (
    <div id={id} className="toDo_list_item">
      <input type="checkbox" />
      <div className="text">{value}</div>
      <div className="date">{date}</div>
      <input className="delete" type="button" value="❌" />
    </div>
  );
};

export default Inner_ToDoList;
