import './TodoApp.css';
import { useState, useEffect } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoApp() {
    const KEY_TODOS = "TODOS";

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function getToday() {
        const today = new Date();

        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);

        const hours = ('0' + today.getHours()).slice(-2); 
        const minutes = ('0' + today.getMinutes()).slice(-2);
        const seconds = ('0' + today.getSeconds()).slice(-2); 

        const todayStr = year + '' + month  + '' + day + '' + hours + '' + minutes  + '' + seconds;
        
        return todayStr;
    }

    function handleSumbitTodo(e) {
        e.preventDefault();
        if (todo === "") return;
        const today = getToday();
        setTodoList((prev) => [{id:today+''+Math.ceil(Math.random()*1000), value:todo, isDone:0}, ...prev]);
        setTodo("");
    }

    function handleChangeTodo(e) {
        setTodo(e.target.value);
    }

    function loadTodoList() {
        const todos = localStorage.getItem(KEY_TODOS);
        setTodoList(JSON.parse(todos));
    }
    useEffect(loadTodoList, []);

    function saveTodoList() {
        const str_todoList = JSON.stringify(todoList);
        localStorage.setItem(KEY_TODOS, str_todoList);
    }
    useEffect(saveTodoList, [todoList]);

    function handleDelete(e) {
        e.stopPropagation();
        setTodoList((prev) => prev.filter((item) => item.id !== e.target.parentNode.id));
    }

    function handleDone(e) {
        const copyList = todoList.map((item) => {
            if (item.id === e.target.id) {
                item.isDone ? item.isDone = 0 : item.isDone = 1;
            }
            return item;
        });
        setTodoList(copyList);
    }
    
    return (
        <div id="todoContainer">
            <div className="header">
                <h2 className="title">Todo App</h2>
                <TodoForm todo={ todo } onSubmit={ handleSumbitTodo } onChange={ handleChangeTodo } />
            </div>
            <div id="todoListContainer">
                <TodoList todoList={ todoList } handleDelete={ handleDelete } handleDone={ handleDone } />
            </div>
        </div>
    );
}

export default TodoApp;