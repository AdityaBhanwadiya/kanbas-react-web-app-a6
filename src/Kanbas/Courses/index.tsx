import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniArrowDownLeft, HiMiniArrowDownRight, HiMiniArrowSmallRight, HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState, useEffect } from "react";
import axios from "axios";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
    const { courseId } = useParams();
    const location = useLocation();
    const currentPath = location.pathname.split('/').pop();
    const COURSES_API =  `${API_BASE}/api/courses`;
    const [course, setCourse] = useState<any>({ _id: "" });
    const findCourseById = async (courseId?: string) => {
        const response = await axios.get(
            `${COURSES_API}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div>
            <div className="course-nav">
                <h3><HiMiniBars3 /> {course?.name} &gt; {currentPath} </h3>
                <hr />
            </div>
            <div style={{ paddingLeft: "0.5em" }}>
                <CourseNavigation />
            </div>


            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{ left: "320px", top: "60px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;