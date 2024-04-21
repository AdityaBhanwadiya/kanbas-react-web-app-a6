import React from "react";
import { LuImport } from "react-icons/lu";
import { CiExport } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaBullhornSolid } from "react-icons/lia";
import { TbPresentationAnalytics } from "react-icons/tb";
import { FaRegBell, FaCircle } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import './index.css'



function Status() {
    return (
        <div className="col" style={{ marginLeft: "15px" }}>
            <div className="row">
                <button type="button" className="btn btn-group">
                    <LuImport />
                    Import Existing Content
                </button>
            </div>

            <div className="row" >
                <button type="button" className="btn btn-group">
                    <CiExport />
                    Import from Commons
                </button>
            </div>

            <div className="row">
                <button type="button" className="btn btn-group">
                    <IoHomeOutline />
                    Choose Home Page
                </button>
            </div>

            <div className="row">
                <button type="button" className="btn btn-group">
                    <FaBarsStaggered />
                    View Course Stream
                </button>
            </div>

            <div className="row">
                <button type="button" className="btn btn-group">
                    <LiaBullhornSolid />
                    New Announcements
                </button>
            </div>

            <div className="row">
                <button type="button" className="btn btn-group">
                    <TbPresentationAnalytics />
                    New Analytics
                </button>
            </div>

            <div className="row">
                <button type="button" className="btn btn-group">
                    <FaRegBell />
                    View Course Notifications
                </button>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
                <span><b>To Do</b></span>
            </div>

            <div className="row">
                <hr />
            </div>

            <div className="d-flex flex-row justify-content-between mb-2">
                <FaCircle style={{ color: "red" }} />
                <div className="d-flex flex-column mb-2">
                    <h6 className="todo-item">Grade A1 - ENV + HTML</h6>
                    <small className="text-body-secondary">100 points • Sep 18 at 11:59pm</small>
                </div>
                <i className="fa-solid fa-xmark" style={{ color: "grey" }}></i>
            </div>

            <div className="d-flex flex-row justify-content-between mb-2">
                <FaCircle style={{ color: "red" }} />
                <div className="d-flex flex-column mb-2">
                    <h6 className="todo-item">Grade A1 - ENV + HTML</h6>
                    <small className="text-body-secondary">100 points • Sep 18 at 11:59pm</small>
                </div>
                <i className="fa-solid fa-xmark" style={{ color: "grey" }}></i>
            </div>

            <div className="row">
                <span><b>Coming Up</b></span>
            </div>

            <div className="row">
                <hr />
            </div>

            <div className="d-flex row flex-column gap-3">
                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <FaRegCalendar style={{ color: "red" }} />
                    <div className="d-flex flex-column">
                        <a className="link" href="#">Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 7 at 11:45am</small>
                    </div>
                </div>

                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <FaRegCalendar style={{ color: "red" }} />
                    <div className="d-flex flex-column">
                        <a className="link" href="#">CS5610.06 SP23 Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 11 at 11:45am</small>
                    </div>
                </div>

                <div className="d-flex flex-row gap-2 align-items-stretch">
                    <FaRegCalendar style={{ color: "red" }} />
                    <div className="d-flex flex-column">
                        <a className="link" href="#">Lecture</a>
                        <small className="text-body-secondary">CS4550.12631.202410</small>
                        <small className="text-body-secondary">Sep 11 at 6pm</small>
                    </div>
                </div>

                <small><a className="link" href="#">12 more in the next week...</a></small>
            </div>

        </div>

    );

}

export default Status;