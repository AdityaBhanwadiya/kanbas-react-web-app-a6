import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { LuImport } from "react-icons/lu";
import { CiExport } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import './index.css';


function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="d-flex gap-2 align-items-center justify-content-end"
                style={{ marginTop: "20px" }}>
                <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}>
                    <LuImport style={{marginRight: "5px", fontSize: "20px"}}/>Import</button>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }} type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <CiExport style={{marginRight: "5px", fontSize: "20px"}}/> Export
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Export option 1</a></li>
                        <li><a className="dropdown-item" href="#">Export option 2</a></li>
                        <li><a className="dropdown-item" href="#">Export option 3</a></li>
                    </ul>
                </div>
                <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}><FaGear /></button>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <b>Student Names</b>
                </div>
                <div className="col-md-6">
                    <b>Assignment Names</b>
                </div>
            </div>
            <div className="row mb-2">

                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">< FaMagnifyingGlass /> </span>
                        <input type="text" className="form-control" placeholder="Search Students" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <span className="input-group-text">< FaMagnifyingGlass /></span>
                        <input type="text" className="form-control" placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <button type="button" className="btn" style={{ backgroundColor: "#f5f5f5", border: "1px solid lightgray" }}><CiFilter style={{marginRight: "5px", fontSize: "20px"}}/>Apply Filters</button>
                </div>
            </div>
            <div className="table-responsive" >
                <table className="table">

                    <thead>
                        <tr className="table-secondary">
                            <th>Student Name</th>
                            {as.map((assignment) => (<th>{assignment.title}</th>))}
                        </tr>
                    </thead>

                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment.user}>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                        );
                                        return (
                                            <td key={assignment._id}>
                                                {grade?.grade || ""}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>);

}
export default Grades;