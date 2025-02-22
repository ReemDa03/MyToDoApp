import React, { useEffect, useRef, useState } from "react";
import "./ToDo.css";
import todo_icon from "../assets/todo_icon.png";
import ToDoItems from "./ToDoItems";

const ToDo = () => {
  const [todolist, setTodolist] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')):[]);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id)=>{
    setTodolist((prevTodos)=>{
        return prevTodos.filter((todo)=> todo.id !== id)
    });
  };

  const toggle = (id) => {
    setTodolist((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todolist))
  },[todolist])

  return (
    <div className="todo">
      <div className="count">
        <h1>To-Do List</h1>
        <img src={todo_icon} alt="" />
      </div>

      <div className="feild">
        <input ref={inputRef} type="text" placeholder="Add your task" />
        <button onClick={add}>ADD +</button>
      </div>

      <div>
        {todolist.map((item, index) => {
          return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />;
        })}
      </div>
    </div>
  );
};

export default ToDo;
