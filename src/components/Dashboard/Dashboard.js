import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Dashboard.css';

const Dashboard = () => {
    // Loading data within the dashboard. (The component where the data will be shown)
    const [tasks,setTasks] = useState([]);

    useEffect(()=>{
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    },[]);


    return (
        <div className='dashboard-container'>
            <div className="tasks-container">
                <h3>Task Tracker</h3>
                {
                    tasks.map(task => <Task 
                    key={task.id}
                    task={task}
                    >
                    </Task>)
                }
            </div>
            <div className="panel-container">
                <h3>Panel</h3>
            </div>
        </div>
    );
};

export default Dashboard;