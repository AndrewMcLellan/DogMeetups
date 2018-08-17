import React from 'react'


const UserShowTile = (props) => {
  return(
    <div className="callout secondary" id="user-tile">
      <div className="">
        <div className="" id="text">
          <img  className="profile-photo" src={props.profilePhoto.url} />
        </div>
        <div className="" id="text">
          <h4 id="text">First Name:</h4>
          {props.firstName}<br />
          {props.city}, {props.state}<br/>
        </div>
        <a id="text" href={"/users/edit"}>Edit Profile</a>
      </div>
    </div>
  )
}


export default UserShowTile
