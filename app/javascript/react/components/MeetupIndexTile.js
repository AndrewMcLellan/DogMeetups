import React from 'react'

const MeetupIndexTile = (props) => {
  
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
        </div>
        <br />
        <br />
      </div>
    </div>

  )
}

export default MeetupIndexTile
