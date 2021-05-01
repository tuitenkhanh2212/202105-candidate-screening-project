import React from 'react';
import './index.css';

const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div>
            <div class="task">
                <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                    {todo.task}
                </div>
            </div>
            <div class="deadline">
                <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                    Deadline {todo.date} - {todo.time}
                </div>
            </div>
            <br />
        </div>

    );
};

export default ToDo;