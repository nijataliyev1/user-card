import React from 'react'
import './Email.css'

const Email = (props) => {
  return (
    <div className='Email'>
        <p>Email</p>
        <p>{props.email}</p>
    </div>
  )
}

export default Email
