import React from 'react'
import './Name.css'


const Name = (props) => {
  return (
    <div className='Name'>
        <p>Full name</p>
        <p>{props.name}</p>
    </div>
  )
}

export default Name
