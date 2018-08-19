import React from 'react'
import SearchBarContainer from '../containers/SearchBarContainer'

const MeetupIndexTile = (props) => {

  let url = `meeups/${props.id}`

  return(
    <div>
      <div className="MeetupIndexTile callout secondary" id="">
        <a href={'/meetups/' + props.id}>
          <h3>
          </h3>

        <h3 id="location">{props.location}</h3>
        <h4>
          {props.date}, {props.time}
        </h4>
        <h4 className="">
          {props.description}
        </h4>
        <div className="">
          <div className="columns">
          </div>
          <div>
            {props.creatorDogs.name}
          </div>
        </div>
      </a>
      </div>
    </div>

  )
}

export default MeetupIndexTile
