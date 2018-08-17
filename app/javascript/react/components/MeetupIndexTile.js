import React from 'react'
import SearchBarContainer from '../containers/SearchBarContainer'

const MeetupIndexTile = (props) => {

  let url = `meeups/${props.id}`

  return(
    <div>
      <div className="MeetupIndexTile callout secondary">

        <br />
        <h3 className="">
          <a href={'/meetups/' + props.id}>{props.description}</a>
        </h3>
        <div className="">
          <div className=" ">
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
