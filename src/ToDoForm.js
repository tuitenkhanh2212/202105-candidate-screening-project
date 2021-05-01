import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker/dist/entry'
import 'react-datepicker/dist/react-datepicker.css';

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    var date = "";
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var month = selectedDate.getMonth();
        month++;
        date = selectedDate.getDate() + "/" + month + "/" + selectedDate.getFullYear()
        addTask(userInput, date, selectedTime);
        setUserInput("");
        setSelectedDate(null);
        setSelectedTime("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginLeft: '40px' }}>
            Task : <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." required
            /> Ex : Dinner <br /><br />
            Date : <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy' minDate={new Date()}
                showYearDropdown scrollableMonthYearDropdown
                placeholderText="Select Your Date" required
            /> Ex: 22/12/2000 <br /><br />
            Time : <TimePicker selected={selectedTime} value={selectedTime} onChange={time => setSelectedTime(time)}
                required
            /> Ex: 17:30 PM<br /><br />
            <button>Submit</button>
        </form>

    );
};

export default ToDoForm;