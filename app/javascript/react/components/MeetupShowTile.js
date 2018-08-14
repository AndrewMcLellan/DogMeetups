import React from 'react'

const MeetupShowTile = (props) => {
  return(
    <div>
      <a href={'/meetups/' + props.id}>
        <div className="callout primary" id="meetup-tile">
          <h4>Meetup details</h4>
          {props.description} <br/>
          {props.location}
        <p>
          {props.date}<br/>
          {props.time}
        </p>
          <div>
          </div>
        </div>
        </a>
    </div>

  )

}


export default MeetupShowTile
