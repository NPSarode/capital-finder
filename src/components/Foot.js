import React from 'react'

export default function Foot(props) {
  return (
    <div className='foot my-3'>
        <h6>Made by <em>{props.title}</em></h6>
        <p>This is a practice project app created using ReactJs.</p>
    </div>
  )
}
