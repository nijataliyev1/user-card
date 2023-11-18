import React from 'react'
import './PersonalInfo.css'

const PersonalInfo = (props) => {
    return (
        <div className='PersonalInfo'>
            <div>
                <p>Birth</p>
                <p>{props.birth}</p>
            </div>
            <div>
                <p>Job</p>
                <p>{props.job}</p>
            </div>
        </div>
    )
}

export default PersonalInfo
