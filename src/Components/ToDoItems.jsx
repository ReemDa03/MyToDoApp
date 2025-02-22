import React from 'react';
import './ToDoItems.css';
import tick from '../assets/tick.png';
import delete_icon from '../assets/delete.png';
import not_tick from '../assets/not_tick.png';

const ToDoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='tasks'>
      <div onClick={ ()=> toggle(id) } className='check'>
        <img src={isComplete ? tick : not_tick} alt="" />
        <p className={`task-text ${isComplete ? "completed" : ""}`}>{text}</p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} src={delete_icon} alt="" />
    </div>
    
  );
  

};

export default ToDoItems;
