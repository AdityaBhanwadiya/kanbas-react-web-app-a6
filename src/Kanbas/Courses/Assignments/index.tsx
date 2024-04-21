import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCaretDown, FaCheckCircle, FaEdit, FaEllipsisV, FaPlusCircle, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';
import { TbGripVertical } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { deleteAssignment, setAssignment, setAssignments } from "./reducer";
import { KanbasState } from "../../store";
import { fetchAssignment } from "./client";
import * as client from "./client";


function Assignments() {
    const navigate=useNavigate();

    const intialAssignment = {
        _id: "new",
        title: "New Assignment Title",
        course: "Assignment's Course",
        description: "New Description",
        points: "100",
        dueDate: "2023-09-18",
        availableFromDate: "2023-09-11",
        availableUntilDate: "2023-09-18",
    };
    const { courseId } = useParams();
    const assignment = useSelector(
        (state: KanbasState) => state.assignmentsReducer.assignment
    );
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchAssignment(courseId)
            .then(
                (assignments)=>
                    dispatch(setAssignments(assignments))
                );
    },[courseId]);
    const assignmentList = useSelector(
        (state: KanbasState) => state.assignmentsReducer.assignments
    );
    
    const handleDeleteAssignment = (assignment:any) => {
        client.deleteAssignment(assignment).then((status:any) => {
          dispatch(deleteAssignment(assignment));
        });
      };
    


    return (
        <>
            <div className="d-flex gap-1" style={{ marginRight: "20px", marginTop: "20px" }}>
                <div className="me-auto w-25"><input type="text" className="form-control"
                    placeholder="Search for Assignment" /></div>
                <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}><i className="fa-solid fa-plus"></i>
                    <FaPlus /> Group</button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`}>
                    <button type="button" className="btn btn-danger" onClick={() => dispatch(setAssignment(intialAssignment))}><FaPlus /> Assignment</button>
                </Link>
                <div className="dropdown">
                    <button className="btn" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                        <FaEllipsisV />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Option 1</a></li>
                        <li><a className="dropdown-item" href="#">Option 2</a></li>
                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>

            <div className="row" style={{ marginTop: "10px", marginRight: "20px" }}>
                <hr />
            </div>

            <ul className="list-group square-list-group mb-3" style={{ marginRight: "20px" }}>
                <li className="list-group-item list-group-item" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                    <div className="d-flex justify-content-start align-items-center">
                        <TbGripVertical className="me-2" />
                        <FaCaretDown className="me-2" />
                        <div className="assignment-title flex-grow-1">Assignments</div>
                        <small className="border border-black rounded-pill p-1 me-3">40% of Total</small>
                        <FaPlusCircle className="me-3" />
                        <FaEllipsisV className="fa-lg" />
                    </div>
                </li>

                {assignmentList.filter(
                    (assign: { course: string | undefined }) =>
                        assign.course === courseId
                ).map((assignment) => (
                    <li className="list-group-item assignment-border" key={assignment._id}>
                        <div className="d-flex justify-content-start align-items-center">
                            <TbGripVertical className="me-2" />
                            <i className="fa-solid fa-file-pen assignment-item-icon fa-lg p-3"></i>
                            <div className="assignment-item flex-grow-1">
                                <div className="d-flex flex-column">
                                    <div className="assignment-item" onClick={() => dispatch(setAssignment(assignment))}>
                                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                            {assignment.title}
                                        </Link>
                                    </div>
                                    <small className="text-body-secondary">Week 0 - SETUP</small>
                                    <small className="text-body-secondary">
                                        <b>Due</b> Sep 18, 2022 at 11:59pm | 100 pts
                                    </small>
                                </div>
                            </div>
                            <FaCheckCircle className="fa-lg me-3" style={{ color: 'green' }} />
                            <FaEllipsisV className="fa-lg me-3" />
                            <span onClick={(e) => {
                                e.preventDefault();

                                const confirmDelete = window.confirm(
                                    "Are you sure you want to delete this assignment?"
                                );
                                if (confirmDelete) {
                                    handleDeleteAssignment(assignment._id);
                                }
                            }}
                            >
                                <FaTrash className="fa-lg me-3 text-danger" />
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Assignments;

function setShowDialog(arg0: boolean) {
    throw new Error("Function not implemented.");
}
