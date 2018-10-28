import React from 'react'

const TimeFieldComponent = (props) => {

  return(
    <div>
      <label>{props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleTimeChange}
        />
      </label>
    </div>
  )
}


export default TimeFieldComponent
