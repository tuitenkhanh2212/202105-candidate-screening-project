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
            <hr />
            If you done your task, click Complete and click Clear Completed
            <button id="clearButton" style={{ margin: '20px', color: 'white', backgroundColor: 'green', fontWeight: 'bold', padding: '10px' }} onClick={handleFilter}>
                Clear Completed
            </button>

        </div>

    );
};

export default ToDoList;