import React from 'react'


const UserShowTile = (props) => {
  return(
    <div className="callout secondary small-6" id="user-tile">
      <div className="row">
        <div className="column small-5">
          <img  className="profile-photo" src={props.profilePhoto.url} />
        </div>
        <div className="column small-7">
          <h4>First Name:</h4>
          {props.firstName}<br />
          {props.city}, {props.state}<br/>
        </div>
        <a href={"/users/edit"}>Edit Profile</a>
      </div>
    </div>
  )
}


export default UserShowTile
