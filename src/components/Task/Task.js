import React from 'react';
import './Task.css';

const Task = (props) => {
    const {handleAssignTask,task} = props;
    const {picture, taskName, timeRequired} = task;
    
    return (
        <div className='task'>
            <img src={picture} alt=""/>
            <div>
                <p className='task-name'>{taskName}</p>
                <p className='task-time'> Allocated Time: {timeRequired} Hours</p>
            </div>
            <button onClick={() => handleAssignTask(props.task)} className='btn-task-assign'>
                <p>Assign Task</p>
            </button>
        </div>
    );
};

export default Task;