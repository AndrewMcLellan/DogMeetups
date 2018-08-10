import React from 'react'
import MapContainer from '../containers/MapContainer'

const MeetupTile = (props) => {
  return(
    <div className="callout secondary">
      {props.creator}
      <br />
      {props.location}
      <div>
        <MapContainer
          latitude={props.lat}
          longitude={props.lng}
          />
      </div>
      <br />
      {props.description}
        <div>
          <form onSubmit={props.handleSubmit}>
            <button className="hover">Hello</button>
          </form>
        </div>
    </div>
  )
}

export default MeetupTile
