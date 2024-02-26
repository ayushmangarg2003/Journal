import React from 'react'
import { HISTORY, MISSION, VISION } from '../assets/data/utils'

const About = () => {
    return (
        <div className="about-parent">
            <div className="section-heading">ABOUT US</div>
            <div className='about-container'>
                <h1>Description</h1>
                <p>{HISTORY}</p>
                <h1>Aim and Scope</h1>
                <p>{MISSION}</p>
                <h1>Benifits To Authors</h1>
                <p>{VISION}</p>
            </div>
        </div>
    )
}

export default About