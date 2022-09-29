import React from 'react';
import './Panel.css';

const Panel = ({panel}) => {
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
                    <button>
                        <p>1 <small>HR</small></p>
                    </button>
                    <button>
                        <p>2 <small>HRS</small></p>
                    </button>
                    <button>
                        <p>3 <small>HRS</small></p>
                    </button>
                    <button>
                        <p>4 <small>HRS</small></p>
                    </button>
                    <button>
                        <p>5 <small>HRS</small></p>
                    </button>
                </div>
            </div>
            <div className="task-details-section">
                <h3>Task Time Allocations</h3>
                <div className='task-time-panel'>
                    <h5>Task Time</h5>
                    <h5>{} HOURS</h5>
                </div>
                <div className='break-time-panel'>
                    <h5>Break Time</h5>
                    <h5>{} HOURS</h5>
                </div>
                <button className='finish-tasks'>
                    Complete For Today
                </button>
            </div>
        </div>
    );
};

export default Panel;