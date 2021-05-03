import React from 'react';
import './index.css';

const ToDo = ({ todo, handleToggle }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    function changeButtonStatus(status) {
        var text;
        if (status) {
            text = "Cancel";
        }
        else {
            text = "Complete";
        }
        return text;
    }
    function changeButtonColor(status) {
        var color;
        if (status) {
            color = "red";
        }
        else {
            color = "green";
        }
        return color;
    }
    var colorOfButton = changeButtonColor(todo.complete);

    return (
        <div newtask-id="newTask" id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={todo.complete ? "todo strike" : "todo"}>

            <table>
                <tbody>
                    <tr>
                        <td>
                            {todo.task}
                        </td>
                        <td style={{ color: 'red' }}>
                            Deadline {todo.date} - {todo.time}
                        </td>
                        <td>
                            <button complete-id="complete" id={todo.id} onClick={handleClick} style={{ margin: '10px', color: 'white', backgroundColor: colorOfButton, fontWeight: 'bold', padding: '10px' }}>
                                {changeButtonStatus(todo.complete)}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div >


    );
};

export default ToDo;