import React from 'react'

const LocationFieldComponent = (props) => {

  return(
    <div>

      <label>{props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleLocationChange}
        />
      </label>
    </div>
  )
}

export default LocationFieldComponent
