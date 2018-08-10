import React from 'react'


const MeetupIndexTile = (props) => {
  let creatordogNames = props.creatorDogs.map(dog => {
    return(
      <div>
        {dog.name}
      </div>
    )
  })
  let attendees = props.attendees.map(attendee => {
    return(
      <div>
        {attendee.name}
      </div>
    )
  })

  return(
    <div>
      <div className="MeetupIndexTile callout secondary small-6">
        <h3 className="callout meetup-index-topbar">
          <a href="/meetups/1">{props.description}</a>
        </h3>
        <div className="small-2">
          <div className="callout row">
            <div className="columns">
              {props.location}
              <br></br>
              {props.date}
            </div>
          </div>
          <div>
            {props.creatorDogs.name}
          </div>

          <div>
            <h4>Host Dogs</h4>
            {creatordogNames}
          </div>
          <div>
            <h4>Guest Dogs:</h4>
            {attendees}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>

  )
}

export default MeetupIndexTile
