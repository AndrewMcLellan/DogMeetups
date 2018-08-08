import React from 'react'


const UserShowTile = (props) => {
  return(
    <div className="callout secondary" id="user-tile">
      <div className="row">
        <div className="column small-3">
          <img src={props.profilePhoto.url} />
        </div>
        <div className="column small-9">
          <h4>First Name:</h4>
          {props.firstName}<br />
          {props.city}, {props.state}<br/>
        </div>
      </div>
    </div>
  )
}


export default UserShowTile
