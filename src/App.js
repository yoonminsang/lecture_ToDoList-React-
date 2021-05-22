import './App.css';
import Template from './components/Template';
import Header from './components/Header';
import Inner from './components/Inner';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [date, setDate] = useState(getDate());
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    setInterval(() => setDate(getDate()), 1000);
    return () => {
      clearInterval();
    };
  }, []);
  const addToDo = (value) => {
    const newToDo = {
      id: Date.now(),
      value,
      date,
      done: false,
      check: false,
    };
    setToDos([...toDos, newToDo]);
  };
  function getDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + String(month);
    let datee = date.getDate();
    if (datee < 10) datee = '0' + String(datee);
    const day = date.toString().slice(0, 3);
    const dateArr = [year, month, datee, day];
    const time = date.toString().slice(16, 24);
    return dateArr.join(' ') + '  ' + time;
  }
  return (
    <Template>
      <Header date={date} />
      <Inner toDos={toDos} addToDo={addToDo} />
    </Template>
  );
};

export default App;
