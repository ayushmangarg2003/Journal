import React from 'react'
import { Link } from "react-router-dom";

const DoctorCard = (props) => {
    return (
        // <div className="doc-card">
        //     <img src={props.doc.img} alt={props.doc.name} />
        //     <div className="name-title">
        //         <h1>{props.doc.name}</h1>
        //         <p>{props.doc.speciality}</p>
        //     </div>
        //     <div className="stats">
        //         <div className="patients">
        //             <div className="patient-logo"><i className="fa-solid fa-hospital-user"></i></div>
        //             <p>{props.doc.patients}</p>
        //         </div>
        //         <div className="rating">
        //             <div className="rating-logo"><i className="fa-solid fa-star"></i></div>
        //             <p>{props.doc.rating}</p>
        //         </div>
        //     </div>
        //     <div className="location">
        //         <div className="hospital">
        //             <div className="icon"><i className="fa-solid fa-hospital"></i></div>
        //             <div className="name">{props.doc.hospital}</div>

        //         </div>
        //         <div className="city">
        //             <div className="icon"><i className="fa-solid fa-location-dot"></i>
        //             </div>
        //             <div className="name">
        //                 {props.doc.city}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="post" key={props.doc.name}>
            <div className="img">
                <img src={props.doc.img} alt={props.doc.name} />
            </div>
            <div className="content">
                <div className="content-top">
                    <h1>{props.doc.specialty}</h1>
                    <p>{props.doc.email}</p>
                </div>
                <p className='desc'>{props.doc.name}</p>
                <div className="card-buttons">
                    <button>Website</button>
                    <button>Rights</button>
                    <button>CC BY-NC-ND</button>

                </div>

            </div>
        </div>
    )
}

export default DoctorCard