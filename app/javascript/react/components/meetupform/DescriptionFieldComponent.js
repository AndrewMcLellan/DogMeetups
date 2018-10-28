import React from 'react'

const DescriptionFieldComponent = (props) => {

  return(
    <div>
      <label>{props.label}
        <input
          name={props.name}
          type="text"
          value={props.content}
          onChange={props.handleDescriptionChange}
        />
      </label>
    </div>
  )
}

export default DescriptionFieldComponent
