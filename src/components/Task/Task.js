import React from 'react';
import './Task.css';

const Task = (props) => {
    const {picture, taskName, timeRequired} = props.task;
    return (
        <div className='task'>
            <img src={picture} alt=""/>
            <p className='task-name'>{taskName}</p>
            <p className='task-time'> Allocated Time: {timeRequired} Hours</p>
        </div>
    );
};

export default Task;