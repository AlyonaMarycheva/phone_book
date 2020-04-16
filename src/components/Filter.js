import React from 'react'

const Filter = props => {
    const handleChange = event => props.setValue(event.target.value)
    return (
    <div>
      {props.text}
      <input value = {props.value} 
      onChange ={handleChange}/>
    </div>
    )
  }

export default Filter