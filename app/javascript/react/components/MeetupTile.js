import React from 'react'

const MeetupTile = (props) => {
  return(
    <div className="callout secondary">
      {props.creator}
      <br />
      {props.location}
      <br />
      {props.description}
    </div>
  )
}

export default MeetupTile
