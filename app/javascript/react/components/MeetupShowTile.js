import React from 'react'

const MeetupShowTile = (props) => {
  return(

      <div className="callout secondary" id="meetup-tile">
        <h4>Meetup details</h4>
        {props.location}
        {props.date}
        <div>
        </div>
      </div>

  )

}


export default MeetupShowTile
