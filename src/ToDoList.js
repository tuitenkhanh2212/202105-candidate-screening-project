import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            If you done your task, click task and click button <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default ToDoList;