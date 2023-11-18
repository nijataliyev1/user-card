import React from 'react'
import './Adress.css'

const Adress = (props) => {
  return (
    <div className='Adress'>
      <p>Adress</p>
      <p>{props.adress}</p>
    </div>
  )
}

export default Adress
