import React, { useState } from 'react';

const images = ["chemistry.jpg", "biology1.jpg", "math1.jpg", "physics1.jpg", "compsci1.jpg"];

const returnArray = [["Kevin Tang", "kevintang01@g.ucla.edu", 9096817818, "In-Person Tutoring", 
                    "Claire Luong", "PIC 16A", "Sun Mar 05 2023 at 12:00 PM", 2], 
                    ["Kevin Tang", "kevintang01@g.ucla.edu", 9096817818, "In-Person Tutoring", 
                    "Arthur Huang", "LS7B", "Sun Mar 05 2023 at 12:00 PM", 1]];

function Appointment()
{
    let [code, setCode] = useState("");
    const [tracker, setTracker] = useState("");

    const handleChangeCode = (event) => {setCode(event.target.value);}

    function Cards({cardArray})
    {
        return (
            <>
                <div className = "selectCells appointmentSubjectCells">
                    <div className = "appointmentGrid" onClick={() => {setTracker(tracker => "Delete")}}>
                        <div className="appointmentFlex">
                            <img src={images[cardArray[7]]} alt="" className="fit"></img>
                        </div>
                        <div className="appointmentFlex">
                            <p1 className="subjectHeader">{cardArray[5]}</p1>
                            <p1 className="tutorHeader"><img src="tutor.png" alt="Tutor" ></img> {cardArray[4]}</p1>
                            <div className="tutorHeader"><p1 className="dateHeader">Date: </p1><p1>{cardArray[6]}</p1></div>
                        </div>
                        <div className="appointmentFlex deleteOutline">
                            <p1 className="deleteHeader deleteBox">Delete Appointment</p1>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    function PastCards({cardArray})
    {
        return (
            <>
                <div className = "selectCells appointmentSubjectCells pastAppointmentGrid">
                    <div>
                        <p1 className="pastSubjectHeader">{cardArray[5]}</p1>
                    </div>
                    <div>
                        <p1 className="pastTutorHeader"><img src="tutor.png" alt="Tutor" ></img> {cardArray[4]}</p1>
                    </div>
                    <div>
                        <div><p1 className="pastDateHeader">Date: </p1><p1>{cardArray[6]}</p1></div>
                    </div>
                </div>
            </>
        )
    }

    function checkId()
    {
        setTracker(tracker => "Confirmation")
    }

    switch (tracker)
    {
        case "":
            return (
                <>
                    <button id="backButton" onClick={() => {
                        }}>&#10094;Back</button>
                    <h1>Your Appointments</h1>
                    <div className = "smallerContainer">
                        <p1 className="alignCenter smallGap">Upcoming Appointments</p1>
                        <div className = "selectCells appointmentSubjectCells">
                            <div className = "appointmentGrid" onClick={() => {setTracker(tracker => "Delete")}}>
                                <div className="appointmentFlex">
                                    <img src={images[0]} alt="Chemistry" className="fit"></img>
                                </div>
                                <div className="appointmentFlex">
                                    <p1 className="subjectHeader">Chemistry 20B</p1>
                                    <p1 className="tutorHeader"><img src="tutor.png" alt="Tutor" ></img> Kevin Tang</p1>
                                    <div className="tutorHeader"><p1 className="dateHeader">Date: </p1><p1>Sun Mar 05 2023 at 12:00 PM</p1></div>
                                </div>
                                <div className="appointmentFlex deleteOutline">
                                    <p1 className="deleteHeader deleteBox">Delete Appointment</p1>
                                </div>
                            </div>
                        </div>
                        <div className = "selectCells appointmentSubjectCells">
                            <div className = "appointmentGrid" onClick={() => {setTracker(tracker => "Delete")}}>
                                <div className="appointmentFlex">
                                    <img src="compsci1.jpg" alt="Chemistry" className="fit"></img>
                                </div>
                                <div className="appointmentFlex">
                                    <p1 className="subjectHeader">Comp Sci 32</p1>
                                    <p1 className="tutorHeader"><img src="tutor.png" alt="Tutor" ></img> Kevin Tang</p1>
                                    <div className="tutorHeader"><p1 className="dateHeader">Date: </p1><p1>Sun Mar 05 2023 at 12:00 PM</p1></div>
                                </div>
                                <div className="appointmentFlex deleteOutline">
                                    <p1 className="deleteHeader deleteBox">Delete Appointment</p1>
                                </div>
                            </div>
                        </div>
                        {returnArray.map((names) => (<div><Cards cardArray={names} /></div>))}
                        <p1 className="alignCenter smallGap">Past Appointments</p1>
                        <div className = "selectCells appointmentSubjectCells pastAppointmentGrid">
                            <div>
                                <p1 className="pastSubjectHeader">Chemistry 20B</p1>
                            </div>
                            <div>
                                <p1 className="pastTutorHeader"><img src="tutor.png" alt="Tutor" ></img> Kevin Tang</p1>
                            </div>
                            <div>
                                <div><p1 className="pastDateHeader">Date: </p1><p1>Sun Mar 05 2023 at 12:00 PM</p1></div>
                            </div>
                        </div>
                        {returnArray.map((names) => (<div><PastCards cardArray={names} /></div>))}
                    </div>
                </>
            )
        case "Delete":
            return (
                <>
                    <button id="backButton" onClick={() => {
                        setTracker(() => "");
                        }}>&#10094;Back</button>
                        <h1>Delete Appointment</h1>
                        <div className="selectGrid">
                            <p1 className = "alignCenter bottomMargin">Enter the appointment ID below</p1>
                            <input placeholder="Appointment ID" value={code} onChange={handleChangeCode}></input>
                        </div>
                        <button className="selectCells" id="submitAndConfirm" onClick={() => {
                            checkId();
                        }}>Submit</button>
                </>
            )
        case "Confirmation":
            return (
                <>
                    <h1>Cancellation Successful!</h1>
                    <div className="selectGrid">
                        <p1 className="alignCenter">Please check your email for a confirmation on your tutoring appointment.</p1>
                    </div>
                    <button className="selectCells" id="submitAndConfirm" onClick={() => {
                    setTracker("");
                    }}>Home</button>
                </>
            )
        default:
            return <></>
    }
}

export default Appointment;

