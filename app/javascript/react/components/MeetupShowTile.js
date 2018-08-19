import React from 'react'

const MeetupShowTile = (props) => {
  return(
    <div id="text">
      <a href={'/meetups/' + props.id}>
        <div className="callout primary" id="meetup-tile">
          <div id="meetup-details">
            <h4 className="" id="text">Meetup details</h4>
          </div>
          {props.date}, {props.time}
          <br/>
          {props.location}
          <br/>
          {props.description}
          <div>
          </div>
        </div>
        </a>
    </div>

  )

}


export default MeetupShowTile
