import React from 'react'

const DateFieldComponent = (props) => {

  return(
    <div>
      <label>{props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleDateChange}
        />
      </label>
    </div>
  )
}


export default DateFieldComponent
