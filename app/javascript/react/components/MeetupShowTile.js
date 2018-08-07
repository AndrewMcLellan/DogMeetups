import React from 'react'

const MeetupShowTile = (props) => {
  return(
    <div className="callout secondary columns small-6 large-6">
      <h4>Meetup Location</h4>
      {props.location}
      <h4>Meetup Date</h4>
      {props.date}
      <h4>Description:</h4>
      {props.description}
      <div>
        <button
          onClick={props.handleDelete}
          >Delete Meetup
        </button>
      </div>
    </div>
  )

}


export default MeetupShowTile
