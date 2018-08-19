import React from 'react'


const UserShowTile = (props) => {
  return(
    <div className="callout secondary" id="user-tile">
      <div className="row">
        <div className="columns small-8" id="text">
          <h4 id="text">First Name:</h4>
          {props.firstName}<br />
          {props.city}, {props.state}<br/>
        <a id="text" href={"/users/edit"}>Edit Profile</a>
        </div>
        <div className="columns small-4" id="text">
          <img  className="profile-photo" src={props.profilePhoto.url} />
        </div>
      </div>
    </div>
  )
}


export default UserShowTile
