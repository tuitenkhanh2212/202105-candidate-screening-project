import React, { useState } from 'react';
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import './App.css';


function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput, selectedDate, selectedTime) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, date: selectedDate, time: selectedTime, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <div className="Title">
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
        <ToDoForm addTask={addTask} />
      </div>
    </div >

  );
}

export default App;
