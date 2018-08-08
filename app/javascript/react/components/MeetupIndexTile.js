import React from 'react'

const MeetupIndexTile = (props) => {

  return(
    <div className="MeetupIndexTile row secondary small-6">
      <h3></h3>
      {props.location}
      {props.date}
      {props.description}
    </div>
  )
}

export default MeetupIndexTile
