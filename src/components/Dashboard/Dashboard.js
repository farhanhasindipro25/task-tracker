import React, { useEffect, useState } from 'react';
import Panel from '../Panel/Panel';
import Task from '../Task/Task';
import './Dashboard.css';

const Dashboard = () => {
    // Loading data within the dashboard. (The component where the data will be shown)
    const [tasks,setTasks] = useState([]);
    const [panel, setPanel] = useState([]);

    useEffect(()=>{
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    },[]);

    const handleAssignTask = (task) => {
        // console.log("clicked",task);
        const newPanel = [...panel,task];
        setPanel(newPanel);
    }

    return (
        <div className='dashboard-container'>
            <div className="tasks-container">
                {
                    tasks.map(task => <Task 
                    key={task.id}
                    task={task}
                    handleAssignTask={handleAssignTask}
                    >
                    </Task>)
                }
            </div>
            <div className="panel-container">
                <Panel
                panel={panel}
                ></Panel>
            </div>
        </div>
    );
};

export default Dashboard;