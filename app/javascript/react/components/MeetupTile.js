import React from 'react'

const MeetupTile = (props) => {
  return(
    <div className="callout secondary">
      {props.creator}
      <br />
      {props.location}
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
