import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "001",
        name: "Introduction to React",
        description: "A comprehensive introduction to React.js framework",
        course: "Web Development",
    });
    const API_BASE = process.env.REACT_APP_API_BASE;
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const MODULE_URL = `${API_BASE}/a5/module`

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
            <h3>Working With Objects</h3>

            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            
            <h4>Modifying Properties</h4>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <h4>Retrieving Objects</h4>
            <a className="btn btn-primary" href={`${API_BASE}/a5/assignment`}>
                Get Assignment
            </a>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href={`${API_BASE}/a5/assignment/title`}>
                Get Title
            </a>
            <h4>Update Score</h4>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score} />

            <h4>Mark Completed</h4>
            <a className="btn btn-primary m-1" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Send
            </a>
            <input type="checkbox"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={assignment.completed} // Check if assignment.completed is equal to 1
            />





            <br /><br />
            {/* Modules */}
            <h3>Working with Modules</h3>
            <h4>Modifying Module Properties</h4>
            <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <h4>Retrieving Module</h4>
            <a className="btn btn-primary" href={`${MODULE_URL}`}>
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href={`${MODULE_URL}/name/`}>
                Get Name
            </a>

        </div>
    );
}
export default WorkingWithObjects;