import React from 'react'
import MapContainer from '../containers/MapContainer'

const MeetupTile = (props) => {
  return(
    <div>
      <div className="callout secondary columns small-6 meetup_show_tile" id="meetup_show_tile">
        <div className="callout">
          <div>
            {props.creator}
            <br />
            {props.location}
          </div>
          <br />
          {props.description}
        </div>
        <div className="row column small-2">
          <MapContainer
            latitude={props.lat}
            longitude={props.lng}
            />
        </div>
        <div className="small-1">
          <form onSubmit={props.handleSubmit}>
            <button className="hover">Hello</button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default MeetupTile
