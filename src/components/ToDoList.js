import React from 'react';
import ToDo from './ToDo.js'

function ToDoList(props) {
  return (
    <div>
      <h2 className="App-header">My To Do List:</h2>
        <ul>
         { props.todos.map((item, index) => <li key={index}><ToDo todo={item}/></li>) }
        </ul>
    </div>
  );
}

export default ToDoList;