import React from 'react'

const MeetupTile = (props) => {

  return(
    <div className="callout secondary">
      {props.location}
      {props.date}
      {props.description}
    </div>
  )
}

export default MeetupTile
