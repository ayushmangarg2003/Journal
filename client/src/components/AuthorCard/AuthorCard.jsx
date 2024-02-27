import React from 'react'
import { Link } from "react-router-dom";

const DoctorCard = (props) => {
    return (
        <div className="doc-card">
            <img src={props.doc.img} alt={props.doc.name} />
            <div className="name-title">
                <h1>{props.doc.name}</h1>
                <p>{props.doc.speciality}</p>
            </div>
            <div className="stats">
                <div className="patients">
                    <div className="patient-logo">Pages</div>
                    <p>{props.doc.patients}</p>
                </div>
                <div className="rating">
                    <div className="rating-logo">Rating</div>
                    <p>{props.doc.rating}</p>
                </div>
            </div>
            <div className="location">
                <div className="hospital">
                    <div className="icon">Topics</div>
                    <div className="name">{props.doc.specialty}</div>

                </div>
                <div className="city">
                    <div className="icon"><i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="name">
                        {props.doc.city}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default DoctorCard