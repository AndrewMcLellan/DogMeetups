import React from 'react'

const MeetupIndexTile = (props) => {

  return(
    <div className="MeetupIndexTile callout secondary small-6">
      <h3>

        <a href="/meetups/1">{props.description}</a>
      </h3>
      {props.location}
      {props.date}
      <br />
      <br />
      <h3>
        <div>
          <button className="hover">Hello</button>
        </div>
      </h3>
    </div>

  )
}

export default MeetupIndexTile
