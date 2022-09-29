import React, { useEffect, useState } from 'react';
import './Panel.css';

const Panel = (props) => {
    const [breaks, setBreaks] = useState(0);

    const retrievedData = JSON.parse(localStorage.getItem('break-time'));
    useEffect(()=>{
        if(retrievedData){
            setBreaks(retrievedData)
        }
    },[breaks, retrievedData]);

    const handleAddBreak = (breaks) => {
        // console.log("clicked",e);
        setBreaks(breaks);
        localStorage.setItem('break-time',JSON.stringify(breaks));
    }

    const {panel} = props;
    // console.log(panel);

    let totalTaskAllocationTime = 0;
    for(const task of panel){
        totalTaskAllocationTime = totalTaskAllocationTime + task.timeRequired;
    }

    return (
        <div className='panel'>
            <h3 className='name'>
                FARHAN HASIN DIPRO
            </h3>
            <div className='personal-info'>
                <div className="info">
                    <h4><span>30</span> <br/> videos</h4>
                    <h4><span>13</span><br/>
                    projects</h4>
                    <h4><span>7</span><br/> covers</h4>
                </div>
            </div>
            <div className="break-section">
                <h3>Add a Break</h3>
                <div className='break-times'>
                    <button onClick={(e)=>handleAddBreak(1)}>
                        <span>1 </span> <small>h</small>
                    </button>
                    <button onClick={(e)=>handleAddBreak(2)}>
                        <span>2 </span> <small>h</small>
                    </button>
                    <button onClick={(e)=>handleAddBreak(3)}>
                        <span>3 </span> <small>h</small>
                    </button>
                    <button onClick={(e)=>handleAddBreak(4)}>
                        <span>4 </span> <small>h</small>
                    </button>
                    <button onClick={(e)=>handleAddBreak(5)}>
                        <span>5 </span> <small>h</small>
                    </button>
                </div>
            </div>
            <div className="task-details-section">
                <h3>Task Time Allocations</h3>
                <div className='task-time-panel'>
                    <h5>Task Time</h5>
                    <h5>{totalTaskAllocationTime} HOURS</h5>
                </div>
                <div className='break-time-panel'>
                    <h5>Break Time</h5>
                    <h5>{breaks} HOURS</h5>
                </div>
                <button className='finish-tasks'>
                    Complete For Today
                </button>
            </div>
        </div>
    );
};

export default Panel;