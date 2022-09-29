import React from 'react';
import './Task.css';

const Task = (props) => {
    const {picture, taskName, timeRequired} = props.task;
    return (
        <div className='task'>
            <img src={picture} alt=""/>
            <p className='task-name'>{taskName}</p>
        </div>
    );
};

export default Task;